import ReferPage from "@/components/Refer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer & Earn | Digital Ninja Technologies",
  description:
    "Refer businesses to Digital Ninja Technologies and earn 10% commission on every successful project sign. Your network, our expertise, shared success.",
  openGraph: {
    title: "Refer & Earn | Digital Ninja Technologies",
    description:
      "Refer businesses to Digital Ninja Technologies and earn 10% commission on every successful project sign. Your network, our expertise, shared success.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies" }],
    url: "https://www.thedigitalninjatech.com/refer",
    siteName: "Digital Ninja Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refer & Earn | Digital Ninja Technologies",
    description:
      "Refer businesses to Digital Ninja Technologies and earn 10% commission on every successful project sign. Your network, our expertise, shared success.",
    images: ["/og-image.jpg"],
  },
};

export default function Refer() {
  return <ReferPage />;
}
