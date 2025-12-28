// components/sections/Contacts/ContactSection.tsx
"use client";

import { useState, type FormEvent } from "react"; // Đã sửa: Import FormEvent trực tiếp
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);

  // Đã sửa: Sử dụng FormEvent thay vì React.FormEvent
  const handleMailto = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    // Tạo tiêu đề và nội dung email
    const subject = encodeURIComponent(`Liên hệ từ Portfolio: ${name}`);
    const body = encodeURIComponent(
      `Tên: ${name}\nEmail: ${email}\n\nNội dung:\n${message}`
    );

    // Mở trình gửi mail mặc định
    // Nhớ thay email của bạn vào đây
    window.location.href = `mailto:thanhnam0810.tnl@gmail.com?subject=${subject}&body=${body}`;

    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
            Looking for a dedicated developer? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Thông tin liên hệ */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="h-full border-none shadow-lg">
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      namle.dev@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      +84 123 456 789
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Ho Chi Minh City, Vietnam
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form sử dụng Mailto */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg h-full">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMailto} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="I'd like to discuss a project..."
                      rows={5}
                      required
                      className="resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
                    <Send className="w-4 h-4 mr-2" />
                    Open Email App to Send
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}