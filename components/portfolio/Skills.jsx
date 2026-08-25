"use client";

import { useEffect, useRef, useState } from "react";
import Panel from "@/components/ui/Panel";
import { skills } from "@/data/profile";

function Meter({ name, level, filled, delay }) {
  return (
    <li>
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-xs tracking-[0.06em] text-mist">
          {name}
        </span>
        <span className="font-mono text-[0.6875rem] text-fog">{level}%</span>
      </div>
      <div
        className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-lilac/10"
        role="meter"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={name}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-lilac"
          style={{
            width: filled ? `${level}%` : "0%",
            transition: `width 1.1s var(--ease-out-soft) ${delay}ms`,
          }}
        />
      </div>
    </li>
  );
}

function Group({ title, items, filled, offset }) {
  return (
    <div>
      <h3 className="mono text-lilac/70">{title}</h3>
      <ul className="mt-5 flex flex-col gap-5">
        {items.map((skill, i) => (
          <Meter
            key={skill.name}
            {...skill}
            filled={filled}
            delay={offset + i * 90}
          />
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [filled, setFilled] = useState(false);

  // Com movimento reduzido a transição global cai para ~0s: a barra salta
  // direto para o valor final em vez de crescer.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Panel id="skills" index="03" label="Skills" className="h-full p-6 sm:p-8">
      <div
        ref={ref}
        className="grid h-full content-center gap-8 sm:grid-cols-2 sm:gap-10"
      >
        <Group
          title="technical_core"
          items={skills.technical}
          filled={filled}
          offset={0}
        />
        <Group
          title="interpessoal"
          items={skills.interpersonal}
          filled={filled}
          offset={140}
        />
      </div>
    </Panel>
  );
}
