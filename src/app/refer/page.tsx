import ReferPage from "@/components/Refer";
import FreeOffer from "@/components/FreeOffer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer & Earn 10% Commission | Digital Ninja Technologies",
  description:
    "Refer a business, startup, or organisation to Digital Ninja Technologies and earn 10% commission when they sign a project. No upfront cost. Earn up to ₦500,000 per referral.",
  alternates: {
    canonical: "https://www.thedigitalninjatech.com/refer",
  },
  openGraph: {
    title: "Refer & Earn 10% Commission | Digital Ninja Technologies",
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
    title: "Refer & Earn 10% Commission | Digital Ninja Technologies",
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
