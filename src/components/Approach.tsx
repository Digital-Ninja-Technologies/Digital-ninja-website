"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

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

// Each step gets one viewport height of scroll
const STEP_HEIGHT = 100; // vh per step
const TOTAL_HEIGHT = steps.length * STEP_HEIGHT;

function StepCard({
  step,
  index,
  scrollYProgress,
}: {
  step: (typeof steps)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const n = steps.length;
  const enter = index / n;
  const exit = (index + 1) / n;

  // Slide up into view, stay, then fade out
  const y = useTransform(
    scrollYProgress,
    [enter - 0.01, enter + 0.15, exit - 0.05, exit],
    ["60px", "0px", "0px", "-30px"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [enter - 0.01, enter + 0.12, exit - 0.08, exit],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ y, opacity, zIndex: index + 1 }}
      className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center"
    >
      <div
        className="rounded-3xl p-8 md:p-10 h-full flex flex-col justify-center"
        style={{ backgroundColor: step.lightColor, border: `2px solid ${step.color}25` }}
      >
        {/* Header row */}
        <div className="flex items-start justify-between mb-6">
          <span
            className="text-[80px] font-bold leading-none select-none"
            style={{ color: `${step.color}20` }}
          >
            {step.number}
          </span>
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mt-2"
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
          <div className="grid grid-cols-2 gap-3">
            {step.deliverables.map((d) => (
              <div key={d} className="flex items-center gap-2.5">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: step.color }}
                />
                <span className="text-[#4D4C4C] text-sm">{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step indicator dots */}
        <div className="flex items-center gap-2 mt-8 pt-6 border-t border-black/5">
          {steps.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === index ? step.color : "#D9D7D4",
              }}
            />
          ))}
          <span className="ml-auto text-xs text-[#999797] font-medium">
            {index + 1} of {steps.length}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Approach() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    // Tall scroll canvas
    <div
      ref={containerRef}
      style={{ height: `${TOTAL_HEIGHT}vh` }}
      className="relative bg-[#FFF0EB]"
    >
      {/* Sticky wrapper — fills viewport, holds both columns */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full max-w-6xl mx-auto px-4 lg:px-8 gap-8 lg:gap-16">

          {/* ── LEFT: always fixed, never moves ── */}
          <div className="flex flex-col justify-center py-20 lg:py-0">
            <p className="font-medium text-[15px] uppercase tracking-widest text-[#FF7E29] mb-6">
              Our Approach to Projects
            </p>
            <h2 className="text-[28px] md:text-[42px] font-semibold leading-[118%] tracking-[-0.03em] text-[#2E2D2D] mb-8">
              We believe great digital products are built through collaboration, clarity, and craftsmanship.
            </h2>

            {/* Step nav list */}
            <div className="space-y-3">
              {steps.map((s, i) => {
                // Highlight current step based on scroll
                const stepStart = i / steps.length;
                const stepEnd = (i + 1) / steps.length;

                return (
                  <ActiveStep
                    key={s.number}
                    step={s}
                    index={i}
                    scrollYProgress={scrollYProgress}
                    stepStart={stepStart}
                    stepEnd={stepEnd}
                  />
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: stacked scroll-driven cards ── */}
          <div className="relative hidden lg:flex flex-col justify-center py-16">
            <div className="relative h-[520px]">
              {steps.map((step, i) => (
                <StepCard
                  key={step.number}
                  step={step}
                  index={i}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Active step indicator in the left column
function ActiveStep({
  step,
  index,
  scrollYProgress,
  stepStart,
  stepEnd,
}: {
  step: (typeof steps)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
  stepStart: number;
  stepEnd: number;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [stepStart - 0.02, stepStart + 0.05, stepEnd - 0.05, stepEnd],
    [0.35, 1, 1, 0.35]
  );
  const x = useTransform(
    scrollYProgress,
    [stepStart - 0.02, stepStart + 0.08],
    [0, 6]
  );

  return (
    <motion.div
      style={{ opacity, x }}
      className="flex items-center gap-3 transition-all duration-200"
    >
      <span
        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300"
        style={{ backgroundColor: step.color, color: "#fff" }}
      >
        {step.number}
      </span>
      <span className="font-medium text-[15px] text-[#2E2D2D] leading-tight">
        {step.title}
      </span>
    </motion.div>
  );
}
