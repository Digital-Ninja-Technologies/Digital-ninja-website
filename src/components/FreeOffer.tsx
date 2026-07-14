"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Download, CheckCircle, FileText, Zap, TrendingUp, Users } from "lucide-react";

const included = [
  "Your Business Identity Foundation",
  "Professional Domain & Business Email Setup",
  "A Website That Actually Converts",
  "Google Business Profile Setup",
  "Social Media Done Right",
  "A Simple Content Strategy",
  "Your Lead Capture System",
  "Basic Analytics & Tracking",
  "A Clear Offer & Pricing Page",
  "Your Digital Pitch Deck",
];

const stats = [
  { icon: FileText, label: "Pages", value: "12" },
  { icon: Zap, label: "Action Items", value: "50+" },
  { icon: TrendingUp, label: "Sections", value: "10" },
  { icon: Users, label: "For", value: "Founders & SMEs" },
];

export default function FreeOffer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", business: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("https://formspree.io/f/mnnvgyky", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "Free Guide Download" }),
      });
      setStatus("success");
      // Trigger download
      const link = document.createElement("a");
      link.href = "/digital-business-launch-kit.pdf";
      link.download = "Digital-Business-Launch-Kit.pdf";
      link.click();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section ref={ref} className="w-full bg-[#0A0E1A] py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#FF7E29]/10 border border-[#FF7E29]/30 text-[#FF7E29] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            >
              <Download className="w-3.5 h-3.5" />
              Free Download
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-white mb-5"
            >
              The Digital Business{" "}
              <span className="text-[#FF7E29]">Launch Kit</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#8A8888] text-lg leading-[170%] mb-8"
            >
              10 things every business owner and startup must set up before spending a single naira on marketing.
              A practical, no-fluff checklist guide built for founders, startups and business owners worldwide.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
            >
              {stats.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <s.icon className="w-4 h-4 text-[#FF7E29] mx-auto mb-2" />
                  <p className="text-white font-bold text-lg leading-none mb-1">{s.value}</p>
                  <p className="text-[#6B6A6A] text-xs">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* What's inside */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-[#999797] text-xs font-semibold uppercase tracking-widest mb-4">
                What is inside
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF7E29] shrink-0 mt-0.5" />
                    <span className="text-[#B0AFAF] text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

              {/* Form header */}
              <div className="bg-gradient-to-r from-[#FF6602] to-[#FF7E29] px-8 py-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base leading-tight">Get the free guide</p>
                    <p className="text-white/75 text-xs">Instant PDF download</p>
                  </div>
                </div>
                <p className="text-white/85 text-sm leading-relaxed">
                  Enter your details below and get instant access to the Digital Business Launch Kit.
                  No spam, ever.
                </p>
              </div>

              <div className="px-8 py-8">
                {status === "success" ? (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-[#FFF0E5] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#FF7E29]" />
                    </div>
                    <h3 className="text-[#2E2D2D] font-bold text-xl mb-2">Your guide is downloading!</h3>
                    <p className="text-[#6B6A6A] text-sm leading-relaxed mb-5">
                      If the download did not start automatically, click the button below.
                    </p>
                    <a
                      href="/digital-business-launch-kit.pdf"
                      download="Digital-Business-Launch-Kit.pdf"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] text-white font-semibold text-sm py-3 px-7 rounded-full"
                    >
                      <Download className="w-4 h-4" />
                      Download again
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[#2E2D2D] text-sm font-semibold mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm text-[#2E2D2D] placeholder-[#C8C7C7] focus:outline-none focus:border-[#FF7E29] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#2E2D2D] text-sm font-semibold mb-1.5">
                        Business name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Digital Ninja Technologies"
                        value={form.business}
                        onChange={(e) => setForm({ ...form, business: e.target.value })}
                        className="w-full border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm text-[#2E2D2D] placeholder-[#C8C7C7] focus:outline-none focus:border-[#FF7E29] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#2E2D2D] text-sm font-semibold mb-1.5">
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@business.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm text-[#2E2D2D] placeholder-[#C8C7C7] focus:outline-none focus:border-[#FF7E29] transition-colors"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#FF6602] to-[#FF7E29] text-white font-semibold text-base py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60 transition-all duration-200"
                    >
                      {status === "loading" ? (
                        "Preparing your download..."
                      ) : (
                        <>
                          <Download className="w-5 h-5" />
                          Get the free guide
                        </>
                      )}
                    </motion.button>

                    <p className="text-[#C8C7C7] text-xs text-center leading-relaxed">
                      By submitting you agree to receive occasional emails from Digital Ninja Technologies.
                      No spam. Unsubscribe any time.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
