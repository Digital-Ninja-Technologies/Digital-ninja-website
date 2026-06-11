import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Digital Ninja Technologies. We build custom software, mobile apps, websites, and AI solutions for startups and businesses in Nigeria and globally.",
  alternates: { canonical: "https://www.thedigitalninjatech.com/contact" },
  openGraph: {
    title: "Contact Digital Ninja Technologies",
    description:
      "Get in touch — we build custom software, mobile apps, websites, and AI solutions for startups and businesses.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies" }],
    url: "https://www.thedigitalninjatech.com/contact",
    siteName: "Digital Ninja Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Digital Ninja Technologies",
    description:
      "Get in touch — we build custom software, mobile apps, websites, and AI solutions for startups and businesses.",
    images: ["/og-image.jpg"],
  },
};

const Contact = () => {
  return (
    <div className="relative min-h-screen">
      <ContactForm />
    </div>
  );
};

export default Contact;
