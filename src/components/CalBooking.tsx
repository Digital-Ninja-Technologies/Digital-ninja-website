"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CalBooking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "15min", {origin:"https://app.cal.com"});
      Cal.config = Cal.config || {};
      Cal.config.forwardQueryParams = true;
      Cal.ns["15min"]("inline", {
        elementOrSelector:"#my-cal-inline-15min",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "the-digital-ninja-technologies-fucsfq/15min",
      });
      Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section ref={ref} className="w-full bg-white py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#FF7E29] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Free Discovery Call
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-semibold text-[32px] md:text-[48px] leading-[115%] tracking-[-0.03em] text-[#2E2D2D] mb-4"
          >
            Book a 15-min call
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B6A6A] text-lg leading-relaxed"
          >
            Please select the time that fits you or just email us at{" "}
            <a
              href="mailto:thedigitalninjatechnologies@gmail.com"
              className="text-[#FF7E29] hover:underline font-medium"
            >
              thedigitalninjatechnologies@gmail.com
            </a>
          </motion.p>
        </div>

        {/* Cal.com embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-3xl overflow-hidden border border-[#FFE0CC] shadow-sm"
          style={{ minHeight: "600px" }}
        >
          <div
            id="my-cal-inline-15min"
            style={{ width: "100%", height: "700px", overflow: "scroll" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
