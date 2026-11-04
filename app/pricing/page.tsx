import type { Metadata } from "next";
import BrandIcon from "@/components/BrandIcon";
import CtaBand from "@/components/CtaBand";
import Faq, { type QA } from "@/components/Faq";
import Plans from "@/components/Plans";
import { Check, Cross } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pricing for Pool Builder Websites & SEO",
  description:
    "Simple monthly plans for pool builder websites, SEO and digital marketing. Schedule a call for a quote tailored to your pool business.",
  alternates: { canonical: "/pricing" },
};

const faqs: QA[] = [
  {
    q: "Are there long-term contracts?",
    a: "Contract terms are being finalized alongside pricing. We'll walk you through every term on the call before you commit to anything.",
  },
  {
    q: "What's included in hosting and maintenance?",
    a: "Secure hosting, SSL, software and plugin updates, uptime monitoring, backups and small content edits.",
  },
  {
    q: "Can I start with a website and add SEO later?",
    a: "Yes. Many pool builders start with the Launch plan and move up once the new site is live and indexed.",
  },
  {
    q: "Do ad budgets come out of the plan price?",
    a: "No. Ad spend on Google or Meta is paid directly to those platforms and is separate from any management fee.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="glow-wrap" aria-labelledby="page-h">
        <div className="rays" />
        <div className="stars" />
        <div className="container page-hero" style={{ paddingBottom: 40 }}>
          <div className="inner">
            <p className="eyebrow reveal">Pricing</p>
            <h1 id="page-h" className="reveal">
              Smart Plans for Every Pool Builder
            </h1>
            <p className="lead reveal" style={{ marginBottom: 20 }}>
              Pick the level of website and marketing support that fits where your pool business is headed.
            </p>
          </div>
        </div>
        <div className="container" style={{ paddingBottom: 100 }}>
          <Plans />
        </div>
      </section>

      <section className="section perf-glow" aria-labelledby="cmp-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow reveal">Comparison</p>
            <h2 id="cmp-h" className="h-section reveal">
              Why Pool Builders
              <br />
              Work With Us
            </h2>
            <p className="lead reveal">See how a pool builder specialist compares to a generalist agency.</p>
          </div>
          <div className="compare">
            <div className="panel others reveal">
              <h3>Generalist agencies</h3>
              <ul>
                {[
                  "One template for every industry",
                  "Copy that never mentions pool types, financing or your build process",
                  "Generic forms with no call tracking",
                  "Long reports, unclear results",
                  "You rent the site, they own it",
                ].map((t) => (
                  <li key={t}>
                    <Cross /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel ours reveal" style={{ ["--d" as string]: ".1s" }}>
              <h3>
                <BrandIcon size={26} /> Pool Builder Web Design
              </h3>
              <ul>
                {[
                  "Built only for pool builders",
                  "Pool builder copy and SEO",
                  "Your leads come straight to you",
                  "Plain-English reporting on calls & forms",
                  "You own your domain and content",
                ].map((t) => (
                  <li key={t}>
                    <Check /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Faq items={faqs} title="Pricing Questions" />
      <CtaBand title="Get a quote built for your pool business." />
    </>
  );
}
