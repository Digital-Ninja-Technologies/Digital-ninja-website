"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BookingClient() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "15min", {origin:"https://app.cal.com"});
      Cal.config = Cal.config || {};
      Cal.config.forwardQueryParams = true;
      Cal.ns["15min"]("inline", {
        elementOrSelector:"#my-cal-booking-page",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "the-digital-ninja-technologies-fucsfq/15min",
      });
      Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(script);
    return () => {
      try { document.body.removeChild(script); } catch {}
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F3]">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-[#F5F5F3]/90 backdrop-blur-sm border-b border-black/5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Digital-Ninja-Logo.png"
            alt="Digital Ninja Technologies"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="font-semibold text-sm text-[#2E2D2D] hidden sm:block">
            Digital Ninja Technologies
          </span>
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-[#6B6A6A] hover:text-[#2E2D2D] transition-colors duration-200"
        >
          ← Back to site
        </Link>
      </nav>

      {/* ── Main content ── */}
      <div className="pt-28 pb-20 px-4 max-w-5xl mx-auto">

        {/* ── Large centered heading ── */}
        <div className="text-center mb-12">
          <h1
            className="font-semibold leading-[105%] tracking-[-0.02em] text-[#2E2D2D] mb-5"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Book a{" "}
            <span
              className="font-semibold italic"
              style={{ color: "#FF6602" }}
            >
              15-min call
            </span>
          </h1>

          <p className="text-[#6B6A6A] text-lg leading-relaxed">
            Please select the time that fits you or just
            <br />
            Email us at{" "}
            <a
              href="mailto:thedigitalninjatechnologies@gmail.com"
              className="text-[#2E2D2D] font-semibold underline underline-offset-2 hover:text-[#FF6602] transition-colors duration-200"
            >
              thedigitalninjatechnologies@gmail.com
            </a>
          </p>
        </div>

        {/* ── Cal.com embed ── */}
        <div
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
          
        >
          <div
            id="my-cal-booking-page"
            style={{ width: "100%", minHeight: "600px", height: "auto", overflow: "auto" }}
          />
        </div>

        {/* ── Cal.com badge ── */}
        <p className="text-center text-[#999797] text-sm mt-6 font-medium">
          Powered by Cal.com
        </p>
      </div>
    </div>
  );
}
