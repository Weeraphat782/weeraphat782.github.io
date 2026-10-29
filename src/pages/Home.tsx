import { featuredProject, site } from '../content';
import { Link } from '../router';

export function HomePage() {
  return (
    <>
      <section className="hero-section container hero-layout">
        <div>
          <p className="eyebrow">AI Systems · Operations · Forward Deployed</p>
          <h1>{site.headline}</h1>
          <p className="lead">{site.supporting}</p>
          <div className="hero-actions">
            <Link href={`/projects/${featuredProject.slug}`} className="button button-primary">
              Read the cargo platform case study
            </Link>
            <a href={site.linkedin} className="button button-ghost" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <img className="portrait" src={site.portrait} alt="Weeraphat Issaraphon" />
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Featured project</h2>
          <Link href="/projects">All projects</Link>
        </div>
        <article className="project-card project-card-featured">
          <p className="project-kicker">Case study</p>
          <h3>{featuredProject.name}</h3>
          <p>{featuredProject.tagline}</p>
          <p className="muted">{featuredProject.context}</p>
          <Link href={`/projects/${featuredProject.slug}`} className="text-link">
            View architecture and workflow →
          </Link>
        </article>
      </section>

      <section className="container section">
        <h2>What I optimize for</h2>
        <ul className="card-grid">
          <li className="info-card">
            <h3>System of record first</h3>
            <p>Agents read live quotations and documents—not stale chat context.</p>
          </li>
          <li className="info-card">
            <h3>Explicit tools</h3>
            <p>MCP contracts for fetch, draft, and update—narrower blast radius than free-form browsing.</p>
          </li>
          <li className="info-card">
            <h3>Human gates</h3>
            <p>Send, price, and approve stay with people; AI accelerates preparation and checks.</p>
          </li>
        </ul>
      </section>
    </>
  );
}
