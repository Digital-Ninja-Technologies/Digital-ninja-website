import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | Web Design, Startup & Digital Marketing Guides | Digital Ninja Technologies",
  description:
    "Practical guides for founders, startups, and business owners. Learn how to build websites that convert, hire the right agency, validate startup ideas, rank on Google, and grow your business online.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://www.thedigitalninjatech.com/blog" },
  openGraph: {
    title: "Blog | Digital Ninja Technologies",
    description:
      "Practical guides on web design, mobile app development, startup advice, SEO, and digital marketing for founders and growing businesses worldwide.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies Blog" }],
    url: "https://www.thedigitalninjatech.com/blog",
    siteName: "Digital Ninja Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Digital Ninja Technologies",
    description: "Practical guides on web design, startup advice, SEO, and digital marketing for founders and growing businesses.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
