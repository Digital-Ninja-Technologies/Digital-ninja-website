"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Portfolio images reused
const portfolioImages = [
  { src: "/brandface-1.png", alt: "Brandface hero" },
  { src: "/korlod-1.jpg", alt: "Korlod Works" },
  { src: "/veritas-1.png", alt: "Veritas" },
  { src: "/moducode-cover.png", alt: "Moducode" },
  { src: "/korlod-2.jpg", alt: "Korlod services" },
  { src: "/veritas-2.png", alt: "Veritas app" },
  { src: "/brandface-2.png", alt: "Brandface case study" },
  { src: "/korlod-3.jpg", alt: "Korlod about" },
];

const services = [
  {
    num: "01",
    title: "Web Design & Development",
    desc: "You launched fast. Now make it worth the visit. We take your existing site or build from scratch — applying real design decisions: layout, hierarchy, typography, motion. All the things that actually convert.",
    tags: ["Website Design", "Landing Pages", "Web Apps", "Responsive Builds"],
    images: ["/korlod-1.jpg", "/brandface-2.png", "/veritas-1.png"],
  },
  {
    num: "02",
    title: "Brand Identity",
    desc: "A brand is a point of view, not a logo pack. We build the full identity system — mark, colour, type, and voice — so your business is recognisable, consistent, and unmistakably itself before anyone reads a word.",
    tags: ["Logo Design", "Colour & Typography", "Brand Guidelines", "Visual Language"],
    images: ["/korlod-1.jpg", "/korlod-2.jpg", "/korlod-3.jpg"],
  },
  {
    num: "03",
    title: "Mobile App Development",
    desc: "Beautiful apps backed by solid engineering. We design and build cross-platform mobile apps for iOS and Android that keep users engaged from first open to daily habit.",
    tags: ["Flutter Apps", "iOS & Android", "App UI/UX", "Launch Ready"],
    images: ["/veritas-2.png", "/veritas-3.png", "/veritas-4.png"],
  },
];

const pricing = [
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
      "Direct communication",
    ],
    cta: "Book a call",
    href: "/booking",
  },
  {
    label: "Growth Retainer",
    duration: "3 to 6 Months",
    price: "From $2,500",
    sub: "For brands with ongoing needs",
    highlight: true,
    features: [
      "Everything in One-off",
      "Priority turnaround",
      "Unlimited revisions",
      "Full service access (web, app, brand)",
      "Slack integration with your team",
      "Updates every 48 hours",
    ],
    cta: "Book a call",
    href: "/booking",
  },
  {
    label: "Enterprise",
    duration: "Custom",
    price: "Let's talk",
    sub: "For complex, large-scale projects",
    highlight: false,
    features: [
      "Custom scope and timeline",
      "Dedicated team",
      "Design system development",
      "Full brand and product work",
      "SLA and priority support",
    ],
    cta: "Reach out",
    href: "/booking",
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "A focused landing page or business site takes 2 to 4 weeks. A full web app or product with custom functionality takes 6 to 16 weeks. Every project starts with a proper discovery so we scope it accurately before work begins.",
  },
  {
    q: "Can I update the website myself after it's launched?",
    a: "Yes. Depending on the tech stack we use, we set up a CMS or content editing layer so you can update text, images, and content without touching code. We also provide a handover walkthrough on every project.",
  },
  {
    q: "What do I need to have ready before we start?",
    a: "As much or as little as you have. Ideally: a clear goal, your brand assets if they exist (logo, colours, fonts), and examples of sites or apps you like. We handle the rest — including strategy and content direction if needed.",
  },
  {
    q: "Do you offer ongoing support after a project is done?",
    a: "Yes. All projects include a post-launch support period. For ongoing work, our retainer plans give you continuous access to the team for updates, improvements, and new features.",
  },
  {
    q: "What industries do you work with?",
    a: "Fintech, SaaS, agencies, e-commerce, professional services, startups, and consumer apps. We work with founders and businesses across every stage — from pre-launch MVPs to established brands.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. We work with clients across Africa, Europe, North America, and the Middle East. All projects are managed remotely with structured communication and regular updates.",
  },
];

const words = ["Startups", "Founders", "Brands", "Products", "You"];

// Typewriter headline
function TypewriterWord() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    if (!deleting && displayed.length < word.length) {
      const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === word.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }
  }, [displayed, deleting, index]);

  return (
    <span className="text-[#FF6602]">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Infinite marquee
function Marquee({ images, reverse }: { images: typeof portfolioImages; reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...images, ...images].map((img, i) => (
          <div key={i} className="shrink-0 w-[320px] h-[200px] rounded-2xl overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              width={320}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// FAQ item
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-4 group"
      >
        <div className="flex items-center gap-4">
          <span className="text-[#FF6602] text-xs font-bold">0{index + 1}</span>
          <span className="text-white font-semibold text-base md:text-lg leading-snug group-hover:text-[#FF7E29] transition-colors duration-200">
            {q}
          </span>
        </div>
        <span className="shrink-0 text-[#FF6602]">
          {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
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
            <p className="text-[#8A8888] text-base leading-[170%] pb-6 pl-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function StudioClient() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">

      {/* ── HERO ── */}
      <section ref={heroRef} className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-20 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(255,102,2,0.08) 0%, transparent 70%)" }} />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#FF6602] text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            Digital Ninja Technologies · Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-bold leading-[100%] tracking-[-0.04em] mb-10"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          >
            Designing
            <br />
            for
            <br />
            <TypewriterWord />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "#FF7E29" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#FF6602] text-white font-semibold text-sm py-4 px-8 rounded-full transition-colors duration-200"
              >
                Start a project
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link href="/works">
              <span className="text-[#6B6A6A] text-sm hover:text-white transition-colors duration-200 flex items-center gap-2">
                See our work <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SCROLLING GALLERY ── */}
      <section className="py-12 space-y-4 overflow-hidden">
        <Marquee images={portfolioImages} />
        <Marquee images={[...portfolioImages].reverse()} reverse />
      </section>

      {/* ── ABOUT STATEMENT ── */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[22px] md:text-[32px] font-medium leading-[145%] tracking-[-0.02em] text-[#CCCCCC]"
          >
            Digital Ninja Technologies Studio exists because great ideas deserve great design.
            We turn visions into products that{" "}
            <span className="text-white font-semibold">look credible, feel effortless,</span>{" "}
            and <span className="text-[#FF6602] font-semibold">convert.</span>
          </motion.p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} className="py-16 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10+", label: "Projects Delivered" },
            { value: "6+", label: "Product Designs" },
            { value: "4+", label: "Countries Served" },
            { value: "100%", label: "On-time Delivery" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-[#FF6602] mb-2">{s.value}</p>
              <p className="text-[#6B6A6A] text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#FF6602] text-xs font-bold uppercase tracking-[0.2em] mb-4">What We Do</p>
            <h2 className="text-[28px] md:text-[44px] font-bold leading-tight tracking-[-0.03em]">
              Two services. The two things that make a<br className="hidden md:block" />
              first impression actually land.
            </h2>
          </motion.div>

          <div className="space-y-8">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl border border-white/8 bg-white/3 p-8 md:p-12 hover:border-[#FF6602]/30 transition-all duration-400"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[#FF6602] text-xs font-bold uppercase tracking-widest">{svc.num}</span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <h3 className="text-2xl md:text-[30px] font-bold leading-tight tracking-[-0.02em] mb-4">
                      {svc.title}
                    </h3>
                    <p className="text-[#8A8888] text-base leading-[170%] mb-8">{svc.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FF6602]/10 text-[#FF7E29] border border-[#FF6602]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {svc.images.map((src, j) => (
                    <div key={j} className={`rounded-xl overflow-hidden ${j === 0 ? "col-span-3 h-[180px]" : "h-[120px]"}`}>
                      <Image src={src} alt={svc.title} width={400} height={300} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#FF6602] text-xs font-bold uppercase tracking-[0.2em] mb-3">Portfolio</p>
              <h2 className="text-[28px] md:text-[40px] font-bold leading-tight tracking-[-0.03em]">
                A selection of work built<br className="hidden md:block" /> with intention.
              </h2>
            </div>
            <Link href="/works" className="hidden md:inline-flex items-center gap-2 text-[#FF7E29] text-sm font-medium hover:gap-3 transition-all duration-200">
              See all work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { img: "/brandface-1.png", title: "Brandface", desc: "Lead conversion landing page for a legal marketing agency.", tag: "Web Design" },
              { img: "/korlod-1.jpg", title: "Korlod Works", desc: "Full website for a creative agency — identity, web, and marketing.", tag: "Branding & Web" },
              { img: "/veritas-1.png", title: "Veritas", desc: "Waitlist site for a cross-border escrow fintech app.", tag: "Web + Mobile" },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-white/8 bg-white/3 hover:border-[#FF6602]/30 transition-all duration-300"
              >
                <div className="h-[220px] overflow-hidden">
                  <Image src={p.img} alt={p.title} width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#FF7E29] bg-[#FF6602]/10 px-3 py-1 rounded-full">{p.tag}</span>
                  <h3 className="text-white font-bold text-xl mt-3 mb-2">{p.title}</h3>
                  <p className="text-[#6B6A6A] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 md:hidden">
            <Link href="/works">
              <button className="inline-flex items-center gap-2 border border-[#FF6602]/40 text-[#FF7E29] text-sm font-medium px-6 py-3 rounded-full">
                See all work <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#FF6602] text-xs font-bold uppercase tracking-[0.2em] mb-4">Pricing</p>
            <h2 className="text-[28px] md:text-[44px] font-bold leading-tight tracking-[-0.03em]">
              Plans designed around your needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`rounded-3xl p-8 flex flex-col border transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#FF6602] border-[#FF6602] text-white"
                    : "bg-white/3 border-white/10 hover:border-[#FF6602]/40"
                }`}
              >
                <div className="mb-6">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.highlight ? "text-white/70" : "text-[#FF7E29]"}`}>
                    {plan.label}
                  </p>
                  <p className={`text-xs mb-4 ${plan.highlight ? "text-white/70" : "text-[#6B6A6A]"}`}>{plan.duration}</p>
                  <p className={`text-4xl font-bold tracking-tight ${plan.highlight ? "text-white" : "text-white"}`}>{plan.price}</p>
                  <p className={`text-sm mt-1 ${plan.highlight ? "text-white/75" : "text-[#6B6A6A]"}`}>{plan.sub}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-2.5 text-sm ${plan.highlight ? "text-white/90" : "text-[#8A8888]"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${plan.highlight ? "bg-white" : "bg-[#FF6602]"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={plan.href}>
                  <button className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                    plan.highlight
                      ? "bg-white text-[#FF6602] hover:bg-[#FFF0E5]"
                      : "border border-[#FF6602]/40 text-[#FF7E29] hover:bg-[#FF6602] hover:text-white hover:border-[#FF6602]"
                  }`}>
                    {plan.cta}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#FF6602] text-xs font-bold uppercase tracking-[0.2em] mb-4">FAQ</p>
            <h2 className="text-[28px] md:text-[40px] font-bold leading-tight tracking-[-0.03em]">
              Quick answers to the things we get asked most.
            </h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-bold leading-[105%] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Tell us what you're building.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#6B6A6A] text-lg leading-[170%] mb-10 max-w-xl mx-auto"
          >
            We will tell you how we can help — and if we are not the right fit, we will say so.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "#FF7E29" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#FF6602] text-white font-semibold text-base py-4 px-10 rounded-full transition-colors duration-200"
              >
                Book a free 15min call
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <a href="mailto:thedigitalninjatechnologies@gmail.com"
              className="text-[#6B6A6A] text-sm hover:text-white transition-colors duration-200">
              thedigitalninjatechnologies@gmail.com
            </a>
          </div>

          {/* Footer strip */}
          <div className="max-w-6xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6B6A6A] text-sm">
              © Digital Ninja Technologies {new Date().getFullYear()} · All Rights Reserved
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/company/digitalninja-technologies" target="_blank" rel="noopener noreferrer" className="text-[#6B6A6A] hover:text-white text-sm transition-colors">LinkedIn</a>
              <a href="https://www.tiktok.com/@theninjatechies" target="_blank" rel="noopener noreferrer" className="text-[#6B6A6A] hover:text-white text-sm transition-colors">TikTok</a>
              <Link href="/" className="text-[#6B6A6A] hover:text-white text-sm transition-colors">Main site</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
