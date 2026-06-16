import AboutHero from "@/components/About-hero";
import AboutSell from "@/components/AboutSell";
import WhatWeDo from "@/components/What-we-do";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Digital Agency in Nigeria — Digital Ninja Technologies",
  description:
    "Digital Ninja Technologies is a full-service digital agency in Lagos, Nigeria. We build custom software, mobile apps, websites, and AI solutions for startups, SMEs, and global businesses. No hidden fees. No vanishing acts. Just results.",
  alternates: {
    canonical: "https://www.thedigitalninjatech.com/about",
  },
  keywords: [
    "digital agency Nigeria",
    "software development company Lagos",
    "reliable tech agency Africa",
    "startup MVP Nigeria",
    "mobile app development Lagos",
    "UI UX design agency Nigeria",
    "web development company Nigeria",
    "digital agency for foreign clients Africa",
  ],
  openGraph: {
    title: "About Digital Ninja Technologies | Digital Agency in Nigeria",
    description:
      "We build software, apps, and digital products that actually work. Full-service digital agency in Lagos, Nigeria — serving startups and businesses across Africa and globally.",
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
      "Full-service digital agency in Lagos, Nigeria. Custom software, apps, and websites that convert. No hidden fees. No excuses.",
    images: ["/og-image.jpg"],
  },
};

const About = () => {
  return (
    <>
      <AboutHero />
      <WhatWeDo />
      <AboutSell />
    </>
  );
};

export default About;
