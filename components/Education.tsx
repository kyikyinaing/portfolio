import { education } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-slate-200 dark:border-[#1e2d45]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="// background" title="Education"
          subtitle="Engineering foundations combined with modern AI/ML and business analysis credentials." />
        <div className="grid sm:grid-cols-3 gap-4">
          {education.map((e, i) => (
            <div key={i} className="card p-5 hover:border-emerald-400/40 transition-all duration-200 hover:-translate-y-0.5">
              <div className="text-2xl mb-3">{e.icon}</div>
              <h3 className="font-bold text-sm leading-snug mb-1">{e.degree}</h3>
              <div className="text-emerald-600 dark:text-emerald-400 text-sm mb-0.5">{e.school}</div>
              <div className="font-mono text-xs text-slate-400">{e.location} · {e.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
