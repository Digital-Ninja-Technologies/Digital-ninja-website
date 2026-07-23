"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname === "/studio";

  return (
    <>
      {!isStudio && <Navbar />}
      <div className={!isStudio ? "mt-20" : ""}>{children}</div>
      {!isStudio && <Footer />}
    </>
  );
}
