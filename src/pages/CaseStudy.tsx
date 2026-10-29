import { Fragment, useEffect, useRef, type ReactNode } from 'react';
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

function firstSentence(text: string): string {
  const line = text.trim().split('\n').find((l) => l.trim()) ?? text;
  const match = line.match(/^[^.!?]+[.!?]/);
  return match ? match[0].trim() : line.trim();
}

const sections: { id: string; title: string; body: ReactNode }[] = [
  { id: 'overview', title: 'Overview', body: <ProseText text={caseStudySections.overview} /> },
  { id: 'problem', title: 'Business Problem', body: <ProseText text={caseStudySections.businessProblem} /> },
  { id: 'before', title: 'Before: Manual Operational Workflow', body: <ProseText text={caseStudySections.before} /> },
  { id: 'after', title: 'After: AI-Assisted Workflow', body: <ProseText text={caseStudySections.after} /> },
  {
    id: 'architecture',
    title: 'System Architecture',
    body: (
      <>
        <ProseText text={caseStudySections.architecture} />
        <ArchitectureDiagram />
      </>
    ),
  },
  {
    id: 'components',
    title: 'Key Technical Components',
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
  { id: 'human', title: 'Human-in-the-Loop Design', body: <ProseText text={caseStudySections.humanInLoop} /> },
  { id: 'examples', title: 'Real Operational Examples', body: <ProseText text={caseStudySections.examples} /> },
  { id: 'impact', title: 'Business Impact', body: <ProseText text={caseStudySections.businessImpact} /> },
  { id: 'challenges', title: 'Challenges and Trade-offs', body: <ProseText text={caseStudySections.challenges} /> },
  { id: 'role', title: 'My Role and Contributions', body: <ProseText text={caseStudySections.role} /> },
  { id: 'next', title: 'What I Would Improve Next', body: <ProseText text={caseStudySections.nextSteps} /> },
];

const showSystemScreens = caseStudyScreenshots.length > 0;

export function CaseStudyPage() {
  const tocDetailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 960px)');
    const sync = () => {
      if (tocDetailsRef.current) tocDetailsRef.current.open = mq.matches;
    };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const tocEntries = sections.flatMap((s) => {
    if (s.id === 'overview' && showSystemScreens) {
      return [s, { id: 'inside-system', title: 'Inside the system' }];
    }
    return [s];
  });

  const glance = {
    problem: firstSentence(caseStudySections.businessProblem),
    built: firstSentence(caseStudySections.after),
    result: firstSentence(caseStudySections.businessImpact),
  };

  return (
    <article className="container page case-study">
      <a href="#case-toc" className="toc-jump">
        Contents
      </a>
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

          <div className="at-a-glance" aria-label="At a glance">
            <div>
              <h2 className="glance-label">Problem</h2>
              <p>{glance.problem}</p>
            </div>
            <div>
              <h2 className="glance-label">What I built</h2>
              <p>{glance.built}</p>
            </div>
            <div>
              <h2 className="glance-label">Result</h2>
              <p>{glance.result}</p>
            </div>
          </div>

          <aside className="verified-callout" role="note">
            <h2>What is verified</h2>
            <p>{caseStudySections.verifiedNote}</p>
          </aside>
        </div>

        <nav className="toc" id="case-toc" aria-label="Case study sections">
          <details className="toc-details" ref={tocDetailsRef}>
            <summary className="toc-title">On this page</summary>
            <ol>
              {tocEntries.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </details>
        </nav>

        <div className="case-main">
          {sections.map((s) => (
            <Fragment key={s.id}>
              <section className="case-section">
                <h2 id={s.id}>{s.title}</h2>
                <div className="prose">{s.body}</div>
              </section>
              {s.id === 'overview' && showSystemScreens ? (
                <section className="case-section">
                  <h2 id="inside-system">Inside the system</h2>
                  <div className="prose">
                    <ProseText text={caseStudySections.howItStarts} />
                    <SystemScreensGallery />
                  </div>
                </section>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </article>
  );
}
