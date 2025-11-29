export default function AboutToolkit() {
  const tools = [
    { name: "JavaScript", icon: "/icons/js.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "SQL", icon: "/icons/postgresql.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
  ];

  return (
    <section className="mt-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-white mb-6">The Toolkit</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-[#1A1A2E] p-4 rounded-xl flex flex-col items-center gap-3 border border-white/5 hover:border-purple-500/40 transition"
          >
            <img src={tool.icon} className="w-10 h-10" />
            <span className="text-gray-300 text-sm">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
