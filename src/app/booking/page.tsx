import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "Book a 15min Call | Digital Ninja Technologies",
  description:
    "Book a free 15 minute discovery call with Digital Ninja Technologies. Select a time that works for you and let us show you how we can bring your digital vision to life.",
  alternates: {
    canonical: "https://www.thedigitalninjatech.com/booking",
  },
  openGraph: {
    title: "Book a 15min Call | Digital Ninja Technologies",
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
