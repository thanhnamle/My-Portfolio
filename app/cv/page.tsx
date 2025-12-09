// app/cv/page.tsx
"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CVProfile from "@/components/sections/CV/CVProfile";

export default function CVPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F1A] text-white">
      {/* Navbar variant dark cho nền tối */}
      <Navbar variant="dark" />

      <main className="flex-1 pt-32 pb-20 px-6">
        <CVProfile/>
      </main>

      <Footer variant="dark" />
    </div>
  );
}