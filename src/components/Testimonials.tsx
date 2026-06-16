"use client";

import Image from "next/image";

const testimonials: {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}[] = [
  // Testimonials will be added here
];

export default function Testimonials() {
  return (
    <section className="bg-[#FFF9F5] py-8 md:py-16 px-6">
      <div className="max-w-[78rem] mx-auto">
        {/* Header */}
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

        {/* Cards — send your testimonials to populate this */}
        {testimonials.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col border-2 border-[#FFF0E5] rounded-[2rem] p-6 h-full"
              >
                <p className="flex-1 text-[18px] font-semibold leading-[140%] tracking-[-0.03em] text-[#6B6A6A] mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#FFF0E5]">
                  <img
                    src={t.avatar || "/placeholder.svg"}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-[600] text-[#2E2D2D] text-base">{t.name}</h4>
                    <p className="text-[#8A8888] font-[400] text-sm">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
