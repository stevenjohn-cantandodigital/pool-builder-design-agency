import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Statement from "@/components/Statement";
import { Check, Home, Layout, Search, Star } from "@/components/Icons";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Pool Builder Web Design is a cantandoDigital company that builds websites and runs SEO and digital marketing exclusively for pool builders.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A Web Design Agency That Only Works With Pool Builders"
        lead="We focus on one trade so we can know it better than anyone: how a homeowner goes from a backyard daydream to researching pool types, comparing three builders, weighing gunite against fiberglass and cash against financing, deciding which company they trust to dig up their yard, and finally requesting a design consultation."
      />

      <section className="section-tight" aria-label="Pool crews at work and finished backyard pools">
        <div className="container photo-strip">
          <figure className="reveal">
            <img
              src={img.concretePour(1200, 800)}
              alt="Crew member guiding a concrete pour on a job site"
              loading="lazy"
              decoding="async"
              width={1200}
              height={800}
            />
          </figure>
          <figure className="reveal" style={{ ["--d" as string]: ".08s" }}>
            <img
              src={img.excavatorTrench(800, 800)}
              alt="Mini excavator digging in a residential backyard"
              loading="lazy"
              decoding="async"
              width={800}
              height={800}
            />
          </figure>
          <figure className="reveal" style={{ ["--d" as string]: ".16s" }}>
            <img
              src={img.patioPool(800, 800)}
              alt="Finished backyard pool with patio furniture and landscaping"
              loading="lazy"
              decoding="async"
              width={800}
              height={800}
            />
          </figure>
        </div>
      </section>

      <section className="section" aria-label="Our approach">
        <div className="container">
          <Statement
            eyebrow="Our approach"
            paragraphs={[
              "Generic agencies treat a pool builder like any other small business. The result is a pretty site that never mentions your design process, gunite versus fiberglass, excavation and access, permits, build timelines, financing, warranties or the towns you actually build in.",
              "We start from your customer instead: [[the homeowner deciding who to trust with a five- or six-figure backyard]]. Every page we build answers their questions honestly and makes it easy to call you.",
            ]}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="who-h">
        <div className="container split">
          <div className="split-media reveal">
            <img
              src={img.rebarCrew(1200, 1000)}
              alt="Crew member in a hard hat tying rebar on a job site"
              loading="lazy"
              decoding="async"
              width={1200}
              height={1000}
            />
          </div>
          <div className="split-copy reveal" style={{ ["--d" as string]: ".1s" }}>
            <p className="eyebrow">Who we are</p>
            <h2 id="who-h">Part of cantandoDigital, built for pool builders</h2>
            <p>
              Pool Builder Web Design is a specialist brand of cantandoDigital, a digital agency based in Newtown Square,
              Pennsylvania that builds websites and marketing for contractors. Every project is designed, built and
              managed by our team. No outsourced templates, no handoffs to a call center.
            </p>
            <ul className="checklist">
              <li>
                <Check /> You deal directly with the people building your site
              </li>
              <li>
                <Check /> Plain-English reporting on calls, forms and rankings
              </li>
              <li>
                <Check /> You own your domain, content and photos
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow reveal">What we believe</p>
            <h2 id="values-h" className="h-section reveal">
              How We Work With Pool Builders
            </h2>
          </div>
          <div className="grid-2">
            {[
              {
                icon: <Home />,
                h: "Your crews are the proof",
                p: "Real photos of your builds, from the first dig to the first swim, beat stock resort pools every time. We help you collect and use them well.",
              },
              {
                icon: <Search />,
                h: "Search is a long game",
                p: "SEO compounds. We build town, county and service pages properly the first time so they keep earning long after launch.",
              },
              {
                icon: <Layout />,
                h: "Clarity sells",
                p: "A homeowner comparing five builders skims. Honest pricing ranges, a visible phone number and a short consultation form beat clever design that hides the next step.",
              },
              {
                icon: <Star />,
                h: "No inflated promises",
                p: "We'll never promise rankings or a number of leads. We'll show you what we're doing and what it's producing.",
              },
            ].map((v, i) => (
              <div key={v.h} className="card reveal" style={{ ["--d" as string]: `${(i % 2) * 0.08}s`, minHeight: 240 }}>
                <span className="ic">{v.icon}</span>
                <h3>{v.h}</h3>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn btn-ghost">
              See our services
            </Link>
          </p>
        </div>
      </section>

      <CtaBand title="Let's talk about your pool business." />
    </>
  );
}
