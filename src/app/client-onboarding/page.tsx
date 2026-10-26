import type { Metadata } from "next";
import ClientOnboardingClient from "./ClientOnboardingClient";

export const metadata: Metadata = {
  title: "Client Onboarding | Digital Ninja Technologies",
  description:
    "Fill out our Product Discovery Questionnaire so we can understand your vision, goals, and requirements before we start planning your project.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.thedigitalninjatech.com/client-onboarding",
  },
  openGraph: {
    title: "Client Onboarding | Digital Ninja Technologies",
    description:
      "Help us understand your vision. Fill out the Product Discovery Questionnaire and let's build something great together.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Ninja Technologies" }],
    url: "https://www.thedigitalninjatech.com/client-onboarding",
    siteName: "Digital Ninja Technologies",
    type: "website",
  },
};

export default function ClientOnboardingPage() {
  return <ClientOnboardingClient />;
}
