"use client";

import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: "moducode",
    title: "Moducode",
    description: "UX UI Design · B2B SaaS · Talent Platform",
    image: "/moducode-cover.png",
    liveUrl: "https://krevops.com/",
    tags: ["UI/UX", "SaaS", "Web"],
    year: "2026",
    bg: "#F0FDF4",
    accent: "#16A34A",
  },
  {
    id: "korlodworks",
    title: "Korlod Works",
    description: "Web Design · Brand Identity · Agency Website",
    image: "/korlod-1.jpg",
    liveUrl: "https://korlodworks.com/",
    tags: ["Web Design", "Branding", "Agency"],
    year: "2025",
    bg: "#E8ECF5",
    accent: "#3A4A7A",
  },
  {
    id: "thazlo",
    title: "Thazlo",
    description: "Web Development · Design Support · Consumer App · Home Services",
    image: "/thazlo-1.png",
    liveUrl: "https://www.thazloapp.com",
    tags: ["Web Development", "Design Support", "Consumer App"],
    year: "2026",
    bg: "#FFF7ED",
    accent: "#FF6602",
  },
  {
    id: "brandface",
    title: "Brandface",
    description: "Web Design · Lead Conversion · Marketing Website",
    image: "/brandface-1.png",
    liveUrl: "https://brandface-eta.vercel.app",
    tags: ["Web Design", "Landing Page", "Conversion"],
    year: "2026",
    bg: "#111110",
    accent: "#FAFAF0",
  },
  {
    id: "veritas",
    title: "Veritas",
    description: "Web Design · Mobile App · Fintech · Escrow",
    image: "/veritas-1.png",
    liveUrl: "https://www.useveritasapp.com",
    tags: ["Fintech", "Mobile App", "Web"],
    year: "2026",
    bg: "#FEFCE8",
    accent: "#EAB308",
  },
];

interface FeaturedWorksProps {
  title?: string;
  showSeeAllButton?: boolean;
  seeAllHref?: string;
  seeAllText?: string;
  headerText?: string;
  headerClassName?: string;
  titleClassName?: string;
  buttonClassName?: string;
  headerTextClassName?: string;
  variant?: "home" | "works";
}

export default function FeaturedWorks({
  title = "Featured works",
  showSeeAllButton = true,
  seeAllHref = "/works",
  seeAllText = "See all works",
  headerText,
  titleClassName,
  headerTextClassName,
  variant = "home",
}: FeaturedWorksProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="w-full py-20 md:py-28 bg-white px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className={titleClassName || "text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-3"}
            >
              {title}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={headerTextClassName || "text-[28px] md:text-[44px] font-semibold leading-[115%] tracking-[-0.03em] text-[#2E2D2D] max-w-2xl"}
            >
              {headerText || "Building the next generation of highly impactful and converting projects."}
            </motion.h2>
          </div>

          {showSeeAllButton && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href={seeAllHref}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 border border-[#FFD0B1] text-[#FF7E29] hover:border-[#FF6602] font-medium text-sm px-7 py-3 rounded-full transition-all duration-200"
                >
                  {seeAllText}
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* Mobile see all */}
        {showSeeAllButton && (
          <div className="flex justify-center mt-12 md:hidden">
            <Link href={seeAllHref}>
              <button className="inline-flex items-center gap-2 border border-[#FFD0B1] text-[#FF7E29] font-medium text-sm px-7 py-3 rounded-full">
                {seeAllText}
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
      className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-[#F2F2F2] hover:border-[#FFE0CC] transition-all duration-500 hover:shadow-xl hover:shadow-orange-50"
    >
      {/* Image side */}
      <div
        className={`relative overflow-hidden min-h-[300px] md:min-h-[420px] flex items-center justify-center p-8 ${
          isEven ? "md:order-1" : "md:order-2"
        }`}
        style={{ backgroundColor: project.bg }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, ${project.accent}18 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={imgLoaded ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-[440px]"
          whileHover={{ scale: 1.03, rotate: 0.5 }}
        >
          <Image
            src={project.image}
            alt={`${project.title} project mockup`}
            width={600}
            height={420}
            className="w-full h-auto object-contain rounded-2xl shadow-2xl"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            onLoad={() => setImgLoaded(true)}
          />
        </motion.div>

        {/* Live badge */}
        {project.liveUrl && (
          <div className="absolute top-5 right-5 z-20">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#2E2D2D] px-3 py-1.5 rounded-full shadow-sm hover:bg-white transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
          </div>
        )}
      </div>

      {/* Content side */}
      <div
        className={`flex flex-col justify-center p-10 md:p-14 bg-white ${
          isEven ? "md:order-2" : "md:order-1"
        }`}
      >
        {/* Year + tags */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="text-[#999797] text-xs font-medium">{project.year}</span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FFF0E5] text-[#FF7E29]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-[32px] md:text-[42px] font-semibold leading-tight tracking-[-0.03em] text-[#2E2D2D] mb-3 group-hover:text-[#FF6602] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#6B6A6A] text-base leading-[165%] mb-8">
          {project.description}
        </p>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-[#FFE0CC] mb-8" />

        {/* Actions */}
        <div className="flex items-center gap-4 flex-wrap">
          <Link href={`/works/${project.id}`}>
            <motion.button
              whileHover={{ scale: 1.03, x: 3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] text-white font-semibold text-sm py-3 px-7 rounded-full"
            >
              View case study
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#FF7E29] hover:text-[#FF6602] font-medium text-sm transition-colors duration-200 group/link"
            >
              View live
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
