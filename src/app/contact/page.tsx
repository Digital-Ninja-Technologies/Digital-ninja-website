import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hire a Digital Agency in Nigeria",
  description:
    "Get in touch with Digital Ninja Technologies. Hire a top digital agency in Nigeria for software development, UI/UX design, mobile apps, and AI solutions. Email us or send a WhatsApp message today.",
  alternates: {
    canonical: "https://www.thedigitalninjatech.com/contact",
  },
  openGraph: {
    title: "Contact Digital Ninja Technologies | Hire a Digital Agency in Nigeria",
    description:
      "Reach out to Digital Ninja Technologies for custom software, web design, mobile apps, and AI automation. Based in Lagos, Nigeria — serving clients globally.",
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
      "Reach out to Digital Ninja Technologies for custom software, web design, mobile apps, and AI automation.",
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
