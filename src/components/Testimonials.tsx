"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Digital Ninja Technologies knows how to deliver real value clearly and simply. Every project comes with thoughtful communication and output that always leaves you with something better than you started with. We have learned a lot just by working with their team.",
    name: "Tobi Akinpelu",
    title: "Client",
    linkedin: "https://www.linkedin.com/in/tobiakinpelu/",
    initials: "TA",
    color: "#FF6602",
  },
  {
    quote:
      "Digital Ninja Technologies is a really great design partner to work with. Their design thinking approach is awesome and impressive. The team understands what you need, brings creative ideas to the table, and executes to a high standard. Truly great to work with.",
    name: "Stephen Promise",
    title: "Partner",
    linkedin: "https://www.linkedin.com/in/uchenna-p-stephen/",
    initials: "SP",
    color: "#FF7E29",
  },
  {
    quote:
      "Digital Ninja Technologies is a dedicated and creative agency. In a world where it is hard to trust young entrepreneurs, they stand out because they deliver creative projects on time. A rare combination of creative genius and reliable execution. It is a genuine pleasure to do business with them.",
    name: "Chijioke Oko",
    title: "Client",
    linkedin: "https://www.linkedin.com/in/chijioke-oko-903230169/",
    initials: "CO",
    color: "#FD3600",
  },
  {
    quote:
      "An invaluable team whose work ethics, standards, and skill are top notch. Their designs are not just beautiful, they actually work for the business. I will recommend Digital Ninja Technologies to anyone who wants quality without compromise.",
    name: "Eugene Adavore",
    title: "Partner",
    linkedin: "https://www.linkedin.com/in/eugeneadavore/",
    initials: "EA",
    color: "#FD5527",
  },
  {
    quote:
      "Amazing design team and very organised. They adhere to project requirements and always deliver a clean job on time. No back and forth, no delays. It is always great working with Digital Ninja Technologies.",
    name: "Hillary Utuke",
    title: "Client, Korlod Works",
    linkedin: "",
    initials: "HU",
    color: "#FFA501",
  },
  {
    quote:
      "Digital Ninja Technologies is brilliant at both UI/UX and web development. My favourite thing about working with them is how they incorporate strategy into their design thinking process. In today's fast paced economy, great design is a key factor in how consumers buy products and that is something they are excellent at. Highly recommend.",
    name: "Arinze Victoria",
    title: "Client",
    linkedin: "",
    initials: "AV",
    color: "#FF6602",
  },
  {
    quote:
      "Digital Ninja Technologies is an incredibly talented team with a sharp eye for detail and user experience. Their ability to turn complex ideas into intuitive and visually appealing designs is impressive. Professional, communicative, and always delivering high quality work. Highly recommend.",
    name: "Sodiq",
    title: "Partner",
    linkedin: "",
    initials: "SO",
    color: "#FF7E29",
  },
  {
    quote:
      "Digital Ninja Technologies just gets it. Clean, thoughtful designs with real user flow in mind. Fast turnaround, no fluff. Easily one of the best design teams I have worked with.",
    name: "Ayoola Daniel",
    title: "Partner",
    linkedin: "",
    initials: "AD",
    color: "#FD3600",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  // Auto-slide every 6 seconds, pause when hovered or manually interacted
  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const handleManualNav = (index: number) => {
    setCurrent(index);
    // Restart the timer after manual interaction
    setPaused(false);
  };

  const t = testimonials[current];

  return (
    <section ref={ref} className="bg-white py-20 md:py-28 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-3">
              Testimonials
            </p>
            <h2 className="text-[28px] md:text-[44px] font-semibold leading-[115%] tracking-[-0.03em] text-[#2E2D2D]">
              Providing{" "}
              <span className="text-[#FF6602]">5-star services</span>,
              <br className="hidden md:block" />
              as said by our clients
            </h2>
          </motion.div>

          {/* Nav arrows */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => { prev(); setPaused(false); }}
              className="w-11 h-11 rounded-full border border-[#F2F2F2] bg-white hover:border-[#FF7E29] hover:text-[#FF7E29] flex items-center justify-center transition-all duration-200 text-[#6B6A6A]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-[#999797] text-sm font-medium tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => { next(); setPaused(false); }}
              className="w-11 h-11 rounded-full border border-[#F2F2F2] bg-white hover:border-[#FF7E29] hover:text-[#FF7E29] flex items-center justify-center transition-all duration-200 text-[#6B6A6A]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onClick={() => setPaused(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl bg-[#FFF8F3] border border-[#FFE0CC] p-10 md:p-14"
            >
              <Quote
                className="absolute top-8 right-10 opacity-10 w-16 h-16"
                style={{ color: t.color }}
              />
              <p className="text-[#2E2D2D] text-xl md:text-2xl font-medium leading-[160%] tracking-[-0.02em] mb-10 max-w-4xl">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  {t.linkedin ? (
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#2E2D2D] hover:text-[#FF6602] transition-colors duration-200 text-base"
                    >
                      {t.name}
                    </a>
                  ) : (
                    <p className="font-semibold text-[#2E2D2D] text-base">{t.name}</p>
                  )}
                  <p className="text-[#999797] text-sm">{t.title}</p>
                </div>
                {/* Rating dots */}
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full" style={{ backgroundColor: t.color }} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleManualNav(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === current ? testimonials[current].color : "#E5E5E3",
              }}
            />
          ))}
        </div>

        {/* Grid of all names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10"
        >
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => handleManualNav(i)}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                i === current
                  ? "border-[#FFE0CC] bg-[#FFF8F3]"
                  : "border-[#F2F2F2] bg-white hover:border-[#FFE0CC]"
              }`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mb-2"
                style={{ backgroundColor: i === current ? item.color : "#D9D7D4" }}
              >
                {item.initials}
              </div>
              <p className={`font-semibold text-sm leading-tight ${i === current ? "text-[#2E2D2D]" : "text-[#999797]"}`}>
                {item.name}
              </p>
              <p className="text-xs text-[#C8C7C7] mt-0.5">{item.title}</p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
