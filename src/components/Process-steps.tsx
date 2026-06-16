"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: ["Discovery", "& Strategy"],
    bg: "#FF6602",
    body: "We start by understanding your goals, users, and challenges. Through workshops, research, and audits, we uncover the insights needed to define the right direction.",
    radius: "55px",
  },
  {
    number: "02",
    title: ["Design with", "Purpose"],
    bg: "#FF7E29",
    body: "Our design team creates intuitive, engaging user experiences backed by strategy. Every wireframe, screen, and interaction is crafted to serve a purpose and delight your users.",
    radius: "40px",
  },
  {
    number: "03",
    title: ["Agile", "Development"],
    bg: "#FD3600",
    body: "We build in iterative sprints using the best-fit technologies — whether it's no-code, low-code, or full custom development. You get frequent updates, working demos, and flexibility to adapt.",
    radius: "40px",
  },
  {
    number: "04",
    title: ["Launch &", "Optimize"],
    bg: "#FD5527",
    body: "After rigorous testing, we launch with confidence. But we don't stop there — we monitor performance, gather feedback, and continuously improve based on real-world use.",
    radius: "40px",
  },
  {
    number: "05",
    title: ["Partnership", "Mindset"],
    bg: "#FFA501",
    body: "We're not just a service provider — we're your product partner. Your success is our success, and we stay committed beyond the final delivery.",
    radius: "40px",
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundColor: step.bg,
        borderTopLeftRadius: step.radius,
        borderTopRightRadius: step.radius,
        y,
        opacity,
        zIndex: index + 1,
        position: "relative",
      }}
      className="p-6 md:p-12 lg:p-16 pb-20 lg:pb-28"
    >
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="flex items-center">
            <h2 className="text-6xl font-semibold md:text-[80px] leading-[110%] tracking-[-0.03em] text-white mr-4">
              {step.number}
            </h2>
            <div className="flex flex-col">
              {step.title.map((line, i) => (
                <h3
                  key={i}
                  className="text-3xl font-bold md:text-[40px] leading-[120%] tracking-[-0.03em] text-white"
                >
                  {line}
                </h3>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex md:justify-end w-full">
            <p className="font-medium text-[17px] md:text-[20px] leading-[140%] tracking-[-0.03em] text-[#FFF9F5] md:ml-auto md:max-w-[80%]">
              {step.body}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessSteps() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-full mx-auto">
        <div className="bg-gradient-to-b from-[#FFF0EB] via-[#FFF0EB] to-white">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
