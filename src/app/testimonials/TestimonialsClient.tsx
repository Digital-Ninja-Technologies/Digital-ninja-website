"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, ArrowRight, Star, Quote, ExternalLink } from "lucide-react";
import Link from "next/link";

// ── VIDEO CONFIG ─────────────────────────────────────────────────────────────
// Option A: YouTube embed (paste your YouTube video ID after uploading)
// e.g. https://youtu.be/abc123 → VIDEO_ID = "abc123"
const YOUTUBE_ID = ""; // ← paste YouTube video ID here after uploading

// Option B: Google Drive direct embed
// Share the file → Get link → copy the file ID
// e.g. https://drive.google.com/file/d/FILE_ID/view → paste FILE_ID below
const GDRIVE_ID = ""; // ← paste Google Drive file ID here

// Option C: Any direct MP4 URL (Cloudinary, Bunny, S3 etc.)
const VIDEO_URL = ""; // ← paste direct video URL here

const textTestimonials = [
  {
    name: "Veritas",
    role: "Escrow Fintech App — Founder",
    text: "Digital Ninja Technologies delivered exactly what we needed — a high-converting waitlist site and mobile app UI in record time. The team communicated clearly throughout and did not disappear after launch.",
    rating: 5,
  },
  {
    name: "Brandface",
    role: "Legal Marketing Agency",
    text: "Our landing page went from an idea to a live, converting site in under 4 weeks. The design quality was well above what we expected. Professional team that delivers what they promise.",
    rating: 5,
  },
  {
    name: "Korlod Works",
    role: "Creative Agency",
    text: "We needed a website that matched the quality of our creative work. DNT delivered a site we are genuinely proud to show clients. Fast, professional, and easy to work with throughout.",
    rating: 5,
  },
];

function VideoEmbed() {
  const [playing, setPlaying] = useState(false);

  // YouTube embed
  if (YOUTUBE_ID) {
    return (
      <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 aspect-video">
        {!playing ? (
          // Thumbnail with play button
          <div className="relative w-full h-full bg-[#0A0E1A] flex items-center justify-center">
            <img
              src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
              alt="Testimonial video thumbnail"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-5 left-5">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF6602] animate-pulse" />
                <span className="text-white text-xs font-semibold">Client Testimonial</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPlaying(true)}
              className="relative z-10 w-20 h-20 rounded-full bg-[#FF6602] flex items-center justify-center shadow-2xl shadow-orange-500/40"
            >
              <Play className="w-7 h-7 text-white ml-1" />
            </motion.button>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    );
  }

  // Google Drive embed
  if (GDRIVE_ID) {
    return (
      <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 aspect-video">
        <iframe
          src={`https://drive.google.com/file/d/${GDRIVE_ID}/preview`}
          className="w-full h-full"
          allow="autoplay"
        />
        <div className="absolute top-5 left-5">
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF6602] animate-pulse" />
            <span className="text-white text-xs font-semibold">Client Testimonial</span>
          </div>
        </div>
      </div>
    );
  }

  // Direct video URL
  if (VIDEO_URL) {
    return (
      <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 aspect-video group">
        <video
          src={VIDEO_URL}
          controls
          playsInline
          className="w-full h-full object-cover"
          poster=""
        />
        <div className="absolute top-5 left-5 pointer-events-none">
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF6602] animate-pulse" />
            <span className="text-white text-xs font-semibold">Client Testimonial</span>
          </div>
        </div>
      </div>
    );
  }

  // Placeholder while video URL is being configured
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 aspect-video bg-[#111827] flex flex-col items-center justify-center gap-4 border border-white/10">
      <div className="w-20 h-20 rounded-full bg-[#FF6602]/10 border border-[#FF6602]/30 flex items-center justify-center">
        <Play className="w-8 h-8 text-[#FF7E29] ml-1" />
      </div>
      <div className="text-center">
        <p className="text-white font-semibold mb-1">Video coming soon</p>
        <p className="text-[#6B6A6A] text-sm">Upload the video to YouTube or Google Drive and add the ID to the page config</p>
      </div>
      <a
        href="https://www.youtube.com/upload"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[#FF7E29] text-sm hover:underline"
      >
        Upload to YouTube <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

export default function TestimonialsClient() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section ref={heroRef} className="bg-[#0A0E1A] pt-36 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(255,102,2,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#FF7E29]/10 border border-[#FF7E29]/30 text-[#FF7E29] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-7"
          >
            ⭐ Video Testimonial
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[32px] sm:text-[44px] md:text-[56px] font-semibold leading-[110%] tracking-[-0.04em] text-white mb-6"
          >
            Hear it from the{" "}
            <span className="text-[#FF7E29] italic">people we built for.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8A8888] text-lg leading-[170%] max-w-2xl mx-auto"
          >
            We let our clients do the talking. Here is what founders and business owners say about working with Digital Ninja Technologies.
          </motion.p>
        </div>
      </section>

      {/* Video */}
      <section className="py-20 px-4 bg-[#0A0E1A] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <VideoEmbed />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FF7E29] text-[#FF7E29]" />
              ))}
            </div>
            <p className="text-[#6B6A6A] text-sm">Real client. Real experience. No script.</p>
          </motion.div>
        </div>
      </section>

      {/* Text testimonials */}
      <section ref={cardsRef} className="py-20 px-4 bg-[#FFF8F3]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-3">More from our clients</p>
            <h2 className="text-[28px] md:text-[38px] font-semibold leading-tight tracking-[-0.03em] text-[#2E2D2D]">
              What clients say about working with us.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {textTestimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-[#F2F2F2] hover:border-[#FFE0CC] hover:shadow-lg transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-[#FF7E29] mb-5 opacity-60" />
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star key={si} className="w-3.5 h-3.5 fill-[#FF7E29] text-[#FF7E29]" />
                  ))}
                </div>
                <p className="text-[#4D4C4C] text-[15px] leading-[175%] mb-6">{t.text}</p>
                <div className="pt-5 border-t border-[#F2F2F2]">
                  <p className="font-semibold text-[#2E2D2D] text-sm">{t.name}</p>
                  <p className="text-[#999797] text-xs mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 border-t border-[#F2F2F2]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[["10+","Projects Delivered"],["100%","On-time Delivery"],["4+","Countries Served"],["5★","Average Rating"]].map(([v,l],i) => (
            <motion.div key={i} initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.08 }}>
              <p className="text-[32px] md:text-[40px] font-bold text-[#FF6602] leading-none mb-2">{v}</p>
              <p className="text-[#6B6A6A] text-sm">{l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0A0E1A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight tracking-[-0.03em] text-white mb-5">
            Ready to become our next success story?
          </h2>
          <p className="text-[#8A8888] text-lg leading-[170%] mb-8">
            Book a free 15-minute discovery call and let us show you how we work before you commit to anything.
          </p>
          <Link href="/booking">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 10px 32px rgba(255,102,2,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] text-white font-semibold text-base py-4 px-10 rounded-full"
            >
              Book a free 15min call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
