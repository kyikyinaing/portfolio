interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}
export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="font-mono text-xs text-sky-500 dark:text-sky-400 uppercase tracking-widest mb-2">{eyebrow}</div>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">{title}</h2>
      {subtitle && <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">{subtitle}</p>}
    </div>
  );
}
