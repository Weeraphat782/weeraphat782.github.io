import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { caseStudyProof, featuredProject, implementationStack, site } from '../content';
import { Link } from '../router';
import { usePageMeta } from '../usePageMeta';

const principles = [
  {
    title: 'System of record first',
    body: 'Agents read live quotations and documents—not stale chat context.',
  },
  {
    title: 'Explicit tools',
    body: 'MCP contracts for fetch, draft, and update—narrower blast radius than free-form browsing.',
  },
  {
    title: 'Human gates',
    body: 'Send, price, and approve stay with people; AI accelerates preparation and checks.',
  },
] as const;

const hireRoles = [
  'Forward Deployed Engineer',
  'AI Solutions / Applied AI Engineer',
  'AI Automation / Implementation Engineer',
  'Technical product and AI systems roles close to operations',
] as const;

export function HomePage() {
  usePageMeta(
    `${site.name} · AI Implementation`,
    site.supporting,
  );

  return (
    <>
      <section className="hero-section container hero-layout">
        <div>
          <p className="eyebrow">AI Implementation · Operations · Forward Deployed</p>
          <h1>
            {site.headlineLead}{' '}
            <em className="headline-em">{site.headlineEmphasis}</em> {site.headlineTail}
          </h1>
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
          <Link href="/projects" className="section-header-link">
            All projects
          </Link>
        </div>
        <ul className="stack-chips" aria-label="Technologies used">
          {implementationStack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="proof-line muted">
          {caseStudyProof.componentCount} integrated components · {caseStudyProof.webhookEvents.length} verified
          webhook events · MCP tool surface
        </p>
        <article className="featured-split">
          <div className="featured-copy">
            <p className="project-kicker">Case study</p>
            <h3>{featuredProject.name}</h3>
            <p>{featuredProject.tagline}</p>
            <p className="muted">{featuredProject.context}</p>
            <ArchitectureDiagram compact />
            <Link href={`/projects/${featuredProject.slug}`} className="text-link">
              View architecture and workflow →
            </Link>
          </div>
          <Link
            href={`/projects/${featuredProject.slug}`}
            className="featured-shot"
            aria-label="Open case study: request quote screen"
          >
            <img
              src="/case-study/portal-04-request-quote.png"
              alt="Customer portal export quote request form"
              loading="lazy"
            />
          </Link>
        </article>
      </section>

      <section className="container section">
        <h2 className="section-label">How I build</h2>
        <ol className="principle-list">
          {principles.map((item, i) => (
            <li key={item.title}>
              <span className="principle-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container section">
        <h2 className="section-label">Work with me</h2>
        <p className="section-intro">
          I embed with operations teams, map workflows to a system of record, wire MCP tools and webhooks, and
          leave human approval where decisions carry customer or compliance risk.
        </p>
        <ul className="role-list">
          {hireRoles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </section>

      <section className="container section home-contact">
        <h2 className="section-label">Contact</h2>
        <p className="home-contact-lead">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {' · '}
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          {' · '}
          {site.location}
        </p>
        <p className="muted">
          For Forward Deployed or applied AI conversations,{' '}
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{' '}
          works too.
        </p>
      </section>
    </>
  );
}
