import AboutHero from "@/components/About-hero";
import WhatWeDo from "@/components/What-we-do";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Digital Ninja Technologies — a Nigerian digital agency helping startups and brands build impactful software, apps, and digital products through strategic design and development.",
  alternates: { canonical: "https://www.thedigitalninjatech.com/about" },
  openGraph: {
    title: "About Digital Ninja Technologies",
    description:
      "A full-service digital agency in Nigeria helping startups and brands build impactful software, apps, and digital products.",
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
      "A full-service digital agency in Nigeria helping startups and brands build impactful software, apps, and digital products.",
    images: ["/og-image.jpg"],
  },
};

const About = () => {
  return (
    <>
      <AboutHero />
      <WhatWeDo />
      {/* <Team /> */}
    </>
  );
};

export default About;
