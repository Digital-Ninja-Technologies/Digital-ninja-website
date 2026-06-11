import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingWrapper from "@/components/LoadingWrapper";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Digital Ninja Technologies",
  description:
    "Empowering brands and start-ups with impactful digital solutions through strategic design and development.",
  openGraph: {
    title: "Digital Ninja Technologies",
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
    url: "https://www.thedigitalninjatech.com",
    siteName: "Digital Ninja Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Ninja Technologies",
    description:
      "Empowering brands and start-ups with impactful digital solutions through strategic design and development.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} font-sans`}
        suppressHydrationWarning={true}>
        <LoadingWrapper>
          <Navbar />
          <div className="mt-20">{children}</div>
          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  );
}
