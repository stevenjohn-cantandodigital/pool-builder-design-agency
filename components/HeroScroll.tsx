"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { img } from "@/lib/site";

/**
 * Home hero with the reference's scroll "dive": the section pins while you scroll,
 * the screen scales 1 → 2.4 and drifts down until it fills the window, then releases.
 * Progress is written to the CSS var --p (0–1); all motion is done in CSS.
 */
export default function HeroScroll() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const run = r.height - window.innerHeight;
      const p = run > 0 ? Math.min(1, Math.max(0, -r.top / run)) : 0;
      el.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} className="hero-scroll" aria-labelledby="hero-h">
      <div className="hero-sticky glow-wrap">
        <div className="rays" />
        <div className="stars" />
        <div className="container hero">
          <div className="hero-frame">
            <div className="hero-zoom">
              <div className="hero-screen">
                <img
                  src={img.sunsetPool(1600, 1040)}
                  alt=""
                  width={1600}
                  height={1040}
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="hero-horizon" />
                <div className="hero-grid" />
              </div>
            </div>
            <div className="hero-content">
              <h1 id="hero-h">Pool builder websites built to win more estimate requests</h1>
              <Link href="/contact#schedule" className="btn">
                Schedule a Call
              </Link>
              <p>Website design, SEO and digital marketing made only for pool builders.</p>
            </div>
          </div>
          <div className="hero-badges">
            <span className="chip">Pool builders only</span>
            <span className="chip">Mobile-first builds</span>
            <span className="chip">Local SEO included in the plan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
