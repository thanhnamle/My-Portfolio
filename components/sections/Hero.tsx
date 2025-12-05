/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/purity */
"use client";

import { motion, useMotionValue, useTransform, useSpring, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

const PARTICLE_COUNT = 35;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 120, damping: 20 });

  const orbX = useTransform(mouseX, (value) => value / 25); 
  const orbY = useTransform(mouseY, (value) => value / 25);
  const iconX = useTransform(mouseX, (value) => value / 12); 
  const iconY = useTransform(mouseY, (value) => value / 12);

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);
  }

  // --- CẤU HÌNH ANIMATION XUẤT HIỆN ---

  // 1. Variant cho container chứa các icons (để điều khiển việc xuất hiện lần lượt)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // DelayChildren: Đợi các phần tử khác load xong mới bắt đầu (ví dụ text bên trái)
        delayChildren: 0.5, 
        // StaggerChildren: Mỗi icon con sẽ xuất hiện cách nhau 0.2 giây
        staggerChildren: 0.2,
      },
    },
  };

  // 2. Variant cho hiệu ứng "nhảy ra" (Pop out) của từng icon
  const iconPopVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0,  // Bắt đầu từ kích thước 0
      y: 20      // Và ở vị trí thấp hơn một chút
    },
    visible: { 
      opacity: 1, 
      scale: 1,  // Phóng to về kích thước gốc
      y: 0,
      transition: {
        type: "spring", // Sử dụng spring để có độ nảy
        stiffness: 260,
        damping: 20,
      }
    },
  };


  return (
    <section 
      className="relative pt-28 pb-32 bg-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT (Giữ nguyên) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 relative"
        >
           <div className="inline-flex items-center px-4 py-1 text-sm bg-green-100 text-green-700 rounded-full mb-5 border border-green-200">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span> 
            Open to new opportunities
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I&apos;m Nam — a <br />
            <span className="bg-linear-to-r from-purple-600 via-pink-500 to-indigo-500 text-transparent bg-clip-text animate-gradient bg-300%">
              Creative Developer
            </span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-md leading-relaxed">
            I build accessible, inclusive products and digital experiences for the web. Let’s turn your ideas into reality.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-5 transition-all hover:scale-105 shadow-lg shadow-indigo-200/50">
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6 py-5 border-gray-300 text-gray-800 hover:bg-gray-50">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE --- */}
        <div ref={ref} className="relative flex justify-center items-center h-[500px]">
          
          {/* LAYER 1: PARTICLES */}
          <motion.div style={{ x: orbX, y: orbY }} className="absolute inset-0 z-0 pointer-events-none">
             <FloatingParticles count={PARTICLE_COUNT} />
          </motion.div>

          {/* LAYER 2: THE LIQUID ORB */}
          <motion.div style={{ x: orbX, y: orbY }} className="relative z-10">
            <motion.div
              className="w-[350px] h-[350px] bg-linear-to-br from-purple-500/60 via-indigo-500/60 to-blue-500/60 blur-3xl mix-blend-multiply md:mix-blend-normal"
              animate={{
                scale: [1, 1.05, 0.95, 1],
                rotate: [0, 120, 240, 360],
                borderRadius: ["50% 50% 50% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 50% 60% 30% 60%", "50% 50% 50% 50%"],
              }}
              transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            />
            <motion.div 
               className="absolute inset-0 bg-white/20 blur-2xl rounded-full z-20"
               initial={{ opacity: 0, scale: 0.9 }}
               whileHover={{ opacity: 0.7, scale: 1.1 }}
               transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* LAYER 3: FLOATING ICONS (Đã cập nhật animation xuất hiện) */}
          <motion.div 
            style={{ x: iconX, y: iconY }} 
            className="absolute inset-0 z-30 pointer-events-none"
            // Áp dụng variants cho container cha
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Truyền variants pop-out xuống cho các con */}
            <FloatingIcon src="/images/github.svg" className="top-10 left-10 w-14 h-14" popVariants={iconPopVariants} delay={0} />
            <FloatingIcon src="/images/java.svg" className="bottom-20 right-10 w-14 h-14" popVariants={iconPopVariants} delay={1} />
            <FloatingIcon src="/images/reactjs.svg" className="bottom-0 left-24 w-16 h-16" popVariants={iconPopVariants} delay={1.5} />
            <FloatingIcon src="/images/postgresql.svg" className="top-0 right-16 w-12 h-12" popVariants={iconPopVariants} delay={2} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// --- COMPONENT HẠT (Giữ nguyên) ---
function FloatingParticles({ count }: { count: number }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [particles, setParticles] = useState<any[]>([]);
    useEffect(() => {
        const newParticles = Array.from({ length: count }).map((_, i) => ({
            id: i, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
            size: Math.random() * 6 + 2 + 'px', 
            color: Math.random() > 0.5 ? 'bg-purple-400' : 'bg-blue-400',
            duration: Math.random() * 10 + 10, delay: Math.random() * 5
        }));
        setParticles(newParticles);
    }, [count]);
    return (
        <>
            {particles.map((particle) => (
                <motion.span
                    key={particle.id}
                    className={`absolute rounded-full pointer-events-none opacity-40 ${particle.color} blur-[1px]`}
                    style={{ top: particle.top, left: particle.left, width: particle.size, height: particle.size }}
                    animate={{
                        x: [0, (Math.random() - 0.5) * 160, (Math.random() - 0.5) * 160, 0],
                        y: [0, (Math.random() - 0.5) * 160, (Math.random() - 0.5) * 160, 0],
                        scale: [1, 1.4, 0.8, 1], opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ duration: particle.duration, repeat: Infinity, ease: "easeInOut", delay: particle.delay, times: [0, 0.33, 0.66, 1] }}
                />
            ))}
        </>
    );
}


// --- COMPONENT ICON (Đã cập nhật) ---
// Nhận thêm prop popVariants
function FloatingIcon({ src, className, delay, popVariants }: { src: string; className: string; delay: number, popVariants: Variants }) {
  return (
    // LỚP NGOÀI: Chịu trách nhiệm nhảy ra (Pop out) khi mới load
    // Nó sẽ tự động nhận trạng thái 'hidden' và 'visible' từ container cha
    <motion.div
      variants={popVariants} 
      className={`absolute ${className}`}
    >
      {/* LỚP TRONG: Chịu trách nhiệm bay lơ lửng liên tục */}
      <motion.div
        className="bg-white/80 p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-purple-100/50 backdrop-blur-md"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }} 
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          delay: delay, // Delay này là cho hiệu ứng bay, không phải hiệu ứng xuất hiện
        }}
        whileHover={{ scale: 1.15, rotate: 0, transition: { duration: 0.2 } }}
      >
        <img src={src} alt="tech-icon" className="w-full h-full object-contain" />
      </motion.div>
    </motion.div>
  );
}