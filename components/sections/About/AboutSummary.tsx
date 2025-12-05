export default function AboutSummary() {
  return (
    <section className="max-w-4xl mx-auto px-6 mt-12 space-y-8">
      {/* Giới thiệu bản thân */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h2 className="text-xl font-semibold mb-3">A bit about me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am Nam, a Computer Science major who is highly interested in frontend development, UI/UX, and creation of distinct user experiences. 
          I also like transforming designs into clean, 
          user-friendly interfaces and am learning the latest web technologies, such as React, Next.js and Tailwind CSS.
        </p>
        <p className="text-gray-300 leading-relaxed mt-3">
          Beyond code, I enjoy product design that allows me to learn how products address user needs, 
          viewing products in practice to satisfy user needs, 
          and playing around with my own projects, such as this portfolio.
        </p>
      </div>

      {/* Mục tiêu & mình đang tìm gì */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold mb-2">What I&apos;m looking for</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            These are some of the internship or fresher opportunities that 
            I am currently seeking where I am able to work on contemporary web stacks, 
            get tutoring by seasoned engineers, and work with actual products.
          </p>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold mb-2">What I can bring</h3>
          <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
            <li>Good understanding of React, Next.js, and Tailwind CSS</li>
            <li>Experience building university & personal projects</li>
            <li>Curiosity, willingness to learn, and attention to detail</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold mb-3">Education</h3>
        <p className="text-gray-200">
          Bachelor of Computer Science –{" "}
          <span className="text-purple-300">Swinburne University</span>
        </p>
        <p className="text-gray-400 text-sm mt-1">
          Expected graduation: 2027 • Focus: Software Development & Web
          Engineering
        </p>
      </div>
    </section>
  );
}
