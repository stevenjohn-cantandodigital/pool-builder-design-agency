/** Paragraphs whose words light up as they scroll into view (driven by Effects). Wrap accent words in [[ ]]. */
export default function Statement({ eyebrow, paragraphs }: { eyebrow: string; paragraphs: string[] }) {
  return (
    <div className="statement">
      <p className="eyebrow reveal">{eyebrow}</p>
      {paragraphs.map((p, i) => {
        const parts = p.split(/(\[\[.*?\]\])/g).filter(Boolean);
        return (
          <p key={i} className="statement-text">
            {parts.flatMap((part, j) => {
              const acc = part.startsWith("[[");
              const text = acc ? part.slice(2, -2) : part;
              return text
                .split(/(\s+)/)
                .map((tok, k) =>
                  /^\s+$/.test(tok) || tok === "" ? (
                    tok
                  ) : (
                    <span key={`${j}-${k}`} className={`w${acc ? " acc" : ""}`}>
                      {tok}
                    </span>
                  ),
                );
            })}
          </p>
        );
      })}
    </div>
  );
}
