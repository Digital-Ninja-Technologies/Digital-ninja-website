import AboutHero from "@/components/About-hero";
import WhatWeDo from "@/components/What-we-do";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Digital Agency in Nigeria",
  description:
    "Learn about Digital Ninja Technologies — a full-service digital agency in Lagos, Nigeria, helping startups and brands build world-class digital products through strategic design and software development.",
  alternates: {
    canonical: "https://www.thedigitalninjatech.com/about",
  },
  openGraph: {
    title: "About Digital Ninja Technologies | Digital Agency in Nigeria",
    description:
      "We are a full-service digital agency in Lagos, Nigeria, helping startups, SMEs, and enterprises build impactful digital products through strategic design and development.",
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
      "A full-service digital agency in Lagos, Nigeria, helping startups and brands build impactful digital products.",
    images: ["/og-image.jpg"],
  },
};

const About = () => {
  return (
    <>
      <AboutHero />
      <WhatWeDo />
    </>
  );
};

export default About;
