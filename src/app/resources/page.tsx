import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Free Resources for Founders & Business Owners | Digital Ninja Technologies",
  description:
    "Download free guides built for founders, startups, and SMEs. The Digital Business Launch Kit, Startup Idea Validation Framework, Pitch Deck Template, Email Marketing Guide, and more — no cost, instant access.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.thedigitalninjatech.com/resources",
  },
  openGraph: {
    title: "Free Resources | Digital Ninja Technologies",
    description:
      "Free guides for founders, startups, and SMEs. Download the Digital Business Launch Kit and the Business Idea Validation Framework.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies Free Resources" }],
    url: "https://www.thedigitalninjatech.com/resources",
    siteName: "Digital Ninja Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Resources | Digital Ninja Technologies",
    description:
      "Free PDF guides for founders and business owners. Download the Digital Business Launch Kit, Startup Validation Framework, Pitch Deck Template, and 5 more practical guides. Free, instant access.",
    images: ["/og-image.jpg"],
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
