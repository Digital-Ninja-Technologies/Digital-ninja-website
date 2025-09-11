"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MultiStepModal from "./Multi-step-modal";
import { useRef, useState } from "react";
import { useInView, motion, type Variants } from "framer-motion";

export default function AboutHeroAnimated() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // Animation triggers only once
    margin: "-100px", // Trigger animation 100px before element comes into view
    amount: 0.3, // Trigger when 30% of the element is visible
  });

  // Container animation for staggered children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Text animation - slide up and fade in
  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
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

  // Button animation with bounce effect
  const buttonVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  // Image animation - slide in from right with rotation
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 50,
      rotate: 6,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 3,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0, 1],
        delay: 0.4,
      },
    },
    hover: {
      rotate: 0,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex md:min-h-[90vh] min-h-[70vh] flex-col items-center justify-center bg-[#ffffff] text-[#000] p-4 md:p-8 lg:p-12 overflow-hidden">
      <div className="relative container mx-auto px-1 py-5 lg:py-20">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {/* Left content */}
          <div className="space-y-8">
            {/* Main headline with typewriter-like reveal */}
            <motion.div
              className="md:px-8 px-4 relative"
              variants={textVariants}>
              <motion.h1
                className="text-2xl lg:text-5xl font-[600] text-gray-900 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}>
                Driven by{" "}
                <motion.span
                  className=""
                  initial={{ backgroundSize: "0% 100%" }}
                  animate={{ backgroundSize: "100% 100%" }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0% 100%",
                    backgroundSize: "0% 3px",
                  }}>
                  excellence
                </motion.span>
                , we are a small team of designers and developers that do great
                work.
              </motion.h1>
            </motion.div>

            {/* CTA Button with enhanced hover effects */}
            <motion.div
              className="flex mx-4 md:mx-8 items-center gap-4"
              variants={buttonVariants}>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="bg-gradient-to-r from-[#FF6602] to-[#FF7E29] py-6 hover:from-[#FF8A3D] hover:to-[#FFAA66] text-white rounded-full text-lg font-medium relative overflow-hidden group">
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    initial={{ x: "-100%" }}
                  />
                  <span className="flex items-center justify-center relative z-10">
                    Work with us
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right content - Team image with floating animation */}
          <motion.div
            className="relative"
            variants={imageVariants}
            whileHover="hover">
            <motion.div
              className="transform rotate-3 hover:rotate-0 transition-transform duration-300"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}>
              <div className="rounded-2xl overflow-hidden p-2 relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    imageLoaded
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.8, opacity: 0 }
                  }
                  transition={{ duration: 0.5 }}>
                  <Image
                    src="/about-hero.svg"
                    alt="Team of designers and developers working together"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                    priority
                    quality={90}
                    onLoad={() => setImageLoaded(true)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </motion.div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FF6602]/10 to-[#FF7E29]/10 rounded-2xl blur-xl -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <MultiStepModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
