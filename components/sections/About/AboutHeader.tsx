"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutHeader() {
  return (
    <section className="pt-24 pb-24 max-w-6xl mx-auto px-6 text-center">
      {/* Avatar Glow */}
      <div className="relative flex justify-center mb-10">
        <div className="absolute w-80 h-80 bg-purple-700 blur-[120px] opacity-40 rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <Image
            src="/avatar.png"  // đổi theo file của bạn
            width={140}
            height={140}
            className="rounded-full border-2 border-white/20"
            alt="Profile"
          />
        </motion.div>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        I&apos;m Nam, a Developer with a Passion for Creativity.
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
        Transforming ideas into engaging digital experiences. I specialize in
        building intuitive, accessible, and visually delightful products.
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4">
        <Button className="bg-purple-600 hover:bg-purple-700 px-6 py-5 rounded-full">
          See My Journey
        </Button>

        <Button
          variant="outline"
          className="px-6 py-5 rounded-full border-white/30 text-black hover:bg-white/10"
        >
          Let&apos;s Talk
        </Button>
      </div>
    </section>
  );
}
