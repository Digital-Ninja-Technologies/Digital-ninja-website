"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageSquare, Zap, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const CAL_URL = "https://cal.com/the-digital-ninja-technologies-fucsfq/15min";

const perks = [
  {
    icon: Clock,
    title: "Only 15 minutes",
    desc: "Quick, focused, and respectful of your time.",
  },
  {
    icon: MessageSquare,
    title: "No pressure, no pitch",
    desc: "Just an honest conversation about what you need.",
  },
  {
    icon: Zap,
    title: "Walk away with clarity",
    desc: "You will know exactly how we can help and what it costs.",
  },
];

const goodFor = [
  "Launching a new product or startup",
  "Redesigning your existing website or app",
  "Building a custom software solution",
  "Getting a second opinion on your tech stack",
  "Exploring AI tools for your business",
  "Figuring out where to start",
];

export default function BookingClient() {
  const calRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://asset.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).Cal !== "undefined") {
        (window as any).Cal("init", {
          origin: "https://cal.com",
        });
        (window as any).Cal("inline", {
          elementOrSelector: "#cal-embed",
          calLink: "the-digital-ninja-technologies-fucsfq/15min",
          layout: "month_view",
        });
        (window as any).Cal("ui", {
          theme: "light",
          styles: {
            branding: { brandColor: "#FF6602" },
          },
          hideEventTypeDetails: false,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      {/* Back link */}
      <div className="absolute top-24 left-6 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#6B6A6A] hover:text-white text-sm font-medium transition-colors duration-200"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back home
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* ── LEFT PANEL ─────────────────────────────────────────────── */}
        <div className="relative flex flex-col justify-center px-8 md:px-16 py-32 overflow-hidden">

          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(255,102,2,0.1) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-lg">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#FF6602]/10 border border-[#FF6602]/30 text-[#FF7E29] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6602] animate-pulse" />
              Free discovery call
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-semibold leading-[112%] tracking-[-0.04em] text-white mb-6"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Let's talk about
              {" "}<span className="text-[#FF7E29]">your project.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#8A8888] text-lg leading-[170%] mb-10"
            >
              Pick a time that works for you. We will spend 15 minutes understanding your goals
              and give you an honest view of how we can help. No jargon, no pressure.
            </motion.p>

            {/* Perks */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              {perks.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FF6602]/10 border border-[#FF6602]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <p.icon className="w-4 h-4 text-[#FF7E29]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[15px] leading-tight">{p.title}</p>
                    <p className="text-[#6B6A6A] text-sm mt-0.5">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Good for list */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#999797] mb-4">
                This call is great for
              </p>
              <ul className="space-y-2.5">
                {goodFor.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#FF7E29] shrink-0" />
                    <span className="text-[#B0AFAF] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Email fallback */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-[#6B6A6A] text-sm mt-8"
            >
              Prefer email?{" "}
              <a
                href="mailto:Info@thedigitalninjatech.com"
                className="text-[#FF7E29] hover:underline font-medium"
              >
                Info@thedigitalninjatech.com
              </a>
            </motion.p>
          </div>
        </div>

        {/* ── RIGHT PANEL: Cal.com embed ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-white flex flex-col"
        >
          {/* Top accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#FF6602] via-[#FF7E29] to-[#FFA501]" />

          <div className="flex-1 flex flex-col">
            {/* Cal embed header */}
            <div className="px-8 pt-8 pb-4 border-b border-[#F2F2F2]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6602] to-[#FD3600] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DN</span>
                </div>
                <div>
                  <p className="font-semibold text-[#2E2D2D] text-sm">Digital Ninja Technologies</p>
                  <p className="text-[#999797] text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 15 minute call
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Cal.com calendar */}
            <div
              id="cal-embed"
              ref={calRef}
              className="flex-1 min-h-[600px] lg:min-h-0"
              style={{ height: "100%" }}
            />

            {/* Fallback button if embed fails */}
            <div className="px-8 py-4 border-t border-[#F2F2F2] text-center">
              <p className="text-[#999797] text-xs mb-2">
                Calendar not loading?
              </p>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] text-white font-semibold text-sm py-3 px-7 rounded-full hover:opacity-90 transition-opacity"
              >
                Open in Cal.com
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
