import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    // 1. Tạo container flex cột, chiều cao tối thiểu bằng màn hình (100vh)
    <div className="min-h-screen flex flex-col bg-white">
      
      <Navbar />
      
      {/* 2. Dùng flex-1 để phần này tự giãn hết khoảng trống còn lại, đẩy Footer xuống */}
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
