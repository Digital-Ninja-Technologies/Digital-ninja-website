import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Digital Ninja Technologies",
  description:
    "Empowering brands and start-ups with impactful digital solutions through strategic design and development.",
  openGraph: {
    title: "Contact | Digital Ninja Technologies",
    description:
      "Empowering brands and start-ups with impactful digital solutions through strategic design and development.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies" }],
    url: "https://www.thedigitalninjatech.com/contact",
    siteName: "Digital Ninja Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Digital Ninja Technologies",
    description:
      "Empowering brands and start-ups with impactful digital solutions through strategic design and development.",
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
