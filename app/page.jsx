import LinkCard from "@/components/LinkCard";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { links } from "@/data/links";

export const metadata = {
  title: "Meus Links",
  description: "Acesse minhas redes sociais e portfóflio.",
  openGraph: {
    // ... seu openGraph
  },
};

export default function LinksPage() {
  return (
    <main
      className="flex min-h-[100vh] flex-col items-center justify-center gap-[2rem] p-[1.5rem]"
    >
      <div className="fixed top-[1.5rem] right-[1.5rem]">
        <ThemeToggleButton />
      </div>

      <h1 className="font-display text-[2.25rem] text-[var(--color-primary)] mb-[1rem]">
        🌐 Meus Links
      </h1>

      <p className="font-sans text-[var(--color-text-secondary)] mb-[1.5rem] text-center max-w-[28rem]">
        Acesse minhas redes sociais, portfóflio e formas de contato em um só lugar.
      </p>

      <div className="flex flex-col gap-[1rem] w-[100%] max-w-[28rem]">
        {links.map((link, i) => (
          <LinkCard key={i} link={link} />
        ))}
      </div>
    </main>
  );
}