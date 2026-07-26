import AboutHero from "@/components/About-hero";
import AboutSell from "@/components/AboutSell";
import FreeOffer from "@/components/FreeOffer";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Digital Ninja Technologies | Global Design & Software Agency",
  description:
    "Digital Ninja Technologies is a global design and software development agency. We build custom software, mobile apps, websites, and AI solutions for startups, SMEs, and global businesses. No hidden fees. No vanishing acts. Just results.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.thedigitalninjatech.com/about",
  },
  keywords: [
    "digital design agency",
    "software development company",
    "reliable tech agency Africa",
    "startup MVP agency",
    "mobile app development",
    "UI UX design agency",
    "web development company",
    "digital agency for foreign clients Africa",
  ],
  openGraph: {
    title: "About Digital Ninja Technologies | Global Design & Software Development Agency",
    description:
      "We build software, apps, and digital products that actually work. Full-service digital agency in Lagos. Serving startups and businesses across Africa and globally.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies" }],
    url: "https://www.thedigitalninjatech.com/about",
    siteName: "Digital Ninja Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Digital Ninja Technologies",
    description:
      "Global design and software development agency. Custom software, apps, and websites that convert. No hidden fees. No excuses.",
    images: ["/og-image.jpg"],
  },
};

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutSell />
      <FreeOffer />
    </>
  );
};

export default About;
