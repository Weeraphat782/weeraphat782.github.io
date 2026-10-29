import { aboutCopy, site } from '../content';
import { usePageMeta } from '../usePageMeta';

const blocks = [
  { label: 'Target direction', body: aboutCopy.positioning },
  { label: 'How I build', body: aboutCopy.development },
  { label: 'What I do not claim', body: aboutCopy.notClaiming },
  {
    label: 'Roles this work speaks to',
    body: null,
    roles: [
      'Forward Deployed Engineer',
      'AI Solutions / Applied AI Engineer',
      'AI Automation / Implementation Engineer',
      'Technical product and AI systems roles close to operations',
    ],
  },
] as const;

export function AboutPage() {
  usePageMeta(`About · ${site.name}`, aboutCopy.intro);

  return (
    <div className="container page editorial-page">
      <header className="page-header">
        <h1>About</h1>
        <p className="lead">{aboutCopy.intro}</p>
      </header>
      <div className="editorial-rows">
        {blocks.map((block) => (
          <section key={block.label} className="editorial-row">
            <h2 className="section-label editorial-label">{block.label}</h2>
            <div className="editorial-body">
              {block.body ? <p>{block.body}</p> : null}
              {'roles' in block && block.roles ? (
                <ul>
                  {block.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
