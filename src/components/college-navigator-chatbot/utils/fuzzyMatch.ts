import type { FaqEntry } from "../types/chat";

const STOP_WORDS = new Set([
  "the",
  "is",
  "a",
  "an",
  "of",
  "for",
  "to",
  "in",
  "on",
  "at",
  "how",
  "what",
  "much",
  "many",
  "do",
  "does",
  "i",
  "you",
  "me",
  "my",
  "can",
  "tell",
  "about",
  "please",
  "give",
  "and",
  "are",
  "it",
  "with",
  "there",
  "want",
  "need",
  "know",
  "details",
  "detail",
  "info",
  "information",
  "which",
  "who",
  "when",
  "where",
]);

export function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP_WORDS.has(t));
}

/** Levenshtein distance (small strings only). */
function editDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev: number[] = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur: number[] = new Array<number>(n + 1).fill(0);
    cur[0] = i;
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(
        (prev[j] ?? 0) + 1,
        (cur[j - 1] ?? 0) + 1,
        (prev[j - 1] ?? 0) + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
    prev = cur;
  }
  return prev[n] ?? 0;
}

function tokenSimilarity(a: string, b: string): number {
  if (a === b) return 1;
  if (a.length > 3 && b.length > 3 && (a.startsWith(b) || b.startsWith(a))) return 0.9;
  const dist = editDistance(a, b);
  const max = Math.max(a.length, b.length);
  const sim = 1 - dist / max;
  return sim >= 0.75 ? sim : 0;
}

function scoreEntry(tokens: string[], entry: FaqEntry): number {
  const haystack = [...entry.keywords, ...tokenize(entry.question)];
  let score = 0;
  for (const token of tokens) {
    let best = 0;
    for (const word of haystack) {
      const sim = tokenSimilarity(token, word.toLowerCase());
      if (sim > best) best = sim;
      if (best === 1) break;
    }
    score += best;
  }
  return score / Math.max(tokens.length, 1);
}

export interface MatchResult {
  entry: FaqEntry | null;
  confidence: number;
}

export function findBestMatch(input: string, faqs: FaqEntry[], threshold = 0.5): MatchResult {
  const tokens = tokenize(input);
  if (!tokens.length) return { entry: null, confidence: 0 };

  let best: FaqEntry | null = null;
  let bestScore = 0;
  for (const entry of faqs) {
    const score = scoreEntry(tokens, entry);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return bestScore >= threshold
    ? { entry: best, confidence: bestScore }
    : { entry: null, confidence: bestScore };
}
