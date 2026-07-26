import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "Book a Free 15-Minute Discovery Call | Digital Ninja Technologies",
  description:
    "Book a free 15-minute call with Digital Ninja Technologies. Tell us about your project — website, mobile app, software, or brand — and we will tell you exactly how we can help and what it will cost. No pitch, no pressure.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.thedigitalninjatech.com/booking",
  },
  openGraph: {
    title: "Book a Free 15-Minute Call | Digital Ninja Technologies",
    description:
      "Book a free 15 minute discovery call. No hard sell, just an honest conversation about your project.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies" }],
    url: "https://www.thedigitalninjatech.com/booking",
    siteName: "Digital Ninja Technologies",
    type: "website",
  },
};

export default function BookingPage() {
  return <BookingClient />;
}
