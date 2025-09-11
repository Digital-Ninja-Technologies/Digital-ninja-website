"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MultiStepModal from "./Multi-step-modal";
import { useState } from "react";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer className="relative bg-white md:pt-20 overflow-hidden">
      <div className="relative">
        <img
          src="/shape.svg"
          alt="Decorative orange shape"
          className="absolute top-0 left-0 w-full h-[20rem] md:h-[55rem]"
        />

        <div className="relative container mx-auto px-2 py-[6rem] md:py-80 flex flex-col md:flex-row items-center space-x-10 max-w-6xl">
          <div className="flex mt-8  md:mt-0">
            <h1 className="text-[24px] text-center md:text-start mb-4 md:text-6xl lg:text-[64px] font-[700] text-white leading-tight">
              Let's create great <br className="hidden md:block" />
              work together
            </h1>
          </div>
          <div className="md:flex-shrink-0 md:ml-8">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-[#ff7e29] hover:bg-gray-50 px-8 py-3 rounded-full text-lg font-[500]"
              size="lg">
              Get started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto md:mt-20 px-6 pb-24 max-w-7xl">
        <img
          src="/shape2.svg"
          alt="Decorative background blob"
          className="absolute h-auto w-full bottom-0 right-0 opacity-10"
        />

        <div className=" text-center space-y-8">
          <h2 className="text-4xl md:text-4xl font-[600] text-[#2e2d2d] mb-12">
            Reach out to us:
          </h2>

          <div className="space-y-6">
            <div className="text-2xl md:text-[28px] font-[600] text-[#FF6602]">
              +234 803 000 4000
            </div>

            <div className="text-xl font-[600] md:text-[28px]">
              <a
                href="mailto:info@digitalninjatech.com"
                className="text-[#FF6602] underline hover:text-[#FF6602] transition-colors">
                info@digitalninjatech.com
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="pt-8 md:pt-12">
            <div className="flex flex-wrap justify-center items-center space-x-4  font-[500] text-[#6b6a6a] text-[16px]">
              <a href="#" className="hover:text-[#ff7e29] transition-colors">
                LinkedIn
              </a>
              <span className="bg-[#FF7E29] rounded-full h-[5px] w-[5px] " />
              <a href="#" className="hover:text-[#ff7e29] transition-colors">
                X (Twitter)
              </a>
              <span className="bg-[#FF7E29] rounded-full h-[5px] w-[5px] " />

              <a href="#" className="hover:text-[#ff7e29] transition-colors">
                Instagram
              </a>
              <span className="bg-[#FF7E29] rounded-full h-[5px] w-[5px] " />

              <a href="#" className="hover:text-[#ff7e29] transition-colors">
                Facebook
              </a>
              <span className="bg-[#FF7E29] rounded-full h-[5px] w-[5px] " />

              <a href="#" className="hover:text-[#ff7e29] transition-colors">
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
      <MultiStepModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </footer>
  );
}
