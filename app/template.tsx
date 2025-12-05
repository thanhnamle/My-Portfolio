// app/template.tsx
"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Thứ tự các trang để xác định hướng trượt
const routes = ["/", "/projects", "/about", "/contact"];

// Biến global để lưu trang trước đó (chỉ hoạt động ở Client side navigation)
// Vì template remount mỗi lần đổi trang, ta dùng biến ngoài component để lưu state
let previousPath = ""; 

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // 1. Tìm index của trang cũ và trang mới
  const oldIndex = routes.indexOf(previousPath);
  const newIndex = routes.indexOf(pathname);

  // 2. Xác định hướng: 
  // Nếu newIndex > oldIndex (VD: Home -> About) => Hướng dương (1) => Trượt từ phải sang
  // Nếu newIndex < oldIndex (VD: About -> Home) => Hướng âm (-1) => Trượt từ trái sang
  // Mặc định (lần đầu tải) là 0
  const direction = newIndex >= oldIndex ? 1 : -1;

  // Cập nhật lại trang cũ cho lần sau
  if (previousPath !== pathname) {
    // eslint-disable-next-line react-hooks/globals
    previousPath = pathname;
  }

  // Cấu hình Animation
  const variants = {
    hidden: { opacity: 0, x: direction * 50 }, // Bắt đầu: Dịch 50px theo hướng
    enter: { opacity: 1, x: 0 },               // Kết thúc: Về giữa
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}