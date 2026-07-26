import type { Metadata } from "next";
import StudioClient from "./StudioClient";

export const metadata: Metadata = {
  title: "Studio | Digital Design & Development Agency | Digital Ninja Technologies",
  description:
    "Digital Ninja Technologies Studio — a design and development agency for founders and brands who need more than a pretty website. Web design, mobile apps, brand identity, and custom software. No fluff. Just results.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://www.thedigitalninjatech.com/studio" },
  openGraph: {
    title: "Studio | Digital Ninja Technologies",
    description:
      "Websites, apps, and brand identities built for founders who are done with mediocre digital work. Digital Ninja Technologies Studio.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies Studio" }],
    url: "https://www.thedigitalninjatech.com/studio",
    siteName: "Digital Ninja Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio | Digital Ninja Technologies",
    description: "Design and development for founders who need more than a pretty website. Web design, apps, branding, and software.",
    images: ["/og-image.jpg"],
  },
};

export default function StudioPage() {
  return <StudioClient />;
}
