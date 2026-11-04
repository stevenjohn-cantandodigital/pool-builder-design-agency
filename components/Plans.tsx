"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "./Icons";

/**
 * PRICING PLACEHOLDERS — final prices have not been provided.
 * Replace each "[$ TBD]" value below with real numbers before promoting this page.
 */
const plans = [
  {
    name: "Launch",
    monthly: "[$ TBD]",
    annual: "[$ TBD]",
    desc: "A professional pool builder website to replace an outdated, DIY, template or Facebook-only presence.",
    items: [
      "Custom pool builder website (core pages + project gallery)",
      "Mobile-first, fast, accessible build",
      "Quote request form + tap-to-call",
      "On-page SEO foundations",
      "Hosting, security & updates",
    ],
  },
  {
    name: "Growth",
    monthly: "[$ TBD]",
    annual: "[$ TBD]",
    desc: "Website plus ongoing pool builder SEO to grow search visibility month over month.",
    featured: true,
    items: [
      "Everything in Launch",
      "Monthly pool builder SEO",
      "Town & county service-area pages",
      "Google Business Profile management",
      "Call & form tracking with monthly report",
    ],
  },
  {
    name: "Dominate",
    monthly: "[$ TBD]",
    annual: "[$ TBD]",
    desc: "Full digital marketing for pool builders ready to fill the build calendar before the season starts.",
    items: [
      "Everything in Growth",
      "Google & Meta Ads management",
      "Campaign landing pages",
      "Review request process",
      "Quarterly strategy session",
    ],
  },
];

export default function Plans() {
  const [annual, setAnnual] = useState(false);
  return (
    <>
      <div style={{ textAlign: "center" }} className="reveal">
        <div className="billing-toggle">
          <span className={annual ? "" : "on"} id="lbl-monthly">
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            className="switch"
            aria-checked={annual}
            aria-labelledby="lbl-monthly lbl-annual"
            aria-label="Toggle annual billing"
            onClick={() => setAnnual((a) => !a)}
          />
          <span className={annual ? "on" : ""} id="lbl-annual">
            Annual
          </span>
        </div>
      </div>
      <div className="plans">
        {plans.map((p, i) => (
          <article
            key={p.name}
            className={`plan reveal${p.featured ? " featured" : ""}`}
            style={{ ["--d" as string]: `${i * 0.08}s` }}
            aria-label={`${p.name} plan`}
          >
            {p.featured && <span className="badge">Most popular</span>}
            <h2 className="plan-name" style={{ fontWeight: 400 }}>
              {p.name}
            </h2>
            <div className="price">
              <span className="price-ph" title="Placeholder: price not yet set">
                {annual ? p.annual : p.monthly}
              </span>
              <small>{annual ? "/year" : "/month"}</small>
            </div>
            <p className="plan-desc">{p.desc}</p>
            <Link href="/contact#schedule" className="btn btn-block">
              Schedule a Call
            </Link>
            <p className="note">{annual ? "Billed annually." : "Billed monthly."} Setup fee: [TBD]</p>
            <h3>Including:</h3>
            <ul>
              {p.items.map((it) => (
                <li key={it}>
                  <Check /> {it}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="placeholder-note reveal">
        Pricing placeholder: final plan prices and setup fees are being finalized. Schedule a call for a quote
        tailored to your pool business.
      </p>
    </>
  );
}
