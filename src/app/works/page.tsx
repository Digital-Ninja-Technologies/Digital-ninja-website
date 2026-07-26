import type { Metadata } from "next";
import WorksClient from "./WorksClient";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Digital Products We've Built",
  description:
    "Explore Digital Ninja Technologies portfolio of digital products. Mobile apps, web platforms, SaaS tools, and brand identities built for startups and enterprises across Nigeria and Africa.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.thedigitalninjatech.com/works",
  },
  openGraph: {
    title: "Portfolio | Digital Products Built by Digital Ninja Technologies",
    description:
      "Browse our selected works. Mobile apps, web platforms, SaaS products, and brand identities built for startups and enterprises across Nigeria and Africa.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies Portfolio" }],
    url: "https://www.thedigitalninjatech.com/works",
    siteName: "Digital Ninja Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Digital Ninja Technologies",
    description: "Mobile apps, web platforms, SaaS products, and brand identities built for startups and enterprises.",
    images: ["/og-image.jpg"],
  },
};

export default function WorksPage() {
  return <WorksClient />;
}
