// app/projects/[id]/page.tsx
"use client";

import React from "react"; // Xóa 'import { useState }' nếu không dùng
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation"; // Import hook lấy params
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, PlayCircle } from "lucide-react";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import hàm lấy dữ liệu
import { getProjectById } from "@/lib/projectsData";

export default function ProjectDetailPage() {
  // 1. Lấy ID từ URL (Client Component dùng useParams)
  const params = useParams();
  const id = params?.id as string;

  // 2. Tìm dự án tương ứng trong "Database giả"
  const project = getProjectById(id);

  // 3. Nếu không tìm thấy (nhập id bậy bạ), chuyển hướng sang trang 404
  if (!project) {
    return notFound(); 
  }

  // TỪ ĐÂY TRỞ ĐI: Thay thế tất cả 'projectData' bằng biến 'project'
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* HEADER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Link href="/projects" className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-6 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to Projects
            </Link>

            <div>
              <Badge variant="outline" className="mb-4 text-indigo-600 border-indigo-200 bg-indigo-50">
                {project.category} {/* Dữ liệu động */}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {project.title} {/* Dữ liệu động */}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.subtitle} {/* Dữ liệu động */}
            </p>
          </motion.div>

          {/* HERO IMAGE */}
          <div className="rounded-2xl overflow-hidden bg-gray-50 aspect-video relative mb-20 flex items-center justify-center border border-gray-100">
             {/* Sau này thay bằng project.heroImage */}
             <p className="text-gray-400">Project Hero Image for {project.title}</p>
          </div>

          {/* CONTENT */}
          <div className="grid md:grid-cols-3 gap-12 mb-24">
            {/* Description Column */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">About the Project</h2>
              <div className="text-gray-600 leading-7 space-y-4">
                {/* Render từng đoạn văn */}
                {project.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="md:col-span-1 space-y-10">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.techStack.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border px-3 py-2 rounded-lg">
                      <Image src={tech.icon} alt={tech.name} width={16} height={16} className="w-4 h-4" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Links</h3>
                <div className="flex flex-col gap-3">
                  {project.links.live && (
                    <Button asChild className="w-full justify-start bg-indigo-50 text-indigo-700 hover:bg-indigo-100 shadow-none border border-indigo-100">
                      <Link href={project.links.live} target="_blank">
                        <ExternalLink size={18} className="mr-2" /> Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.links.code && (
                    <Button asChild variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-50 px-0 pl-2">
                      <Link href={project.links.code} target="_blank">
                        <Github size={18} className="mr-2" /> Source Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* GALLERY */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Gallery / Demo</h2>
                <div className="grid md:grid-cols-2 gap-8">
                {project.gallery.map((item, index) => (
                    <div key={index} className="group">
                        <div className="relative bg-gray-900 rounded-xl aspect-video mb-4 flex items-center justify-center">
                            <PlayCircle size={40} className="text-white/50" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                ))}
                </div>
            </section>
          )}

        </div>
      </main>
      <Footer variant="light" />
    </div>
  );
}