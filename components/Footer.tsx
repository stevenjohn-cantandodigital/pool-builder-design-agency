import Link from "next/link";
import BrandIcon from "./BrandIcon";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-about">
            <Link href="/" className="brand" aria-label="Pool Builder Web Design, home">
              <BrandIcon size={24} />
              <span>Pool Builder Web Design</span>
            </Link>
            <p>
              Websites, SEO and digital marketing built only for pool builders. A{" "}
              <a href={site.parentUrl} className="accent">
                cantandoDigital
              </a>{" "}
              company.
            </p>
            <div className="footer-contact">
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>Email us</a>
            </div>
          </div>

          <div className="footer-col">
            <h2>Pages</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h2>Services</h2>
            <ul>
              <li><Link href="/services#websites">Pool builder websites</Link></li>
              <li><Link href="/services#seo">Pool builder SEO</Link></li>
              <li><Link href="/services#local">Google Business Profile</Link></li>
              <li><Link href="/services#ads">Google &amp; Meta Ads</Link></li>
              <li>
                <Link href="/contact#schedule">
                  Schedule a call<span className="tag-new">Free</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Pool Builder Web Design · a cantandoDigital company · {site.location}</span>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
