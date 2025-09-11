"use client";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface FeaturedWorksProps {
  title?: string;
  showSeeAllButton?: boolean;
  seeAllHref?: string;
  seeAllText?: string;
  headerText?: string;
  // Add these styling props
  headerClassName?: string;
  titleClassName?: string;
  buttonClassName?: string;
  headerTextClassName?: string;
}

export default function FeaturedWorks({
  title = "Featured works",
  showSeeAllButton = true,
  seeAllHref = "/works",
  seeAllText = "See all works",
  headerText,
  headerClassName,
  titleClassName,
  buttonClassName,
  headerTextClassName,
}: FeaturedWorksProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const projects = [
    {
      id: "flex2ride",
      title: "Flex2Ride",
      description: "App Design • Web Design • Design Systems",
      image: "/Cover-Designv2.svg",
    },
    {
      id: "digital-ninja",
      title: "Digital-Ninja",
      description: "Brand Identity • Web Design • Design Systems",
      image: "/Cover-Designv3.svg",
    },
    {
      id: "mixlr",
      title: "Mixlr",
      description: "App Design • Web Design • Design Systems",
      image: "/Cover-Design4.svg",
    },
    {
      id: "coinly",
      title: "Coinly",
      description: "App Design • Web Design • Design Systems",
      image: "/Cover-Designv4.svg",
    },
  ];

  return (
    <section className="py-16 md:py-24 max-w-[79rem] mx-auto">
      {/* Section Header */}
      <div
        className={`px-3 md:px-0 flex flex-col md:flex-row ${
          showSeeAllButton || headerText
            ? "justify-between md:items-center"
            : "justify-between md:items-center"
        } space-y-4 md:space-y-0 md:mb-12 ${headerClassName || ""}`}>
        <h2
          className={`text-2xl md:text-[30px] font-semibold leading-none tracking-[-0.03em] text-[#2E2D2D] ${
            titleClassName || ""
          }`}>
          {title}
        </h2>
        {showSeeAllButton ? (
          <Link href={seeAllHref}>
            <Button
              className={`w-44 text-[#ff7e29] bg-transparent rounded-[2rem] px-6 p-6 border border-to-r from-[#FFD0B1] to-[#FFD0B1] hover:text-[#ff6602] hover:bg-transparent font-medium ${
                buttonClassName || ""
              }`}>
              {seeAllText}
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        ) : (
          headerText && (
            <div
              className={`text-lg text-[#2E2D2D] ${headerTextClassName || ""}`}>
              {headerText}
            </div>
          )
        )}
      </div>

      {/* Grid for the project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-20">
        {projects.map((project) => (
          <div key={project.id} className="space-y-6">
            {/* Image Container */}
            <div className="p-8 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  imageLoaded
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 0.5 }}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} project mockup`}
                  width={600}
                  height={400}
                  className="object-contain transition-transform duration-300 shadow-md rounded-[40px] ease-in-out hover:scale-110"
                  priority
                  quality={90}
                  onLoad={() => setImageLoaded(true)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </motion.div>
            </div>
            {/* Text Content */}
            <div className="space-y-3 mx-14">
              <h3 className="font-semibold text-[28px] leading-[140%] tracking-[-0.03em] text-[#2E2D2D]">
                {project.title}
              </h3>
              <p className="font-normal text-[14px] leading-[150%] tracking-[-0.03em]">
                {project.description}
              </p>
              <div className="flex gap-4 pt-2">
                <Link href={`/works/${project.id}`}>
                  <button className="text-[#ff7e29]  text-[14px] flex items-center space-x-2 leading-[140%] tracking-normal rounded-[2rem] cursor-pointer bg-[#FFF9F5] hover:text-[#ff6602] hover:bg-[#FFF9F5] p-[0.8rem] px-12  h-auto font-medium group overflow-hidden">
                    <ArrowRight className="h-3 hidden md:flex w-3 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200" />
                    <span className="flex items-center">
                      <span className="transform transition-transform duration-200 group-hover:-translate-x-1">
                        See more
                      </span>
                    </span>
                  </button>
                </Link>

                <Button
                  variant="ghost"
                  className="text-[#ff7e29] hidden md:flex hover:text-[#ff7e29]  p-4 h-auto rounded-[2rem] font-medium hover:bg-transparent hover:rounded-[2rem] cursor-pointer hover:border hover:border-[#FFF9F5] hover:px-4 hover:py-1 transition-all duration-200">
                  View live
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-10 md:hidden">
        <Link href={seeAllHref}>
          <Button
            className={`w-44 text-[#ff7e29] bg-transparent rounded-[2rem] px-6 p-6 border border-to-r from-[#FFD0B1] to-[#FFD0B1] hover:text-[#ff6602] hover:bg-transparent font-medium 
          `}>
            {seeAllText}
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
