import { LightboxProvider, ZoomImage } from '../components/Lightbox';
import { ProseText } from '../components/ProseText';
import { cantrakPhotos, cantrakProject, cantrakSections, type CantrakPhoto } from '../content';
import { Icon } from '../components/Icon';
import { Link } from '../router';

function SplitSection({
  title,
  text,
  photo,
  photoFirst = false,
}: {
  title: string;
  text: string;
  photo: CantrakPhoto;
  photoFirst?: boolean;
}) {
  return (
    <section className={`cantrak-section cantrak-split ${photoFirst ? 'cantrak-split--photo-first' : ''}`.trim()}>
      <div className="cantrak-split-copy">
        <h2>{title}</h2>
        <ProseText text={text} />
      </div>
      <figure className="cantrak-split-media">
        <ZoomImage src={photo.src} alt={photo.alt} caption={photo.caption} className="cantrak-inline-zoom" />
        <figcaption>{photo.caption}</figcaption>
      </figure>
    </section>
  );
}

export function CantrakPage() {
  const { cover } = cantrakPhotos;

  return (
    <LightboxProvider>
      <article className="container page cantrak-page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {' / '}
          <Link href="/projects">Projects</Link>
          {' / '}
          <span>{cantrakProject.name}</span>
        </nav>

        <div className="cantrak-cover">
          <img src={cover.src} alt={cover.alt} loading="eager" decoding="async" />
        </div>

        <header className="cantrak-intro">
          <p className="project-kicker">{cantrakProject.kicker}</p>
          <h1>{cantrakProject.name}</h1>
          <p className="lead cantrak-lead">{cantrakProject.tagline}</p>
          <p className="muted">
            {cantrakProject.role} · {cantrakProject.employer} · {cantrakProject.period}
          </p>
        </header>

        <ul className="cantrak-stats" aria-label="Field work highlights">
          <li>
            <Icon name="map-pin" size={20} />
            <span>
              <strong>20+</strong> farms visited
            </span>
          </li>
          <li>
            <Icon name="plane" size={20} />
            <span>
              <strong>4</strong> regions: Chiang Mai, Korat, Chonburi, Greater Bangkok
            </span>
          </li>
          <li>
            <Icon name="briefcase" size={20} />
            <span>
              <strong>2023</strong> Asia International Hemp Expo
            </span>
          </li>
        </ul>

        <div className="cantrak-main prose">
          <section className="cantrak-section">
            <h2>Overview</h2>
            <ProseText text={cantrakSections.overview} />
          </section>

          <SplitSection title="Field work" text={cantrakSections.fieldWork} photo={cantrakPhotos.field} />
          <SplitSection title="My role" text={cantrakSections.myRole} photo={cantrakPhotos.role} photoFirst />
          <SplitSection title="Trade-show booths" text={cantrakSections.booths} photo={cantrakPhotos.booth} />
        </div>
      </article>
    </LightboxProvider>
  );
}
