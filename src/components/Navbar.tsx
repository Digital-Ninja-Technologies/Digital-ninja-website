"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import MultiStepModal from "./Multi-step-modal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <main className="fixed top-0 w-full bg-white z-100">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between relative">
        <Link href="/" className="flex items-center">
          <div className="relative h-14 w-48">
            <Image
              src="/logo.svg"
              alt="Digital Ninja Technologies Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <div className="flex items-center gap-10">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                isActive("/about")
                  ? "text-[#FF7E29] border-b-2 border-[#FF7E29] pb-1"
                  : "text-[#1f1e1e] hover:text-[#FF7E29]"
              }`}>
              About us
            </Link>
            <Link
              href="/works"
              className={`font-medium transition-colors ${
                isActive("/works")
                  ? "text-[#FF7E29] border-b-2 border-[#FF7E29] pb-1"
                  : "text-[#1f1e1e] hover:text-[#FF7E29]"
              }`}>
              Works
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${
                isActive("/contact")
                  ? "text-[#FF7E29] border-b-2 border-[#FF7E29] pb-1"
                  : "text-[#1f1e1e] hover:text-[#FF7E29]"
              }`}>
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-[#FF7E29] text-[#FF7E29] hover:bg-[#ff6602] hover:text-white transition-colors">
            <span>Start a project</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1f1e1e] relative h-6 w-6"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">
            <div className="relative h-6 w-6">
              <Image
                src={
                  mobileMenuOpen ? "/icons/close.svg" : "/icons/handburger.svg"
                }
                alt={mobileMenuOpen ? "Close menu" : "Open menu"}
                fill
                className="object-contain"
                priority
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 md:hidden">
            <nav className="flex flex-col p-4">
              <Link
                href="/about"
                className={`py-3 px-4 font-medium transition-colors ${
                  isActive("/about")
                    ? "text-[#FF7E29] bg-orange-50 border-l-4 border-[#FF7E29]"
                    : "text-[#1f1e1e] hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}>
                About us
              </Link>
              <Link
                href="/works"
                className={`py-3 px-4 font-medium transition-colors ${
                  isActive("/works")
                    ? "text-[#FF7E29] bg-orange-50 border-l-4 border-[#FF7E29]"
                    : "text-[#1f1e1e] hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}>
                Works
              </Link>
              <Link
                href="/contact"
                className={`py-3 px-4 font-medium transition-colors ${
                  isActive("/contact")
                    ? "text-[#FF7E29] bg-orange-50 border-l-4 border-[#FF7E29]"
                    : "text-[#1f1e1e] hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <button
                className="mt-3 mx-4 flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#ff6602] text-[#ff6602] hover:bg-[#ff6602] hover:text-white transition-colors"
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}>
                <span>Start a project</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </nav>
          </div>
        )}
      </header>
      <MultiStepModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </main>
  );
}
