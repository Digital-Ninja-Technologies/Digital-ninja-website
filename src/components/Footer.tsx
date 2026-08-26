"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden">

      {/* CTA block */}
      <div className="relative">
        <img
          src="/shape.svg"
          alt="Decorative orange shape"
          className="absolute top-0 left-0 w-full h-[16rem] sm:h-[24rem] md:h-[55rem] pointer-events-none object-cover"
        />
        <div className="relative container mx-auto px-6 py-16 md:py-32 lg:py-80 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-6 md:gap-0 md:space-x-10 max-w-6xl">
          <div className="flex flex-1">
            <h2 className="text-[26px] sm:text-[32px] md:text-5xl lg:text-[64px] text-center md:text-start font-[700] text-white leading-tight">
              Let&apos;s create great{" "}
              <br className="hidden md:block" />
              work together
            </h2>
          </div>
          <div className="md:flex-shrink-0 md:ml-8">
            <Button
              onClick={() => window.location.href = "/booking"}
              className="bg-white text-[#ff7e29] hover:bg-gray-50 px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-[500]"
              size="lg"
            >
              Book a 15min call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom block */}
      <div className="relative container mx-auto px-6 pb-16 md:pb-24 pt-8 md:pt-0 md:mt-20 max-w-7xl">
        <img
          src="/shape2.svg"
          alt="Decorative background blob"
          className="absolute h-auto w-full bottom-0 right-0 opacity-10 pointer-events-none"
        />

        <div className="text-center space-y-6 md:space-y-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[600] text-[#2e2d2d] mb-6 md:mb-12">
            Reach out to us:
          </h2>

          {/* Email */}
          <div className="text-base sm:text-xl font-[600] md:text-[28px] break-all sm:break-normal">
            <a
              href="mailto:thedigitalninjatechnologies@gmail.com"
              className="text-[#FF6602] underline hover:text-[#FF6602] transition-colors"
            >
              thedigitalninjatechnologies@gmail.com
            </a>
          </div>

          {/* Social links */}
          <div className="pt-6 md:pt-12">
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 font-[500] text-[#6b6a6a] text-[15px] md:text-[16px]">
              <a
                href="https://www.linkedin.com/company/digitalninja-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff7e29] transition-colors"
              >
                LinkedIn
              </a>
              <span className="bg-[#FF7E29] rounded-full h-[5px] w-[5px]" />
              <a
                href="https://x.com/theninjatechies?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff7e29] transition-colors"
              >
                X (Twitter)
              </a>
              <span className="bg-[#FF7E29] rounded-full h-[5px] w-[5px]" />
              <a
                href="https://www.instagram.com/theninjatechies?igsh=dnF3Zm5hbXloZGlw&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff7e29] transition-colors"
              >
                Instagram
              </a>
              <span className="bg-[#FF7E29] rounded-full h-[5px] w-[5px]" />
              <a
                href="https://www.tiktok.com/@theninjatechies"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff7e29] transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
