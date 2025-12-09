"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react"; // Đảm bảo bạn đã cài lucide-react

export default function CVProfile() {
    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-8 h-full">
          
          {/* Header của trang CV */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">My Curriculum Vitae</h1>
              <p className="text-gray-400 mt-2">
                A summary of my professional background and skills.
              </p>
            </div>
            
            {/* Nút Download CV */}
            <Button 
              asChild 
              className="bg-purple-600 hover:bg-purple-700 text-white gap-2"
            >
              <a href="/cv.pdf" download="NamLe_CV.pdf">
                <Download size={18} />
                Download PDF
              </a>
            </Button>
          </div>

          {/* Khung hiển thị PDF */}
          <div className="flex-1 bg-gray-800 rounded-xl overflow-hidden border border-white/10 shadow-2xl h-[800px]">
            {/* Thẻ object để hiển thị PDF. Nếu trình duyệt không hỗ trợ sẽ hiện link download */}
            <object
              data="/cv.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <p>Your browser does not support viewing PDFs directly.</p>
                <a href="/cv.pdf" className="text-purple-400 hover:underline mt-2">
                  Click here to download the PDF file.
                </a>
              </div>
            </object>
          </div>

        </div>
    )
}