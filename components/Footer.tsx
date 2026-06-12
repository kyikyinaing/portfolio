export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-[#1e2d45] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs text-slate-400">© {new Date().getFullYear()} Kyi Kyi Naing (Crystal)</span>
        <span className="font-mono text-xs text-slate-400 dark:text-slate-600">Built with Next.js · Tailwind CSS · Deployed on GitHub Pages</span>
      </div>
    </footer>
  );
}
