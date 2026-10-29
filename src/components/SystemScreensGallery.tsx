import { useEffect, useRef, useState } from 'react';
import {
  caseStudyScreenshotGroups,
  caseStudyScreenshots,
} from '../case-study-screenshots';

type OpenShot = { src: string; alt: string; caption: string };

/** Renders registered screenshots by group. Returns null when the list is empty. */
export function SystemScreensGallery() {
  const [open, setOpen] = useState<OpenShot | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  if (caseStudyScreenshots.length === 0) return null;

  return (
    <>
      <p className="system-screens-note">
        Screens from the cargo system. Captions describe the step, not the record on screen.
      </p>
      {caseStudyScreenshotGroups.map((group) => {
        const items = caseStudyScreenshots.filter((s) => s.group === group);
        if (items.length === 0) return null;
        return (
          <section key={group} className="system-screens-group" aria-labelledby={`screens-${group.replace(/\s+/g, '-')}`}>
            <h3 className="system-screens-group-title" id={`screens-${group.replace(/\s+/g, '-')}`}>
              {group}
            </h3>
            <ul className="system-screens-list">
              {items.map((item) => (
                <li key={item.src}>
                  <figure className="system-screens-figure">
                    <button
                      type="button"
                      className="system-screens-zoom"
                      aria-label={`Enlarge: ${item.caption}`}
                      onClick={() => setOpen(item)}
                    >
                      <img src={item.src} alt="" loading="lazy" decoding="async" />
                      <span className="system-screens-zoom-label">Enlarge</span>
                    </button>
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      <dialog
        ref={dialogRef}
        className="screen-lightbox"
        onClose={() => setOpen(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        {open ? (
          <figure>
            <button type="button" className="screen-lightbox-close" onClick={() => dialogRef.current?.close()}>
              Close
            </button>
            <img src={open.src} alt={open.alt} />
            <figcaption>{open.caption}</figcaption>
          </figure>
        ) : null}
      </dialog>
    </>
  );
}
