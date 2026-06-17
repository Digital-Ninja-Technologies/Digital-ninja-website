"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
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
    body: "Our design team creates intuitive, engaging user experiences backed by strategy. Every wireframe, screen, and interaction is crafted to serve a purpose — and to convert.",
    deliverables: ["Wireframes & prototypes", "UI design system", "User testing", "Responsive designs"],
  },
  {
    number: "03",
    title: "Agile Development",
    label: "Build",
    color: "#FD3600",
    lightColor: "#FFF0EE",
    body: "We build in iterative sprints using the best fit technologies — whether it is no code, low code, or full custom development. You get frequent updates, working demos, and flexibility to adapt.",
    deliverables: ["Weekly sprint demos", "Clean codebase", "API integrations", "QA testing"],
  },
  {
    number: "04",
    title: "Launch & Optimize",
    label: "Launch",
    color: "#FD5527",
    lightColor: "#FFF1EE",
    body: "After rigorous testing, we launch with confidence. But we don't stop there — we monitor performance, gather feedback, and continuously improve based on real world use.",
    deliverables: ["Deployment & go live", "Performance monitoring", "Analytics setup", "Feedback loops"],
  },
  {
    number: "05",
    title: "Partnership Mindset",
    label: "Grow",
    color: "#FFA501",
    lightColor: "#FFF8EC",
    body: "We are not just a service provider — we are your product partner. Your success is our success, and we stay committed beyond the final delivery to ensure you keep growing.",
    deliverables: ["Post launch support", "Growth strategy", "Feature iterations", "Long term partnership"],
  },
];

export default function Approach() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const step = steps[active];

  return (
    <section ref={ref} className="w-full bg-[#FFF0EB] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-medium text-[18px] leading-[120%] tracking-[-0.03em] text-[#FF7E29]">
              OUR APPROACH
              <br className="md:block hidden" />
              TO PROJECTS
            </h2>
          </motion.div>

          <motion.div
            className="md:col-span-9"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-[27px] font-semibold md:text-[44px] leading-[120%] tracking-[-0.03em] text-[#2E2D2D]">
              We believe that great digital products are built through collaboration, clarity, and craftsmanship.
            </p>
          </motion.div>
        </div>

        {/* Interactive area */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-4"
        >
          {/* Step tabs — vertical on desktop, horizontal scroll on mobile */}
          <div className="lg:col-span-2 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {steps.map((s, i) => (
              <button
                key={s.number}
                onClick={() => setActive(i)}
                className={`relative flex-shrink-0 lg:flex-shrink text-left rounded-2xl px-5 py-4 lg:py-5 transition-all duration-300 cursor-pointer border-2 group ${
                  active === i
                    ? "border-transparent shadow-lg"
                    : "border-transparent bg-white/60 hover:bg-white"
                }`}
                style={active === i ? { backgroundColor: s.lightColor, borderColor: s.color } : {}}
              >
                <div className="flex items-center gap-3">
                  {/* Number pill */}
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
                      className="font-semibold text-sm leading-tight transition-colors duration-300 whitespace-nowrap lg:whitespace-normal"
                      style={{ color: active === i ? s.color : "#2E2D2D" }}
                    >
                      {s.title}
                    </p>
                    <p className="text-xs text-[#999797] mt-0.5 hidden lg:block">{s.label}</p>
                  </div>
                  {active === i && (
                    <ArrowRight className="w-4 h-4 ml-auto shrink-0 hidden lg:block" style={{ color: s.color }} />
                  )}
                </div>

                {/* Active indicator bar */}
                {active === i && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                    style={{ backgroundColor: s.color }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl p-8 md:p-10 h-full"
                style={{ backgroundColor: step.lightColor, border: `2px solid ${step.color}22` }}
              >
                {/* Step number large */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-[72px] font-bold leading-none"
                    style={{ color: `${step.color}22` }}
                  >
                    {step.number}
                  </span>
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: step.color, color: "#fff" }}
                  >
                    {step.label}
                  </span>
                </div>

                <h3
                  className="text-2xl md:text-[32px] font-semibold leading-tight tracking-[-0.03em] mb-4"
                  style={{ color: step.color }}
                >
                  {step.title}
                </h3>

                <p className="text-[#4D4C4C] text-base md:text-lg leading-[170%] mb-8">
                  {step.body}
                </p>

                {/* Deliverables */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#999797] mb-4">
                    What you get
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.deliverables.map((d, i) => (
                      <motion.div
                        key={d}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.07 }}
                        className="flex items-center gap-2.5"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: step.color }}
                        />
                        <span className="text-[#4D4C4C] text-sm">{d}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Navigation dots */}
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
                    className="ml-auto flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                    style={{ color: step.color }}
                  >
                    Next step
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
