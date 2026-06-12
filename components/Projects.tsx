import { projects } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-slate-200 dark:border-[#1e2d45]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="// portfolio" title="Key Projects"
          subtitle="Enterprise platforms, financial systems, government applications, and AI-powered solutions." />
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div key={i} className={`card p-6 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5 ${p.highlight ? "border-indigo-300 dark:border-indigo-400/40 hover:border-indigo-400 dark:hover:border-indigo-400/60" : "hover:border-sky-300 dark:hover:border-sky-400/30"}`}>
              <div className="text-2xl">{p.icon}</div>
              <div>
                <h3 className="font-bold text-base mb-0.5">{p.title}</h3>
                <div className="font-mono text-xs text-indigo-500 dark:text-indigo-400">{p.company}</div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-[#1e2d45]">
                {p.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs bg-slate-100 dark:bg-[#0f2040] text-sky-600 dark:text-sky-300 px-2 py-0.5 rounded">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
