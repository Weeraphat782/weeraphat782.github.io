import type { ReactNode } from 'react';
import { Icon, type IconName } from './Icon';

type ContactRowProps = {
  icon: IconName;
  href?: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
};

export function ContactRow({ icon, href, external, children, className }: ContactRowProps) {
  const inner = (
    <>
      <Icon name={icon} className="contact-row-icon" size={16} />
      <span className="contact-row-text">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`contact-row ${className ?? ''}`.trim()}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    );
  }

  return <span className={`contact-row ${className ?? ''}`.trim()}>{inner}</span>;
}
