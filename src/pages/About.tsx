import { aboutCopy, aboutIdentity, aboutRoleChips, aboutTimeline, aboutToolChips, site } from '../content';
import { ContactRow } from '../components/ContactRow';

export function AboutPage() {
  return (
    <div className="container page balance-page about-page">
      <header className="page-header">
        <h1>About</h1>
      </header>

      <div className="profile-header about-profile">
        <div className="profile-copy">
          <h2 className="profile-name">{site.name}</h2>
          <p className="profile-tagline muted">{aboutIdentity.tagline}</p>
          <ul className="profile-points">
            {aboutIdentity.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="about-chip-row profile-role-chips">
            {aboutRoleChips.map((item) => (
              <li key={item} className="about-chip">
                {item}
              </li>
            ))}
          </ul>
          <div className="profile-contact-divider" aria-hidden />
          <div className="profile-contact-list">
            <ContactRow icon="map-pin">{site.location}</ContactRow>
            <ContactRow icon="phone" href={`tel:${site.phone}`}>
              {site.phoneDisplay}
            </ContactRow>
            <ContactRow icon="mail" href={`mailto:${site.email}`}>
              {site.email}
            </ContactRow>
            <ContactRow icon="linkedin" href={site.linkedin} external>
              LinkedIn
            </ContactRow>
          </div>
        </div>
        <img className="profile-photo" src={site.portrait} alt={site.name} width={900} height={1200} />
      </div>

      <section className="about-timeline" aria-label="Experience and education">
        <ul className="about-timeline-list">
          {aboutTimeline.map((row) => (
            <li key={row.org} className="about-timeline-row">
              <div className="about-timeline-logo">
                <img src={row.logo} alt="" width={72} height={56} loading="lazy" decoding="async" />
              </div>
              <div className="about-timeline-copy">
                <p className="about-timeline-role">
                  <strong>{row.role}</strong> · {row.org}
                </p>
                <p className="muted about-timeline-sub">{row.sub}</p>
              </div>
              <p className="about-timeline-period muted">{row.period}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-skills-block">
        <h2>Skills</h2>
        <p className="skills-label">Tools</p>
        <ul className="about-tool-chips">
          {aboutToolChips.map((tool) => (
            <li key={tool.name} className="about-tool-chip">
              <img
                src={tool.logo}
                alt=""
                width={20}
                height={20}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {tool.name}
            </li>
          ))}
        </ul>
        <p className="skills-label">Hard skills</p>
        <ul className="about-chip-row">
          {aboutCopy.skillsHard.map((item) => (
            <li key={item} className="about-chip">
              {item}
            </li>
          ))}
        </ul>
        <p className="skills-label">Languages</p>
        <p>{aboutCopy.languages}</p>
      </section>
    </div>
  );
}
