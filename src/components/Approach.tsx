"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

export default function Approach() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // Animation triggers only once
    margin: "-100px", // Trigger animation 100px before element comes into view
    amount: 0.3, // Trigger when 30% of the element is visible
  });

  // Container animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Individual element animation variants
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  // Title animation variants
  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <section className="w-full bg-[#FFF0EB] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {/* Title Section */}
          <motion.div className="md:col-span-3" variants={titleVariants}>
            <h2 className="font-medium text-[18px] leading-[120%] tracking-[-0.03em] text-[#FF7E29]">
              OUR APPROACH
              <br className="md:block hidden" />
              TO PROJECTS
            </h2>
          </motion.div>

          {/* Main Content */}
          <motion.div className="md:col-span-9" variants={itemVariants}>
            <p className="text-[27px] font-semibold md:text-[44px] leading-[120%] tracking-[-0.03em] text-[#2E2D2D]">
              We believe that great digital products are built through
              collaboration, clarity, and craftsmanship. Our process is designed
              to turn ideas into impactful solutions efficiently and
              transparently.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
