"use client";

import { useId, useState } from "react";
import { Chevron } from "./Icons";

export type QA = { q: string; a: string };

export default function Faq({ items, title = "Frequently Asked Questions" }: { items: QA[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <section className="section" aria-labelledby={`${id}-h`}>
      <div className="container faq">
        <div className="faq-head reveal">
          <p className="eyebrow">FAQ</p>
          <h2 id={`${id}-h`} className="h-section" style={{ fontSize: "clamp(32px,3.4vw,42px)" }}>
            {title}
          </h2>
          <p className="lead">Straight answers for pool builders.</p>
        </div>
        <div className="faq-list">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`faq-item reveal${isOpen ? " open" : ""}`} style={{ ["--d" as string]: `${i * 0.05}s` }}>
                <h3>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`${id}-a${i}`}
                    id={`${id}-q${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {it.q}
                    <Chevron />
                  </button>
                </h3>
                <div className="faq-a" id={`${id}-a${i}`} role="region" aria-labelledby={`${id}-q${i}`}>
                  <div>
                    <p>{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
