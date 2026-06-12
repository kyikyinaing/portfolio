import { personal } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const contactLinks = [
  { icon: "✉", label: personal.email,  href: `mailto:${personal.email}` },
  { icon: "📞", label: personal.phone,  href: `tel:${personal.phone.replace(/\D/g,"")}` },
  { icon: "⌨", label: "GitHub",        href: personal.github },
  { icon: "💼", label: "LinkedIn",      href: personal.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-slate-200 dark:border-[#1e2d45]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="// connect" title="Get in Touch"
          subtitle="Open to full-time software engineering roles in Canada. Let's build something great together." />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 card px-5 py-3.5 text-slate-600 dark:text-slate-300 text-sm font-medium hover:border-sky-400/40 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-200 group">
                <span className="text-lg">{link.icon}</span>
                <span>{link.label}</span>
                <span className="ml-auto text-slate-300 dark:text-slate-600 group-hover:text-sky-400 transition-colors">→</span>
              </a>
            ))}
          </div>
          <div className="card p-6">
            <div className="font-mono text-xs text-sky-500 dark:text-sky-400 uppercase tracking-widest mb-4">// quick.summary</div>
            <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
              {[
                { icon: "📍", text: personal.location },
                { icon: "🎓", text: "AI & ML Diploma — Fanshawe College (2026)" },
                { icon: "💻", text: "12 years .NET / Full Stack experience" },
                { icon: "🚀", text: "Available for new opportunities" },
                { icon: "🌐", text: "Open to remote or hybrid roles" },
              ].map((item) => (
                <li key={item.text} className="flex gap-2.5 items-start">
                  <span>{item.icon}</span><span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
