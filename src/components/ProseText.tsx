/** Paragraphs, bullets, and light **bold** / `code` from the case study copy. */
function rich(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>;
    return part;
  });
}

export function ProseText({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/).filter(Boolean);

  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.split('\n');
        const isList = lines.every((l) => l.trim().startsWith('- ') || l.trim() === '');
        if (isList) {
          return (
            <ul key={i}>
              {lines
                .filter((l) => l.trim().startsWith('- '))
                .map((l) => (
                  <li key={l}>{rich(l.replace(/^-\s*/, ''))}</li>
                ))}
            </ul>
          );
        }
        return <p key={i}>{rich(block.replace(/\n/g, ' '))}</p>;
      })}
    </>
  );
}
