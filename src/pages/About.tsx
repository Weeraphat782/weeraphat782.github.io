import { aboutCopy } from '../content';

export function AboutPage() {
  return (
    <div className="container page balance-page">
      <header className="page-header">
        <h1>About</h1>
        <p className="lead">{aboutCopy.intro}</p>
      </header>
      <div className="balance-grid">
        <section>
          <h2>Target direction</h2>
          <p>{aboutCopy.positioning}</p>
        </section>
        <section>
          <h2>How I build</h2>
          <p>{aboutCopy.development}</p>
        </section>
        <section>
          <h2>What I do not claim</h2>
          <p>{aboutCopy.notClaiming}</p>
        </section>
        <section>
          <h2>Roles this work speaks to</h2>
          <ul>
            <li>Forward Deployed Engineer</li>
            <li>AI Solutions / Applied AI Engineer</li>
            <li>AI Automation / Implementation Engineer</li>
            <li>Technical product and AI systems roles close to operations</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
