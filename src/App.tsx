import { lazy, Suspense, useEffect, useRef } from "react";
import { BrowserRouter, useLocation, useNavigationType, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { pageMetadata as seoMetadata } from "./data/pageMetadata";
import { portalLinks } from "./data/links";
import { AppErrorBoundary, NotFoundPage } from "./components/app/AppFallbacks";
import type { ProgrammeMetadataPage } from "./data/programmes";

const HomePage = lazy(() => import("./routes/index"));
const AboutPage = lazy(() => import("./routes/about"));
const AdmissionPage = lazy(() => import("./routes/admission"));
const CdoeTeamPage = lazy(() => import("./routes/cdoe-team"));
const ContactPage = lazy(() => import("./routes/contact"));
const CourseOverviewPage = lazy(() => import("./routes/course-info.$courseSlug.index"));
const CourseSectionPage = lazy(() => import("./routes/course-info.$courseSlug.$section"));
const CourseInfoLayout = lazy(() => import("./routes/course-info.$courseSlug"));
const DatacenterPage = lazy(() => import("./routes/datacenter"));
const ExecutionTeamPage = lazy(() => import("./routes/execution-team"));
const FacilitiesPage = lazy(() => import("./routes/facilities"));
const FacultyPage = lazy(() => import("./routes/faculty"));
const FacultyProfilePage = lazy(() => import("./routes/faculty-profile.$courseSlug.$facultySlug"));
const FaqPage = lazy(() => import("./routes/faq"));
const GalleryPage = lazy(() => import("./routes/gallery"));
const LmsPage = lazy(() => import("./routes/lms"));
const ProgrammeRoutePage = lazy(() => import("./routes/programme-page"));
const ProgrammesPage = lazy(() => import("./routes/programmes"));
const StudentsCornerPage = lazy(() => import("./routes/students-corner"));
const StudioPage = lazy(() => import("./routes/studio"));
const TechnicalPage = lazy(() => import("./routes/technical"));
const UgcCornerPage = lazy(() => import("./routes/ugc-corner"));
const VisionaryTeamPage = lazy(() => import("./routes/visionary-team"));

const defaultMeta = {
  title: "Crescent Institute — Centre for Distance and Online Education",
  description:
    "Crescent Institute Centre for Distance and Online Education — UG, PG and certification programmes.",
};

const notFoundMeta = {
  title: "Page not found — Crescent CDOE",
  description: "The requested page does not exist or is no longer available.",
};

type PageMeta = {
  title: string;
  description: string;
  canonicalPath?: string;
};

const pageMetadata: Record<string, PageMeta> = {
  "/": seoMetadata.home,
  "/about": seoMetadata.about,
  "/contact": seoMetadata.contact,
  "/datacenter": seoMetadata.datacenter,
  "/facilities": seoMetadata.facilities,
  "/faq": seoMetadata.faq,
  "/gallery": seoMetadata.gallery,
  "/lms": seoMetadata.lms,
  "/programmes": seoMetadata.programmes,
  "/studio": seoMetadata.studio,
  "/ugc-corner": seoMetadata.ugcCorner,
};

function updateMeta(selector: string, value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = value;
}

function updateCanonical(canonicalPath?: string) {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalPath) {
    existing?.remove();
    return;
  }

  const canonical = existing ?? document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = new URL(canonicalPath, window.location.origin).href;
  if (!existing) document.head.append(canonical);
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    const staticMeta = pageMetadata[normalizedPath];
    let active = true;

    const applyMeta = (meta: PageMeta) => {
      document.title = meta.title;
      updateMeta('meta[name="description"]', meta.description);
      updateMeta('meta[property="og:title"]', meta.title);
      updateMeta('meta[property="og:description"]', meta.description);
      updateCanonical(meta.canonicalPath);
    };

    if (staticMeta) {
      applyMeta(staticMeta);
    } else if (isExactStaticRoute(normalizedPath)) {
      applyMeta(defaultMeta);
    } else {
      const pathSegments = normalizedPath.slice(1).split("/");
      void import("./data/programmes")
        .then(({ getCourseInfo, getProgrammeMetadata }) => {
          if (!active) return;
          if (pathSegments[0] === "course-info" && pathSegments.length <= 3) {
            const [, courseSlug, section] = pathSegments;
            const course = getCourseInfo(courseSlug ?? "");
            const sectionPage: ProgrammeMetadataPage | undefined =
              section === "vision" || section === "mission" || section === "eligibility-fee"
                ? section
                : undefined;
            if (!course || (section && !sectionPage)) {
              applyMeta(notFoundMeta);
              return;
            }
            const page = sectionPage ?? "overview";
            applyMeta(
              getProgrammeMetadata(course.slug, page) ?? (section ? notFoundMeta : defaultMeta),
            );
            return;
          }

          if (pathSegments[0] === "faculty-profile") {
            applyMeta(defaultMeta);
            return;
          }

          const [programmeSlug, programmePage] = pathSegments;
          const page: ProgrammeMetadataPage | undefined =
            programmePage === "people" || programmePage === "syllabus"
              ? programmePage
              : programmePage
                ? undefined
                : "overview";
          if (pathSegments.length > 2 || !page) {
            applyMeta(notFoundMeta);
            return;
          }

          const programme = getCourseInfo(programmeSlug ?? "");
          if (!programme?.landingRoute) {
            applyMeta(notFoundMeta);
            return;
          }

          applyMeta(getProgrammeMetadata(programmeSlug, page) ?? notFoundMeta);
        })
        .catch((error: unknown) => {
          console.error("Could not load programme page metadata:", error);
          if (active) applyMeta(defaultMeta);
        });
    }

    return () => {
      active = false;
    };
  }, [pathname]);

  return null;
}

function ExternalRedirect({ to }: { to: string }) {
  const redirectStarted = useRef(false);

  useEffect(() => {
    if (redirectStarted.current) return;
    redirectStarted.current = true;
    window.location.replace(to);
  }, [to]);

  return null;
}

function RouteScrollManager() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else if (navigationType === "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, navigationType]);

  return null;
}

const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/admission", element: <AdmissionPage /> },
  { path: "/cdoe-team", element: <CdoeTeamPage /> },
  { path: "/contact", element: <ContactPage /> },
  {
    path: "/course-info/:courseSlug",
    element: <CourseInfoLayout />,
    children: [
      { index: true, element: <CourseOverviewPage /> },
      { path: ":section", element: <CourseSectionPage /> },
    ],
  },
  { path: "/datacenter", element: <DatacenterPage /> },
  { path: "/execution-team", element: <ExecutionTeamPage /> },
  { path: "/facilities", element: <FacilitiesPage /> },
  { path: "/faculty", element: <FacultyPage /> },
  {
    path: "/faculty-profile/:courseSlug/:facultySlug",
    element: <FacultyProfilePage />,
  },
  { path: "/faq", element: <FaqPage /> },
  { path: "/gallery", element: <GalleryPage /> },
  { path: "/lms", element: <LmsPage /> },
  {
    path: "/lms-login",
    element: <ExternalRedirect to={portalLinks.learningManagementLogin} />,
  },
  {
    path: "/login",
    element: <ExternalRedirect to={portalLinks.applicantLogin} />,
  },
  {
    path: "/new-registration",
    element: <ExternalRedirect to={portalLinks.applicantRegistrationRedirect} />,
  },
  { path: "/programmes", element: <ProgrammesPage /> },
  { path: "/students-corner", element: <StudentsCornerPage /> },
  { path: "/studio", element: <StudioPage /> },
  { path: "/technical", element: <TechnicalPage /> },
  { path: "/ugc-corner", element: <UgcCornerPage /> },
  { path: "/visionary-team", element: <VisionaryTeamPage /> },
  { path: "/:programmeSlug", element: <ProgrammeRoutePage /> },
  { path: "/:programmeSlug/:programmePage", element: <ProgrammeRoutePage /> },
  { path: "*", element: <NotFoundPage /> },
];

function isExactStaticRoute(pathname: string) {
  return routes.some(
    (route) =>
      typeof route.path === "string" &&
      !route.path.includes(":") &&
      !route.path.includes("*") &&
      route.path === pathname,
  );
}

function AppRoutes() {
  const routeElement = useRoutes(routes);

  return (
    <>
      <RouteMetadata />
      <RouteScrollManager />
      {routeElement}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppErrorBoundary>
        <Suspense fallback={<div className="min-h-screen bg-background" aria-busy="true" />}>
          <AppRoutes />
        </Suspense>
      </AppErrorBoundary>
    </BrowserRouter>
  );
}
