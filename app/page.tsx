import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq, { type QA } from "@/components/Faq";
import FeatureTabs from "@/components/FeatureTabs";
import HeroScroll from "@/components/HeroScroll";
import Statement from "@/components/Statement";
import { Chart, Inbox, Search, Bolt, Layout } from "@/components/Icons";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Pool Builder Web Design | Websites & SEO for Pool Builders" },
  alternates: { canonical: "/" },
};

const faqs: QA[] = [
  {
    q: "Do you only work with pool builders?",
    a: "Yes. Pool Builder Web Design builds websites and runs marketing for pool contractors only: custom gunite and concrete builders, fiberglass and vinyl liner installers, pool renovation and resurfacing companies and outdoor living builders. Every page, keyword and form is planned around how homeowners choose who builds their backyard.",
  },
  {
    q: "Will a new website actually bring in more estimate requests?",
    a: "A website can't promise signed contracts, and we won't either. What we do is remove the reasons homeowners leave: slow pages, stock-photo galleries, no straight answers on pool types, timelines or financing, and design-consultation forms buried three clicks deep. Then we track every call and form so you can see what the site is producing.",
  },
  {
    q: "How long does a pool builder website take to launch?",
    a: "Timelines depend on how many pool type, service and service-area pages you need and how quickly we get your project photos, build process, warranty details and licensing. We give you a launch date on the first call, before any work starts.",
  },
  {
    q: "Can you help us show up for 'pool builders near me'?",
    a: "We optimize your Google Business Profile, build pages for inground pools, fiberglass pools, renovations, spas and the towns and counties you build in, and fix the citations and on-page signals local rankings depend on. Rankings take time and we're upfront that no one can guarantee a position.",
  },
  {
    q: "Can we stop relying on shared leads and home shows?",
    a: "That's the goal for a lot of pool builders. Shared leads go to several builders at once, and home shows only run a few weekends a year. A site that ranks and converts brings homeowners who found you, all year. We'll help you build that channel so purchased leads become optional instead of the whole pipeline.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroScroll />

      {/* SHOWCASE */}
      <section className="showcase" aria-labelledby="show-h">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 50 }}>
            <h2 id="show-h" className="h-section reveal">
              A Pool Builder Website Built to Win the Backyard
            </h2>
            <p className="lead reveal" style={{ ["--d" as string]: ".1s" }}>
              Most pool builder sites are one blurry photo, a gallery that hasn&rsquo;t been updated since 2019 and a
              contact page nobody can find on a phone. We build yours around the three things that turn a &ldquo;pool
              builders near me&rdquo; search into a booked design consultation.
            </p>
          </div>
          <div className="showcase-stage">
            <div className="browser reveal">
              <div className="browser-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <span className="browser-url">yourpoolcompany.com</span>
              </div>
              <div className="browser-body">
                <img
                  src={img.modernHomePool(1100, 700)}
                  alt="Modern home with a finished inground pool and patio"
                  loading="lazy"
                  decoding="async"
                  width={1100}
                  height={700}
                />
                <div className="mock" aria-hidden="true">
                  <span className="mock-title">Custom inground pools, designed and built for your backyard.</span>
                  <div className="mock-row">
                    <span className="mock-btn">Book a design consultation</span>
                    <span className="mock-btn alt">Call now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-card fc-1 reveal" style={{ ["--d" as string]: ".15s" }}>
              <div className="ic">
                <Bolt />
              </div>
              <h3>Speed Check</h3>
              <p>Lightweight pages that load fast on a phone, even when a homeowner is comparing builders from the patio.</p>
            </div>
            <div className="float-card fc-2 reveal" style={{ ["--d" as string]: ".25s" }}>
              <div className="ic">
                <Search />
              </div>
              <h3>Search Visibility</h3>
              <p>Pages for gunite, fiberglass, renovations, spas and every town you build in.</p>
            </div>
            <div className="float-card fc-3 reveal" style={{ ["--d" as string]: ".35s" }}>
              <div className="ic">
                <Inbox />
              </div>
              <h3>Estimate Requests</h3>
              <p>Tap-to-call and short consultation forms on every page, sent straight to your design team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" aria-labelledby="feat-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow reveal">Features</p>
            <h2 id="feat-h" className="h-section reveal">
              Build What Counts
            </h2>
            <p className="lead reveal">
              From the first search to the signed build contract, we handle the website and marketing work while your
              crews dig, shoot gunite, set tile and fill pools.
            </p>
          </div>
          <FeatureTabs />
        </div>
      </section>

      {/* STATEMENT */}
      <section className="section" aria-label="Why pool builders switch">
        <div className="container">
          <Statement
            eyebrow="Solution"
            paragraphs={[
              "Pool builders compete with franchise dealers, big-box fiberglass outfits and lead marketplaces that resell the same homeowner to every builder in the county, all for the same 'pool builders near me' and 'inground pool cost' searches.",
              "[[Pool Builder Web Design]] gives you a site and search presence built for that fight: real backyards you built, straight answers on pool types, timelines and financing, local pages for where you work, and a fast path to the first design consultation.",
            ]}
          />
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="section perf-glow" aria-labelledby="perf-h">
        <div className="container">
          <div className="perf-head">
            <div>
              <p className="eyebrow reveal" style={{ marginBottom: 16 }}>
                Performance
              </p>
              <h2 id="perf-h" className="h-section reveal">
                Better Websites,
                <br />
                Visibility &amp; Leads
              </h2>
            </div>
            <p className="lead reveal">
              Three outcomes every engagement is built around, whether you need a full rebuild or a stronger search
              presence.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: <Layout />,
                h: "Better Websites",
                p: "Custom pool builder sites that show your real crews and finished backyards, explain the process from design to first swim, and look sharp on any phone.",
              },
              {
                icon: <Search />,
                h: "Stronger Visibility",
                p: "Pool builder SEO, town and county pages and Google Business Profile work so homeowners find you before the franchise dealers and lead sellers do.",
              },
              {
                icon: <Chart />,
                h: "More Estimate Requests",
                p: "Click-to-call, short consultation forms and call tracking so more visits turn into booked design consultations.",
              },
            ].map((c, i) => (
              <div key={c.h} className="card reveal" style={{ ["--d" as string]: `${i * 0.08}s` }}>
                <span className="ic">{c.icon}</span>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section" aria-labelledby="founder-h">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <h2 id="founder-h" className="h-section reveal">
              Meet the Founder
            </h2>
          </div>
          <article className="expert reveal">
            <div className="expert-photo">
              <img
                src="/brand/steven-cantando-founder.webp"
                alt="Steven Cantando, founder of cantandoDigital"
                loading="lazy"
                decoding="async"
                width={818}
                height={900}
              />
            </div>
            <h3>Steven Cantando</h3>
            <p className="role">Founder, cantandoDigital</p>
            <p>
              Leads strategy and builds for every Pool Builder Web Design client, with years of frontend development and
              contractor marketing behind him.
            </p>
          </article>
        </div>
      </section>

      {/* STATS */}
      <section className="section-tight" aria-labelledby="stats-h">
        <div className="container">
          <div className="panel stats-panel reveal">
            <div className="stats-left">
              <p className="eyebrow">Why organic search matters for pool builders</p>
              <h2 id="stats-h">
                Websites and SEO built for pool builders, <span>so you stop renting leads and start owning them.</span>
              </h2>
              <Link href="/contact#schedule" className="btn">
                Schedule a Call
              </Link>
            </div>
            <div className="stats-right">
              <div className="stat">
                <div className="num">24/7</div>
                <h3>Consultation requests while you&rsquo;re on the job</h3>
                <p>
                  Homeowners plan a pool on winter nights and weekends, long before the first warm day. A site built to
                  convert keeps taking requests while your crew is mid-build.
                </p>
              </div>
              <div className="stat">
                <div className="num">1 tap</div>
                <h3>From any page to your office</h3>
                <p>Every page we build keeps a call button and quote form within thumb&rsquo;s reach on mobile.</p>
              </div>
              <div className="stat">
                <div className="num">100%</div>
                <h3>Pool builder focused</h3>
                <p>We work with pool builders only, so your strategy is never a copy of another industry&rsquo;s.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
