import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingWrapper from "@/components/LoadingWrapper";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const BASE_URL = "https://www.thedigitalninjatech.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Digital Ninja Technologies | Design & Software Development Agency",
    template: "%s | Digital Ninja Technologies",
  },
  description:
    "Digital Ninja Technologies is a full-service digital agency in Nigeria specialising in UI/UX design, custom software, mobile apps, AI automation, and MVP development for startups and brands.",
  keywords: [
    "digital agency Nigeria",
    "software development Nigeria",
    "UI UX design agency Lagos",
    "mobile app development Nigeria",
    "web design Nigeria",
    "startup MVP development",
    "AI automation Nigeria",
    "product design agency Africa",
    "digital solutions Nigeria",
    "Digital Ninja Technologies",
  ],
  authors: [{ name: "Digital Ninja Technologies", url: BASE_URL }],
  creator: "Digital Ninja Technologies",
  publisher: "Digital Ninja Technologies",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Digital Ninja Technologies | Design & Software Development Agency",
    description:
      "Empowering brands and start-ups with impactful digital solutions through strategic design and development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Ninja Technologies",
      },
    ],
    url: BASE_URL,
    siteName: "Digital Ninja Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Ninja Technologies | Design & Software Development Agency",
    description:
      "Empowering brands and start-ups with impactful digital solutions through strategic design and development.",
    images: ["/og-image.jpg"],
    site: "@theninjatechies",
    creator: "@theninjatechies",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/Digital-Ninja-Logo.png",
    apple: "/Digital-Ninja-Logo.png",
  },
  verification: {
    google: "add-your-google-search-console-token-here",
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Digital Ninja Technologies",
  url: BASE_URL,
  logo: `${BASE_URL}/Digital-Ninja-Logo.png`,
  image: `${BASE_URL}/og-image.jpg`,
  description:
    "Digital Ninja Technologies is a full-service digital agency in Nigeria specialising in UI/UX design, custom software, mobile apps, AI automation, and MVP development.",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "NG",
    addressLocality: "Nigeria",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+2348145865720",
      contactType: "customer service",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      email: "Info@thedigitalninjatech.com",
      contactType: "customer service",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/digitalninja-technology/",
    "https://x.com/theninjatechies",
    "https://www.instagram.com/theninjatechies",
    "https://youtube.com/@designninjaacademy",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design & Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Solutions & Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MVP Development" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Digital Ninja Technologies",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/works?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={BASE_URL} />
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Nigeria" />
      </head>
      <body
        className={`${montserrat.className} font-sans`}
        suppressHydrationWarning={true}>
        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="beforeInteractive"
        />
        <LoadingWrapper>
          <Navbar />
          <div className="mt-20">{children}</div>
          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  );
}
