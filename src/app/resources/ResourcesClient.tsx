"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, CheckCircle, ArrowRight, BookOpen, Lightbulb, Star, Heart, Calendar, Mail, Smartphone, DollarSign, TrendingUp, FileText } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    id: "launch-kit",
    icon: BookOpen,
    color: "#FF6602",
    light: "#FFF0E5",
    badge: "Business Owners & SMEs",
    title: "The Digital Business Launch Kit",
    subtitle: "10 Things to Set Up Before Spending a Dollar on Marketing",
    description:
      "Most businesses waste money on ads before fixing the fundamentals. This guide walks you through the 10 digital essentials every business needs first.",
    includes: ["Business Identity Foundation", "Domain & Business Email", "Website That Converts", "Google Business Profile", "Social Media Strategy", "Content & Lead Capture", "Analytics & Pricing Page", "Your Digital Pitch Deck"],
    pages: "12",
    file: "/digital-business-launch-kit.pdf",
    filename: "Digital-Business-Launch-Kit.pdf",
  },
  {
    id: "validation",
    icon: Lightbulb,
    color: "#FF7E29",
    light: "#FFF4EC",
    badge: "Founders & Startups",
    title: "How to Validate Your Business Idea",
    subtitle: "Stop Guessing. Start Testing. Before You Build.",
    description:
      "A step-by-step framework to prove whether your idea is worth building before spending months and thousands on something nobody wants.",
    includes: ["The 5 Questions Every Idea Must Answer", "Define Your Target Customer", "Test Problem Before Solution", "MVP Framework", "Get First 10 Customers", "The Pre-Sale Method", "Reading Validation Signals", "Pivot vs Persist Framework"],
    pages: "14",
    file: "/validate-your-business-idea.pdf",
    filename: "Validate-Your-Business-Idea.pdf",
  },
  {
    id: "rate-calculator",
    icon: TrendingUp,
    color: "#FD3600",
    light: "#FFF0EE",
    badge: "Freelancers & Service Providers",
    title: "The Freelancer Rate Calculator Guide",
    subtitle: "Stop Undercharging. Know Your Number. Price with Confidence.",
    description:
      "Undercharging is the single biggest financial mistake freelancers make. Learn how to calculate your minimum viable rate, set your market rate, and package your services.",
    includes: ["Calculate Your Minimum Viable Rate", "Research Your Market Rate", "Package Your Services", "Handle Pricing Conversations", "Value-Based Pricing", "Retainer Pricing Strategy"],
    pages: "10",
    file: "/freelancer-rate-calculator-guide.pdf",
    filename: "Freelancer-Rate-Calculator-Guide.pdf",
  },
  {
    id: "content-calendar",
    icon: Calendar,
    color: "#FD5527",
    light: "#FFF1EE",
    badge: "Business Owners & Marketers",
    title: "The 30-Day Social Media Content Calendar",
    subtitle: "Plan Once. Post Consistently. Stop Running Out of Ideas.",
    description:
      "A repeatable system for planning 30 days of social media content in one sitting. Never face a blank posting day again.",
    includes: ["Build Your Content Pillars", "Choose Your Posting Frequency", "The 30-Day Calendar Structure", "Week-by-Week Content Plan", "Content Formats That Perform", "Repurposing Strategy"],
    pages: "10",
    file: "/social-media-content-calendar-template.pdf",
    filename: "Social-Media-Content-Calendar.pdf",
  },
  {
    id: "pitch-deck",
    icon: FileText,
    color: "#FFA501",
    light: "#FFF8EC",
    badge: "Founders & Startups",
    title: "The Startup Pitch Deck Template",
    subtitle: "10 Slides. Clear Story. Investor-Ready.",
    description:
      "The structure that gets meetings. A clear, investor-tested 10-slide framework with guidance on what goes on each slide and what to avoid.",
    includes: ["Slide 1: The Problem", "Slides 2 & 3: Solution & How It Works", "Slide 4: Market Size (TAM/SAM/SOM)", "Slide 5: Traction", "Slide 6: Business Model", "Slide 7: Competition", "Slides 8-10: Team, Ask & Contact"],
    pages: "12",
    file: "/startup-pitch-deck-template.pdf",
    filename: "Startup-Pitch-Deck-Template.pdf",
  },
  {
    id: "email-marketing",
    icon: Mail,
    color: "#FF6602",
    light: "#FFF0E5",
    badge: "Business Owners & Founders",
    title: "The Email Marketing Starter Guide",
    subtitle: "Build a List. Write Emails People Open. Turn Subscribers Into Customers.",
    description:
      "Email returns 36x for every dollar spent. No other channel comes close. This guide gets you started from zero with the right platform, welcome sequence, and writing principles.",
    includes: ["Why Email Beats Every Other Channel", "Choose Your Email Platform", "Your 5-Email Welcome Sequence", "Writing Emails People Actually Open", "Subject Line Formulas", "List Growth Strategy"],
    pages: "11",
    file: "/email-marketing-starter-guide.pdf",
    filename: "Email-Marketing-Starter-Guide.pdf",
  },
  {
    id: "app-planner",
    icon: Smartphone,
    color: "#FF7E29",
    light: "#FFF4EC",
    badge: "Founders & Business Owners",
    title: "The App & Software Project Planner",
    subtitle: "What to Define Before You Hire Developers.",
    description:
      "Every hour spent planning saves 3 to 5 hours of expensive development time. Define your scope, features, user flows, and budget before you speak to a single developer.",
    includes: ["Define the Problem Your Software Solves", "Map Your Core Features", "Plan Your User Flows", "Define Technical Requirements", "Set Budget & Timeline Expectations", "Red Flags in Developer Proposals"],
    pages: "12",
    file: "/app-software-project-planner.pdf",
    filename: "App-Software-Project-Planner.pdf",
  },
  {
    id: "finance-basics",
    icon: DollarSign,
    color: "#FD3600",
    light: "#FFF0EE",
    badge: "Founders & Small Business Owners",
    title: "The Business Finance Basics Guide",
    subtitle: "Cash Flow, Pricing for Profit, Invoicing — Without a Finance Degree.",
    description:
      "Most businesses that fail were profitable on paper. They failed because they ran out of cash. This plain-language guide covers every financial fundamental a founder must know.",
    includes: ["Revenue vs Profit vs Cash", "Understand Your Cash Flow", "Price for Profit Not Just Costs", "Invoicing and Getting Paid", "Basic Financial Tracking", "When to Hire an Accountant"],
    pages: "12",
    file: "/business-finance-basics-guide.pdf",
    filename: "Business-Finance-Basics-Guide.pdf",
  },
];

const values = [
  {
    icon: Heart,
    title: "We genuinely care about your growth",
    desc: "We are not just a vendor. We work alongside founders and business owners who are building something meaningful, and we want to see them succeed — whether or not they ever become a paying client.",
  },
  {
    icon: Star,
    title: "Expertise shared freely",
    desc: "The knowledge in these guides took years of working with startups, SMEs, and global brands to develop. We package it up and give it away because we believe access to good thinking should not be a luxury.",
  },
  {
    icon: Lightbulb,
    title: "Built for the real world",
    desc: "These are not theoretical frameworks. Every checklist, every question, and every framework in our guides comes from real projects, real client conversations, and real results across multiple industries.",
  },
];

function ResourceCard({ resource }: { resource: typeof resources[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", business: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("https://formspree.io/f/mnnvgyky", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, resource: resource.title, type: "Free Resource Download" }),
      });
      setStatus("success");
      const link = document.createElement("a");
      link.href = resource.file;
      link.download = resource.filename;
      link.click();
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="bg-white rounded-3xl border border-[#F2F2F2] overflow-hidden hover:border-[#FFE0CC] hover:shadow-xl hover:shadow-orange-50 transition-all duration-400"
    >
      {/* Card header */}
      <div className="p-8 pb-0">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: resource.light }}
          >
            <resource.icon className="w-6 h-6" style={{ color: resource.color }} />
          </div>
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{ backgroundColor: resource.light, color: resource.color }}
          >
            {resource.badge}
          </span>
        </div>

        <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-[#2E2D2D] mb-2">
          {resource.title}
        </h3>
        <p className="text-[#FF7E29] text-sm font-medium mb-4">{resource.subtitle}</p>
        <p className="text-[#6B6A6A] text-[15px] leading-[170%] mb-6">{resource.description}</p>

        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#999797] mb-3">
            What is inside
          </p>
          <div className="grid grid-cols-1 gap-2">
            {resource.includes.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: resource.color }} />
                <span className="text-sm text-[#4D4C4C]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 pb-6 border-b border-[#F2F2F2]">
          <span className="text-[#999797] text-xs">{resource.pages} pages</span>
          <span className="text-[#999797] text-xs">·</span>
          <span className="text-[#999797] text-xs">Free PDF</span>
          <span className="text-[#999797] text-xs">·</span>
          <span className="text-[#999797] text-xs">Instant download</span>
        </div>
      </div>

      {/* Form / CTA */}
      <div className="p-8">
        {!open ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOpen(true)}
            className="w-full flex items-center justify-center gap-2 text-white font-semibold text-sm py-4 rounded-xl transition-all duration-200"
            style={{ background: `linear-gradient(135deg, ${resource.color}, #FF7E29)` }}
          >
            <Download className="w-4 h-4" />
            Get this free guide
          </motion.button>
        ) : status === "success" ? (
          <div className="text-center py-4">
            <CheckCircle className="w-10 h-10 mx-auto mb-3" style={{ color: resource.color }} />
            <p className="font-bold text-[#2E2D2D] mb-1">Downloading now!</p>
            <a
              href={resource.file}
              download={resource.filename}
              className="text-sm underline"
              style={{ color: resource.color }}
            >
              Click here if it did not start
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text" required placeholder="Your name"
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF7E29] transition-colors"
            />
            <input
              type="text" required placeholder="Business name"
              value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })}
              className="w-full border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF7E29] transition-colors"
            />
            <input
              type="email" required placeholder="you@business.com"
              value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF7E29] transition-colors"
            />
            {status === "error" && <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>}
            <button
              type="submit" disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 text-white font-semibold text-sm py-4 rounded-xl disabled:opacity-60 transition-all"
              style={{ background: `linear-gradient(135deg, ${resource.color}, #FF7E29)` }}
            >
              <Download className="w-4 h-4" />
              {status === "loading" ? "Preparing..." : "Download now"}
            </button>
            <p className="text-[#C8C7C7] text-xs text-center">No spam. Unsubscribe any time.</p>
          </form>
        )}
      </div>
    </motion.div>
  );
}

export default function ResourcesClient() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-60px" });

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section ref={heroRef} className="bg-[#0A0E1A] pt-36 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(255,102,2,0.1) 0%, transparent 70%)" }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#FF7E29]/10 border border-[#FF7E29]/30 text-[#FF7E29] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-7"
          >
            💰 Free Resources
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[32px] sm:text-[44px] md:text-[56px] font-semibold leading-[110%] tracking-[-0.04em] text-white mb-6"
          >
            Tools and guides we built{" "}
            <span className="text-[#FF7E29] italic">for you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8A8888] text-lg leading-[170%] max-w-2xl mx-auto mb-10"
          >
            We believe great businesses are built on great decisions. These free guides are our way of
            giving founders, startups, and SMEs access to the same thinking we use with our own clients —
            no pitch, no paywall, just value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <span className="text-[#6B6A6A] text-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#FF7E29]" /> 100% free
            </span>
            <span className="text-[#6B6A6A] text-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#FF7E29]" /> Instant download
            </span>
            <span className="text-[#6B6A6A] text-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#FF7E29]" /> No credit card needed
            </span>
          </motion.div>
        </div>
      </section>

      {/* Why we do this */}
      <section ref={valuesRef} className="py-20 px-4 bg-[#FFF8F3]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-3">
              Why we do this
            </p>
            <h2 className="text-[28px] md:text-[40px] font-semibold leading-[115%] tracking-[-0.03em] text-[#2E2D2D] max-w-2xl mx-auto">
              We love helping brands and SMEs grow. Full stop.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-3xl border border-[#FFE0CC] p-8"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF0E5] flex items-center justify-center mb-5">
                  <v.icon className="w-5 h-5 text-[#FF7E29]" />
                </div>
                <h3 className="font-semibold text-lg text-[#2E2D2D] mb-3 leading-snug">{v.title}</h3>
                <p className="text-[#6B6A6A] text-[15px] leading-[170%]">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-3">
              Free downloads
            </p>
            <h2 className="text-[28px] md:text-[40px] font-semibold leading-[115%] tracking-[-0.03em] text-[#2E2D2D]">
              Pick the guide that fits where you are.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-[#0A0E1A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-4">
            Ready to build?
          </p>
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight tracking-[-0.03em] text-white mb-5">
            Once you have the foundation, we help you build the rest.
          </h2>
          <p className="text-[#8A8888] text-lg leading-[170%] mb-8 max-w-xl mx-auto">
            From validated ideas to launched products, Digital Ninja Technologies is the team you call
            when you are ready to build something that actually works.
          </p>
          <Link href="/booking">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 10px 32px rgba(255,102,2,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] text-white font-semibold text-base py-4 px-10 rounded-full"
            >
              Book a 15min call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
