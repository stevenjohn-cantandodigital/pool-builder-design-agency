"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { img } from "@/lib/site";
import { Gear, Pin, Search } from "./Icons";

const tabs = [
  {
    label: "Websites",
    caption: "Fast, mobile-first sites with real project galleries, plain-English pool type and financing pages and a clear path from first call to first swim.",
    src: img.freeformHome(1100, 1100),
    alt: "Freeform inground pool in the backyard of a two-story home",
    icon: <Gear />,
  },
  {
    label: "Search",
    caption: "Town and county pages written to rank for “pool builders near me”, “inground pool installation” and the searches homeowners actually type.",
    src: img.aerialPool(1100, 1100),
    alt: "Aerial view of a finished pool surrounded by palms and decking",
    icon: <Search />,
  },
  {
    label: "Leads",
    caption: "Every form, call and click tracked, so you know which pages are bringing in signed pool builds.",
    src: img.excavatorBackyard(1100, 1100),
    alt: "Mini excavator digging a pool in a residential backyard",
    icon: <Pin />,
  },
];

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let n = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") n = (i + 1) % tabs.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
    else return;
    e.preventDefault();
    setActive(n);
    refs.current[n]?.focus();
  };

  return (
    <div className="panel feature-panel reveal">
      <div className="tabs">
        <div className="tab-list" role="tablist" aria-label="What we build" aria-orientation="vertical">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              id={`ft-tab-${i}`}
              aria-selected={active === i}
              aria-controls="ft-panel"
              tabIndex={active === i ? 0 : -1}
              className="tab-btn"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {t.label}
              <sup>(0{i + 1})</sup>
            </button>
          ))}
        </div>
        <div className="tab-foot">
          <p>We don&rsquo;t sell you a template. We build the pool builder website your next homeowner calls from.</p>
          <Link href="/contact#schedule" className="btn">
            Schedule a Call
          </Link>
        </div>
      </div>
      <div className="tab-visual" id="ft-panel" role="tabpanel" aria-labelledby={`ft-tab-${active}`}>
        {tabs.map((t, i) => (
          <img
            key={t.label}
            src={t.src}
            alt={active === i ? t.alt : ""}
            aria-hidden={active !== i}
            data-active={active === i}
            loading="lazy"
            decoding="async"
            width={1100}
            height={1100}
          />
        ))}
        <div className="tab-caption">
          <span className="ic">{tabs[active].icon}</span>
          <span>{tabs[active].caption}</span>
        </div>
      </div>
    </div>
  );
}
