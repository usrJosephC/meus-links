import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import Hero from "@/components/portfolio/Hero";
import Philosophy from "@/components/portfolio/Philosophy";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";

const SECTIONS = [
  { id: "manifesto", label: "Início" },
  { id: "skills", label: "Stack" },
  { id: "projetos", label: "Trabalho" },
  { id: "contato", label: "Contato" },
];

export const metadata = {
  title: "Portfólio",
  description:
    "Projetos, stack e formação de Joseph Cavalcante, desenvolvedor frontend em Maceió.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-dvh pb-14">
      <TopBar
        sections={SECTIONS}
        action={{ label: "Links", href: "/" }}
      />

      <main className="mx-auto mt-6 w-full max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-12">
            <Hero />
          </Reveal>

          <Reveal className="h-full lg:col-span-4" delay={60}>
            <Philosophy />
          </Reveal>

          <Reveal className="h-full lg:col-span-8" delay={120}>
            <Skills />
          </Reveal>

          <Reveal className="lg:col-span-12" delay={60}>
            <Projects />
          </Reveal>

          <Reveal className="h-full lg:col-span-6" delay={60}>
            <Education />
          </Reveal>

          <Reveal className="h-full lg:col-span-6" delay={120}>
            <Contact />
          </Reveal>
        </div>

        <Footer />
      </main>
    </div>
  );
}
