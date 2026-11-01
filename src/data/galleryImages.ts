import convocation1 from "@/assets/optimized/convocation/convocation-1.webp";
import convocation2 from "@/assets/optimized/convocation/convocation-2.webp";
import convocation3 from "@/assets/optimized/convocation/convocation-3.webp";
import convocation4 from "@/assets/optimized/convocation/convocation-4.webp";
import events1 from "@/assets/optimized/events/events-1.webp";
import events2 from "@/assets/optimized/events/events-2.webp";
import events3 from "@/assets/optimized/events/events-3.webp";
import events4 from "@/assets/optimized/events/events-4.webp";
import jobFair1_800 from "@/assets/optimized/job-fair/DSC03345_8K-800w.webp";
import jobFair1_1400 from "@/assets/optimized/job-fair/DSC03345_8K-1400w.webp";
import jobFair2_800 from "@/assets/optimized/job-fair/DSC03379_8K-800w.webp";
import jobFair2_1400 from "@/assets/optimized/job-fair/DSC03379_8K-1400w.webp";
import jobFair3_800 from "@/assets/optimized/job-fair/DSC03380_8K-800w.webp";
import jobFair3_1400 from "@/assets/optimized/job-fair/DSC03380_8K-1400w.webp";
import jobFair4_800 from "@/assets/optimized/job-fair/DSC03384_8K-800w.webp";
import jobFair4_1400 from "@/assets/optimized/job-fair/DSC03384_8K-1400w.webp";
import jobFair5_800 from "@/assets/optimized/job-fair/DSC03398_8K-800w.webp";
import jobFair5_1400 from "@/assets/optimized/job-fair/DSC03398_8K-1400w.webp";
import jobFair6_800 from "@/assets/optimized/job-fair/DSC03402_8K-800w.webp";
import jobFair6_1400 from "@/assets/optimized/job-fair/DSC03402_8K-1400w.webp";
import jobFair7_800 from "@/assets/optimized/job-fair/DSC03407_8K-800w.webp";
import jobFair7_1400 from "@/assets/optimized/job-fair/DSC03407_8K-1400w.webp";
import jobFair8_800 from "@/assets/optimized/job-fair/DSC03415_8K-800w.webp";
import jobFair8_1400 from "@/assets/optimized/job-fair/DSC03415_8K-1400w.webp";
import jobFair9_800 from "@/assets/optimized/job-fair/DSC03418_8K-800w.webp";
import jobFair9_1400 from "@/assets/optimized/job-fair/DSC03418_8K-1400w.webp";
import jobFair10_800 from "@/assets/optimized/job-fair/DSC03428_8K-800w.webp";
import jobFair10_1400 from "@/assets/optimized/job-fair/DSC03428_8K-1400w.webp";
import jobFair11_800 from "@/assets/optimized/job-fair/DSC03437_8K-800w.webp";
import jobFair11_1400 from "@/assets/optimized/job-fair/DSC03437_8K-1400w.webp";
import jobFair12_800 from "@/assets/optimized/job-fair/DSC03439_8K-800w.webp";
import jobFair12_1400 from "@/assets/optimized/job-fair/DSC03439_8K-1400w.webp";
import jobFair13_800 from "@/assets/optimized/job-fair/DSC03448_8K-800w.webp";
import jobFair13_1400 from "@/assets/optimized/job-fair/DSC03448_8K-1400w.webp";
import jobFair14_800 from "@/assets/optimized/job-fair/DSC03454_8K-800w.webp";
import jobFair14_1400 from "@/assets/optimized/job-fair/DSC03454_8K-1400w.webp";
import jobFair15_800 from "@/assets/optimized/job-fair/DSC03459_8K-800w.webp";
import jobFair15_1400 from "@/assets/optimized/job-fair/DSC03459_8K-1400w.webp";
import jobFair16_800 from "@/assets/optimized/job-fair/DSC03463_8K-800w.webp";
import jobFair16_1400 from "@/assets/optimized/job-fair/DSC03463_8K-1400w.webp";
import jobFair17_800 from "@/assets/optimized/job-fair/DSC03477_8K-800w.webp";
import jobFair17_1400 from "@/assets/optimized/job-fair/DSC03477_8K-1400w.webp";
import jobFair18_800 from "@/assets/optimized/job-fair/DSC03478_8K-800w.webp";
import jobFair18_1400 from "@/assets/optimized/job-fair/DSC03478_8K-1400w.webp";
import jobFair19_800 from "@/assets/optimized/job-fair/DSC03485_8K-800w.webp";
import jobFair19_1400 from "@/assets/optimized/job-fair/DSC03485_8K-1400w.webp";
import jobFair20_800 from "@/assets/optimized/job-fair/DSC03489_8K-800w.webp";
import jobFair20_1400 from "@/assets/optimized/job-fair/DSC03489_8K-1400w.webp";

export type GalleryImage = {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
};

function responsive(src: string, small: string, large: string, width: number, height: number) {
  return {
    src,
    srcSet: `${small} 800w, ${large} 1400w`,
    width,
    height,
  };
}

export const galleryImages: Record<string, GalleryImage> = {
  convocation1: { src: convocation1, width: 1535, height: 1024 },
  convocation2: { src: convocation2, width: 1536, height: 1024 },
  convocation3: { src: convocation3, width: 1536, height: 1024 },
  convocation4: { src: convocation4, width: 1535, height: 1025 },
  events1: { src: events1, width: 1135, height: 1386 },
  events2: { src: events2, width: 1135, height: 1386 },
  events3: { src: events3, width: 1131, height: 1391 },
  events4: { src: events4, width: 1002, height: 1204 },
  jobFair1: responsive(jobFair1_1400, jobFair1_800, jobFair1_1400, 7680, 4320),
  jobFair2: responsive(jobFair2_1400, jobFair2_800, jobFair2_1400, 7680, 4320),
  jobFair3: responsive(jobFair3_1400, jobFair3_800, jobFair3_1400, 7680, 4320),
  jobFair4: responsive(jobFair4_1400, jobFair4_800, jobFair4_1400, 7680, 4320),
  jobFair5: responsive(jobFair5_1400, jobFair5_800, jobFair5_1400, 7680, 4320),
  jobFair6: responsive(jobFair6_1400, jobFair6_800, jobFair6_1400, 7680, 4320),
  jobFair7: responsive(jobFair7_1400, jobFair7_800, jobFair7_1400, 7680, 4320),
  jobFair8: responsive(jobFair8_1400, jobFair8_800, jobFair8_1400, 7680, 4320),
  jobFair9: responsive(jobFair9_1400, jobFair9_800, jobFair9_1400, 7680, 4320),
  jobFair10: responsive(jobFair10_1400, jobFair10_800, jobFair10_1400, 7680, 4320),
  jobFair11: responsive(jobFair11_1400, jobFair11_800, jobFair11_1400, 7680, 4320),
  jobFair12: responsive(jobFair12_1400, jobFair12_800, jobFair12_1400, 7680, 4320),
  jobFair13: responsive(jobFair13_1400, jobFair13_800, jobFair13_1400, 7680, 4320),
  jobFair14: responsive(jobFair14_1400, jobFair14_800, jobFair14_1400, 7680, 4320),
  jobFair15: responsive(jobFair15_1400, jobFair15_800, jobFair15_1400, 7680, 4320),
  jobFair16: responsive(jobFair16_1400, jobFair16_800, jobFair16_1400, 4320, 7680),
  jobFair17: responsive(jobFair17_1400, jobFair17_800, jobFair17_1400, 7680, 4320),
  jobFair18: responsive(jobFair18_1400, jobFair18_800, jobFair18_1400, 7680, 4320),
  jobFair19: responsive(jobFair19_1400, jobFair19_800, jobFair19_1400, 7680, 4320),
  jobFair20: responsive(jobFair20_1400, jobFair20_800, jobFair20_1400, 7680, 4320),
};
