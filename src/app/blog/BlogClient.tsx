"use client";

import { posts } from "./posts";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export default function BlogClient() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

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
            ✍️ Blog & Insights
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[32px] sm:text-[44px] md:text-[56px] font-semibold leading-[110%] tracking-[-0.04em] text-white mb-6"
          >
            Insights for founders,{" "}
            <span className="text-[#FF7E29] italic">builders,</span>{" "}
            and growing businesses.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8A8888] text-lg leading-[170%] max-w-2xl mx-auto"
          >
            Practical guides on web design, software development, startup advice, digital marketing, and growing a business online — from the team at Digital Ninja Technologies.
          </motion.p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Featured post */}
          <FeaturedPost post={posts[0]} />

          {/* All posts */}
          <div className="mt-16">
            <h2 className="text-xl font-semibold text-[#2E2D2D] mb-8 tracking-[-0.02em]">All articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(1).map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#FFF8F3]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-4">Work with us</p>
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight tracking-[-0.03em] text-[#2E2D2D] mb-5">
            Ready to build your digital presence?
          </h2>
          <p className="text-[#6B6A6A] text-lg leading-[170%] mb-8">
            Digital Ninja Technologies helps businesses and startups across Africa and globally build websites, apps, and digital products that actually work.
          </p>
          <Link href="/booking">
            <motion.button
              whileHover={{ scale: 1.04 }}
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

function FeaturedPost({ post }: { post: typeof posts[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-[#F2F2F2] hover:border-[#FFE0CC] hover:shadow-xl hover:shadow-orange-50 transition-all duration-400">
          <div className="bg-gradient-to-br from-[#FF6602] to-[#FD3600] p-10 md:p-14 flex flex-col justify-between min-h-[280px]">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                Featured
              </span>
              <h2 className="text-white text-[22px] md:text-[30px] font-semibold leading-tight tracking-[-0.03em] group-hover:opacity-90 transition-opacity">
                {post.title}
              </h2>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <span className="text-white/70 text-sm flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
              <span className="text-white/70 text-sm">·</span>
              <span className="text-white/70 text-sm">{post.category}</span>
            </div>
          </div>
          <div className="p-10 md:p-14 bg-white flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF7E29] bg-[#FFF0E5] px-3 py-1.5 rounded-full mb-5">
                <Tag className="w-3 h-3" />{post.category}
              </span>
              <p className="text-[#4D4C4C] text-base leading-[170%] mb-6">{post.excerpt}</p>
            </div>
            <div className="flex items-center gap-2 text-[#FF7E29] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
              Read article <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function PostCard({ post, index }: { post: typeof posts[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="group h-full flex flex-col rounded-3xl border border-[#F2F2F2] hover:border-[#FFE0CC] hover:shadow-lg hover:shadow-orange-50/60 transition-all duration-300 overflow-hidden bg-white">
          <div className="p-7 flex-1 flex flex-col">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF7E29] bg-[#FFF0E5] px-3 py-1.5 rounded-full mb-5 self-start">
              <Tag className="w-3 h-3" />{post.category}
            </span>
            <h3 className="text-[#2E2D2D] font-semibold text-lg leading-snug tracking-[-0.02em] mb-3 group-hover:text-[#FF6602] transition-colors duration-200 flex-1">
              {post.title}
            </h3>
            <p className="text-[#6B6A6A] text-sm leading-[165%] mb-5 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F2F2F2]">
              <span className="text-[#999797] text-xs flex items-center gap-1.5">
                <Clock className="w-3 h-3" />{post.readTime}
              </span>
              <span className="text-[#FF7E29] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                Read <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
