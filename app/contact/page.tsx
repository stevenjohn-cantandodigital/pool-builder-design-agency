import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Calendar, Mail, Phone } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Schedule a Call",
  description:
    "Schedule a free strategy call with Pool Builder Web Design. Tell us about your pool business and we'll show you what we'd change on your website and Google presence.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="glow-wrap" aria-labelledby="page-h">
        <div className="rays" />
        <div className="stars" />
        <div className="container page-hero" style={{ paddingBottom: 60 }}>
          <div className="inner">
            <p className="eyebrow reveal">Contact</p>
            <h1 id="page-h" className="reveal">
              Schedule a Call With a Pool Builder Web Specialist
            </h1>
            <p className="lead reveal">
              A free, no-pressure 20-minute call. We&rsquo;ll review your current website and Google presence and tell
              you exactly what we&rsquo;d do to bring in more estimate requests.
            </p>
          </div>
        </div>

        <div className="container" style={{ paddingBottom: 120 }}>
          <div className="contact-grid">
            <aside className="contact-side" aria-label="Other ways to reach us">
              <div className="contact-card reveal">
                <h2 style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Phone /> Call or text
                </h2>
                <p>Prefer to talk now? Call or text and we&rsquo;ll pick up or get right back to you.</p>
                <a className="big" href={site.phoneHref}>
                  {site.phone}
                </a>
              </div>
              <div className="contact-card reveal" style={{ ["--d" as string]: ".06s" }}>
                <h2 style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Mail /> Email
                </h2>
                <p>Send your website link and a few lines about your pool business.</p>
                <a className="big" style={{ fontSize: 17, wordBreak: "break-all" }} href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              <div className="contact-card reveal" style={{ ["--d" as string]: ".12s" }}>
                <h2 style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Calendar /> What happens on the call
                </h2>
                <ul className="checklist" style={{ fontSize: 14 }}>
                  <li>A quick look at your current site and Google Business Profile</li>
                  <li>Where you&rsquo;re losing calls and quote requests today</li>
                  <li>A clear recommendation and next steps, with no obligation</li>
                </ul>
              </div>
            </aside>

            <div id="schedule" className="form-panel reveal" style={{ scrollMarginTop: 100 }}>
              <h2>Request your call</h2>
              <p>Takes about a minute. Only name and email are required.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
