import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AboutHeader from "@/components/sections/About/AboutHeader";
import AboutSummary from "@/components/sections/About/AboutSummary";
import AboutToolkit from "@/components/sections/About/AboutToolkit";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F1A] text-white">
      <Navbar variant="dark"/>

      <main className="flex-1">
        <AboutHeader />
        <AboutSummary />
        <AboutToolkit />
      </main>

      <Footer variant="dark" />
    </div>
  );
}
