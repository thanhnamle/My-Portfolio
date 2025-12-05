// components/sections/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: sau này có thể gọi API, gửi email, hoặc dùng Formspree,...
    console.log("Contact form submitted");
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-purple-400 mb-3">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s build{" "}
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              something amazing
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to connect?  
            Drop me a message and I&apos;ll get back to you as soon as I can.
          </p>
        </motion.div>

        {/* 2 columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#101020] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6"
          >
            <div>
              <h2 className="text-lg font-semibold mb-2">Let&apos;s connect</h2>
              <p className="text-gray-400 text-sm">
                The best way to reach me is via email.  
                I usually reply within <span className="text-gray-200">24–48 hours</span>.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500">Email</p>
                <Link
                  href="mailto:your.email@example.com"
                  className="text-gray-200 hover:text-white"
                >
                  thanhnam0810.tnl@gmail.com
                </Link>
              </div>

              <div>
                <p className="text-gray-500">Location</p>
                <p className="text-gray-200">Ho Chi Minh City, Viet Nam</p>
              </div>

              <div>
                <p className="text-gray-500">Availability</p>
                <p className="text-gray-200">
                  Open to internships & fresher roles.
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-4">
              <p className="text-gray-500 text-sm mb-2">Find me on</p>
              <div className="flex gap-4 text-sm">
                <Link
                  href="https://github.com/your-github"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/your-linkedin"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                >
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                >
                  Other
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#101020] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Your name
                </label>
                <Input
                  name="name"
                  placeholder="Your Name"
                  className="bg-[#151528] border-white/10 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Your email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="bg-[#151528] border-white/10 text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Subject
              </label>
              <Input
                name="subject"
                placeholder="Let’s work together on..."
                className="bg-[#151528] border-white/10 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Message
              </label>
              <Textarea
                name="message"
                rows={5}
                placeholder="Hi Nam, I’d like to talk about..."
                className="bg-[#151528] border-white/10 text-sm resize-none"
                required
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full md:w-auto px-6 py-5 rounded-full bg-purple-600 hover:bg-purple-700 text-sm font-medium"
              >
                Launch Mission
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
