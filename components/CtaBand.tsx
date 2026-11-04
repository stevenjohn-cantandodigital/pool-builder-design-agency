import Link from "next/link";
import { Arrow } from "./Icons";
import { site } from "@/lib/site";

export default function CtaBand({
  title = "More estimate requests start with a better pool builder website.",
  text = "Book a free 20-minute call. We'll look at your current site and Google presence and tell you exactly what we'd change.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section-tight" aria-label="Schedule a call">
      <div className="container">
        <div className="cta-band reveal">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta-actions">
            <Link href="/contact#schedule" className="btn">
              Schedule a Call <Arrow />
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
