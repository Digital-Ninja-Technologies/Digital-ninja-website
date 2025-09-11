import Approach from "@/components/Approach";
import ClientsSlide from "@/components/ClientsSlide";
import FeaturedWorks from "@/components/Featured-works";
import Hero from "@/components/Hero";
import ProcessSteps from "@/components/Process-steps";
import TawkMessenger from "@/components/TawkMessenger";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/What-we-do";

export default function Home() {
  return (
    <main className="relative">
      <Hero />

      <main className="absolute top-20 left-0">
        <TawkMessenger />
      </main>
      {/* Client Marquee Section */}
      <div className="w-full mt-4 md:mt-1 pb-10">
        <ClientsSlide />
      </div>
      {/* Our Approach Section */}
      <Approach />

      {/* Process Steps Section */}
      <div className="w-full bg-gradient-to-b from-[#FFF0EB] via-[#FFF0EB] to-white  py-2 md:py-2">
        <ProcessSteps />
      </div>
      <WhatWeDo />
      <FeaturedWorks title="Featured works" buttonClassName="md:flex hidden" />
      <Testimonials />
    </main>
  );
}
