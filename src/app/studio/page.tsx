import type { Metadata } from "next";
import StudioClient from "./StudioClient";

export const metadata: Metadata = {
  title: "Studio | Digital Ninja Technologies",
  description:
    "Digital Ninja Technologies Studio. We design and build websites, apps, and brand identities for startups, founders, and growing businesses worldwide.",
  alternates: { canonical: "https://www.thedigitalninjatech.com/studio" },
  openGraph: {
    title: "Studio | Digital Ninja Technologies",
    description: "Designing and building digital products for startups and global brands.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies Studio" }],
    url: "https://www.thedigitalninjatech.com/studio",
    siteName: "Digital Ninja Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio | Digital Ninja Technologies",
    description: "Designing and building digital products for startups and global brands.",
    images: ["/og-image.jpg"],
  },
};

export default function StudioPage() {
  return <StudioClient />;
}
