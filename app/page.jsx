import Image from "next/image";
import { MapPin } from "lucide-react";
import TopBar from "@/components/TopBar";
import Reveal from "@/components/ui/Reveal";
import LinkTile from "@/components/links/LinkTile";
import { links, profile, projects, stack } from "@/data/profile";

export default function LinksPage() {
  const [feature, ...rest] = links;
  const rows = rest.filter((l) => !l.half);
  const halves = rest.filter((l) => l.half);

  return (
    <div className="min-h-dvh pb-14">
      <TopBar action={{ label: "Portfólio", href: "/portfolio" }} />

      <main className="mx-auto mt-6 w-full max-w-[30rem] px-4">
        <Reveal>
          <section className="panel px-6 py-9 text-center">
            <div className="relative mx-auto w-fit">
              <Image
                src={profile.avatar}
                alt={`Retrato de ${profile.name}`}
                width={112}
                height={112}
                priority
                className="size-28 rounded-full border-2 border-lilac/50 object-cover"
              />
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-lilac/30 bg-ink px-2.5 py-1 font-mono text-[0.5625rem] tracking-[0.18em] text-lilac-soft uppercase">
                Disponível
              </span>
            </div>

            <h1 className="mt-8 font-display text-[2.75rem] leading-[0.95] font-extrabold">
              Joseph
              <br />
              Cavalcante
            </h1>

            <p className="mx-auto mt-4 max-w-[22rem] text-[0.9375rem] leading-relaxed text-mist">
              {profile.tagline}
            </p>

            <p className="chip mt-6">
              <MapPin size={12} aria-hidden />
              {profile.location}
            </p>
          </section>
        </Reveal>

        <div className="mt-4 flex flex-col gap-4">
          <Reveal delay={60}>
            <LinkTile
              link={feature}
              eyebrow={`${projects.length} projetos selecionados`}
            />
          </Reveal>

          {rows.map((link, i) => (
            <Reveal key={link.key} delay={120 + i * 60}>
              <LinkTile link={link} />
            </Reveal>
          ))}

          <Reveal delay={120 + rows.length * 60}>
            <div className="grid grid-cols-2 gap-4">
              {halves.map((link) => (
                <LinkTile key={link.key} link={link} />
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <section className="mt-10 rounded-[var(--radius-card)] border border-dashed border-lilac/15 bg-ink/45 px-6 py-6 text-center backdrop-blur-sm">
            <h2 className="mono">Stack técnica</h2>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {stack.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <footer className="mt-10 text-center">
          <span className="mx-auto mb-6 block h-px w-10 bg-lilac/25" />
          <p className="mono">
            © {new Date().getFullYear()} Developer.bio — Joseph Cavalcante
          </p>
        </footer>
      </main>
    </div>
  );
}
