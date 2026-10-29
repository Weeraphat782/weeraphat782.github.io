# Case study screenshots

Place **redacted** PNG or WebP files here, then register each one in `src/case-study-screenshots.ts`. The page shows only the frames that carry the quote-to-documents story.

Do **not** commit images until they pass this review:

## Reject if readable

- Shipper, consignee, company, or person names
- Email, phone, LINE, or chat text
- AWB numbers, prices, weights, or a full route tied to a real shipment
- Document filenames, booking tokens, or URLs with secrets
- Unblurred table rows of real quotations

## Usually safe

- Navigation and empty states
- Forms with blank fields or obvious sample text you typed yourself
- Tool or workflow chrome with no live records

After review, add an entry:

```ts
{
  src: '/case-study/your-file.webp',
  alt: 'Describe what the screen shows without customer names',
  caption: 'Short label for readers',
},
```
