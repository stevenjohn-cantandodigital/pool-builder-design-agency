import Link from "next/link";
import { Arrow } from "./Icons";

export default function PageHero({
  eyebrow,
  title,
  lead,
  cta = true,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  cta?: boolean;
}) {
  return (
    <section className="glow-wrap" aria-labelledby="page-h">
      <div className="rays" />
      <div className="stars" />
      <div className="container page-hero">
        <div className="inner">
          <p className="eyebrow reveal">{eyebrow}</p>
          <h1 id="page-h" className="reveal" style={{ ["--d" as string]: ".05s" }}>
            {title}
          </h1>
          <p className="lead reveal" style={{ ["--d" as string]: ".12s" }}>
            {lead}
          </p>
          {cta && (
            <div className="cta-actions reveal" style={{ ["--d" as string]: ".18s" }}>
              <Link href="/contact#schedule" className="btn">
                Schedule a Call <Arrow />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
