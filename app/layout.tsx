import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter-tight";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pool Builder Web Design | Websites & SEO for Pool Builders",
    template: "%s | Pool Builder Web Design",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "pool builder web design",
    "pool builder website design",
    "websites for pool builders",
    "pool builder SEO",
    "pool contractor marketing",
    "pool builder leads",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/brand/cantandodigital-icon.svg", type: "image/svg+xml" }],
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "Pool Builder Web Design | Websites & SEO for Pool Builders",
    description: site.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Pool Builder Web Design" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d1424",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  description: site.description,
  telephone: "+1-610-764-3857",
  email: site.email,
  logo: `${site.url}/brand/cantandodigital-icon.svg`,
  areaServed: { "@type": "Country", name: "United States" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Newtown Square",
    addressRegion: "PA",
    addressCountry: "US",
  },
  parentOrganization: { "@type": "Organization", name: "cantandoDigital", url: site.parentUrl },
  knowsAbout: ["Pool builder website design", "Pool builder SEO", "Google Business Profile", "Google Ads for pool builders"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-js">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
