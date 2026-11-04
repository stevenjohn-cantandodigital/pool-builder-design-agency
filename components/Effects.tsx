"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Site-wide scroll reveals, card spotlight hover and scroll-lit statement text. */
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.remove("no-js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reveal on scroll
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    let io: IntersectionObserver | undefined;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      els.forEach((el) => io!.observe(el));
    }

    // Card spotlight follows the cursor
    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement | null)?.closest?.<HTMLElement>(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });

    // Scroll-lit statement words
    const words = Array.from(document.querySelectorAll<HTMLElement>(".statement-text .w"));
    let raf = 0;
    const paint = () => {
      raf = 0;
      const vh = window.innerHeight;
      words.forEach((w) => {
        const top = w.getBoundingClientRect().top;
        w.classList.toggle("lit", top < vh * 0.72);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    if (words.length) {
      if (reduce) words.forEach((w) => w.classList.add("lit"));
      else {
        paint();
        window.addEventListener("scroll", onScroll, { passive: true });
      }
    }

    return () => {
      io?.disconnect();
      document.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
