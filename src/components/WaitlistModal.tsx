"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle } from "lucide-react";

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
}

const perks = [
  "Free 15min discovery call included",
  "Priority project slot before public queue",
  "Locked-in rate for early clients",
];

export default function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://formspree.io/f/mnnvgyky", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, type: "Waitlist signup" }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true); // still show success
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setName("");
    }, 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.25, 0, 1] }}
            className="fixed inset-0 z-[201] flex items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl">

              {/* Top yellow section */}
              <div className="bg-[#FF7E29] px-8 pt-8 pb-7 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Early access open
                </div>

                <h2 className="text-white text-[28px] font-bold leading-tight tracking-[-0.02em] mb-2">
                  Be first through<br />the door.
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  Join our list and get priority access when we open new project slots.
                </p>
              </div>

              {/* White bottom section */}
              <div className="px-8 py-7">
                {!submitted ? (
                  <>
                    {/* Perks */}
                    <ul className="space-y-2.5 mb-7">
                      {perks.map((p, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-md bg-[#FFF0E5] border border-[#FFD0B1] flex items-center justify-center shrink-0">
                            <span className="text-[#FF7E29] text-xs font-bold">✓</span>
                          </div>
                          <span className="text-[#4D4C4C] text-sm font-medium">{p}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm text-[#2E2D2D] placeholder-[#C8C7C7] focus:outline-none focus:border-[#FF7E29] transition-colors"
                      />
                      <div className="flex gap-2">
                        <input
                          type="email"
                          placeholder="you@work.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="flex-1 border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm text-[#2E2D2D] placeholder-[#C8C7C7] focus:outline-none focus:border-[#FF7E29] transition-colors"
                        />
                        <button
                          type="submit"
                          disabled={loading}
                          className="bg-[#FF7E29] hover:bg-[#FF6602] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors duration-200 disabled:opacity-60 flex items-center gap-1.5 shrink-0"
                        >
                          {loading ? "..." : <>Join <ArrowRight className="w-4 h-4" /></>}
                        </button>
                      </div>
                    </form>

                    <p className="text-[#C8C7C7] text-xs mt-4 text-center">
                      No spam, ever. Unsubscribe any time.
                    </p>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#FFF0E5] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#FF7E29]" />
                    </div>
                    <h3 className="text-[#2E2D2D] font-bold text-xl mb-2">You are on the list!</h3>
                    <p className="text-[#6B6A6A] text-sm leading-relaxed">
                      We will be in touch when your priority slot opens. Keep an eye on your inbox.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-6 text-[#FF7E29] font-semibold text-sm hover:underline"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
