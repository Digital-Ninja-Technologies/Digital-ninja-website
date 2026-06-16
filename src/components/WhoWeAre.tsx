"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const problems = [
  {
    icon: "💸",
    title: "You paid an agency and they vanished.",
    body: "You transferred money, got a few mockups — then silence. No updates, no accountability, no product. It happens far too often, and it should never happen to you again.",
  },
  {
    icon: "🐌",
    title: "Your idea has been 'in progress' for months.",
    body: "You had a vision. You hired someone. Six months later you're still waiting. Meanwhile, your competitors are live and growing. Speed matters — and most teams don't have it.",
  },
  {
    icon: "🤷",
    title: "You don't know what you're paying for.",
    body: "Vague proposals. Unexplained delays. Deliverables that don't match what was promised. You deserve complete clarity — on every stage, every cost, every decision.",
  },
  {
    icon: "📉",
    title: "Your website or app isn't converting.",
    body: "You have traffic but no leads. Downloads but no retention. The product exists, but it's not doing its job. Great design and smart UX fix this — and that's exactly our work.",
  },
];

const differentiators = [
  "Fixed timelines — we commit and we deliver",
  "Transparent pricing — no hidden costs, ever",
  "Direct communication — no middlemen or account managers",
  "Post-launch support — we don't disappear after go-live",
  "Global standards, deep African market understanding",
];

const stats = [
  { value: "100%", label: "Project delivery rate" },
  { value: "48hr", label: "Average kickoff time" },
  { value: "10+", label: "Industries served" },
  { value: "🌍", label: "Nigeria · Africa · Global" },
];

export default function WhoWeAre() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay },
  });

  return (
    <section className="w-full bg-[#0A0E1A] text-white py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Eyebrow ── */}
        <motion.p {...fadeUp(0)} className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-6">
          Who We Are
        </motion.p>

        {/* ── CEO Statement + Stats ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">

          {/* Left: CEO voice */}
          <div>
            <motion.h2 {...fadeUp(0.1)} className="text-3xl md:text-[44px] font-semibold leading-[115%] tracking-[-0.03em] text-white mb-10">
              We built Digital Ninja because{" "}
              <span className="text-[#FF7E29]">great businesses deserve better digital partners.</span>
            </motion.h2>

            <motion.div {...fadeUp(0.2)} className="border-l-4 border-[#FF7E29] pl-6 space-y-5 mb-10">
              <p className="text-[#B0AFAF] text-lg leading-[175%]">
                "I've spoken to hundreds of founders, executives, and business owners — in Lagos, Abuja, London, and beyond. The story is almost always the same.
              </p>
              <p className="text-[#B0AFAF] text-lg leading-[175%]">
                They hired a developer or an agency, got burned, lost money, lost months, and lost faith. They came back to square one — except now they're more cautious, more frustrated, and further behind.
              </p>
              <p className="text-[#B0AFAF] text-lg leading-[175%]">
                That frustration is exactly why Digital Ninja Technologies exists. We don't just write code or push pixels. We become your digital execution partner — the team that shows up, stays accountable, and delivers what we promise.
              </p>
              <p className="text-white text-lg leading-[175%] font-medium">
                Whether you're a startup founder in Lagos validating your MVP, a logistics company in Abuja needing a custom platform, or a foreign business seeking a reliable tech partner in Africa — we were built specifically for you."
              </p>
            </motion.div>

            {/* CEO Signature */}
            <motion.div {...fadeUp(0.3)} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6602] to-[#FD3600] flex items-center justify-center text-white font-bold text-base shrink-0">
                IO
              </div>
              <div>
                <p className="text-white font-semibold">Ifeoluwa Onifade</p>
                <p className="text-[#6B6A6A] text-sm">Founder & CEO, Digital Ninja Technologies</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Stats + Differentiators */}
          <div className="space-y-5 lg:pt-4">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.55, delay: 0.25 + i * 0.08 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <p className="text-3xl font-bold text-[#FF7E29] mb-1">{s.value}</p>
                  <p className="text-[#6B6A6A] text-sm leading-tight">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Differentiators */}
            <motion.div {...fadeUp(0.4)} className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <p className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
                What sets us apart
              </p>
              <ul className="space-y-4">
                {differentiators.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-4 h-4 rounded-full bg-[#FF7E29]/15 border border-[#FF7E29] flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7E29]" />
                    </span>
                    <p className="text-[#B0AFAF] text-[15px] leading-snug">{d}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* ── Problem section ── */}
        <motion.p {...fadeUp(0.35)} className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-3">
          Sound familiar?
        </motion.p>
        <motion.h3 {...fadeUp(0.4)} className="text-2xl md:text-[36px] font-semibold tracking-[-0.03em] leading-tight text-white mb-10 max-w-2xl">
          These are the real problems we solve — every single day.
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 + i * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(255,126,41,0.4)" }}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 transition-all duration-300 cursor-default"
            >
              <span className="text-3xl mb-4 block">{p.icon}</span>
              <h4 className="text-white font-semibold text-lg mb-3 leading-snug">{p.title}</h4>
              <p className="text-[#6B6A6A] text-[15px] leading-[170%]">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div {...fadeUp(0.85)} className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 10px 32px rgba(255,102,2,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] text-white font-semibold text-base py-4 px-10 rounded-full transition-all duration-300"
            >
              Let's build together
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </Link>
          <Link href="/works">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 text-white border border-white/20 hover:border-[#FF7E29]/60 font-medium text-base py-4 px-10 rounded-full transition-all duration-300"
            >
              See our work
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
