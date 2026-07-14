import Approach from "@/components/Approach";
import CalBooking from "@/components/CalBooking";
import ClientsSlide from "@/components/ClientsSlide";
import FeaturedWorks from "@/components/Featured-works";
import FreeOffer from "@/components/FreeOffer";
import Hero from "@/components/Hero";
import MetricsBanner from "@/components/MetricsBanner";
import TawkMessenger from "@/components/TawkMessenger";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/What-we-do";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <main className="relative">
      <Hero />

      <main className="absolute top-20 left-0">
        <TawkMessenger />
      </main>

      {/* Metrics banner */}
      <MetricsBanner />

      {/* Client Marquee Section. Above CEO letter */}
      <div className="w-full mt-4 md:mt-1 pb-10">
        <ClientsSlide />
      </div>

      {/* Who We Are. CEO voice, problem-aware, conversion-focused */}
      <WhoWeAre />
      {/* Our Approach Section */}
      <Approach />

      <WhatWeDo />
      <FeaturedWorks title="Featured works" buttonClassName="md:flex hidden" />
      <FreeOffer />
      <Testimonials />
      <CalBooking />
    </main>
  );
}
