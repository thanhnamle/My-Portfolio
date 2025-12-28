// app/contact/page.tsx
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ContactSection from "@/components/sections/Contacts/ContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050514] text-white">
      <Navbar variant="light"/>

      <main className="flex-1">
        <ContactSection />
      </main>

      <Footer variant="light" />
    </div>
  );
}
