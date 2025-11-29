export default function AboutTimeline() {
  const milestones = [
    {
      year: "2020 - 2021",
      title: "Junior Developer @ TechStartup",
      desc: "Built foundational skills, collaborated in agile teams, and delivered accessible UI components.",
    },
    {
      year: "2021 - 2023",
      title: "Software Engineer @ Innovato Inc.",
      desc: "Led UI development efforts, improved performance by 40%, and mentored junior developers.",
    },
    {
      year: "2023 - Present",
      title: "Senior Engineer @ Future Systems",
      desc: "Architecting large-scale cloud systems and driving technical roadmap decisions.",
    },
  ];

  return (
    <section className="mt-24 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-white text-center mb-12">
        Career Milestones
      </h2>

      <div className="relative border-l border-white/10 ml-4">
        {milestones.map((item, index) => (
          <div key={index} className="mb-12 ml-6 relative">
            <div className="absolute -left-3.5 top-1.5 w-3 h-3 bg-purple-500 rounded-full"></div>

            <p className="text-purple-400 text-sm mb-2">{item.year}</p>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-300 mt-2 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
