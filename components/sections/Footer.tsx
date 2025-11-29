import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        {/* Text bên trái */}
        <span>
          © {new Date().getFullYear()} Nam Le. All rights reserved.
        </span>

        {/* Links bên phải */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/..."
            className="hover:text-gray-900 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/..."
            className="hover:text-gray-900 transition"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:youremail@example.com"
            className="hover:text-gray-900 transition"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
