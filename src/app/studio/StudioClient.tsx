"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus, ArrowUpRight, Zap, Shield, Clock, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ── DATA ──────────────────────────────────────────────────────────────────────

const portfolioImages = [
  { src: "/brandface-1.png", alt: "Brandface" },
  { src: "/korlod-1.jpg", alt: "Korlod Works" },
  { src: "/veritas-1.png", alt: "Veritas" },
  { src: "/moducode-cover.png", alt: "Moducode" },
  { src: "/korlod-2.jpg", alt: "Korlod Services" },
  { src: "/veritas-2.png", alt: "Veritas App" },
  { src: "/brandface-2.png", alt: "Brandface Case Study" },
  { src: "/korlod-3.jpg", alt: "Korlod About" },
];

const process = [
  { num: "01", title: "We listen first", body: "Before a single wireframe exists, we spend time understanding your business, your users, and what success actually looks like. Most problems become obvious in this conversation." },
  { num: "02", title: "We define the scope", body: "A clear scope prevents the most expensive problems in any digital project. We document exactly what we are building, what we are not building, and why." },
  { num: "03", title: "We design with purpose", body: "Every layout decision, colour choice, and interaction is tied to a goal. We do not decorate. We design to guide users toward an action." },
  { num: "04", title: "We build and iterate", body: "Development happens in transparent sprints. You see progress weekly. You give feedback on real, working builds — not static screenshots." },
  { num: "05", title: "We launch and stay", body: "The launch is not the end. We monitor performance, fix issues, and stay available. You will not have to chase us after the invoice is paid." },
];

const capabilities = [
  { icon: Zap, title: "Web Design & Development", body: "From conversion-focused landing pages to full-scale web platforms. Every project is designed to perform, not just to look good.", skills: ["Next.js", "React", "Tailwind", "Framer Motion"] },
  { icon: Globe, title: "Mobile App Development", body: "Cross-platform apps that feel native on iOS and Android. Fast, polished, and built for the users who will live inside them.", skills: ["Flutter", "iOS", "Android", "Firebase"] },
  { icon: Shield, title: "Brand Identity", body: "A visual identity that is unmistakably yours. We build the full system: mark, colour, typography, and the rules that keep it consistent.", skills: ["Logo Design", "Design Systems", "Brand Guidelines", "Visual Language"] },
  { icon: Clock, title: "Custom Software", body: "When off-the-shelf does not cut it. We architect and build custom platforms, dashboards, and tools that match exactly how your business works.", skills: ["Node.js", "PostgreSQL", "APIs", "Cloud"] },
];

const projects = [
  { img: "/brandface-1.png", title: "Brandface", type: "Web Design", year: "2026", body: "A high-converting landing page for a legal marketing agency promising 20 to 30 qualified consultations in 90 days.", href: "/works/brandface" },
  { img: "/korlod-1.jpg", title: "Korlod Works", type: "Brand & Web", year: "2025", body: "Full agency website for a creative firm — bold visual identity, clear services, and a lead generation machine.", href: "/works/korlodworks" },
  { img: "/veritas-1.png", title: "Veritas", type: "Web + Mobile", year: "2026", body: "Waitlist site and mobile app for a cross-border escrow payment platform built for freelancers doing borderless work.", href: "/works/veritas" },
  { img: "/moducode-cover.png", title: "Moducode", type: "UI/UX", year: "2026", body: "A trust-driven B2B talent platform connecting global companies with engineers from emerging markets.", href: "/works/moducode" },
];

const truths = [
  "Speed without craft is just noise.",
  "A brief is not a design spec.",
  "Your users do not read. They scan.",
  "Cheap is expensive in the long run.",
  "Motion should mean something.",
  "The best button is the one that gets clicked.",
];

const faqs = [
  { q: "What makes you different from a freelancer?", a: "You get a team with complementary skills — design, engineering, and strategy — working on your project simultaneously. No waiting for one person to finish before the next can start. We also bring accountability, a defined process, and the capacity to handle projects of any scale." },
  { q: "How do you handle projects remotely?", a: "Everything is structured. Weekly video calls, a shared project board, async updates between meetings, and a direct line to whoever is working on your project. We have delivered for clients across 4 continents without a single missed deadline attributed to communication." },
  { q: "What happens if I want changes mid-project?", a: "We scope carefully upfront to reduce surprises. When scope changes happen — and they do — we discuss the impact on timeline and cost transparently before acting. Nothing gets added or changed without your explicit sign-off." },
  { q: "Do you do ongoing work or only one-off projects?", a: "Both. Many clients start with a defined project and then continue on a retainer for ongoing design and development. We prefer long-term relationships because we understand your product better over time and you get better results." },
  { q: "Can you work with our existing team?", a: "Yes. We have embedded into in-house teams, worked alongside other agencies, and collaborated with founders who have partial technical capacity. We adapt to what you already have rather than demanding to replace it." },
];

// ── COMPONENTS ────────────────────────────────────────────────────────────────

function Marquee({ images, speed = 28, reverse = false }: { images: typeof portfolioImages; speed?: number; reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[...images, ...images].map((img, i) => (
          <motion.div
            key={i}
            className="shrink-0 w-[280px] md:w-[340px] h-[190px] md:h-[220px] rounded-2xl overflow-hidden relative group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-3 left-4 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.alt}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      className="border-b border-white/8"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between py-6 text-left gap-6 group">
        <div className="flex items-start gap-5">
          <span className="text-[#FF6602] text-xs font-bold mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-white font-semibold text-base md:text-lg leading-snug group-hover:text-[#FF7E29] transition-colors duration-200">{q}</span>
        </div>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 mt-1 text-[#FF6602]">
          <Plus className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-[#8A8888] text-base leading-[175%] pb-7 pl-9">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Cursor follower
function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <motion.div
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
      style={{ background: "radial-gradient(circle, rgba(255,102,2,0.06) 0%, transparent 70%)" }}
      animate={{ x: pos.x - 200, y: pos.y - 200 }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
    />
  );
}

// Horizontal scroll ticker
function TruthTicker() {
  return (
    <div className="overflow-hidden border-t border-b border-white/8 py-4">
      <motion.div
        className="flex gap-12 w-max whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[...truths, ...truths].map((t, i) => (
          <span key={i} className="text-[#3A3A3A] text-sm font-medium uppercase tracking-widest flex items-center gap-6">
            {t}
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6602] inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Parallax wrapper
function ParallaxSection({ children, offset = 60 }: { children: React.ReactNode; offset?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return <motion.div ref={ref} style={{ y }}>{children}</motion.div>;
}

// Counter reveal data
const counters = [
  { target: 10, suffix: "+", label: "Projects" },
  { target: 6, suffix: "+", label: "Product Designs" },
  { target: 4, suffix: "+", label: "Countries" },
  { target: 100, suffix: "%", label: "On-time" },
];

function CounterReveal({ onComplete }: { onComplete: () => void }) {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 1400;
    const fps = 60;
    const steps = Math.floor((duration / 1000) * fps);
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / steps;
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      setCounts(counters.map((c) => Math.min(Math.floor(c.target * ease), c.target)));

      if (frame >= steps) {
        clearInterval(interval);
        setCounts(counters.map((c) => c.target));
        setTimeout(() => {
          setDone(true);
          onComplete();
        }, 600);
      }
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="absolute inset-0 z-20 bg-[#080808] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Scanning line */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6602] to-transparent"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 1.4, ease: "linear" }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 px-8 relative z-10">
            {counters.map((c, i) => (
              <div key={i} className="text-center">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-black text-white leading-none mb-2 tabular-nums"
                  style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
                >
                  {counts[i]}{c.suffix}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="text-[#444] text-xs uppercase tracking-widest font-semibold"
                >
                  {c.label}
                </motion.p>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 text-[#222] text-xs uppercase tracking-[0.3em]"
          >
            Loading Studio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



export default function StudioClient() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [heroReady, setHeroReady] = useState(false);

  return (
    <div className="bg-[#080808] min-h-screen text-white selection:bg-[#FF6602] selection:text-white overflow-x-hidden">
      <CursorGlow />

      {/* Counter reveal overlay */}
      <CounterReveal onComplete={() => setHeroReady(true)} />

      {/* ── HERO ── */}
      <section ref={heroRef} className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 pt-36 relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#FF6602 1px, transparent 1px), linear-gradient(90deg, #FF6602 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Large orange orb */}
        <motion.div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,102,2,0.12) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={heroReady ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-[#FF6602]" />
            <span className="text-[#FF6602] text-xs font-bold uppercase tracking-[0.25em]">DNT Studio · Est. 2022</span>
          </motion.div>

          {/* Staggered headline */}
          <div className="overflow-hidden mb-6">
            {["We build things", "that work."].map((line, i) => (
              <motion.div
                key={i}
                initial={{ y: "100%" }}
                animate={heroReady ? { y: "0%" } : {}}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h1
                  className="font-black leading-[0.92] tracking-[-0.05em] text-white"
                  style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
                >
                  {i === 1 ? <span className="text-[#FF6602]">{line}</span> : line}
                </h1>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-12"
          >
            <p className="text-[#555] text-lg leading-[160%] max-w-md">
              Websites, apps, and brands built for founders and businesses who are done
              tolerating mediocre digital work. We are the team you hire when quality is non-negotiable.
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.04, gap: "12px" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#FF6602] hover:bg-[#FF7E29] text-white font-bold text-sm py-4 px-8 rounded-full transition-colors duration-200"
                >
                  Book a discovery call
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/works">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  className="inline-flex items-center gap-2 border border-white/15 text-white text-sm font-medium py-4 px-6 rounded-full hover:border-[#FF6602]/50 transition-all duration-200"
                >
                  Our work <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#FF6602]" />
          <span className="text-[#333] text-xs tracking-widest uppercase">scroll</span>
        </motion.div>
      </section>

      {/* ── TRUTH TICKER ── */}
      <TruthTicker />

      {/* ── GALLERY ── */}
      <section className="py-16 space-y-4">
        <Marquee images={portfolioImages} speed={32} />
        <Marquee images={[...portfolioImages].reverse()} speed={26} reverse />
      </section>

      {/* ── BOLD STATEMENT ── */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ParallaxSection offset={30}>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-black leading-[105%] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)" }}
            >
              Most agencies sell you a process.{" "}
              <span className="text-[#333]">We sell you the result.</span>{" "}
              <span className="text-[#FF6602]">There is a difference.</span>
            </motion.h2>
          </ParallaxSection>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-[#FF6602] to-transparent mt-16"
          />
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <span className="text-[#FF6602] text-xs font-bold uppercase tracking-[0.2em] block mb-5">How we work</span>
                <h2 className="text-[28px] md:text-[38px] font-black leading-tight tracking-[-0.03em] mb-6">
                  Five steps between your idea and a live product.
                </h2>
                <p className="text-[#555] text-base leading-[170%]">
                  No black boxes. No radio silence. Just a clear process you can follow from first call to final launch.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-8 space-y-0">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group flex gap-8 py-8 border-b border-white/6 hover:border-[#FF6602]/30 transition-colors duration-300"
                >
                  <span className="text-[#FF6602] text-xs font-black mt-1 shrink-0 w-8">{step.num}</span>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#FF7E29] transition-colors duration-200">{step.title}</h3>
                    <p className="text-[#555] text-base leading-[170%]">{step.body}</p>
                  </div>
                  <motion.div
                    className="shrink-0 mt-1 ml-auto opacity-0 group-hover:opacity-100"
                    initial={{ x: -4 }}
                    whileInView={{ x: 0 }}
                  >
                    <ArrowRight className="w-4 h-4 text-[#FF6602]" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="text-[#FF6602] text-xs font-bold uppercase tracking-[0.2em] block mb-4">What we build</span>
              <h2 className="text-[28px] md:text-[44px] font-black leading-tight tracking-[-0.03em]">
                Four disciplines.<br />One team.
              </h2>
            </div>
            <p className="text-[#555] text-base leading-[165%] max-w-sm">
              We are not specialists who hand off work to someone else. Every discipline lives in the same team, in the same conversation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: "rgba(255,102,2,0.4)" }}
                className="group rounded-3xl border border-white/8 bg-white/[0.02] p-8 md:p-10 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF6602]/10 flex items-center justify-center mb-8 group-hover:bg-[#FF6602]/20 transition-colors duration-300">
                  <cap.icon className="w-5 h-5 text-[#FF7E29]" />
                </div>
                <h3 className="text-white font-bold text-xl md:text-2xl mb-3 tracking-tight">{cap.title}</h3>
                <p className="text-[#555] text-base leading-[170%] mb-8">{cap.body}</p>
                <div className="flex flex-wrap gap-2">
                  {cap.skills.map((s) => (
                    <span key={s} className="text-xs font-semibold text-[#444] border border-white/8 px-3 py-1.5 rounded-full group-hover:border-[#FF6602]/25 group-hover:text-[#FF7E29] transition-all duration-200">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-[#FF6602] text-xs font-bold uppercase tracking-[0.2em] block mb-4">Selected work</span>
              <h2 className="text-[28px] md:text-[44px] font-black leading-tight tracking-[-0.03em]">
                Built with intent.<br />Shipped on time.
              </h2>
            </div>
            <Link href="/works" className="hidden md:inline-flex items-center gap-2 text-[#555] text-sm hover:text-[#FF7E29] transition-colors duration-200">
              All projects <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <Link key={i} href={p.href}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl overflow-hidden border border-white/8 hover:border-[#FF6602]/35 transition-all duration-400 bg-white/[0.02]"
                >
                  <div className="relative h-[230px] overflow-hidden">
                    <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 bg-[#FF6602] text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {p.type}
                    </div>
                  </div>
                  <div className="p-7 flex items-start justify-between">
                    <div>
                      <p className="text-[#444] text-xs mb-2">{p.year} · {p.type}</p>
                      <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#FF7E29] transition-colors duration-200">{p.title}</h3>
                      <p className="text-[#444] text-sm leading-[160%]">{p.body}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#333] group-hover:text-[#FF6602] transition-colors duration-200 shrink-0 mt-1 ml-4" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-[#FF6602] text-xs font-bold uppercase tracking-[0.2em] block mb-4">Pricing</span>
            <h2 className="text-[28px] md:text-[44px] font-black leading-tight tracking-[-0.03em]">
              Clear plans. No surprises.
            </h2>
            <p className="text-[#555] text-base mt-4 max-w-lg mx-auto leading-[165%]">
              Every engagement starts with a free discovery call. From there, we scope and price your project honestly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: "One-off Project",
                duration: "2 to 6 Weeks",
                price: "From $1,500",
                sub: "Best for focused, clearly scoped work",
                highlight: false,
                features: [
                  "Custom scoped deliverable",
                  "Professional UI design",
                  "Milestone-based delivery",
                  "2 weeks post-launch support",
                  "Direct team communication",
                ],
                cta: "Book a call",
              },
              {
                label: "Growth Retainer",
                duration: "3 to 6 Months",
                price: "From $2,500",
                sub: "For brands with ongoing design and dev needs",
                highlight: true,
                features: [
                  "Everything in One-off",
                  "Priority turnaround",
                  "Unlimited revisions",
                  "Full service access — web, app, brand",
                  "Slack integration with your team",
                  "Updates every 48 hours",
                ],
                cta: "Book a call",
              },
              {
                label: "Enterprise",
                duration: "Custom",
                price: "Let's talk",
                sub: "For complex, long-term projects",
                highlight: false,
                features: [
                  "Custom scope and timeline",
                  "Dedicated team",
                  "Design system development",
                  "Full brand and product suite",
                  "SLA and priority support",
                ],
                cta: "Reach out",
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={!plan.highlight ? { y: -4 } : {}}
                className={`rounded-3xl p-8 flex flex-col border transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#FF6602] border-[#FF6602]"
                    : "bg-white/[0.02] border-white/8 hover:border-[#FF6602]/40"
                }`}
              >
                <div className="mb-7">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.highlight ? "text-white/70" : "text-[#FF7E29]"}`}>
                    {plan.label}
                  </p>
                  <p className={`text-xs mb-5 ${plan.highlight ? "text-white/60" : "text-[#444]"}`}>{plan.duration}</p>
                  <p className={`text-[38px] font-black tracking-tight leading-none mb-1 ${plan.highlight ? "text-white" : "text-white"}`}>
                    {plan.price}
                  </p>
                  <p className={`text-sm mt-2 ${plan.highlight ? "text-white/75" : "text-[#444]"}`}>{plan.sub}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-3 text-sm leading-snug ${plan.highlight ? "text-white/90" : "text-[#555]"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${plan.highlight ? "bg-white" : "bg-[#FF6602]"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/booking">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-200 ${
                      plan.highlight
                        ? "bg-white text-[#FF6602] hover:bg-[#FFF0E5]"
                        : "border border-[#FF6602]/35 text-[#FF7E29] hover:bg-[#FF6602] hover:text-white hover:border-[#FF6602]"
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-[#FF6602] text-xs font-bold uppercase tracking-[0.2em] block mb-4">Questions</span>
            <h2 className="text-[28px] md:text-[44px] font-black leading-tight tracking-[-0.03em]">
              Things people ask before they hire us.
            </h2>
          </motion.div>
          {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} i={i} />)}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(255,102,2,0.1) 0%, transparent 65%)" }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FF6602] text-xs font-bold uppercase tracking-[0.2em] block mb-8">Ready when you are</span>
            <h2
              className="font-black leading-[100%] tracking-[-0.05em] mb-8 text-white"
              style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
            >
              Let's build<br />
              <span className="text-[#FF6602]">something</span><br />
              real.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#555] text-lg leading-[170%] mb-12 max-w-lg mx-auto"
          >
            A 15-minute call. No pitch deck. No pressure. Just a conversation about what you are building and whether we can help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#FF7E29" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-[#FF6602] text-white font-black text-base py-5 px-10 rounded-full transition-colors duration-200"
              >
                Book a free 15min call
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <a
              href="mailto:thedigitalninjatechnologies@gmail.com"
              className="text-[#444] text-sm hover:text-[#FF7E29] transition-colors duration-200"
            >
              thedigitalninjatechnologies@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Minimal footer */}
        <div className="max-w-6xl mx-auto mt-28 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#2A2A2A] text-sm">© Digital Ninja Technologies {new Date().getFullYear()}</p>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-[#2A2A2A] hover:text-white text-sm transition-colors duration-200">← Main site</Link>
            <a href="https://www.linkedin.com/company/digitalninja-technologies" target="_blank" rel="noopener noreferrer" className="text-[#2A2A2A] hover:text-white text-sm transition-colors">LinkedIn</a>
            <a href="https://www.tiktok.com/@theninjatechies" target="_blank" rel="noopener noreferrer" className="text-[#2A2A2A] hover:text-white text-sm transition-colors">TikTok</a>
          </div>
        </div>
      </section>
    </div>
  );
}
