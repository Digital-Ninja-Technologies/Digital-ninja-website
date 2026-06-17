"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/works", label: "Works" },
    { href: "/refer", label: "Refer & Earn" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 h-20 bg-white/80 backdrop-blur-md border-b border-black/5">

      {/* ── Logo ── */}
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <div className="relative h-10 w-36">
          <Image
            src="/logo.svg"
            alt="Digital Ninja Technologies"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </Link>

      {/* ── Center pill nav (desktop) ── */}
      <nav className="hidden md:flex items-center bg-[#F2F2F0] rounded-full px-2 py-1.5 gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive(link.href)
                ? "bg-white text-[#2E2D2D] shadow-sm"
                : "text-[#6B6A6A] hover:text-[#2E2D2D] hover:bg-white/60"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* ── CTA button (desktop) ── */}
      <button
        onClick={() => (window.location.href = "/booking")}
        className="hidden md:flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#333] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shrink-0"
      >
        Book a 15min Call
      </button>

      {/* ── Mobile hamburger ── */}
      <button
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-[#F2F2F0] text-[#2E2D2D]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      {/* ── Mobile menu ── */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-black/5 shadow-lg md:hidden">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "bg-[#FFF0E5] text-[#FF6602]"
                    : "text-[#2E2D2D] hover:bg-[#F5F5F3]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                window.location.href = "/booking";
                setMobileMenuOpen(false);
              }}
              className="mt-2 w-full bg-[#1A1A1A] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200"
            >
              Book a 15min Call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
