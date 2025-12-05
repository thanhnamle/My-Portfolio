// components/sections/ProjectsGrid.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: "web" | "mobile" | "tool" | "other";
  liveUrl?: string;
  demoUrl?: string;
  codeUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "SaaS Platform",
    description:
      "Multi-tenant SaaS web app with subscription, authentication and dashboard.",
    tags: ["React", "Next.js", "Tailwind"],
    category: "web",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description:
      "Responsive storefront with product listing, cart, and checkout experience.",
    tags: ["TypeScript", "Next.js", "Stripe"],
    category: "web",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Fintech Mobile App (UI)",
    description:
      "High-fidelity UI prototype for a mobile budgeting and analytics app.",
    tags: ["Figma", "UI/UX"],
    category: "mobile",
    demoUrl: "#",
  },
  {
    id: 4,
    title: "Interactive Portfolio",
    description:
      "Animated personal portfolio with smooth scroll, sections and contact form.",
    tags: ["React", "Framer Motion"],
    category: "web",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 5,
    title: "Data Visualization Tool",
    description:
      "Dashboard for visualising analytics with charts and filters.",
    tags: ["JavaScript", "Chart.js"],
    category: "tool",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    title: "Developer API",
    description:
      "REST API for handling authentication and basic CRUD for a demo app.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    category: "tool",
    codeUrl: "#",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile / UI" },
  { id: "tool", label: "Tools & APIs" },
] as const;

type FilterId = (typeof filters)[number]["id"];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
            <article
              key={project.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              {/* Top: fake thumbnail / image placeholder */}
              <div className="h-32 bg-linear-to-br from-gray-50 to-gray-100" />

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 flex-1">
                  {project.description}
                </p>

                {/* Links */}
                <div className="mt-4 flex items-center gap-4 text-sm">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      className="text-indigo-600 hover:underline"
                      target="_blank"
                    >
                      Live
                    </Link>
                  )}
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      className="text-gray-700 hover:underline"
                      target="_blank"
                    >
                      Demo
                    </Link>
                  )}
                  {project.codeUrl && (
                    <Link
                      href={project.codeUrl}
                      className="text-gray-700 hover:underline"
                      target="_blank"
                    >
                      Code
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
