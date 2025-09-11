"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      quote:
        "DigitalNinja handled our project with utmost professionalism, we were able to attract the right audience.",
      name: "Patrick Umoh",
      title: "CEO, Whichcar",
      avatar: "/user1.svg",
    },
    {
      quote:
        "We got exactly what we wanted, the new blog design feels so alive, users now interact better with our posts and are happy to leave comments, thank you to the entire team! This was a truly outstanding experience from start to finish.",
      name: "Sandra Oluwatemitope",
      title: "Product Manager, MoneyWise",
      avatar: "/user2.svg",
    },
    {
      quote:
        "Best digital service I have received so far, the team were so helpful in handling the online presence of my business.",
      name: "John Ayanyemi",
      title: "CEO, Greenland",
      avatar: "/user2.svg",
    },
    {
      quote:
        "Another great testimonial praising the team's ability to deliver results and provide excellent service.",
      name: "Jane Doe",
      title: "Marketing Head, Innovate Inc.",
      avatar: "/user1.svg",
    },
    {
      quote:
        "The online presence of my business has never been stronger. A fantastic experience from start to finish.",
      name: "Chris Eze",
      title: "Founder, StartRight",
      avatar: "/user2.svg",
    },
  ];

  // Effect to check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 4;

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const lastValidIndex = testimonials.length - itemsPerPage;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= lastValidIndex) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length, itemsPerPage]);

  const trackWidth = (testimonials.length / itemsPerPage) * 100;
  const translateValue = (currentIndex * 100) / testimonials.length;

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

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${trackWidth}%`,
              transform: `translateX(-${translateValue}%)`,
            }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 md:flex-shrink-0 h-[28rem]">
                <div className="h-full px-2 md:px-4">
                  <div className="flex border-2 border-[#FFF0E5] rounded-[2rem] p-6 flex-col h-full">
                    <div className="flex-1 mb-4 overflow-y-auto pr-3">
                      <p className="text-base md:text-[23px] font-semibold leading-[140%] tracking-[-0.03em] text-[#6B6A6A]">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t border-[#FFF0E5]">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-[600] text-[#2E2D2D] text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#8A8888] font-[400] text-sm">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-12 h-1 rounded-md transition-colors duration-200 ${
                index === currentIndex ? "bg-[#ff6602]" : "bg-[#FFF0E5]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
