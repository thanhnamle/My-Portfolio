import Link from "next/link";

type FooterProps = {
  variant?: "light" | "dark";
};

export default function Footer({ variant = "light" }: FooterProps) {
  const isDark = variant === "dark";

  const borderClass = isDark ? "border-white/10" : "border-gray-200";
  const bgClass = isDark ? "bg-[#0F0F1A]" : "bg-white";
  const textClass = isDark ? "text-gray-400" : "text-gray-500";
  const linkClass = isDark ? "hover:text-white" : "hover:text-gray-900";

  return (
    <footer className={`${bgClass} border-t ${borderClass}`}>
      <div className={`max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm ${textClass}`}>
        <span>© {new Date().getFullYear()} Nam Le. All rights reserved.</span>

        <div className="flex items-center gap-4">
          <Link href="https://github.com/..." className={linkClass}>
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/..." className={linkClass}>
            LinkedIn
          </Link>
          <Link href="mailto:youremail@example.com" className={linkClass}>
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
