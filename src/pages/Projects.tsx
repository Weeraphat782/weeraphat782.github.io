import { featuredProject, linkedinProfile, site } from '../content';
import { Link } from '../router';
import { usePageMeta } from '../usePageMeta';

export function ProjectsPage() {
  usePageMeta(`Projects · ${site.name}`, featuredProject.tagline);

  return (
    <div className="container page">
      <header className="page-header">
        <h1>Projects</h1>
        <p className="lead">Production case study from export and cargo operations, plus coordination work at Cantrak.</p>
      </header>
      <ul className="project-list">
        <li>
          <article className="project-card project-card-rule">
            <p className="project-kicker">Operational AI · MCP · Webhooks</p>
            <h2>{featuredProject.name}</h2>
            <p>{featuredProject.tagline}</p>
            <Link href={`/projects/${featuredProject.slug}`} className="button button-primary">
              Open case study
            </Link>
          </article>
        </li>
        <li>
          <article className="project-card project-card-rule">
            <p className="project-kicker">Other work</p>
            <h2>Cantrak</h2>
            <p className="contact-role">{linkedinProfile.headline}</p>
            <p>{linkedinProfile.summary}</p>
            <ul className="project-bullets">
              {linkedinProfile.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </li>
      </ul>
    </div>
  );
}
