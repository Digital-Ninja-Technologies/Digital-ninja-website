"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

const tags = ["Global Clients", "10+ Industries"];

export default function AboutHero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-[#0A0E1A] px-4 pt-28 pb-20"
    >
      {/* ── Ambient background glows ── */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,102,2,0.12) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(253,54,0,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* ── Eyebrow tags ── */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-semibold uppercase tracking-widest text-[#FF7E29] border border-[#FF7E29]/30 bg-[#FF7E29]/8 px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* ── Main headline ── */}
        <div className="mb-10 max-w-4xl">
          <motion.h1
            className="font-semibold leading-[108%] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            We don't just{" "}
            <span className="italic font-semibold text-[#FF7E29]">build</span>
            {" "}digital products.
            <br className="hidden md:block" />
            We build ones that{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white">actually work.</span>
              <motion.span
                className="absolute bottom-1 left-0 h-[3px] bg-gradient-to-r from-[#FF6602] to-[#FF7E29] rounded-full"
                initial={{ width: "0%" }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
              />
            </span>
          </motion.h1>
        </div>

        {/* ── Two column: subtext + image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: sub-copy + CTA */}
          <div className="space-y-8">
            <motion.p
              className="text-[#8A8888] text-lg md:text-xl leading-[170%]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Digital Ninja Technologies is a full service digital agency in{" "}
              <span className="text-white font-medium">Lagos, Nigeria</span>. Designing and
              building software, apps, and web products for startups, SMEs, and global businesses
              that are tired of agencies that disappear.
            </motion.p>

            {/* Divider line */}
            <motion.div
              className="w-16 h-px bg-[#FF7E29]"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            />

            <motion.p
              className="text-[#6B6A6A] text-base leading-[170%]"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              We're designers, engineers, and strategists who care about one thing above
              everything else. Delivering a product you're proud to put your name on.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  onClick={() => window.location.href = "/booking"}
                  className="bg-gradient-to-r from-[#FF6602] to-[#FF7E29] hover:from-[#FF8A3D] hover:to-[#FFAA66] text-white rounded-full text-base font-semibold py-6 px-8 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10 flex items-center gap-2">
                    Book a 15min call
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </motion.div>

              <motion.a
                href="/works"
                className="text-[#8A8888] hover:text-white text-base font-medium underline-offset-4 hover:underline transition-colors duration-200"
                whileHover={{ x: 3 }}
              >
                See our work →
              </motion.a>
            </motion.div>
          </div>

          {/* Right: image with frame */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            {/* Decorative frame offset */}
            <div className="absolute -inset-3 rounded-3xl border border-[#FF7E29]/20 pointer-events-none" />
            <div className="absolute -inset-6 rounded-3xl border border-[#FF7E29]/08 pointer-events-none" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden"
            >
              {/* Orange glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6602]/20 to-transparent rounded-2xl pointer-events-none z-10" />

              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={imageLoaded ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/about-hero.svg"
                  alt="Digital Ninja Technologies team. Designers and developers"
                  width={600}
                  height={420}
                  className="w-full h-auto rounded-2xl"
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
              </motion.div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-xl shadow-black/20 flex items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ y: -3 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6602] to-[#FD3600] flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">100%</span>
              </div>
              <div>
                <p className="text-[#2E2D2D] font-semibold text-sm leading-tight">On-time delivery</p>
                <p className="text-[#8A8888] text-xs">Every project, every time</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
