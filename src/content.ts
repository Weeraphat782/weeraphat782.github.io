export const site = {
  name: 'Weeraphat Issaraphon',
  title: 'AI Systems Builder',
  linkedin: 'https://www.linkedin.com/in/weeraphati/',
  email: 'Weeraphat.Issaraphon1@gmail.com',
  phone: '0642172468',
  phoneDisplay: '064-217-2468',
  location: 'Din Daeng, Bangkok',
  github: null as string | null,
  headline: 'Building AI Systems That Turn Complex Operations Into Executable Workflows.',
  supporting:
    'I design and implement AI-powered operational systems that connect business processes, internal data, documents, and automation—with human oversight at critical decision points.',
  cargoPublicUrl: 'https://cargo.omgexp.com',
  portrait: '/case-study/S__17186943.jpg',
} as const;

/** Public facts from https://www.linkedin.com/in/weeraphati/ */
export const linkedinProfile = {
  fullName: 'Weeraphat Issaraphon',
  headline: 'Project Coordinator at ServiceMind',
  location: 'Din Daeng, Bangkok',
  summary:
    'Since August 2023 I have coordinated Cantrak at ServiceMind: turning a facility’s needs into requirements, training users, testing the product, and writing the manual people actually use.',
  focus: [
    'Shape user requirements to how a facility operates.',
    'Train new users and help them when something breaks.',
    'Test with the team, find bugs, and report the cause to DevOps.',
    'Write the system manual for the people running the product.',
  ],
  education:
    'B.A. International Business, First Class Honors (3.62), Srinakharinwirot University, 2018–2022.',
} as const;

export type NavItem = { href: string; label: string };

export const nav: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const featuredProject = {
  slug: 'ai-native-cargo-operations',
  name: 'AI-Native Cargo Operations Platform',
  tagline:
    'Operational system of record, MCP tool access, event-driven workflows, and human-in-the-loop controls for international export and cargo logistics.',
  context:
    'Built around the company’s own quotations, documents, booking links, and internal processes—not generic chat assumptions.',
} as const;

export type { CaseStudyScreenshot } from './case-study-screenshots';
export { caseStudyScreenshots } from './case-study-screenshots';

export const caseStudySections = {
  overview: `The AI-Native Cargo Operations Platform connects day-to-day export and air-cargo work to a single operational record: quotations, document types, uploads, booking share links, opportunity stages, and AWB tracking. AI assistants reach that record through explicit MCP tools and signed webhooks instead of guessing from chat history.

This case study describes a system in active operational use. It does not claim perfect automation, guaranteed uptime, or autonomous agents.`,
  howItStarts: `A job starts in the customer portal, not in a chat window.

- The customer signs in and requests an export quote on a structured form (destination, cargo, shipment details) instead of an email thread.
- The request lands in the staff queue. A person reviews it, approves it, and enters pricing. The quotation then exists on the system of record.
- The customer opens that quotation, uploads files into typed slots (permits, invoices, packing lists), completes a checklist, and submits the pack for review. The portal stays in an awaiting-confirmation state until staff act.
- Those two moments—the quotation being created, then documents being submitted—emit quotation.created and later quotation.docs_uploaded. Assistants pick up that record. They do not invent the job.

Five screenshots below follow that path: the quote request, staff review and pricing, then the document submit.`,
  businessProblem: `International cargo operations depend on many documents, handoffs, and checks—quotations, packing lists, commercial invoices, airline booking, and status updates. When preparation is manual and information lives in email threads, teams lose time and miss inconsistencies before shipment.

The business needed practical systems: authoritative data, repeatable workflows, AI assistance where it helps, and clear human control where decisions carry customer or compliance risk.`,
  before: `Before structured integration, typical work looked like:

- Staff and customers exchanged files and updates through email and ad hoc messages.
- Booking preparation required re-reading attachments to recover net weight, routing, and party names.
- AWB status was checked manually on carrier sites with no shared history on the quote.
- Cross-document checks depended on whoever had time to compare PDFs line by line.
- AI chat could suggest text but could not reliably read the live quotation or document store.`,
  after: `After integration, operational events wake specialized assistant workflows that call MCP tools against the live system:

- New customer quotations emit \`quotation.created\` webhooks; later CI or packing-list uploads emit \`quotation.docs_uploaded\` (and document replace emits \`quotation.docs_replaced\`).
- Assistants list quotes, fetch document URLs, extract booking fields, and build **booking email drafts**—MCP does not send those emails.
- AWB lists and status updates flow through MCP; when a shipment is marked delivered, the **application** sends the customer notification (once, idempotent).
- Document comparison tooling can run AI checks across selected files and surface pass / fail / warning before release.
- Thai export form drafts (ภ.10, ภ.11, ภ.31) are prepared for **human review**; they are not issued or certified by AI.

Human staff still approve quotes, set prices, send booking mail, and decide when to act on warnings.`,
  architecture: `Operational events from the cargo app, and scheduled checks that run alongside it, feed assistant workflows. Those workflows call MCP tools, which read and write the system of record and document storage. Outputs pass through validation and human review before customer-facing or pricing actions.`,
  keyComponents: [
    {
      title: 'System of record',
      body: `The cargo operations app at ${site.cargoPublicUrl} holds quotations, document metadata, booking tokens, opportunity stages, and AWB tracking. AI agents should treat this as authoritative—not stale chat context.`,
    },
    {
      title: 'MCP tool surface',
      body: 'A Streamable HTTP MCP server inside the Next.js app exposes explicit tools: list/get quotations, document URLs, replace documents, extract booking fields, build booking email drafts, approve quotes (without changing destination or pricing), opportunity cards, and AWB list/update/resend. Tool contracts are clearer and safer than unconstrained browser automation.',
    },
    {
      title: 'Event-driven webhooks',
      body: 'Verified outbound events include quotation.created, quotation.docs_uploaded, and quotation.docs_replaced—pushing work to the assistant when the operational record changes.',
    },
    {
      title: 'AWB tracking path',
      body: 'The app does not scrape airline sites. Assistants read carrier tracking pages and report status through update_awb_tracking. When a shipment is marked delivered, the application sends the customer email.',
    },
    {
      title: 'Document intelligence',
      body: 'Workflows assist with PDFs and scans: preliminary packing-list information, Thai form translation with official-style layout, and draft ภ.31 from ภ.32-style inputs where applicable. All outputs are drafts for staff review—not officially approved documents.',
    },
    {
      title: 'Cross-document validation',
      body: 'A document-comparison service checks related files—AWB, declarations, packing lists, quotations—and highlights inconsistencies such as gross weight or unit value mismatches before shipment.',
    },
    {
      title: 'Institutional memory',
      body: 'Operational playbooks—destination-specific checks, document link conventions, communication rules—are encoded in routines and tool usage. Private customer data, chat content, and internal rule text are not reproduced on this site.',
    },
    {
      title: 'Specialized assistants',
      body: 'Separate assistants handle cargo booking, invoicing, secretarial work, and staff support. Each one stays scoped to its task, and a person still approves anything that goes to a customer.',
    },
  ],
  humanInLoop: `Intentional controls:

- **Booking email**: MCP builds drafts; a person sends mail.
- **Pricing and approval**: approve_quotation does not alter destination, rates, or chargeable weight.
- **Delivered notification**: Sent by the app when tracking is recorded as delivered; resend is explicit.
- **Document replace**: Supersedes files with activity logging; Lose Case quotes are rejected.
- **AI forms and comparisons**: Staff review before anything is treated as official or released to customers.`,
  examples: `How the same path shows up in operations:

- **Quote → draft booking**: Webhook on new quotation → MCP get_quotation + extract_booking_fields → draft email when CI/packing list weights are available.
- **Docs arrive later**: docs_uploaded webhook re-opens preparation without requiring staff to paste OMG numbers into chat.
- **Delivered shipment**: Assistant reports delivered with timezone-aware timestamp → customer email once → public booking page shows consistent shipper from customer_name when set.
- **Validation**: User selects two or more documents under a rule → analysis returns critical checks and warnings for human follow-up.`,
  businessImpact: `Quotations, document intake, and booking preparation now sit on one operational record instead of scattered email. Assistants prepare drafts and flag inconsistencies. People still approve price, send mail, and release documents. Preparation is faster, and there is a clearer trail of what was checked.`,
  challenges: `Trade-offs we accept:

- **Push vs poll**: Webhooks need correct secrets and redeploys; assistants can still poll list_new_quotations when push is down.
- **Assistant variance**: Document reading and carrier pages depend on model and site changes; tools constrain writes but not interpretation quality.
- **Scope**: Scheduled checks sit beside the request path, so a missed webhook does not stall the operation.
- **Thai export forms**: Drafts stay behind staff review before anything is treated as official.`,
  role: `I identify operational bottlenecks, map the workflow, define what the system of record must expose, wire webhooks and MCP tools, test against live operations, and iterate when reality disagrees with the spec.

Implementation used AI coding tools (including Cursor) alongside Supabase, Vercel, and an external assistant product. I do not claim every line was written manually or that I alone built the entire legacy cargo UI—this portfolio focuses on the AI systems layer I designed and integrated.`,
  nextSteps: `- Measure document prep time and discrepancy catch rate with simple before/after logging.
- Harden observability on webhook delivery and MCP tool failures.
- Ship Thai form drafts through the same human-review gate as other document outputs.
- Narrow tool surface over time: fewer generic parameters, more operation-specific contracts.
- Document institutional rules in versioned, non-secret playbooks assistants can cite safely.`,
  verifiedNote: `This case study follows the cargo application in production: MCP tools, quotation webhooks, booking drafts a person sends, AWB updates, the delivered-customer email, and public booking pages.`,
} as const;

export const aboutCopy = {
  intro: `I am a business–technology generalist working in export and cargo operations. I translate messy operational reality into workflows, data models, and AI integrations that staff can actually use.`,
  positioning: `I am positioning toward Forward Deployed Engineering and applied AI roles: close to stakeholders, accountable for outcomes, honest about what is automated versus assisted.`,
  development: `I use modern AI-assisted development (including Cursor) to move quickly, but I validate behavior against production constraints—idempotency, human approval gates, and clear system-of-record boundaries.`,
  notClaiming: `I am not presenting myself as a decade-long backend specialist or as someone who only prompts chatbots. The work is operational systems integration with code, tools, and process design.`,
} as const;
