import {
  caseStudyScreenshotGroups,
  caseStudyScreenshots,
} from '../case-study-screenshots';
import { Icon } from './Icon';
import { LightboxProvider, useLightbox, type LightboxShot } from './Lightbox';

export type GalleryScreenshot = {
  src: string;
  alt: string;
  caption: string;
  group?: string;
};

type SystemScreensGalleryProps = {
  items?: GalleryScreenshot[];
  groups?: readonly string[];
  note?: string;
  layout?: 'stack' | 'grid';
};

export function SystemScreensGalleryContent({
  items,
  groups,
  note,
  layout = 'stack',
}: Required<Pick<SystemScreensGalleryProps, 'items' | 'groups'>> &
  Pick<SystemScreensGalleryProps, 'note' | 'layout'>) {
  const { open } = useLightbox();

  if (items.length === 0) return null;

  const listClass = layout === 'grid' ? 'system-screens-list system-screens-list--grid' : 'system-screens-list';

  return (
    <>
      {note ? <p className="system-screens-note">{note}</p> : null}
      {groups.map((group) => {
        const groupItems = items.filter((s) => (s.group ?? group) === group);
        if (groupItems.length === 0) return null;
        return (
          <section key={group} className="system-screens-group" aria-labelledby={`screens-${group.replace(/\s+/g, '-')}`}>
            <h3 className="system-screens-group-title" id={`screens-${group.replace(/\s+/g, '-')}`}>
              {group}
            </h3>
            <ul className={listClass}>
              {groupItems.map((item) => (
                <li key={item.src}>
                  <figure className={`system-screens-figure ${layout === 'grid' ? 'system-screens-figure--grid' : ''}`.trim()}>
                    <button
                      type="button"
                      className="system-screens-zoom"
                      aria-label={`Enlarge: ${item.caption}`}
                      onClick={() => open(item as LightboxShot)}
                    >
                      <img src={item.src} alt="" loading="lazy" decoding="async" />
                      <span className="system-screens-zoom-label">
                        <Icon name="zoom" size={14} />
                        Enlarge
                      </span>
                    </button>
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}

/** Renders screenshots by group with lightbox. Returns null when the list is empty. */
export function SystemScreensGallery({
  items = caseStudyScreenshots,
  groups = caseStudyScreenshotGroups,
  note = 'Screens from the cargo system. Captions describe the step, not the record on screen.',
  layout = 'stack',
}: SystemScreensGalleryProps) {
  if (items.length === 0) return null;

  return (
    <LightboxProvider>
      <SystemScreensGalleryContent items={items} groups={groups} note={note} layout={layout} />
    </LightboxProvider>
  );
}