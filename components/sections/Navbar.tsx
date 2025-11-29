"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type NavbarProps = {
  variant?: "light" | "dark";
};

export default function Navbar({ variant = "light" }: NavbarProps) {
  const isDark = variant === "dark";

  const textClass = isDark ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-black";
  const nameClass = isDark ? "text-gray-100" : "text-gray-900";

  return (
    <header className="w-full py-6 bg-transparent">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Left: Avatar + Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/avatar.png"
            width={34}
            height={34}
            alt="avatar"
            className="rounded-full"
          />
          <span className={`font-semibold tracking-tight ${nameClass}`}>
            Seohu Le
          </span>
        </div>

        {/* Center Menu */}
        <div className={`hidden md:flex items-center gap-10 text-sm`}>
          <Link href="/projects" className={textClass}>
            Projects
          </Link>
          <Link href="/about" className={textClass}>
            About
          </Link>
          <Link href="/contact" className={textClass}>
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Button
          className={`rounded-full px-5 text-sm ${
            isDark
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          Get in touch
        </Button>
      </nav>
    </header>
  );
}
