import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { ProseText } from '../components/ProseText';
import { SystemScreensGallery } from '../components/SystemScreensGallery';
import {
  caseStudyScreenshots,
  caseStudySections,
  featuredProject,
  site,
} from '../content';
import { Link } from '../router';
import type { ReactNode } from 'react';

type CaseSection = { id: string; name: string; body: ReactNode };

const sectionDefs: CaseSection[] = [
  { id: 'overview', name: 'Overview', body: <ProseText text={caseStudySections.overview} /> },
  { id: 'problem', name: 'Business Problem', body: <ProseText text={caseStudySections.businessProblem} /> },
  { id: 'before', name: 'Before: Manual Operational Workflow', body: <ProseText text={caseStudySections.before} /> },
  { id: 'after', name: 'After: AI-Assisted Workflow', body: <ProseText text={caseStudySections.after} /> },
  {
    id: 'architecture',
    name: 'System Architecture',
    body: (
      <>
        <ProseText text={caseStudySections.architecture} />
        <ArchitectureDiagram />
      </>
    ),
  },
  {
    id: 'components',
    name: 'Key Technical Components',
    body: (
      <ul className="component-list">
        {caseStudySections.keyComponents.map((c) => (
          <li key={c.title}>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </li>
        ))}
      </ul>
    ),
  },
  { id: 'human', name: 'Human-in-the-Loop Design', body: <ProseText text={caseStudySections.humanInLoop} /> },
  { id: 'examples', name: 'Real Operational Examples', body: <ProseText text={caseStudySections.examples} /> },
  { id: 'impact', name: 'Business Impact', body: <ProseText text={caseStudySections.businessImpact} /> },
  { id: 'challenges', name: 'Challenges and Trade-offs', body: <ProseText text={caseStudySections.challenges} /> },
  { id: 'role', name: 'My Role and Contributions', body: <ProseText text={caseStudySections.role} /> },
  { id: 'next', name: 'What I Would Improve Next', body: <ProseText text={caseStudySections.nextSteps} /> },
];

const showSystemScreens = caseStudyScreenshots.length > 0;

function orderedSections(): CaseSection[] {
  const insideSystem: CaseSection = {
    id: 'inside-system',
    name: 'Inside the system',
    body: (
      <>
        <ProseText text={caseStudySections.howItStarts} />
        <SystemScreensGallery />
      </>
    ),
  };

  const out: CaseSection[] = [];
  for (const s of sectionDefs) {
    out.push(s);
    if (s.id === 'overview' && showSystemScreens) {
      out.push(insideSystem);
    }
  }
  return out;
}

export function CaseStudyPage() {
  const sections = orderedSections();
  const tocSections = sections.filter((s) => s.id !== 'next');

  return (
    <article className="container page case-study">
      <div className="case-layout">
      <div className="case-intro">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/projects">Projects</Link>
        <span aria-hidden="true"> / </span>
        <span>{featuredProject.slug}</span>
      </nav>
      <header className="page-header">
        <p className="eyebrow">Case study</p>
        <h1>{featuredProject.name}</h1>
        <p className="lead">{featuredProject.context}</p>
        <p className="muted">
          Public system reference:{' '}
          <a href={site.cargoPublicUrl} target="_blank" rel="noopener noreferrer">
            {site.cargoPublicUrl}
          </a>{' '}
          (login required; this portfolio does not connect to production).
        </p>
      </header>

      <aside className="verified-callout" role="note">
        <h2>What is verified</h2>
        <p>{caseStudySections.verifiedNote}</p>
      </aside>
      </div>

      <nav className="toc" aria-label="Case study sections">
        <h2 className="toc-title">On this page</h2>
        <ol>
          {tocSections.map((s) => {
            const num = sections.findIndex((x) => x.id === s.id) + 1;
            return (
              <li key={s.id} value={num}>
                <a href={`#${s.id}`}>{s.name}</a>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="case-main">
      {sections.map((s, index) => (
        <section key={s.id} className="case-section">
          <h2 id={s.id}>
            {index + 1}. {s.name}
          </h2>
          <div className="prose">{s.body}</div>
        </section>
      ))}
      </div>
      </div>
    </article>
  );
}
