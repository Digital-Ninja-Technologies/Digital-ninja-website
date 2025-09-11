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
  title: "Digital Ninja",
  description:
    "From Ideas to Startups - We build digital products that drive results",
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
