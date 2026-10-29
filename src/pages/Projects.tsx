import { featuredProject } from '../content';
import { Link } from '../router';

export function ProjectsPage() {
  return (
    <div className="container page">
      <header className="page-header">
        <h1>Projects</h1>
        <p className="lead">One production case study from export and cargo operations.</p>
      </header>
      <ul className="project-list">
        <li>
          <article className="project-card">
            <p className="project-kicker">Operational AI · MCP · Webhooks</p>
            <h2>{featuredProject.name}</h2>
            <p>{featuredProject.tagline}</p>
            <Link href={`/projects/${featuredProject.slug}`} className="button button-primary">
              Open case study
            </Link>
          </article>
        </li>
      </ul>
    </div>
  );
}
