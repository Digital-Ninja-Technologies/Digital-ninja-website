import AboutHero from "@/components/About-hero";
import WhatWeDo from "@/components/What-we-do";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Digital Ninja Technologies",
  description:
    "Empowering brands and start-ups with impactful digital solutions through strategic design and development.",
  openGraph: {
    title: "About | Digital Ninja Technologies",
    description:
      "Empowering brands and start-ups with impactful digital solutions through strategic design and development.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies" }],
    url: "https://www.thedigitalninjatech.com/about",
    siteName: "Digital Ninja Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Digital Ninja Technologies",
    description:
      "Empowering brands and start-ups with impactful digital solutions through strategic design and development.",
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
