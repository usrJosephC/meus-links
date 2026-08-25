"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Mark from "@/components/ui/Mark";

/**
 * Barra flutuante compartilhada pelas duas páginas.
 * `sections` liga a navegação às âncoras e marca a seção em tela.
 */
export default function TopBar({ sections = [], action }) {
  const [active, setActive] = useState(sections[0]?.id ?? null);

  useEffect(() => {
    if (!sections.length) return;

    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top) setActive(top.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.5] }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <header className="sticky top-4 z-50 flex justify-center px-4">
      <nav className="panel flex w-full max-w-3xl items-center gap-3 rounded-full px-4 py-2.5 sm:px-5">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-[#f2edfb] transition-colors hover:text-lilac"
        >
          <Mark size={17} className="text-lilac" />
          <span className="font-display text-sm font-extrabold tracking-[0.14em]">
            DEVELOPER.BIO
          </span>
        </Link>

        {sections.length > 0 && (
          <ul className="ml-auto hidden items-center gap-1 md:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "true" : undefined}
                  className={`rounded-full px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.12em] uppercase transition-colors ${
                    active === s.id
                      ? "bg-lilac/15 text-lilac-soft"
                      : "text-fog hover:text-mist"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {action && (
          <Link
            href={action.href}
            className={`${sections.length ? "" : "ml-auto"} inline-flex shrink-0 items-center gap-1.5 rounded-full border border-lilac/20 px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.12em] text-mist uppercase transition-colors hover:border-lilac/45 hover:text-lilac-soft`}
          >
            {action.label}
            <ArrowUpRight size={13} aria-hidden />
          </Link>
        )}
      </nav>
    </header>
  );
}
