"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { value: 10, suffix: "+", label: "Websites" },
  { value: 6, suffix: "+", label: "Product Designs" },
  { value: 2, suffix: "+", label: "Logo & Branding" },
  { value: 1, suffix: "+", label: "Animation Project" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = to / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function MetricsBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="w-full bg-white py-10 px-4 border-b border-[#F2F2F2]">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-[#999797] text-sm font-medium uppercase tracking-widest mb-8"
        >
          We've successfully delivered
        </motion.p>

        {/* Metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#F2F2F2]">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center py-2 md:px-8"
            >
              <p className="text-4xl md:text-5xl font-bold text-[#2E2D2D] mb-1 tabular-nums">
                <CountUp to={m.value} suffix={m.suffix} />
              </p>
              <p className="text-[#999797] text-sm font-medium">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
