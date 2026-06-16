"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/2348145865720?text=Hello%20digitalNinja%2C%20I%20will%20love%20to%20refer%20a%20client%20to%20you.";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: "🚀",
    title: "Custom Software Development",
    desc: "Build scalable software tailored to business needs.",
  },
  {
    icon: "🌐",
    title: "Website Design & Development",
    desc: "Corporate websites, landing pages, portals, and web applications.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "iOS and Android applications with modern user experiences.",
  },
  {
    icon: "🤖",
    title: "AI Solutions & Automation",
    desc: "AI-powered tools, chatbots, workflow automation, and business intelligence.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "User-centered interfaces that improve engagement and conversions.",
  },
  {
    icon: "⚡",
    title: "MVP Development",
    desc: "Launch your startup idea quickly and validate your market.",
  },
];

const perfectClients = [
  "Startups",
  "SMEs & Enterprises",
  "Founders",
  "Schools & EdTechs",
  "Logistics Companies",
  "Healthcare Organizations",
  "NGOs",
  "Government Agencies",
];

const steps = [
  {
    number: "01",
    title: "Refer",
    desc: "Introduce us to a potential client via our referral form or directly.",
  },
  {
    number: "02",
    title: "We Close",
    desc: "We handle discovery, proposals, and all project execution end-to-end.",
  },
  {
    number: "03",
    title: "You Earn",
    desc: "Receive 10% commission when the client successfully signs and pays.",
  },
];

const earnings = [
  { project: "₦500,000", projectUsd: "~$300", commission: "₦50,000", commissionUsd: "~$30" },
  { project: "₦1,000,000", projectUsd: "~$600", commission: "₦100,000", commissionUsd: "~$60" },
  { project: "₦5,000,000", projectUsd: "~$3,000", commission: "₦500,000", commissionUsd: "~$300" },
];

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.25, 0, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ReferPage() {

  return (
    <main className="bg-white text-[#2E2D2D] overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-28 pb-20 overflow-hidden">
        {/* Ambient blobs */}
        <motion.div
          className="absolute top-24 left-8 w-48 h-48 bg-[#FF6602]/10 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-8 w-36 h-36 bg-[#FD3600]/10 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <Section className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            className="inline-block text-[#FF7E29] font-semibold text-sm uppercase tracking-widest"
          >
            Referral Programme
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-semibold leading-[115%] tracking-[-0.03em] text-[#2E2D2D]"
          >
            Refer Clients.{" "}
            <span className="text-[#FD3600]">Earn 10% Commission.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-[#4D4C4C] text-lg md:text-xl leading-[160%] max-w-2xl mx-auto"
          >
            Refer businesses, startups, founders, or organizations that need
            digital solutions and earn 10% commission when they sign a project
            with us.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="pt-2">
            <motion.button
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] hover:from-[#FF8A3D] hover:to-[#FFAA66] text-white font-medium text-lg py-4 px-10 rounded-full relative overflow-hidden group transition-all duration-300"
              whileHover={{ scale: 1.04, boxShadow: "0 10px 32px rgba(255,102,2,0.28)" }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">Start Referring Today</span>
              <ArrowRight className="h-5 w-5 relative z-10" />
            </motion.button>
          </motion.div>
        </Section>

        {/* ── 3D BADGE ────────────────────────────────────────────────────── */}
        <motion.div
          className="relative mt-16 mx-auto"
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.25, 0, 1] }}
        >
          <motion.div
            animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF6602] to-[#FD3600] blur-2xl opacity-30 scale-110" />

            {/* Badge body */}
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full flex flex-col items-center justify-center text-center px-6"
              style={{
                background:
                  "radial-gradient(ellipse at 35% 30%, #FF8A3D 0%, #FF6602 45%, #CC3D00 100%)",
                boxShadow:
                  "0 8px 0 #9A2200, 0 12px 0 #7A1A00, 0 20px 40px rgba(255,102,2,0.45), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -2px 0 rgba(0,0,0,0.15)",
              }}
            >
              {/* Inner highlight */}
              <div className="absolute top-4 left-8 right-8 h-10 bg-white/15 rounded-full blur-sm" />

              <p className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-1">
                Earn
              </p>
              <p className="text-white text-5xl md:text-6xl font-bold leading-none drop-shadow">
                10%
              </p>
              <p className="text-white/95 text-sm font-semibold mt-2 leading-tight">
                On Every Successful
                <br />
                Referral
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── POTENTIAL EARNINGS ───────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#FFF8F3]">
        <div className="max-w-5xl mx-auto">
          <Section className="text-center mb-12 space-y-3">
            <motion.span
              variants={fadeUp}
              className="inline-block text-[#FF7E29] font-semibold text-sm uppercase tracking-widest"
            >
              Potential Earnings
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]"
            >
              See what your referrals are worth
            </motion.h2>
          </Section>

          <Section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {earnings.map((e, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(255,102,2,0.14)" }}
                className="bg-white rounded-3xl border border-[#FFE0CC] p-8 text-center transition-all duration-300 cursor-default"
              >
                <p className="text-[#999797] text-sm font-medium mb-1 uppercase tracking-wider">
                  Project Value
                </p>
                <p className="text-[#2E2D2D] text-2xl font-bold">
                  {e.project}
                </p>
                <p className="text-[#999797] text-xs font-medium mb-5">{e.projectUsd}</p>
                <div className="w-full h-px bg-[#FFE0CC] mb-5" />
                <p className="text-[#FF7E29] text-sm font-medium mb-1 uppercase tracking-wider">
                  Your Commission
                </p>
                <p className="text-[#FD3600] text-3xl font-bold">
                  {e.commission}
                </p>
                <p className="text-[#FF7E29]/70 text-xs font-medium mt-1">{e.commissionUsd}</p>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Section className="mb-14 space-y-3">
            <motion.span
              variants={fadeUp}
              className="inline-block text-[#FF7E29] font-semibold text-sm uppercase tracking-widest"
            >
              What We Build
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] max-w-xl"
            >
              Services We Offer
            </motion.h2>
          </Section>

          <Section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(255,102,2,0.10)" }}
                className="bg-white border border-[#F2F2F2] rounded-3xl p-8 group transition-all duration-300 cursor-default"
              >
                <span className="text-4xl mb-5 block">{s.icon}</span>
                <h3 className="text-[#2E2D2D] font-semibold text-lg mb-2 group-hover:text-[#FD3600] transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="text-[#999797] text-[15px] leading-[160%]">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* ── PERFECT CLIENTS ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#FFF8F3]">
        <div className="max-w-5xl mx-auto">
          <Section className="mb-12 space-y-3">
            <motion.span
              variants={fadeUp}
              className="inline-block text-[#FF7E29] font-semibold text-sm uppercase tracking-widest"
            >
              Who To Refer
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]"
            >
              Perfect Clients To Refer
            </motion.h2>
          </Section>

          <Section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {perfectClients.map((client, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 bg-white border border-[#FFE0CC] rounded-2xl px-5 py-4 transition-all duration-200"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#FF6602] to-[#FD3600] flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </span>
                <span className="text-[#2E2D2D] font-medium text-sm leading-tight">
                  {client}
                </span>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Section className="mb-14 space-y-3">
            <motion.span
              variants={fadeUp}
              className="inline-block text-[#FF7E29] font-semibold text-sm uppercase tracking-widest"
            >
              The Process
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]"
            >
              How It Works
            </motion.h2>
          </Section>

          <Section className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-[#FF6602]/20 via-[#FF6602]/60 to-[#FF6602]/20" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step number circle */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative"
                    style={{
                      background:
                        "radial-gradient(ellipse at 35% 30%, #FF8A3D 0%, #FF6602 50%, #CC3D00 100%)",
                      boxShadow:
                        "0 4px 0 #9A2200, 0 8px 20px rgba(255,102,2,0.35)",
                    }}
                  >
                    <span className="text-white font-bold text-xl">
                      {step.number}
                    </span>
                  </motion.div>
                  <h3 className="text-[#2E2D2D] font-semibold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#999797] text-[15px] leading-[160%] max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
            className="relative rounded-[40px] overflow-hidden text-center px-8 py-20"
            style={{
              background:
                "linear-gradient(135deg, #FF6602 0%, #FD3600 50%, #CC2800 100%)",
            }}
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4" />

            <div className="relative z-10 space-y-6">
              <p className="text-white/80 font-semibold text-sm uppercase tracking-widest">
                Your Network. Our Expertise. Shared Success.
              </p>
              <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight tracking-[-0.03em]">
                Start Referring Today
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
                Every introduction you make could earn you serious commission —
                with zero upfront cost or commitment.
              </p>
              <motion.button
                onClick={() => window.open(WHATSAPP_URL, "_blank")}
                className="inline-flex items-center gap-2 bg-white text-[#FD3600] font-semibold text-lg py-4 px-10 rounded-full hover:bg-[#FFF0E5] transition-colors duration-200 group"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Refer a Client
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
