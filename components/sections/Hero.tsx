"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-32 bg-white overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1 text-sm bg-green-100 text-green-700 rounded-full mb-5">
            ● Open to new opportunities
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I&apos;m Nam — a <br />
            <span className="bg-linear-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Creative Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-gray-600 text-lg max-w-md leading-relaxed">
            I build accessible, inclusive products and digital experiences for the web.  
            Let’s turn your ideas into reality.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-5">
              Contact Me
            </Button>

            <Button
              variant="outline"
              className="rounded-full px-6 py-5 border-gray-300 text-gray-800"
            >
              View Projects
            </Button>
          </div>
        </motion.div>

        {/* RIGHT SIDE — CIRCLE + FLOATING IMAGES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Big gradient circle */}
          <div className="w-[350px] h-[350px] rounded-full bg-linear-to-br from-purple-300 to-indigo-300 blur-2xl opacity-70"></div>

          {/* Floating images */}
          <motion.img
            src="/images/github.svg"
            className="absolute top-10 left-8 w-12 h-12 rounded-md shadow-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />

          <motion.img
            src="/images/java.svg"
            className="absolute bottom-10 right-4 w-12 h-12 rounded-md shadow-md"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
          />

          <motion.img
            src="/images/reactjs.svg"
            className="absolute -bottom-4 left-24 w-16 h-16 rounded-md shadow-md"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />

          <motion.img
            src="/images/postgresql.svg"
            className="absolute top-1 right-4 w-12 h-12 rounded-md shadow-md"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
          />

        </motion.div>

      </div>
    </section>
  );
}
