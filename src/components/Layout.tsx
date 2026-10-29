import type { ReactNode } from 'react';
import { Link } from '../router';
import { nav, site } from '../content';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand-block">
            <Link href="/" className="brand">
              <span className="brand-name">{site.name}</span>
            </Link>
            <p className="brand-meta">
              <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
              <span>{site.location}</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <nav className="site-nav" aria-label="Primary">
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main id="main" className="site-main">
        {children}
      </main>
    </div>
  );
}
