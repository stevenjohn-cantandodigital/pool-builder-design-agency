import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq, { type QA } from "@/components/Faq";
import PageHero from "@/components/PageHero";
import { Arrow, Check } from "@/components/Icons";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pool Builder Website Design, SEO & Marketing",
  description:
    "Custom pool builder websites, pool builder SEO, Google Business Profile optimization and Google & Meta Ads, all built to bring in more qualified estimate and design-consultation requests.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: "websites",
    eyebrow: "01 · Websites",
    h: "Custom Pool Builder Websites",
    p: "A fast, mobile-first website designed around how homeowners choose a pool builder. A gallery of your real backyards, a clear design-to-first-swim process, honest pages on pool types, timelines and financing, and a consultation request built into every screen.",
    list: [
      "Custom design, no recycled templates",
      "Pages for gunite, fiberglass, vinyl liner, spas, renovations and outdoor living",
      "Project gallery and pool type pages you can update yourself",
      "Built for Core Web Vitals and accessibility",
    ],
    src: img.modernVilla(1200, 1000),
    alt: "Modern home with a long rectangular pool and lounge deck",
  },
  {
    id: "seo",
    eyebrow: "02 · SEO",
    h: "Pool Builder SEO",
    p: "Rank for the searches that turn into signed builds: pool builders near me, inground pool installation, fiberglass pool installers and pool companies in the towns you serve. Technical SEO, content and local pages handled for you.",
    list: [
      "Keyword plan built around your pool types, services and build area",
      "Town and county service-area pages with unique content",
      "Schema markup, site speed and technical fixes",
      "Monthly reporting in plain English",
    ],
    src: img.duskSpa(1200, 1000),
    alt: "Lit pool and attached spa at dusk with a stone patio",
  },
  {
    id: "local",
    eyebrow: "03 · Local",
    h: "Google Business Profile & Map Pack",
    p: "When someone searches 'pool builders near me', your Google Business Profile is often the first thing they see. We optimize it, keep it active and connect it to your website so it works as hard as your crews.",
    list: [
      "Profile audit, categories, services and service areas",
      "Regular build-progress and finished-pool photo posting",
      "Review request process for happy customers after the first swim",
      "Citation clean-up across directories",
    ],
    src: img.excavatorsSite(1200, 1000),
    alt: "Excavators and dirt piles at a backyard pool dig",
  },
  {
    id: "ads",
    eyebrow: "04 · Paid",
    h: "Google & Meta Ads for Pool Builders",
    p: "When you need design consultations on the calendar before the season fills up, paid campaigns fill the gap while SEO builds. Tight geographic targeting, pool landing pages and conversion tracking from day one, so you can compare your own cost per lead against buying shared leads.",
    list: [
      "Google Search and Local Services Ads setup guidance",
      "Separate campaigns for new pools, renovations and spas",
      "Dedicated landing pages for every campaign",
      "Call and form tracking so you see real cost per lead",
    ],
    src: img.pergolaPool(1200, 1000),
    alt: "Freeform pool beside a covered pergola and outdoor living area",
  },
];

const faqs: QA[] = [
  {
    q: "Do I need every service?",
    a: "No. Many pool builders start with a new website, then add SEO once the foundation is in place. On a call we'll tell you which service would make the biggest difference first.",
  },
  {
    q: "Can you redesign my existing pool builder website?",
    a: "Yes. We'll review what you have, keep anything that's ranking or converting, and rebuild the rest. Old URLs are redirected so you don't lose search equity.",
  },
  {
    q: "Will you write the content?",
    a: "Yes. We write pool builder copy for every page, then review it with you so details about your licensing, certifications, pool types, warranties, financing partners and service area are accurate.",
  },
  {
    q: "We also do renovations, service and hardscaping. Can the site cover that?",
    a: "Yes. New pool construction stays the lead, and we add clearly separated pages for resurfacing, renovations, spas, patios and service work, so homeowners searching for any of it find you.",
  },
  {
    q: "Do you use stock photos?",
    a: "We strongly prefer your own project and crew photos because homeowners trust real work. Where you don't have them yet, we use high-quality stock images until you do.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a Pool Builder Needs to Win Online"
        lead="Websites, search visibility and lead tracking, built and managed by one team that only works with pool builders."
      />

      <section className="section-tight" aria-label="Services overview">
        <div className="container grid-4">
          {services.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className="card reveal" style={{ ["--d" as string]: `${i * 0.06}s`, minHeight: 200 }}>
              <span className="eyebrow" style={{ marginBottom: "auto" }}>
                {s.eyebrow}
              </span>
              <h3 style={{ fontSize: 18 }}>{s.h}</h3>
            </a>
          ))}
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className="section" aria-labelledby={`${s.id}-h`} style={{ scrollMarginTop: 80 }}>
          <div className={`container split${i % 2 ? " reverse" : ""}`}>
            <div className="split-media reveal">
              <img src={s.src} alt={s.alt} loading="lazy" decoding="async" width={1200} height={1000} />
            </div>
            <div className="split-copy reveal" style={{ ["--d" as string]: ".1s" }}>
              <p className="eyebrow">{s.eyebrow}</p>
              <h2 id={`${s.id}-h`}>{s.h}</h2>
              <p>{s.p}</p>
              <ul className="checklist">
                {s.list.map((l) => (
                  <li key={l}>
                    <Check /> {l}
                  </li>
                ))}
              </ul>
              <Link href="/contact#schedule" className="btn" style={{ marginTop: 8 }}>
                Schedule a Call <Arrow />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="section" aria-labelledby="process-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow reveal">Process</p>
            <h2 id="process-h" className="h-section reveal">
              From First Call to Launch
            </h2>
          </div>
          <div className="steps">
            {[
              ["Strategy call", "We review your current site, Google profile and competitors, then agree on goals."],
              ["Plan & content", "Sitemap, keyword plan and pool builder copy, reviewed with you before design."],
              ["Design & build", "Custom design, then a fast, accessible build you can preview on any device."],
              ["Launch & grow", "We launch, set up tracking and keep improving rankings and conversions."],
            ].map(([h, p], i) => (
              <div key={h} className="step reveal" style={{ ["--d" as string]: `${i * 0.07}s` }}>
                <span className="n">(0{i + 1})</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqs} title="Services Questions" />
      <CtaBand />
    </>
  );
}
