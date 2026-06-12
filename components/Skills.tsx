import { skills } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const colorMap: Record<string, { card: string; title: string; tag: string }> = {
  sky:     { card: "hover:border-sky-400/40",     title: "text-sky-500 dark:text-sky-400",     tag: "bg-sky-50 dark:bg-sky-400/10 text-sky-600 dark:text-sky-300" },
  indigo:  { card: "hover:border-indigo-400/40",  title: "text-indigo-500 dark:text-indigo-400", tag: "bg-indigo-50 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-300" },
  emerald: { card: "hover:border-emerald-400/40", title: "text-emerald-600 dark:text-emerald-400", tag: "bg-emerald-50 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-slate-200 dark:border-[#1e2d45]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="// capabilities" title="Technical Skills"
          subtitle="Full-stack expertise from database to UI, backed by strong DevOps practice and growing AI/ML foundations." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group) => {
            const c = colorMap[group.color] ?? colorMap.sky;
            return (
              <div key={group.category} className={`card p-5 transition-all duration-200 hover:-translate-y-0.5 ${c.card}`}>
                <div className={`font-mono text-xs font-semibold uppercase tracking-widest ${c.title} mb-3`}>
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className={`${c.tag} text-xs font-mono px-2 py-0.5 rounded`}>{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
