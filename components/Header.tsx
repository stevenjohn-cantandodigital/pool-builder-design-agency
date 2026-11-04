"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandIcon from "./BrandIcon";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname === `${href}/`;

  return (
    <header className={`site-header${scrolled || open ? " scrolled" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="brand brand--header" aria-label="Pool Builder Web Design by cantandoDigital, home">
          <BrandIcon size={26} animate />
          <span className="brand-text">
            <span className="brand-name">Pool Builder Web Design</span>
            <span className="brand-by">by cantandoDigital</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <Link href="/contact#schedule" className="btn">
            Schedule a Call
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`} hidden={false} aria-hidden={!open}>
        <nav aria-label="Mobile">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} tabIndex={open ? 0 : -1}>
            Home
          </Link>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              tabIndex={open ? 0 : -1}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact#schedule" className="btn" tabIndex={open ? 0 : -1}>
            Schedule a Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
