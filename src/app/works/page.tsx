import FeaturedWorks from "@/components/Featured-works";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Portfolio",
  description:
    "Explore Digital Ninja Technologies' portfolio of digital products — mobile apps, websites, and software built for startups and brands across Africa and beyond.",
  alternates: { canonical: "https://www.thedigitalninjatech.com/works" },
  openGraph: {
    title: "Portfolio | Digital Ninja Technologies",
    description:
      "Explore our portfolio of digital products — mobile apps, websites, and software built for startups and brands.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies" }],
    url: "https://www.thedigitalninjatech.com/works",
    siteName: "Digital Ninja Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Digital Ninja Technologies",
    description:
      "Explore our portfolio of digital products — mobile apps, websites, and software built for startups and brands.",
    images: ["/og-image.jpg"],
  },
};

const Works = () => {
  return (
    <>
      <FeaturedWorks
        title="SELECTED WORKS"
        showSeeAllButton={false}
        headerText="Building the next generation of highly impactful and converting projects."
        headerClassName="flex px-4 md:px-0 items-center justify-between"
        titleClassName="font-medium text-[18px] leading-[120%] tracking-[-0.03em] text-[#FF7E29]"
        headerTextClassName="font-semibold text-[24px] md:text-[44px] leading-[120%] tracking-[-0.03em] text-[#000] md:max-w-4xl"
      />
      <Testimonials />
    </>
  );
};

export default Works;
