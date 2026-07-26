import type { Metadata } from "next";
import WorksClient from "./WorksClient";

export const metadata: Metadata = {
  title: "Portfolio | Web Design, App & Software Projects | Digital Ninja Technologies",
  description:
    "Explore our portfolio of websites, mobile apps, brand identities, and software products built for startups and businesses across Africa, Europe, and North America. Real work. Real results.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.thedigitalninjatech.com/works",
  },
  openGraph: {
    title: "Portfolio | Digital Ninja Technologies",
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
    description:
      "Case studies and portfolio work from Digital Ninja Technologies — websites, mobile apps, SaaS platforms, and brand identities built for startups and growing businesses worldwide.",
    images: ["/og-image.jpg"],
  },
};

export default function WorksPage() {
  return <WorksClient />;
}
