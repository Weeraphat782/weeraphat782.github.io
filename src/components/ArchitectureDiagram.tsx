/** Architecture flow for case study — includes owner-described trigger labels. */
export function ArchitectureDiagram() {
  const descId = 'arch-diagram-desc';

  return (
    <figure className="arch-figure">
      <div className="arch-scroll">
      <svg
        className="arch-svg"
        viewBox="0 0 920 320"
        role="img"
        aria-labelledby="arch-diagram-title"
        aria-describedby={descId}
      >
        <title id="arch-diagram-title">AI cargo operations architecture</title>
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--accent)" />
          </marker>
        </defs>

        <Box x={20} y={40} w={160} h={72} label="Operational triggers" sub="Webhooks (verified)" tone="verified" />
        <Box x={20} y={140} w={160} h={72} label="Scheduled checks" sub="Email / LINE / AWB (external)" tone="external" />

        <Box x={220} y={90} w={150} h={72} label="Assistants" sub="Specialized roles" tone="neutral" />
        <Box x={400} y={90} w={130} h={72} label="MCP tools" sub="Explicit API" tone="neutral" />
        <Box x={560} y={90} w={170} h={72} label="System of record" sub="Quotes · docs · AWB" tone="verified" />

        <Box x={560} y={200} w={130} h={56} label="Validation" sub="Rules · AI compare" tone="neutral" />
        <Box x={710} y={200} w={120} h={56} label="Human review" sub="Send · price · approve" tone="verified" />
        <Box x={560} y={270} w={270} h={40} label="Approved action" sub="Customer comms · booking send" tone="neutral" wide />

        <Arrow x1={180} y1={76} x2={220} y2={110} />
        <Arrow x1={180} y1={176} x2={220} y2={140} dashed />
        <Arrow x1={370} y1={126} x2={400} y2={126} />
        <Arrow x1={530} y1={126} x2={560} y2={126} />
        <Arrow x1={645} y1={162} x2={645} y2={200} />
        <Arrow x1={690} y1={228} x2={710} y2={228} />
        <Arrow x1={770} y1={256} x2={695} y2={270} />

        <text x={20} y={24} className="arch-legend-title">
          Legend
        </text>
        <LegendItem x={20} y={230} label="Verified in cargo app code" tone="verified" />
        <LegendItem x={20} y={252} label="Scheduled checks" tone="external" />
      </svg>
      </div>
      <p className="arch-scroll-hint">Scroll to see the full diagram</p>
      <figcaption id={descId}>
        Flow: operational triggers and separately configured schedules feed assistant workflows. Assistants
        call MCP tools against the system of record and documents. Results pass validation and human review
        before approved customer or pricing actions. Dashed line indicates owner-described schedules not
        verified in application source.
      </figcaption>
    </figure>
  );
}

function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
  tone,
  wide,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub: string;
  tone: 'verified' | 'external' | 'neutral';
  wide?: boolean;
}) {
  const stroke =
    tone === 'verified' ? 'var(--accent)' : tone === 'external' ? 'var(--warn)' : 'var(--border)';
  const fill = tone === 'external' ? 'var(--surface-warn)' : 'var(--surface-elevated)';

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
      />
      <text x={x + w / 2} y={y + (wide ? 22 : 28)} textAnchor="middle" className="arch-box-label">
        {label}
      </text>
      <text x={x + w / 2} y={y + (wide ? 38 : 48)} textAnchor="middle" className="arch-box-sub">
        {sub}
      </text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, dashed }: { x1: number; y1: number; x2: number; y2: number; dashed?: boolean }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="var(--accent)"
      strokeWidth={1.5}
      markerEnd="url(#arrow)"
      strokeDasharray={dashed ? '6 4' : undefined}
      opacity={dashed ? 0.75 : 1}
    />
  );
}

function LegendItem({ x, y, label, tone }: { x: number; y: number; label: string; tone: 'verified' | 'external' }) {
  const stroke = tone === 'verified' ? 'var(--accent)' : 'var(--warn)';
  return (
    <g>
      <rect x={x} y={y - 10} width={14} height={14} rx={3} fill="var(--surface-elevated)" stroke={stroke} />
      <text x={x + 22} y={y + 2} className="arch-legend">
        {label}
      </text>
    </g>
  );
}
