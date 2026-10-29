"use client";

import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FreeOffer from "@/components/FreeOffer";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "moducode",
    title: "Moducode",
    category: "UX UI Design",
    tags: ["B2B SaaS", "Talent Platform", "Web"],
    year: "2026",
    description:
      "A trust-driven hiring platform connecting global companies with Africa's best engineers. Designed to reduce hiring friction and drive consultation bookings.",
    image: "/moducode-cover.png",
    liveUrl: "https://krevops.com/",
    bg: "#F0FDF4",
    accent: "#16A34A",
  },
  {
    id: "korlodworks",
    title: "Korlod Works",
    category: "Web Design",
    tags: ["Brand Identity", "Agency Website", "UI/UX"],
    year: "2025",
    description:
      "A bold, conversion-focused website for Korlod Works, a creative agency that builds unique brand experiences through identity design, video, messaging, and web design.",
    image: "/korlod-1.jpg",
    liveUrl: "https://korlodworks.com/",
    bg: "#E8ECF5",
    accent: "#3A4A7A",
  },
  {
    id: "prayerguide",
    title: "Prayer Guide",
    category: "UI/UX Design · Flutter Development",
    tags: ["UI/UX Design", "Flutter", "Mobile App", "iOS", "Android"],
    year: "2026",
    description:
      "End-to-end UI/UX design and product design for Prayer Guide — a free daily-prayer companion app for iOS and Android. Scripture, guided prayers, a focus timer, an encrypted journal, and a prayer companion feature. Designed to measure presence, not streaks.",
    image: "/prayerguide-thumb.png",
    liveUrl: "https://prayerguide.thedigitalninjatech.com",
    bg: "#070C0B",
    accent: "#5BC2B3",
  },
  {
    id: "ourchatapp",
    title: "OurChatApp",
    category: "Brand Identity & Motion Design",
    tags: ["Brand Identity", "Motion Design", "Product Branding", "App"],
    year: "2026",
    description:
      "Complete brand identity and motion design system for OurChatApp — a Lagos-built chat and payment app where conversations become transactions. We designed the full brand system including mark, colour, typography, iconography, motion, and interface guidelines.",
    image: "/ourchatapp-4.png",
    liveUrl: "",
    bg: "#12121A",
    accent: "#F7B338",
  },
  {
    id: "ona-web",
    title: "Ọ̀nà — Website",
    category: "Web Design & Development",
    tags: ["Web Design", "Web Development", "Landing Page", "Waitlist", "Travel"],
    year: "2026",
    description:
      "Website design and development for Ọ̀nà — an all-in-one travel companion app. The site captures early-access sign-ups, communicates the product's six core features, and drives downloads on iOS and Android. Built on the brand identity we designed.",
    image: "/ona-web-1.png",
    liveUrl: "https://ona.thedigitalninjatech.com",
    bg: "#1C3D2E",
    accent: "#D4A847",
  },
  {
    id: "ona",
    title: "Ọ̀nà",
    category: "Brand Identity & Motion Design",
    tags: ["Brand Identity", "Graphic Design", "Motion Design", "Travel Brand"],
    year: "2026",
    description:
      "Complete brand identity system for Ọ̀nà, a travel brand whose name means 'way' or 'path' in Yoruba. We designed the full visual identity — mark, lockups, colour palette, typography, motion assets, and social media system.",
    image: "/ona-thumb.png",
    video: "/ona-thumb.png",
    liveUrl: "",
    bg: "#1C3D2E",
    accent: "#D4A847",
  },
  {
    id: "thazlo",
    title: "Thazlo",
    category: "Web Development",
    tags: ["Web Development", "Consumer App", "Home Services", "Design Support"],
    year: "2026",
    description:
      "Website design and development for Thazlo, a 24/7 gas refill and laundry delivery app serving households across Nigeria. Includes full dark mode and light mode — both designed from the ground up.",
    image: "/thazlo-1.png",
    liveUrl: "https://thazlo-ashy.vercel.app/",
    bg: "#FFF7ED",
    accent: "#FF6602",
  },
  {
    id: "brandface",
    category: "Web Design & Development",
    tags: ["Lead Conversion", "Landing Page", "Marketing Website"],
    year: "2026",
    description:
      "A modern, conversion-focused website for Brandface, a digital marketing agency. Designed to clearly communicate their expertise, build credibility, and generate qualified leads through strategic calls-to-action.",
    image: "/brandface-1.png",
    liveUrl: "https://brandface-eta.vercel.app",
    bg: "#111110",
    accent: "#FAFAF0",
  },
  {
    id: "zerodepression",
    title: "ZeroDepression",
    category: "UX/UI Design & Full-Stack Development",
    tags: ["UX/UI Design", "Full-Stack Development", "Mental Health", "Web App"],
    year: "2026",
    description:
      "End-to-end UX/UI design and full-stack development for ZeroDepression — a platform connecting people in emotional distress with volunteer counsellors through anonymous, real-time chat and voice calls.",
    image: "/zerodepression-4.png",
    liveUrl: "https://www.zerodepression.org",
    bg: "#F0F7FF",
    accent: "#2563EB",
  },
  {
    id: "veritas",
    category: "Web Design & Mobile App Development",
    tags: ["Fintech", "Escrow", "Mobile App", "Waitlist"],
    year: "2026",
    description:
      "Waitlist landing page design and development for Veritas, a cross-border escrow payment app built for freelancers and clients doing borderless, modern work. Mobile app development is ongoing.",
    image: "/veritas-1.png",
    liveUrl: "https://www.useveritasapp.com",
    bg: "#FEFCE8",
    accent: "#EAB308",
  },
  {
    id: "efm2026",
    title: "EFM 2026 National Convention",
    category: "Web Design & Development",
    tags: ["Web Design", "Event", "Church", "Landing Page"],
    year: "2026",
    description:
      "Convention website for the 2026 National Convention of The Evangel Faith Mission — themed 'New Things by His Spirit.' Features a live countdown, event schedule, speaker profiles, venue map with 360° view, and an embedded registration form.",
    image: "/efm2026-1.png",
    liveUrl: "https://efm2026convention.vercel.app/",
    bg: "#0A0E1A",
    accent: "#C9A84C",
  },
];

const stats = [
  { value: "10+", label: "Websites Built" },
  { value: "6+", label: "Product Designs" },
  { value: "2+", label: "Logo & Branding" },
  { value: "3+", label: "Animation Projects" },
  { value: "2+", label: "Mobile Apps" },
  { value: "20+", label: "Consultations" },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-[#F2F2F2] hover:border-[#FFE0CC] transition-all duration-500 hover:shadow-2xl hover:shadow-orange-50/60"
    >
      {/* Image panel */}
      <div
        className="md:col-span-6 lg:col-span-7 relative overflow-hidden min-h-[240px] md:min-h-[360px] lg:min-h-[500px] flex items-center justify-center p-10"
        style={{ backgroundColor: project.bg }}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle, ${project.accent}20 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={imgLoaded ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full max-w-[520px]"
          whileHover={{ scale: 1.02, rotate: 0.3 }}
        >
          {(project as any).video ? (
            <img
              src={(project as any).video}
              alt={`${project.title} animation`}
              className="w-full h-auto object-contain rounded-2xl shadow-2xl"
              onLoad={() => setImgLoaded(true)}
            />
          ) : (
          <Image
            src={project.image}
            alt={`${project.title} mockup`}
            width={700}
            height={500}
            className="w-full h-auto object-contain rounded-2xl shadow-2xl"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            onLoad={() => setImgLoaded(true)}
          />
          )}
        </motion.div>

        {/* Live pill */}
        {project.liveUrl && (
          <div className="absolute top-6 right-6 z-20">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#2E2D2D] px-3 py-1.5 rounded-full shadow hover:bg-white transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live
              <ExternalLink className="w-3 h-3 opacity-40" />
            </a>
          </div>
        )}

        {/* Index number */}
        <span className="absolute bottom-6 left-6 text-[80px] font-bold leading-none select-none opacity-10 text-[#2E2D2D]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content panel */}
      <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between p-10 md:p-14 bg-white">
        <div>
          {/* Meta */}
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <span className="text-[#FF7E29] font-semibold text-xs uppercase tracking-widest">
              {project.category}
            </span>
            <span className="text-[#D9D7D4] text-xs">·</span>
            <span className="text-[#999797] text-xs">{project.year}</span>
          </div>

          {/* Title */}
          <h2 className="text-[28px] sm:text-[34px] md:text-[44px] font-semibold leading-[108%] tracking-[-0.04em] text-[#2E2D2D] mb-5 group-hover:text-[#FF6602] transition-colors duration-300">
            {project.title}
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#F5F5F3] text-[#6B6A6A]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-[#6B6A6A] text-base md:text-lg leading-[170%] mb-10">
            {project.description}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <div className="w-full h-px bg-[#F2F2F2]" />
          <div className="flex items-center gap-4 flex-wrap">
            <Link href={`/works/${project.id}`}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] text-white font-semibold text-sm py-3.5 px-8 rounded-full"
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
                className="inline-flex items-center gap-1.5 text-[#6B6A6A] hover:text-[#FF6602] font-medium text-sm transition-colors duration-200 group/link"
              >
                Live site
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

const FILTERS = [
  { label: "All Work", value: "all" },
  { label: "Web Design", value: "web-design" },
  { label: "Web Development", value: "web-dev" },
  { label: "Mobile App", value: "mobile" },
  { label: "Brand Identity", value: "branding" },
  { label: "Motion Design", value: "motion" },
  { label: "UI/UX Design", value: "ux" },
];

const FILTER_MAP: Record<string, string[]> = {
  "web-design":  ["Web Design", "Web Design & Development", "Web Design & Mobile App Development", "Landing Page", "Marketing Website"],
  "web-dev":     ["Web Development", "Web Design & Development", "Web Design & Mobile App Development"],
  "mobile":      ["Mobile App", "Flutter", "iOS", "Android", "UI/UX Design · Flutter Development", "Web Design & Mobile App Development"],
  "branding":    ["Brand Identity", "Brand Identity & Motion Design", "Logo & Branding"],
  "motion":      ["Motion Design", "Brand Identity & Motion Design", "Animation"],
  "ux":          ["UX UI Design", "UI/UX Design", "UI/UX Design · Flutter Development", "Product Design"],
};

function matchesFilter(project: typeof projects[0], filter: string): boolean {
  if (filter === "all") return true;
  const keywords = FILTER_MAP[filter] || [];
  const haystack = [project.category, ...project.tags].join(" ");
  return keywords.some((kw) => haystack.toLowerCase().includes(kw.toLowerCase()));
}

function FilterBar() {
  const [active, setActive] = useFilter();
  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-0.5">
      {FILTERS.map((f) => (
        <motion.button
          key={f.value}
          onClick={() => setActive(f.value)}
          whileTap={{ scale: 0.95 }}
          className={`shrink-0 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
            active === f.value
              ? "bg-[#FF6602] text-white shadow-md shadow-orange-200/60"
              : "bg-[#F5F5F3] text-[#6B6A6A] hover:bg-[#FFE0CC] hover:text-[#FF6602]"
          }`}
        >
          {f.label}
          {active === f.value && f.value !== "all" && (
            <span className="ml-1.5 opacity-80">
              ({projects.filter((p) => matchesFilter(p, f.value)).length})
            </span>
          )}
        </motion.button>
      ))}
    </div>
  );
}

// Shared filter state via context
import { createContext, useContext } from "react";
const FilterContext = createContext<[string, (v: string) => void]>(["all", () => {}]);
function useFilter() { return useContext(FilterContext); }

function FilteredProjects() {
  const [active] = useFilter();
  const filtered = projects.filter((p) => matchesFilter(p, active));

  return (
    <div>
      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-[#999797] text-lg">No projects in this category yet.</p>
          <p className="text-[#C4C2C0] text-sm mt-2">Check back soon — we are always shipping.</p>
        </div>
      ) : (
        <motion.div layout className="space-y-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

export default function WorksPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <FilterContext.Provider value={[activeFilter, setActiveFilter]}>
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section ref={heroRef} className="pt-36 pb-20 px-4 bg-[#FAFAFA] border-b border-[#F2F2F2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-5"
              >
                Selected Works
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-[28px] sm:text-[36px] md:text-[52px] lg:text-[64px] font-semibold leading-[108%] tracking-[-0.04em] text-[#2E2D2D]"
              >
                Building the next generation of{" "}
                <span className="text-[#FF7E29] italic">impactful</span> digital products.
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="lg:pb-2"
            >
              <p className="text-[#6B6A6A] text-lg leading-[170%] mb-8">
                Every project we take on is a commitment to quality, craft, and measurable results. Here is a selection of the work we are proud of.
              </p>
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] text-white font-semibold text-sm py-3.5 px-8 rounded-full"
                >
                  Book a 15min call
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mt-16 pt-12 border-t border-[#F2F2F2]">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="text-center md:text-left"
              >
                <p className="text-3xl font-bold text-[#FF7E29] mb-1">{s.value}</p>
                <p className="text-[#999797] text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <section className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-md border-b border-[#F2F2F2] px-4 py-3">
        <div className="max-w-6xl mx-auto">
          <FilterBar />
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FilteredProjects />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[40px] overflow-hidden text-center px-8 py-20"
            style={{ background: "linear-gradient(135deg, #FF6602 0%, #FD3600 50%, #CC2800 100%)" }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-52 h-52 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            <div className="relative z-10 space-y-5">
              <p className="text-white/75 font-semibold text-sm uppercase tracking-widest">
                Want to be next?
              </p>
              <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight tracking-[-0.03em]">
                Let us build something great together.
              </h2>
              <p className="text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
                Tell us about your project and let us show you how we turn ideas into products that actually work.
              </p>
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-white text-[#FD3600] font-semibold text-lg py-4 px-10 rounded-full hover:bg-[#FFF0E5] transition-colors duration-200 mt-2"
                >
                  Book a 15min call
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <FreeOffer />
    </div>
    </FilterContext.Provider>
  );
}
