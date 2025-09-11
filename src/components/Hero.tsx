"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import MultiStepModal from "./Multi-step-modal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Mouse tracking for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Enhanced animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1], // Custom cubic-bezier for smoother feel
      },
    },
  };

  // Enhanced button with magnetic effect
  const buttonVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(255, 102, 2, 0.3)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  // Enhanced image with floating animation
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -15,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0, 1],
        delay: 0.3,
      },
    },
    float: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  // Text highlight animation
  const highlightVariants: Variants = {
    hidden: {
      backgroundSize: "0% 100%",
    },
    visible: {
      backgroundSize: "100% 100%",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 1.2,
      },
    },
  };

  return (
    <main className="flex md:min-h-[90vh] min-h-[80vh] flex-col items-center justify-center bg-[#ffffff] text-[#000] p-4 md:p-8 lg:p-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#FF6602]/10 to-[#FF7E29]/10 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-[#FD3600]/10 to-[#FF6602]/10 rounded-full blur-xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container relative mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left column - Enhanced with typewriter effect */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}>
            <motion.p
              className="text-lg mt-12 md:mt-0 text-center md:text-start font-semibold md:text-[24px] leading-[120%] tracking-[-0.03em]"
              variants={itemVariants}>
              From{" "}
              <motion.span
                className="text-[#FD3600] relative"
                variants={highlightVariants}
                initial="hidden"
                animate="visible">
                Ideas
              </motion.span>{" "}
              to{" "}
              <motion.span
                className="text-[#FD3600] relative"
                variants={highlightVariants}
                initial="hidden"
                animate="visible">
                Startups
              </motion.span>
            </motion.p>

            <motion.h1
              className="text-[40px] text-center md:text-start md:text-[48px] font-semibold leading-[120%] tracking-[-0.03em] text-[#2E2D2D]"
              variants={itemVariants}>
              We build{" "}
              <motion.span
                className="text-[#FD3600] relative "
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 8px rgba(253, 54, 0, 0.3)",
                }}
                transition={{ duration: 0.2 }}>
                digital products
              </motion.span>{" "}
              that
              <span className="block text-[#2E2D2D]">drives results.</span>
            </motion.h1>

            <div className="flex items-center md:justify-start justify-center">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6602] to-[#FF7E29] hover:from-[#FF8A3D] hover:to-[#FFAA66] font-medium text-[18px] leading-[160%] tracking-[-0.03em] text-white py-3 px-8 rounded-full transition-all duration-300 relative overflow-hidden group"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap">
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  initial={{ x: "-100%" }}
                />
                <span className="relative z-10">Get started</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}>
                  <ArrowRight className="h-5 w-5 relative z-10" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>

          {/* Center column - Enhanced 3D image with floating animation */}
          <motion.div
            className="flex relative md:-top-28 justify-center items-center"
            style={{ y: y1 }}>
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              variants={imageVariants}
              initial="hidden"
              animate={["visible", "float"]}
              style={{
                x: mousePosition.x * 0.3,
                y: mousePosition.y * 0.3,
              }}>
              <Image
                src="/hero-img.svg"
                alt="3D geometric shape"
                width={400}
                height={400}
                className="object-contain rotating-image drop-shadow-2xl"
                priority
              />

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FF6602]/20 to-[#FF7E29]/20 rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right column - Enhanced with slide and fade */}
          <motion.div
            className="text-center md:text-start md:flex flex-col justify-center"
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0, 1],
                delay: 0.6,
              },
            }}
            style={{
              y: y2,
              x: mousePosition.x * -0.2,
            }}>
            <motion.p
              className="font-medium text-[20px] leading-[140%] tracking-[-0.03em] text-[#4D4C4C] max-w-md"
              whileInView={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}>
              Empowering brands and start-ups with impactful digital solutions
              through <br className="md:block hidden" /> strategic design and
              development.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <MultiStepModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </main>
  );
}
