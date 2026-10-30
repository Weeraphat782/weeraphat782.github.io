import { cantrakProject, featuredProject, otherProjects } from '../content';
import { Link } from '../router';
import { Icon } from '../components/Icon';

export function ProjectsPage() {
  return (
    <div className="container page">
      <header className="page-header">
        <h1>Projects</h1>
        <p className="lead">Case studies from export, cargo, and cannabis traceability operations.</p>
      </header>
      <ul className="project-list">
        <li>
          <Link
            href={`/projects/${featuredProject.slug}`}
            className="project-card project-card-with-media project-card-link"
          >
            <div className="project-card-media">
              <img
                src={featuredProject.thumb}
                alt="Cargo operations platform marketing site"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-card-body">
              <p className="project-kicker">Operational AI · MCP · Webhooks</p>
              <h2>{featuredProject.name}</h2>
              <p>{featuredProject.tagline}</p>
              <p className="project-card-cta text-link-with-icon">
                Read case study
                <Icon name="arrow-right" size={16} className="text-link-icon" />
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href={`/projects/${cantrakProject.slug}`}
            className="project-card project-card-with-media project-card-link"
          >
            <div className="project-card-media project-card-media--logo">
              <img src={cantrakProject.logo} alt="Cantrak logo" loading="lazy" decoding="async" />
            </div>
            <div className="project-card-body">
              <p className="project-kicker">{cantrakProject.kicker}</p>
              <p className="project-card-tagline">{cantrakProject.tagline}</p>
              <p className="project-card-cta text-link-with-icon">
                Read case study
                <Icon name="arrow-right" size={16} className="text-link-icon" />
              </p>
            </div>
          </Link>
        </li>
      </ul>

      <section className="other-projects">
        <h2 className="other-projects-title">Other projects</h2>
        <ul className="other-projects-list">
          {otherProjects.map((item) => (
            <li key={item.title} className="other-projects-item">
              <Icon name={item.icon} size={18} className="other-projects-icon" aria-hidden />
              <div>
                <h3 className="other-projects-name">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
