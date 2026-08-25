"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Panel from "@/components/ui/Panel";
import { projects } from "@/data/profile";

function Cover({ project }) {
  // Se a captura ainda não estiver em public/, o card cai na ficha técnica em
  // vez de mostrar imagem quebrada — basta soltar o arquivo depois.
  const [broken, setBroken] = useState(false);

  if (project.image && !broken) {
    return (
      <Image
        src={project.image}
        alt={`Captura de tela do projeto ${project.title}`}
        fill
        sizes="(max-width: 768px) 88vw, 42vw"
        onError={() => setBroken(true)}
        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(140deg,#4a2574,#321852_55%,#12101b)]">
      <div
        className="absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(135deg,transparent_0_11px,rgba(214,191,252,0.35)_11px_12px)]"
        aria-hidden
      />
      <ul className="absolute top-5 left-5 flex flex-col gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="font-mono text-[0.6875rem] tracking-[0.16em] text-lilac-soft/70 uppercase"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group relative w-[85vw] shrink-0 snap-start overflow-hidden rounded-[var(--radius-tile)] border border-lilac/12 bg-surface sm:w-[26rem]">
      <div className="relative h-52 overflow-hidden">
        <Cover project={project} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
        <h3 className="absolute right-5 bottom-4 left-5 font-display text-2xl font-extrabold">
          {project.title}
        </h3>
      </div>

      <div className="p-5">
        <p className="text-sm leading-relaxed text-mist">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-lilac/10 pt-4">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.12em] text-mist uppercase transition-colors hover:text-lilac-soft"
          >
            <FaGithub size={14} aria-hidden />
            Código
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.12em] text-mist uppercase transition-colors hover:text-lilac-soft"
            >
              <ExternalLink size={14} aria-hidden />
              Ver no ar
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const track = useRef(null);

  const scrollBy = (direction) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 20 : 320;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <Panel id="projetos" index="04" label="Projetos" className="p-6 sm:p-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Projetos
          </h2>
          <p className="mt-2 text-sm text-mist">
            Interfaces com foco em fluidez e consistência.
          </p>
        </div>

        <div className="hidden shrink-0 gap-2 sm:flex">
          {[
            { dir: -1, label: "Projeto anterior", Icon: ChevronLeft },
            { dir: 1, label: "Próximo projeto", Icon: ChevronRight },
          ].map(({ dir, label, Icon }) => (
            <button
              key={label}
              type="button"
              onClick={() => scrollBy(dir)}
              aria-label={label}
              className="grid size-9 place-items-center rounded-full border border-lilac/20 text-mist transition-colors hover:border-lilac/45 hover:text-lilac-soft"
            >
              <Icon size={16} aria-hidden />
            </button>
          ))}
        </div>
      </div>

      <div
        ref={track}
        className="-mx-6 mt-7 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Panel>
  );
}
