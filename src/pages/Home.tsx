import { featuredProject, site } from '../content';
import { Link } from '../router';
import { ContactRow } from '../components/ContactRow';
import { Icon, type IconName } from '../components/Icon';

const optimizeFor: { title: string; body: string; icon: IconName }[] = [
  {
    icon: 'database',
    title: 'System of record first',
    body: 'Agents read live quotations and documents—not stale chat context.',
  },
  {
    icon: 'plane',
    title: 'Explicit tools',
    body: 'MCP contracts for fetch, draft, and update—narrower blast radius than free-form browsing.',
  },
  {
    icon: 'user-check',
    title: 'Human gates',
    body: 'Send, price, and approve stay with people; AI accelerates preparation and checks.',
  },
];

export function HomePage() {
  return (
    <>
      <section className="hero-section container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">AI Systems · Operations · Forward Deployed</p>
          <h1>{site.headline}</h1>
          <p className="lead">{site.supporting}</p>
          <div className="hero-actions">
            <Link href={`/projects/${featuredProject.slug}`} className="button button-primary">
              Read the cargo platform case study
            </Link>
            <a href={site.linkedin} className="button button-ghost button-with-icon" target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={18} />
              LinkedIn
              <Icon name="external" size={14} className="button-external-icon" />
            </a>
          </div>
        </div>
        <img className="portrait hero-portrait" src={site.portrait} alt="Weeraphat Issaraphon" width={900} height={1200} />
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Featured project</h2>
          <Link href="/projects">All projects</Link>
        </div>
        <Link
          href={`/projects/${featuredProject.slug}`}
          className="project-card project-card-with-media project-card-link project-card-featured"
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
            <p className="project-kicker">Case study</p>
            <h3>{featuredProject.name}</h3>
            <p>{featuredProject.tagline}</p>
          </div>
        </Link>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>What I optimize for</h2>
        </div>
        <ol className="principle-list">
          {optimizeFor.map((item, index) => (
            <li key={item.title} className="principle-item">
              <span className="principle-icon" aria-hidden>
                <Icon name={item.icon} size={20} />
              </span>
              <span className="principle-num" aria-hidden>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container section home-closing">
        <h2 className="home-closing-title">Let&apos;s talk</h2>
        <p className="lead">Operational systems, applied AI, or Forward Deployed roles—reach me directly.</p>
        <div className="home-closing-contacts">
          <ContactRow icon="mail" href={`mailto:${site.email}`}>
            {site.email}
          </ContactRow>
          <ContactRow icon="phone" href={`tel:${site.phone}`}>
            {site.phoneDisplay}
          </ContactRow>
        </div>
      </section>
    </>
  );
}
