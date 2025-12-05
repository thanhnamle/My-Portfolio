// app/projects/page.tsx
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ProjectsGrid from "@/components/sections/Projects/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Navbar variant="light"/>

      {/* Nội dung chính */}
      <main className="flex-1">
        <ProjectsGrid />
      </main>

      {/* Footer */}
      <Footer variant="light" />
    </div>
  );
}
