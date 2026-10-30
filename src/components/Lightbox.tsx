import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { Icon } from './Icon';

export type LightboxShot = { src: string; alt: string; caption: string };

type LightboxContextValue = {
  open: (shot: LightboxShot) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [shot, setShot] = useState<LightboxShot | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (shot && !dialog.open) dialog.showModal();
    if (!shot && dialog.open) dialog.close();
  }, [shot]);

  const open = useCallback((next: LightboxShot) => setShot(next), []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <dialog
        ref={dialogRef}
        className="screen-lightbox"
        onClose={() => setShot(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        {shot ? (
          <figure>
            <button type="button" className="screen-lightbox-close" onClick={() => dialogRef.current?.close()}>
              <Icon name="x" size={16} />
              Close
            </button>
            <img src={shot.src} alt={shot.alt} />
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ) : null}
      </dialog>
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider');
  return ctx;
}

type ZoomImageProps = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
};

export function ZoomImage({ src, alt, caption, className }: ZoomImageProps) {
  const { open } = useLightbox();
  return (
    <button
      type="button"
      className={`system-screens-zoom ${className ?? ''}`.trim()}
      aria-label={`Enlarge: ${caption}`}
      onClick={() => open({ src, alt, caption })}
    >
      <img src={src} alt="" loading="lazy" decoding="async" />
      <span className="system-screens-zoom-label">
        <Icon name="zoom" size={14} />
        Enlarge
      </span>
    </button>
  );
}
