// components/sections/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

type FooterProps = {
  variant?: "light" | "dark";
};

// Định nghĩa danh sách link để dễ map và xử lý logic
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ variant = "light" }: FooterProps) {
  const isDark = variant === "dark";
  const pathname = usePathname();

  const textClass = isDark ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-black";
  const activeClass = isDark ? "text-white" : "text-black font-semibold";
  const nameClass = isDark ? "text-gray-100" : "text-gray-900";
  const underlineClass = isDark ? "bg-purple-500" : "bg-indigo-600";

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 bg-transparent">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Left: Avatar + Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Avatar.png"
            width={34}
            height={34}
            alt="avatar"
            className="rounded-full"
          />
          <span className={`font-semibold tracking-tight ${nameClass}`}>
            Seohu Le
          </span>
        </Link>

        {/* Center Menu với Sliding Underline */}
        <div className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-1 py-1 text-sm transition-colors ${
                  isActive ? activeClass : textClass
                }`}
              >
                {link.name}
                
                {/* Hiệu ứng gạch chân thần thánh */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className={`absolute left-0 bottom-0 block h-0.5 w-full ${underlineClass}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Button
          asChild
          className={`rounded-full px-5 text-sm ${
            isDark
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          <Link href="/cv" className="flex items-center gap-2">
            <FileText size={18} /> {/* Icon văn bản */}
            Review My CV
          </Link>
        </Button>
      </nav>
    </header>
  );
}