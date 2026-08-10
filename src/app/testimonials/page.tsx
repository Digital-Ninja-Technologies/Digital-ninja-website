import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Video Testimonial | Client Reviews | Digital Ninja Technologies",
  description:
    "Hear directly from founders and business owners who have worked with Digital Ninja Technologies. Real video testimonials from real clients.",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://www.thedigitalninjatech.com/testimonials" },
  openGraph: {
    title: "Video Testimonial | Digital Ninja Technologies",
    description: "Hear from founders and business owners who have worked with us. Real testimonials from real clients.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Client Testimonials" }],
    url: "https://www.thedigitalninjatech.com/testimonials",
    siteName: "Digital Ninja Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Testimonial | Digital Ninja Technologies",
    description: "Hear from founders and business owners who have worked with us.",
    images: ["/og-image.jpg"],
  },
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
