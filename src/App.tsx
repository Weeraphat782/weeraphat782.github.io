import { Layout } from './components/Layout';
import { AboutPage } from './pages/About';
import { CaseStudyPage } from './pages/CaseStudy';
import { ContactPage } from './pages/Contact';
import { HomePage } from './pages/Home';
import { ProjectsPage } from './pages/Projects';
import { Link, RouterProvider, useRouter } from './router';

function AppRoutes() {
  const { path } = useRouter();

  switch (path) {
    case '/':
      return <HomePage />;
    case '/projects':
      return <ProjectsPage />;
    case '/projects/ai-native-cargo-operations':
      return <CaseStudyPage />;
    case '/about':
      return <AboutPage />;
    case '/contact':
      return <ContactPage />;
    default:
      return (
        <div className="container page">
          <h1>Page not found</h1>
          <p className="muted">No page at {path}.</p>
          <Link href="/">Return home</Link>
        </div>
      );
  }
}

export default function App() {
  return (
    <RouterProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </RouterProvider>
  );
}
