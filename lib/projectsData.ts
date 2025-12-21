// lib/projectsData.ts

export type Project = {
  id: string; // ID nên để string để dễ khớp với URL
  title: string;
  category: string;
  subtitle: string;
  description: string[];
  tags: string[]; // Dùng cho trang Grid (thẻ nhỏ)
  techStack: { name: string; icon: string }[];
  links: {
    live?: string;
    code?: string;
    demo?: string;
  };
  gallery: {
    title: string;
    desc: string;
    thumbnail?: string;
  }[];
};

export const allProjects: Project[] = [
  {
    id: "1",
    title: "SaaS Platform",
    category: "Web App",
    subtitle: "Nền tảng phân tích dữ liệu phức tạp thành biểu đồ trực quan.",
    tags: ["React", "Next.js", "Tailwind"],
    description: [
      "Dự án này giải quyết vấn đề quản lý dữ liệu lớn cho doanh nghiệp. Thay vì các bảng tính Excel rối rắm, chúng tôi tạo ra dashboard trực quan.",
      "Tính năng nổi bật bao gồm AI Insight Generator giúp tự động phát hiện xu hướng bất thường trong dữ liệu.",
    ],
    techStack: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    ],
    links: { live: "#", code: "#" },
    gallery: [
      { title: "Dashboard chính", desc: "Giao diện tổng quan cho người dùng." },
      { title: "Trang Settings", desc: "Cấu hình tài khoản và dữ liệu." },
    ]
  },
  {
    id: "2",
    title: "E-commerce Store",
    category: "E-commerce",
    subtitle: "Cửa hàng trực tuyến với trải nghiệm thanh toán mượt mà.",
    tags: ["TypeScript", "Next.js", "Stripe"],
    description: [
      "Một trang web bán hàng đầy đủ tính năng: Giỏ hàng, Thanh toán qua Stripe, Quản lý đơn hàng.",
      "Tối ưu SEO và tốc độ tải trang cực nhanh nhờ Next.js SSR.",
    ],
    techStack: [
      { name: "Next.js", icon: "/next.svg" }, // Ví dụ icon khác
      { name: "TypeScript", icon: "/icons/js.svg" },
    ],
    links: { live: "#", code: "#" },
    gallery: [
      { title: "Trang sản phẩm", desc: "Hiển thị chi tiết và đánh giá." },
    ]
  },
  // Bạn có thể copy paste thêm project 3, 4, 5 vào đây...
];

// Hàm giả lập việc lấy 1 project từ Database theo ID
export function getProjectById(id: string) {
  return allProjects.find((p) => p.id === id);
}