"use client";

import Image from "next/image";

const testimonials: {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}[] = [];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-[#FFF9F5] py-8 md:py-16 px-6">
      <div className="max-w-[78rem] mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-center">
          <h2 className="text-2xl md:text-[40px] font-[600] text-[#2e2d2d] mb-6">
            Providing <span className="text-[#ff6602]">5-star services</span>,
            <br />
            as said by our clients
          </h2>
          <div className="flex gap-1 mb-6 md:mb-0">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src="/icons/Star.svg"
                alt="star"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
