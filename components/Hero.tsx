"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { personal, stats } from "@/lib/data";

function TypedText({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (charIndex < phrase.length) {
        timeout = setTimeout(() => { setText(phrase.slice(0, charIndex + 1)); setCharIndex(c => c + 1); }, 70);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => { setText(phrase.slice(0, charIndex - 1)); setCharIndex(c => c - 1); }, 40);
      } else {
        setDeleting(false);
        setPhraseIndex(p => (p + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases]);

  return (
    <span className="font-mono text-indigo-500 dark:text-indigo-400 text-base md:text-lg">
      {text}<span className="animate-blink">|</span>
    </span>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const step = Math.ceil(value / 30);
        const interval = setInterval(() => {
          current = Math.min(current + step, value);
          setCount(current);
          if (current >= value) clearInterval(interval);
        }, 50);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-mono text-3xl font-bold text-sky-500 dark:text-sky-400">
      {count}{suffix}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* ── Left: text ── */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/5 text-sky-500 dark:text-sky-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to new opportunities
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-3">
            {personal.name}
            <br />
            <span className="text-gradient">({personal.nickname})</span>
          </h1>

          <div className="mb-5 h-7">
            <TypedText phrases={personal.taglines} />
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mb-8">
            {personal.summary}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-sky-500 dark:bg-sky-400 text-white dark:text-[#050d1a] text-sm font-bold hover:bg-sky-400 dark:hover:bg-sky-300 transition-colors">
              Get in touch
            </a>
            <a href="#experience" className="px-5 py-2.5 rounded-lg border border-slate-200 dark:border-[#1e2d45] text-slate-600 dark:text-slate-300 text-sm font-medium hover:border-sky-400/50 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
              View experience
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200 dark:border-[#1e2d45] grid grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter value={s.value} suffix={s.suffix} />
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: headshot + code card ── */}
        <div className="hidden md:flex flex-col items-center gap-6">

          {/* Headshot */}
          <div className="relative">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-400 blur-md opacity-30 scale-110" />
            <div className="relative w-52 h-52 rounded-full border-2 border-sky-400/40 overflow-hidden shadow-xl">
              <Image
                src="/Photo/headshot.png"
                alt="Kyi Kyi Naing (Crystal)"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Fallback placeholder shown until real photo is added (placed behind the image) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 pointer-events-none bg-gradient-to-br from-[#0f2040] to-[#0a1628] dark:from-[#0f2040] dark:to-[#0a1628] from-slate-100 to-slate-200">
                <span className="text-5xl select-none">👩</span>
                <span className="font-mono text-xs text-sky-400 mt-2">crystal</span>
              </div>
            </div>
            {/* Location badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-[#1e2d45] rounded-full px-3 py-1 shadow-md whitespace-nowrap">
              <span className="text-xs">📍</span>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">London, ON</span>
            </div>
          </div>

          {/* Code card */}
          <div className="bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-[#1e2d45] rounded-xl p-5 font-mono text-sm leading-7 w-72 shadow-lg dark:shadow-none dark:glow-sky mt-2">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <div className="text-slate-400">{"// crystal.profile"}</div>
            <div><span className="text-indigo-500 dark:text-indigo-400">"role"</span><span className="text-slate-400">: </span><span className="text-orange-500 dark:text-orange-300">"Software Engineer"</span><span className="text-slate-400">,</span></div>
            <div><span className="text-indigo-500 dark:text-indigo-400">"stack"</span><span className="text-slate-400">: [</span></div>
            <div className="pl-4"><span className="text-orange-500 dark:text-orange-300">".NET"</span><span className="text-slate-400">, </span><span className="text-orange-500 dark:text-orange-300">"C#"</span><span className="text-slate-400">,</span></div>
            <div className="pl-4"><span className="text-orange-500 dark:text-orange-300">"REST APIs"</span></div>
            <div><span className="text-slate-400">],</span></div>
            <div><span className="text-indigo-500 dark:text-indigo-400">"ai"</span><span className="text-slate-400">: </span><span className="text-emerald-500 dark:text-emerald-400">true</span><span className="text-slate-400">,</span></div>
            <div><span className="text-indigo-500 dark:text-indigo-400">"available"</span><span className="text-slate-400">: </span><span className="text-emerald-500 dark:text-emerald-400">true</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
