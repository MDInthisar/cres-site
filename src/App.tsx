import { lazy, Suspense, useEffect, useRef } from "react";
import { BrowserRouter, useLocation, useNavigationType, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { pageMetadata as seoMetadata } from "./data/pageMetadata";
import { AppErrorBoundary, NotFoundPage } from "./components/app/AppFallbacks";

const HomePage = lazy(() => import("./routes/index"));
const AboutPage = lazy(() => import("./routes/about"));
const AdmissionPage = lazy(() => import("./routes/admission"));
const BAIslamicStudiesLayout = lazy(() => import("./routes/ba-islamic-studies"));
const BAIslamicStudiesPage = lazy(() => import("./routes/ba-islamic-studies/index"));
const BAIslamicStudiesPeoplePage = lazy(() => import("./routes/ba-islamic-studies/people"));
const BAIslamicStudiesSyllabusPage = lazy(() => import("./routes/ba-islamic-studies/syllabus"));
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
const MbaLayout = lazy(() => import("./routes/mba"));
const MbaPage = lazy(() => import("./routes/mba/index"));
const MbaPeoplePage = lazy(() => import("./routes/mba/people"));
const MbaSyllabusPage = lazy(() => import("./routes/mba/syllabus"));
const McaLayout = lazy(() => import("./routes/mca"));
const McaPage = lazy(() => import("./routes/mca/index"));
const McaPeoplePage = lazy(() => import("./routes/mca/people"));
const McaSyllabusPage = lazy(() => import("./routes/mca/syllabus"));
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

type PageMeta = {
  title: string;
  description: string;
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
  "/lms-login": seoMetadata.lmsLogin,
  "/login": seoMetadata.login,
  "/new-registration": seoMetadata.registration,
  "/programmes": seoMetadata.programmes,
  "/studio": seoMetadata.studio,
  "/ugc-corner": seoMetadata.ugcCorner,
};

function updateMeta(selector: string, value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = value;
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    const meta = pageMetadata[normalizedPath] ?? defaultMeta;

    document.title = meta.title;
    updateMeta('meta[name="description"]', meta.description);
    updateMeta('meta[property="og:title"]', meta.title);
    updateMeta('meta[property="og:description"]', meta.description);
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
  {
    path: "/ba-islamic-studies",
    element: <BAIslamicStudiesLayout />,
    children: [
      { index: true, element: <BAIslamicStudiesPage /> },
      { path: "people", element: <BAIslamicStudiesPeoplePage /> },
      { path: "syllabus", element: <BAIslamicStudiesSyllabusPage /> },
    ],
  },
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
    element: <ExternalRedirect to="https://lmscdoe.crescent-institute.edu.in/login/index.php" />,
  },
  {
    path: "/login",
    element: (
      <ExternalRedirect to="https://odladmission.crescent-institute.edu.in/login/index.php" />
    ),
  },
  {
    path: "/mba",
    element: <MbaLayout />,
    children: [
      { index: true, element: <MbaPage /> },
      { path: "people", element: <MbaPeoplePage /> },
      { path: "syllabus", element: <MbaSyllabusPage /> },
    ],
  },
  {
    path: "/mca",
    element: <McaLayout />,
    children: [
      { index: true, element: <McaPage /> },
      { path: "people", element: <McaPeoplePage /> },
      { path: "syllabus", element: <McaSyllabusPage /> },
    ],
  },
  {
    path: "/new-registration",
    element: (
      <ExternalRedirect to="https://odladmission.crescent-institute.edu.in/login/signup.php?" />
    ),
  },
  { path: "/programmes", element: <ProgrammesPage /> },
  { path: "/students-corner", element: <StudentsCornerPage /> },
  { path: "/studio", element: <StudioPage /> },
  { path: "/technical", element: <TechnicalPage /> },
  { path: "/ugc-corner", element: <UgcCornerPage /> },
  { path: "/visionary-team", element: <VisionaryTeamPage /> },
  { path: "*", element: <NotFoundPage /> },
];

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
    <BrowserRouter basename="/cres-site">
      <AppErrorBoundary>
        <Suspense fallback={<div className="min-h-screen bg-background" aria-busy="true" />}>
          <AppRoutes />
        </Suspense>
      </AppErrorBoundary>
    </BrowserRouter>
  );
}
