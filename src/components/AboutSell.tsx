"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const painPoints = [
  {
    icon: "🔥",
    problem: "Tired of agencies that promise the world, deliver nothing?",
    solution:
      "We operate on fixed scopes, clear milestones, and real accountability. You see progress weekly — not after you've chased three unanswered emails.",
  },
  {
    icon: "⏱️",
    problem: "Can't afford to wait six months for a product?",
    solution:
      "Our lean build process gets you from brief to live product faster than any traditional agency. We've taken startups from zero to launch in under 8 weeks.",
  },
  {
    icon: "💰",
    problem: "Blown your budget on a product that doesn't convert?",
    solution:
      "Every design decision we make is tied to a business outcome — more leads, lower bounce rate, higher retention. We build for results, not portfolios.",
  },
  {
    icon: "🌍",
    problem: "Need a team that understands both African and global markets?",
    solution:
      "We work with founders in Lagos, Abuja, London, Toronto, and Dubai. We understand the nuances of building for Africa — and the standards expected globally.",
  },
];

const values = [
  {
    number: "01",
    title: "Accountability over excuses",
    desc: "When we commit to a deadline, we keep it. If something changes, you hear it from us first — not after you've asked five times.",
  },
  {
    number: "02",
    title: "Clarity at every stage",
    desc: "No jargon. No vague proposals. You get a clear scope, a clear timeline, and a clear price — before work begins.",
  },
  {
    number: "03",
    title: "Design that sells",
    desc: "Beautiful isn't enough. Every interface we design is tested against your business goals. We measure success in conversions, retention, and growth.",
  },
  {
    number: "04",
    title: "We stay after launch",
    desc: "Most agencies disappear the moment the project closes. We offer post-launch support, iteration, and growth partnerships for clients who want a long-term partner.",
  },
];

const services = [
  { label: "Custom Software Development", href: "/contact" },
  { label: "Website Design & Development", href: "/contact" },
  { label: "Mobile App Development", href: "/contact" },
  { label: "AI Solutions & Automation", href: "/contact" },
  { label: "UI/UX Design", href: "/contact" },
  { label: "MVP Development", href: "/contact" },
];

const stats = [
  { value: "8 wks", label: "Average startup-to-launch timeline" },
  { value: "100%", label: "On-time delivery rate" },
  { value: "10+", label: "Industries served" },
  { value: "₦0", label: "Hidden fees — ever" },
];

// ─── Animation helpers ─────────────────────────────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutSell() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <div className="bg-white">

      {/* ── SECTION 1: Who we really are ─────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#0A0E1A]">
        <div className="max-w-6xl mx-auto" ref={sectionRef}>
          <FadeUp>
            <p className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-4">
              The honest truth
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-[44px] font-semibold leading-[115%] tracking-[-0.03em] text-white">
                Most digital agencies in Nigeria are{" "}
                <span className="text-[#FF7E29]">selling you a service.</span>
                <br className="hidden md:block" />
                We're offering you{" "}
                <span className="text-[#FF7E29]">a result.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2} className="space-y-6">
              <p className="text-[#B0AFAF] text-lg leading-[175%]">
                Digital Ninja Technologies is a full-service digital agency headquartered in
                Lagos, Nigeria. We design and build software, mobile apps, websites, and AI
                tools — but that's not what makes us different.
              </p>
              <p className="text-[#B0AFAF] text-lg leading-[175%]">
                What makes us different is that we treat every project like it's our own
                business. We don't just build what you ask for. We ask the harder questions:
                Who is this for? What do they need to see before they buy? Where are users
                dropping off? What would make this go from good to great?
              </p>
              <p className="text-white text-lg leading-[175%] font-medium">
                We are the team you hire when you're done gambling with your time and money —
                and you're ready to build something that actually works.
              </p>
            </FadeUp>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-bold text-[#FF7E29] mb-1">{s.value}</p>
                <p className="text-[#6B6A6A] text-sm leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Pain points + solutions ───────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-4">
              We hear this every day
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl md:text-[40px] font-semibold tracking-[-0.03em] leading-tight text-[#2E2D2D] mb-14 max-w-2xl">
              Real problems. Real solutions.
              <span className="text-[#FF7E29]"> No runaround.</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((p, i) => (
              <FadeUp key={i} delay={0.1 + i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(255,126,41,0.5)" }}
                  className="border-2 border-[#F2F2F2] rounded-3xl p-8 transition-all duration-300 cursor-default h-full"
                >
                  <span className="text-3xl mb-5 block">{p.icon}</span>
                  <h3 className="text-[#2E2D2D] font-semibold text-lg mb-4 leading-snug">
                    {p.problem}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#FF7E29] mb-4" />
                  <p className="text-[#6B6A6A] text-[15px] leading-[170%]">{p.solution}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Our values ─────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#FFF8F3]">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-4">
              How we work
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl md:text-[40px] font-semibold tracking-[-0.03em] leading-tight text-[#2E2D2D] mb-14 max-w-xl">
              Four things we never compromise on.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeUp key={i} delay={0.1 + i * 0.1}>
                <div className="bg-white rounded-3xl border border-[#FFE0CC] p-8 h-full">
                  <span className="text-[#FF7E29]/40 font-bold text-4xl leading-none block mb-5">
                    {v.number}
                  </span>
                  <h3 className="text-[#2E2D2D] font-semibold text-xl mb-3">{v.title}</h3>
                  <p className="text-[#6B6A6A] text-[15px] leading-[170%]">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Services list ──────────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#0A0E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp>
                <p className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-4">
                  What we build
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-[40px] font-semibold tracking-[-0.03em] leading-tight text-white mb-6">
                  End-to-end digital execution —{" "}
                  <span className="text-[#FF7E29]">from strategy to launch.</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-[#B0AFAF] text-lg leading-[170%] mb-10">
                  We cover every layer of your digital product — so you deal with one trusted
                  team instead of juggling five different freelancers who don't talk to each other.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: "0 10px 32px rgba(255,102,2,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] text-white font-semibold text-base py-4 px-10 rounded-full"
                  >
                    Start your project
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>
              </FadeUp>
            </div>

            <FadeUp delay={0.2}>
              <ul className="space-y-3">
                {services.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <Link
                      href={s.href}
                      className="flex items-center justify-between w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF7E29]/40 rounded-2xl px-7 py-5 group transition-all duration-200"
                    >
                      <span className="text-white font-medium text-[16px]">{s.label}</span>
                      <ArrowRight className="h-4 w-4 text-[#FF7E29] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Final CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="relative rounded-[40px] overflow-hidden text-center px-8 py-20"
              style={{ background: "linear-gradient(135deg, #FF6602 0%, #FD3600 50%, #CC2800 100%)" }}
            >
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-52 h-52 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <p className="text-white/80 font-semibold text-sm uppercase tracking-widest">
                  Lagos · Abuja · London · Toronto · Dubai
                </p>
                <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight tracking-[-0.03em]">
                  Ready to stop planning
                  <br />
                  and start building?
                </h2>
                <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
                  Whether you're a Nigerian founder with an idea, or a foreign company looking
                  for a dependable African tech partner — let's talk. No hard sell. Just an
                  honest conversation about what you need.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 bg-white text-[#FD3600] font-semibold text-lg py-4 px-10 rounded-full hover:bg-[#FFF0E5] transition-colors duration-200"
                    >
                      Book a free call
                      <ArrowRight className="h-5 w-5" />
                    </motion.button>
                  </Link>
                  <Link href="/works">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 text-white border border-white/40 hover:border-white font-medium text-lg py-4 px-10 rounded-full transition-all duration-200"
                    >
                      See our work
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
