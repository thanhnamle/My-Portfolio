import AboutHeader from "@/components/sections/About/AboutHeader";
import AboutToolkit from "@/components/sections/About/AboutToolkit";
import AboutTimeline from "@/components/sections/About/AboutTimeline";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0F0F1A] text-white pb-20">
      <AboutHeader />
      <AboutToolkit />
      <AboutTimeline />
    </main>
  );
}
