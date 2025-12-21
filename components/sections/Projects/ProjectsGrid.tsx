// components/sections/ProjectsGrid.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { allProjects } from "@/lib/projectsData";

const filters = [
  { id: "all", label: "All" },
  { id: "Web App", label: "Web Apps" }, // Lưu ý: label phải khớp với category trong data
  { id: "Mobile", label: "Mobile" },
] as const;

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Lọc dữ liệu từ allProjects
  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-medium text-indigo-500 mb-2">
            My Work
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            A collection of projects I’ve built.
          </h1>
          <p className="text-gray-600 max-w-2xl">
            From university assignments to personal experiments, here are some
            of the things I’ve worked on recently.
          </p>
        </header>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-1.5 rounded-full text-sm border transition ${
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:border-indigo-300"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.id} className="bg-white rounded-2xl border flex flex-col group hover:shadow-lg transition">
              {/* Dẫn link tới trang chi tiết động theo ID */}
              <Link href={`/projects/${project.id}`} className="block relative overflow-hidden h-48 bg-gray-100">
                 {/* Placeholder ảnh */}
                 <div className="w-full h-full bg-linear-to-br from-gray-100 to-gray-200" />
              </Link>

              <div className="p-5 flex-1 flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-xs font-medium px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full">{tag}</span>
                   ))}
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                  <Link href={`/projects/${project.id}`}>{project.title}</Link>
                </h3>
                
                {/* Chỉ lấy câu đầu tiên của description làm mô tả ngắn */}
                <p className="text-sm text-gray-600 flex-1 line-clamp-2">
                  {project.subtitle}
                </p>

                {/* Links */}
                
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
