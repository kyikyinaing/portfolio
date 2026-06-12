import { experience } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-slate-200 dark:border-[#1e2d45]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="// career"
          title="Work Experience"
          subtitle="Over a decade building enterprise systems across shipping, finance, and government — from design to deployment."
        />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <div key={i} className="card overflow-hidden hover:border-sky-400/30 transition-all duration-200 hover:-translate-y-0.5">
              <div className="flex flex-col sm:flex-row">

                {/* ── Company image panel ── */}
                <div className="relative sm:w-56 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
                  {/* Gradient fallback always rendered underneath */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-[#0f2040] dark:to-[#0a1628]">
                    <span className="text-4xl font-black font-mono text-sky-400/40 select-none">
                      {job.company.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  {/* Real image layered on top — if it 404s, the gradient shows through */}
                  <Image
                    src={job.image}
                    alt={job.company}
                    fill
                    className="object-cover relative z-10"
                  />
                </div>

                {/* ── Content ── */}
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-lg">{job.role}</h3>
                    <span className="font-mono text-xs text-sky-500 dark:text-sky-400 bg-sky-50 dark:bg-sky-400/10 px-2 py-1 rounded flex-shrink-0">
                      {job.period}
                    </span>
                  </div>

                  <div className="text-sky-500 dark:text-sky-400 font-semibold text-sm mb-1">
                    {job.company}
                  </div>

                  <div className="text-xs text-slate-400 font-mono mb-4">
                    📍 {job.location}
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        <span className="text-sky-500 dark:text-sky-400 flex-shrink-0 mt-0.5">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs bg-slate-100 dark:bg-[#0f2040] text-sky-600 dark:text-sky-300 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
