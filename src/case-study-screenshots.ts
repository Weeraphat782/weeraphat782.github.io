export type CaseStudyScreenshot = {
  src: string;
  alt: string;
  caption: string;
  group: 'Request a quote' | 'Staff reviews and prices' | 'Customer submits documents';
};

const G = {
  request: 'Request a quote' as const,
  staff: 'Staff reviews and prices' as const,
  docs: 'Customer submits documents' as const,
};

/** Story frames only. Originals stay in Tr/Manual Image. */
export const caseStudyScreenshots: CaseStudyScreenshot[] = [
  {
    group: G.request,
    src: '/case-study/portal-04-request-quote.png',
    alt: 'Customer portal request-a-quote form, commodity step',
    caption: 'The customer starts in the portal and chooses what they are shipping. This replaces an email thread.',
  },
  {
    group: G.staff,
    src: '/case-study/internal-04-quote-requests.png',
    alt: 'Staff quotation queue with customer-request rows',
    caption: 'The request lands in the staff queue, still unpriced.',
  },
  {
    group: G.staff,
    src: '/case-study/internal-06-enter-pricing.png',
    alt: 'Staff screen for freight costs and quote approval',
    caption: 'A person sets the rate and approves. The customer does not price the quote.',
  },
  {
    group: G.docs,
    src: '/case-study/portal-06-document-upload.png',
    alt: 'Typed document upload slots on the customer portal',
    caption: 'The customer uploads each required file into its own slot—permits, invoices, packing list.',
  },
  {
    group: G.docs,
    src: '/case-study/portal-09-submit.png',
    alt: 'Submit-all button after documents are attached',
    caption: 'One submit sends the pack. That handoff is what later wakes the document workflows.',
  },
];

export const caseStudyScreenshotGroups = [G.request, G.staff, G.docs] as const;
