import { featuredProject, linkedinProfile, site } from '../content';
import { Link } from '../router';

export function ContactPage() {
  return (
    <div className="container page balance-page">
      <header className="page-header">
        <h1>Contact</h1>
        <p className="lead">
          For Forward Deployed, applied AI, or operational systems conversations, connect on{' '}
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </header>
      <div className="profile-header">
        <div className="profile-cover" aria-hidden="true" />
        <div className="profile-row">
          <img className="profile-avatar" src={site.portrait} alt={site.name} />
          <div className="profile-copy">
            <h2 className="profile-name">{site.name}</h2>
            <p className="profile-meta">{site.location}</p>
            <p className="profile-meta">
              <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
              {' · '}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      </div>
      <div className="balance-grid">
        <section>
          <h2>Cargo operations</h2>
          <p>
            The work this site is built around: quotations, documents, and booking on one record, with people
            still approving price and send.
          </p>
          <Link href={`/projects/${featuredProject.slug}`} className="text-link">
            Read the case study →
          </Link>
        </section>
        <section>
          <h2>Other work</h2>
          <p className="contact-role">Cantrak · {linkedinProfile.headline}</p>
          <p>{linkedinProfile.summary}</p>
          <ul>
            {linkedinProfile.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <p>{linkedinProfile.education}</p>
        </section>
      </div>
    </div>
  );
}
