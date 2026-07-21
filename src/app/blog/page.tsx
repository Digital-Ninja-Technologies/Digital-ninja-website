import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | Web Design, Startup & Digital Marketing Insights",
  description:
    "Practical guides on web design, mobile app development, startup advice, SEO, and digital marketing for founders and growing businesses across Africa and globally.",
  alternates: { canonical: "https://www.thedigitalninjatech.com/blog" },
  openGraph: {
    title: "Blog | Digital Ninja Technologies",
    description: "Practical guides on web design, mobile apps, startup advice, and digital marketing.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies Blog" }],
    url: "https://www.thedigitalninjatech.com/blog",
    siteName: "Digital Ninja Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Digital Ninja Technologies",
    description: "Practical guides on web design, mobile apps, startup advice, and digital marketing.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
