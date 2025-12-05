import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nam Le Portfolio",
  description: "Personal portfolio of Nam Le",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="flex-1 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
