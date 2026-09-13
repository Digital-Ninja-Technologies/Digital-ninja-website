"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    label: "Understand",
    color: "#FF6602",
    lightColor: "#FFF0E5",
    body: "We start by understanding your goals, users, and challenges. Through workshops, research, and audits, we uncover the insights needed to define the right direction before a single pixel is designed.",
    deliverables: ["Stakeholder workshops", "Competitor research", "User journey mapping", "Project roadmap"],
  },
  {
    number: "02",
    title: "Design with Purpose",
    label: "Design",
    color: "#FF7E29",
    lightColor: "#FFF4EC",
    body: "Our design team creates intuitive, engaging user experiences backed by strategy. Every wireframe, screen, and interaction is crafted to serve a clear purpose and to convert.",
    deliverables: ["Wireframes & prototypes", "UI design system", "User testing", "Responsive designs"],
  },
  {
    number: "03",
    title: "Agile Development",
    label: "Build",
    color: "#FD3600",
    lightColor: "#FFF0EE",
    body: "We build in iterative sprints using the best fit technologies, whether it is no code, low code, or full custom development. You get frequent updates, working demos, and the flexibility to adapt.",
    deliverables: ["Weekly sprint demos", "Clean codebase", "API integrations", "QA testing"],
  },
  {
    number: "04",
    title: "Launch & Optimize",
    label: "Launch",
    color: "#FD5527",
    lightColor: "#FFF1EE",
    body: "After rigorous testing, we launch with confidence. Then we monitor performance, gather feedback, and continuously improve based on real world use.",
    deliverables: ["Deployment & go live", "Performance monitoring", "Analytics setup", "Feedback loops"],
  },
  {
    number: "05",
    title: "Partnership Mindset",
    label: "Grow",
    color: "#FFA501",
    lightColor: "#FFF8EC",
    body: "We are not just a service provider. We are your product partner. Your success is our success, and we stay committed beyond the final delivery to ensure you keep growing.",
    deliverables: ["Post launch support", "Growth strategy", "Feature iterations", "Long term partnership"],
  },
];

// ── DESKTOP: Scroll-driven sticky section ────────────────────────────────────
function ApproachDesktop() {
  // Outer container height = 100vh (sticky) + scroll distance for 5 steps
  // Each step needs ~120px of scroll travel
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      // 0→1 maps across all steps
      const idx = Math.min(
        steps.length - 1,
        Math.floor(v * steps.length)
      );
      setActive(idx);
    });
    return unsub;
  }, [scrollYProgress]);

  const step = steps[active];

  // Total scroll height: 100vh for sticky + (steps.length - 1) * 80vh to scroll through steps
  const totalHeight = `${100 + (steps.length - 1) * 80}vh`;

  return (
    <div ref={containerRef} style={{ height: totalHeight }} className="relative hidden md:block">
      {/* Sticky inner */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-[#FFF0EB] px-4">
        <div className="max-w-6xl mx-auto w-full">

          {/* Header */}
          <div className="grid grid-cols-12 gap-8 mb-12">
            <div className="col-span-3">
              <h2 className="font-medium text-[18px] leading-[120%] tracking-[-0.03em] text-[#FF7E29]">
                OUR APPROACH
                <br />
                TO PROJECTS
              </h2>
            </div>
            <div className="col-span-9">
              <p className="text-[44px] font-semibold leading-[120%] tracking-[-0.03em] text-[#2E2D2D]">
                We believe that great digital products are built through collaboration, clarity, and craftsmanship.
              </p>
            </div>
          </div>

          {/* Interactive area */}
          <div className="grid grid-cols-5 gap-4">
            {/* Capsule list */}
            <div className="col-span-2 flex flex-col gap-3">
              {steps.map((s, i) => (
                <motion.button
                  key={s.number}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{
                    opacity: i <= active ? 1 : 0.3,
                    x: 0,
                    scale: i === active ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`relative text-left rounded-2xl px-5 py-4 transition-all duration-300 cursor-pointer border-2 ${
                    active === i ? "shadow-lg" : "bg-white/60 hover:bg-white border-transparent"
                  }`}
                  style={active === i ? { backgroundColor: s.lightColor, borderColor: s.color } : {}}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                      style={
                        active === i
                          ? { backgroundColor: s.color, color: "#fff" }
                          : { backgroundColor: "#F2F0EE", color: "#999797" }
                      }
                    >
                      {s.number}
                    </span>
                    <div>
                      <p
                        className="font-semibold text-sm leading-tight transition-colors duration-300"
                        style={{ color: active === i ? s.color : "#2E2D2D" }}
                      >
                        {s.title}
                      </p>
                      <p className="text-xs text-[#999797] mt-0.5">{s.label}</p>
                    </div>
                    {active === i && (
                      <ArrowRight className="w-4 h-4 ml-auto shrink-0" style={{ color: s.color }} />
                    )}
                  </div>
                  {active === i && (
                    <motion.div
                      layoutId="activeBarDesktop"
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                      style={{ backgroundColor: s.color }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Content panel */}
            <div className="col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl p-8 md:p-10"
                  style={{ backgroundColor: step.lightColor, border: `2px solid ${step.color}22` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-[72px] font-bold leading-none" style={{ color: `${step.color}22` }}>
                      {step.number}
                    </span>
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: step.color, color: "#fff" }}
                    >
                      {step.label}
                    </span>
                  </div>
                  <h3 className="text-[32px] font-semibold leading-tight tracking-[-0.03em] mb-4" style={{ color: step.color }}>
                    {step.title}
                  </h3>
                  <p className="text-[#4D4C4C] text-lg leading-[170%] mb-8">{step.body}</p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#999797] mb-4">What you get</p>
                    <div className="grid grid-cols-2 gap-2">
                      {step.deliverables.map((d, i) => (
                        <motion.div
                          key={d}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.07 }}
                          className="flex items-center gap-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: step.color }} />
                          <span className="text-[#4D4C4C] text-sm">{d}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-8 pt-6 border-t border-black/5">
                    {steps.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="transition-all duration-300 rounded-full cursor-pointer"
                        style={{
                          width: active === i ? "24px" : "8px",
                          height: "8px",
                          backgroundColor: active === i ? step.color : "#D9D7D4",
                        }}
                      />
                    ))}
                    <button
                      onClick={() => setActive((active + 1) % steps.length)}
                      className="ml-auto flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: step.color }}
                    >
                      Next step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Scroll progress hint */}
          <div className="flex justify-center mt-8 gap-1.5">
            {steps.map((s, i) => (
              <div
                key={i}
                className="h-1 rounded-full transition-all duration-500"
                style={{
                  width: i <= active ? "32px" : "8px",
                  backgroundColor: i <= active ? step.color : "#E0DDD9",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── MOBILE: Standard interactive tabs ───────────────────────────────────────
function ApproachMobile() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const step = steps[active];

  return (
    <div ref={ref} className="block md:hidden bg-[#FFF0EB] py-16 px-4">
      <div className="mb-10">
        <h2 className="font-medium text-[16px] tracking-[-0.03em] text-[#FF7E29] mb-4">
          OUR APPROACH TO PROJECTS
        </h2>
        <p className="text-[26px] font-semibold leading-[120%] tracking-[-0.03em] text-[#2E2D2D]">
          We believe that great digital products are built through collaboration, clarity, and craftsmanship.
        </p>
      </div>

      {/* Horizontal scroll tabs */}
      <div className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide mb-6">
        {steps.map((s, i) => (
          <button
            key={s.number}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 rounded-2xl px-4 py-3 border-2 transition-all duration-300 text-left ${
              active === i ? "shadow-md" : "bg-white/60 border-transparent"
            }`}
            style={active === i ? { backgroundColor: s.lightColor, borderColor: s.color } : {}}
          >
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={active === i ? { backgroundColor: s.color, color: "#fff" } : { backgroundColor: "#F2F0EE", color: "#999797" }}
              >
                {s.number}
              </span>
              <div>
                <p className="font-semibold text-sm whitespace-nowrap" style={{ color: active === i ? s.color : "#2E2D2D" }}>
                  {s.title}
                </p>
                <p className="text-xs text-[#999797]">{s.label}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl p-6"
          style={{ backgroundColor: step.lightColor, border: `2px solid ${step.color}22` }}
        >
          <div className="flex items-start justify-between mb-4">
            <span className="text-[56px] font-bold leading-none" style={{ color: `${step.color}22` }}>{step.number}</span>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: step.color, color: "#fff" }}>
              {step.label}
            </span>
          </div>
          <h3 className="text-[24px] font-semibold tracking-[-0.03em] mb-3" style={{ color: step.color }}>{step.title}</h3>
          <p className="text-[#4D4C4C] text-base leading-[170%] mb-6">{step.body}</p>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#999797] mb-3">What you get</p>
            <div className="grid grid-cols-2 gap-2">
              {step.deliverables.map((d) => (
                <div key={d} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: step.color }} />
                  <span className="text-[#4D4C4C] text-sm">{d}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-6 pt-5 border-t border-black/5">
            {steps.map((s, i) => (
              <button key={i} onClick={() => setActive(i)} className="transition-all duration-300 rounded-full"
                style={{ width: active === i ? "24px" : "8px", height: "8px", backgroundColor: active === i ? step.color : "#D9D7D4" }} />
            ))}
            <button onClick={() => setActive((active + 1) % steps.length)} className="ml-auto flex items-center gap-1.5 text-sm font-medium" style={{ color: step.color }}>
              Next step <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Approach() {
  return (
    <>
      <ApproachDesktop />
      <ApproachMobile />
    </>
  );
}
