"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    short: "Websites that convert",
    emoji: "🌐",
    color: "#FF6602",
    light: "#FFF0E5",
    description:
      "We craft sleek, responsive, high performing websites tailored to your brand vision and business goals. From landing pages to full scale web platforms that turn visitors into customers.",
    outcomes: ["Higher conversion rates", "Faster load times", "Mobile first design", "SEO optimised code"],
    tools: ["Next.js", "React", "Tailwind", "Framer"],
  },
  {
    number: "02",
    title: "Mobile App Development",
    short: "Apps users keep coming back to",
    emoji: "📱",
    color: "#FF7E29",
    light: "#FFF4EC",
    description:
      "From concept to launch, we design and build intuitive mobile apps for iOS and Android that keep users engaged through beautiful interfaces backed by solid engineering.",
    outcomes: ["iOS & Android", "Smooth UX flows", "Push notifications", "App Store ready"],
    tools: ["Flutter", "React Native", "Firebase", "Swift"],
  },
  {
    number: "03",
    title: "No Code & Low Code Solutions",
    short: "Ship fast. Scale smart.",
    emoji: "⚡",
    color: "#FD3600",
    light: "#FFF0EE",
    description:
      "Need to move fast? We leverage no code and low code platforms to launch functional MVPs and internal tools in record time, without sacrificing quality or scalability.",
    outcomes: ["Faster time to market", "Lower build cost", "Easy to manage", "MVP in weeks"],
    tools: ["Webflow", "Framer", "Shopify", "WordPress"],
  },
  {
    number: "04",
    title: "Custom Software Development",
    short: "Built for your exact needs",
    emoji: "🛠️",
    color: "#FD5527",
    light: "#FFF1EE",
    description:
      "Whether it is a complex SaaS product or internal enterprise tool, our team delivers scalable, secure, and robust software solutions tailored to your unique business challenges.",
    outcomes: ["Scalable architecture", "Secure by design", "API integrations", "Enterprise ready"],
    tools: ["Node.js", "Python", "PostgreSQL", "AWS"],
  },
  {
    number: "05",
    title: "Game UI & Development",
    short: "Immersive digital experiences",
    emoji: "🎮",
    color: "#FFA501",
    light: "#FFF8EC",
    description:
      "We bring games to life with immersive interfaces and smooth performance. From casual games to rich storytelling experiences, we design and build cross platform games that captivate.",
    outcomes: ["Cross platform", "Immersive UI", "Smooth performance", "Engaging gameplay"],
    tools: ["Unity", "Godot", "WebGL", "Three.js"],
  },
];

export default function WhatWeDo() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const displayed = active !== null ? active : hovered;

  return (
    <section ref={ref} className="w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-medium text-[18px] leading-[120%] tracking-[-0.03em] text-[#FF7E29]">
              WHAT WE DO
            </p>
          </motion.div>
          <motion.div
            className="md:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-semibold text-[28px] md:text-[48px] leading-[115%] tracking-[-0.03em] text-[#2E2D2D] mb-6">
              Empowering brands and startups with impactful digital solutions.
            </h2>
            <p className="font-medium text-[17px] md:text-[19px] leading-[160%] tracking-[-0.02em] text-[#6B6A6A]">
              At{" "}
              <span className="text-[#FF6602] font-semibold">Digital Ninja Technologies</span>
              , we bring your digital ideas to life with precision, creativity, and cutting edge
              technology built to drive real business results.
            </p>
          </motion.div>
        </div>

        {/* ── Interactive service list ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* Left: service rows */}
          <div className="space-y-1">
            {services.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActive(active === i ? null : i)}
                className="group relative cursor-pointer rounded-2xl transition-all duration-300"
                style={{
                  backgroundColor:
                    displayed === i ? s.light : "transparent",
                  padding: displayed === i ? "1.25rem 1.5rem" : "1rem 1.5rem",
                }}
              >
                <div className="flex items-center gap-5">
                  {/* Number */}
                  <span
                    className="text-xs font-bold w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                    style={
                      displayed === i
                        ? { backgroundColor: s.color, color: "#fff" }
                        : { backgroundColor: "#F2F0EE", color: "#999797" }
                    }
                  >
                    {s.number}
                  </span>

                  {/* Emoji */}
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-125">
                    {s.emoji}
                  </span>

                  {/* Title + short */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-semibold text-lg leading-tight tracking-[-0.02em] transition-colors duration-300"
                      style={{ color: displayed === i ? s.color : "#2E2D2D" }}
                    >
                      {s.title}
                    </p>
                    <p className="text-sm text-[#999797] mt-0.5">{s.short}</p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{ rotate: displayed === i ? 45 : 0, opacity: displayed === i ? 1 : 0.3 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ArrowUpRight
                      className="w-5 h-5 transition-colors duration-300"
                      style={{ color: displayed === i ? s.color : "#C8C7C7" }}
                    />
                  </motion.div>
                </div>

                {/* Mobile expand (shows on small screens) */}
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden lg:hidden"
                    >
                      <div className="pt-4 pb-2">
                        <p className="text-[#4D4C4C] text-[15px] leading-[170%] mb-4">
                          {s.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {s.outcomes.map((o) => (
                            <div key={o} className="flex items-center gap-2">
                              <span
                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ backgroundColor: s.color }}
                              />
                              <span className="text-xs text-[#4D4C4C]">{o}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {s.tools.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-semibold px-3 py-1 rounded-full"
                              style={{ backgroundColor: s.color + "18", color: s.color }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active left border */}
                {displayed === i && (
                  <motion.div
                    layoutId="serviceBorder"
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                    style={{ backgroundColor: s.color }}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right: detail panel. Desktop only */}
          <div className="hidden lg:block sticky top-24">
            <AnimatePresence mode="wait">
              {displayed !== null ? (
                <motion.div
                  key={displayed}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-3xl p-10"
                  style={{
                    backgroundColor: services[displayed].light,
                    border: `2px solid ${services[displayed].color}25`,
                  }}
                >
                  {/* Big emoji */}
                  <motion.div
                    initial={{ scale: 0.5, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="text-6xl mb-6 block"
                  >
                    {services[displayed].emoji}
                  </motion.div>

                  {/* Number + title */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: services[displayed].color,
                        color: "#fff",
                      }}
                    >
                      {services[displayed].number}
                    </span>
                    <p
                      className="text-sm font-semibold uppercase tracking-widest"
                      style={{ color: services[displayed].color }}
                    >
                      {services[displayed].short}
                    </p>
                  </div>

                  <h3
                    className="text-2xl md:text-[32px] font-semibold leading-tight tracking-[-0.03em] mb-5"
                    style={{ color: services[displayed].color }}
                  >
                    {services[displayed].title}
                  </h3>

                  <p className="text-[#4D4C4C] text-base leading-[175%] mb-8">
                    {services[displayed].description}
                  </p>

                  {/* Outcomes */}
                  <div className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#999797] mb-4">
                      What you get
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {services[displayed].outcomes.map((o, i) => (
                        <motion.div
                          key={o}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="flex items-center gap-2"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: services[displayed].color }}
                          />
                          <span className="text-sm text-[#4D4C4C]">{o}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#999797] mb-3">
                      Tech stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {services[displayed].tools.map((t, i) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          className="text-sm font-semibold px-4 py-1.5 rounded-full"
                          style={{
                            backgroundColor: services[displayed].color + "18",
                            color: services[displayed].color,
                          }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href="/booking">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 text-white font-semibold text-sm py-3 px-7 rounded-full transition-all duration-200"
                      style={{ backgroundColor: services[displayed].color }}
                    >
                      Book a 15min call
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-3xl border-2 border-dashed border-[#FFE0CC] p-10 flex flex-col items-center justify-center text-center min-h-[280px] md:min-h-[420px]"
                >
                  <div className="text-5xl mb-5">👆</div>
                  <p className="text-[#C8C7C7] font-medium text-lg">
                    Hover or tap a service to explore
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl border border-[#FFE0CC] bg-[#FFF8F3]"
        >
          <div>
            <p className="font-semibold text-xl text-[#2E2D2D] mb-1">
              Not sure which service you need?
            </p>
            <p className="text-[#6B6A6A] text-[15px]">
              Tell us your goal and we'll figure out the best approach together.
            </p>
          </div>
          <Link href="/booking" className="shrink-0">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(255,102,2,0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] text-white font-semibold text-base py-4 px-9 rounded-full transition-all duration-300"
            >
              Book a 15min call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
