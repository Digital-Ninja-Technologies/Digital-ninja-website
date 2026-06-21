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

export const BASE_URL = "https://www.thedigitalninjatech.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Digital Ninja Technologies | Design & Software Development Agency in Nigeria",
    template: "%s | Digital Ninja Technologies",
  },
  description:
    "Digital Ninja Technologies is a full service digital agency in Nigeria specialising in UI UX design, custom software development, mobile app development, AI automation, and MVP development for startups, SMEs, and enterprises.",
  keywords: [
    "digital agency Nigeria",
    "software development company Nigeria",
    "UI UX design agency Lagos",
    "mobile app development Nigeria",
    "web design and development Nigeria",
    "startup MVP development Africa",
    "AI automation solutions Nigeria",
    "product design agency Lagos",
    "custom software Nigeria",
    "tech agency Nigeria",
    "app development Lagos",
    "website development Nigeria",
    "Digital Ninja Technologies",
    "digital solutions for startups",
    "branding and design Nigeria",
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
    title: "Digital Ninja Technologies | Design & Software Development Agency in Nigeria",
    description:
      "Empowering brands and startups with impactful digital solutions through strategic design and development. Based in Nigeria, serving clients globally.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Ninja Technologies. Design & Software Development Agency",
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
      "Empowering brands and startups with impactful digital solutions through strategic design and development.",
    images: ["/og-image.jpg"],
    site: "@theninjatechies",
    creator: "@theninjatechies",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "MO09tHFNCT_513t1hh3UzmYulK9evpgIZ3rn4aYCi_c",
  },
};

// ── Structured Data ────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${BASE_URL}/#organization`,
  name: "Digital Ninja Technologies",
  alternateName: "Digital Ninja Tech",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/Digital-Ninja-Logo.png`,
    width: 512,
    height: 512,
  },
  image: `${BASE_URL}/og-image.jpg`,
  description:
    "Digital Ninja Technologies is a full service digital agency in Nigeria specialising in UI UX design, custom software development, mobile apps, AI automation, and MVP development for startups, SMEs, and enterprises across Africa and globally.",
  foundingDate: "2022",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.5244,
    longitude: 3.3792,
  },
  areaServed: [
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Continent", name: "Africa" },
    { "@type": "AdministrativeArea", name: "Global" },
  ],
  priceRange: "₦₦₦",
  telephone: "+2348145865720",
  email: "thedigitalninjatechnologies@gmail.com",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+2348145865720",
      contactType: "customer service",
      availableLanguage: "English",
      contactOption: "TollFree",
    },
    {
      "@type": "ContactPoint",
      email: "thedigitalninjatechnologies@gmail.com",
      contactType: "sales",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/digitalninja-technology/",
    "https://x.com/theninjatechies",
    "https://www.instagram.com/theninjatechies",
    "https://www.tiktok.com/@theninjatechies",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          description: "Scalable software solutions tailored to specific business needs.",
          provider: { "@type": "Organization", name: "Digital Ninja Technologies" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Design & Development",
          description: "Corporate websites, landing pages, web portals, and web applications.",
          provider: { "@type": "Organization", name: "Digital Ninja Technologies" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description: "iOS and Android applications with modern, intuitive user experiences.",
          provider: { "@type": "Organization", name: "Digital Ninja Technologies" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Solutions & Automation",
          description: "AI powered tools, chatbots, workflow automation, and business intelligence.",
          provider: { "@type": "Organization", name: "Digital Ninja Technologies" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI UX Design",
          description: "User centered interface design that improves engagement and drives conversions.",
          provider: { "@type": "Organization", name: "Digital Ninja Technologies" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MVP Development",
          description: "Rapid product development for startups to validate ideas and reach market quickly.",
          provider: { "@type": "Organization", name: "Digital Ninja Technologies" },
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Digital Ninja Technologies",
  url: BASE_URL,
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/works?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Digital Ninja Technologies offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital Ninja Technologies offers custom software development, website design and development, mobile app development (iOS and Android), AI solutions and automation, UI UX design, and MVP development for startups.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Digital Ninja Technologies located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital Ninja Technologies is based in Lagos, Nigeria, and serves clients across Africa and globally.",
      },
    },
    {
      "@type": "Question",
      name: "How can I hire Digital Ninja Technologies for my project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach Digital Ninja Technologies via email at thedigitalninjatechnologies@gmail.com, by phone or WhatsApp at +2348145865720, or through the contact form at https://www.thedigitalninjatech.com/contact.",
      },
    },
    {
      "@type": "Question",
      name: "Does Digital Ninja Technologies work with startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Digital Ninja Technologies specialises in helping startups build MVPs, design product experiences, and develop scalable software to validate ideas and go to market quickly.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Digital Ninja Technologies serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital Ninja Technologies serves startups, SMEs, enterprises, fintech companies, logistics companies, healthcare organisations, schools and EdTechs, NGOs, and government agencies.",
      },
    },
    {
      "@type": "Question",
      name: "Does Digital Ninja Technologies have a referral programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Digital Ninja Technologies offers a 10% commission referral programme. Refer a business that signs a project and earn 10% of the project value. For example, a ₦1,000,000 project earns you ₦100,000.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="tawkto"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/63eb9d3c4742512879134869/1gp85sdmj';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
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
