import ReferPage from "@/components/Refer";
import FreeOffer from "@/components/FreeOffer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer & Earn 10% Commission | Digital Ninja Technologies Partner Programme",
  description:
    "Earn 10% commission on every project you refer to Digital Ninja Technologies. No cap, no expiry. Refer a business that signs a web design, app, or software project and we pay you 10% of the total value.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.thedigitalninjatech.com/refer",
  },
  openGraph: {
    title: "Refer & Earn | Digital Ninja Technologies",
    description:
      "Refer businesses to Digital Ninja Technologies and earn 10% commission on every successful project. ₦500k project = ₦50k for you. Your network, our expertise, shared success.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies Referral Programme" }],
    url: "https://www.thedigitalninjatech.com/refer",
    siteName: "Digital Ninja Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refer & Earn | Digital Ninja Technologies",
    description:
      "Refer businesses to Digital Ninja Technologies and earn 10% commission. ₦1M project = ₦100k for you.",
    images: ["/og-image.jpg"],
  },
};

export default function Refer() {
  return (
    <>
      <ReferPage />
      <FreeOffer />
    </>
  );
}
