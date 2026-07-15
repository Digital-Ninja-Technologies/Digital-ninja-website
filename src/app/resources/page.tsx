import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Free Resources | Digital Ninja Technologies",
  description:
    "Free guides for founders, startups, and SMEs. Download the Digital Business Launch Kit and the Business Idea Validation Framework — no cost, instant access.",
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
    description: "Free guides for founders, startups, and SMEs. Instant download, no cost.",
    images: ["/og-image.jpg"],
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
