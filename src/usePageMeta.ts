import { useEffect } from 'react';

/** ponytail: one hook, no router integration — title only per route */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (!description) return;
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute('content', description);
  }, [title, description]);
}
