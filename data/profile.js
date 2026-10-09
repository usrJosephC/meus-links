// Fonte única de conteúdo do site. Editar aqui reflete nas duas páginas.

export const profile = {
  name: "Joseph Cavalcante",
  role: "Frontend Developer",
  location: "Maceió, AL",
  email: "josephcavalcante.dev@gmail.com",
  avatar: "/me.jpeg",
  tagline:
    "Desenvolvedor Frontend criando experiências digitais de alto desempenho com profundo conhecimento técnico.",
  manifesto:
    "Unindo estética, performance e interação para construir experiências digitais imersivas. Desenvolvo interfaces modernas com foco em fluidez, arquitetura escalável e experiências que conectam intuição humana à lógica do código.",
};

export const socials = {
  github: "https://github.com/usrJosephC",
  linkedin: "https://www.linkedin.com/in/joseph-cavalcante",
  instagram: "https://instagram.com/usr.josephc",
  email: `mailto:${profile.email}`,
};

export const links = [
  {
    key: "portfolio",
    label: "Portfólio",
    caption: "Ver trabalho",
    href: "/portfolio",
    icon: "grid",
    feature: true,
  },
  {
    key: "github",
    label: "GitHub",
    caption: "@usrJosephC",
    href: socials.github,
    icon: "code",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    caption: "Rede profissional",
    href: socials.linkedin,
    icon: "users",
  },
  {
    key: "instagram",
    label: "Instagram",
    caption: "Momentos",
    href: socials.instagram,
    icon: "camera",
    half: true,
  },
  {
    key: "email",
    label: "Email",
    caption: "Entre em contato",
    href: socials.email,
    icon: "mail",
    half: true,
  },
];

export const stack = ["Next.js", "TypeScript", "Tailwind", "React", "APIs"];

export const skills = {
  technical: [
    { name: "React", level: 50 },
    { name: "Next.js", level: 50 },
    { name: "Tailwind CSS", level: 60 },
    { name: "TypeScript", level: 60 },
  ],
  interpersonal: [
    { name: "Comunicação", level: 92 },
    { name: "Trabalho em equipe", level: 78 },
    { name: "Aprendizagem contínua", level: 92 },
    { name: "Resolução de problemas", level: 78 },
  ],
};

// `current: true` recebe o acento âmbar — é o único uso da cor quente no site.
export const education = [
  {
    title: "Ciência da Computação",
    place: "Afya UNIMA",
    period: "2023 — presente",
    detail: "Bacharelado, 7º período",
    current: true,
  },
  {
    title: "Curso de JavaScript",
    place: "OxeTech LAB",
    period: "2025",
  },
  {
    title: "Curso de Programação em Java",
    place: "OxeTech LAB",
    period: "2024",
  },
  {
    title: "Introdução a GoLang",
    place: "OxeTech LAB",
    period: "2024",
  },
  {
    title: "Ensino Médio",
    place: "Colégio São Lucas",
    period: "2019 — 2022",
  },
];

export const projects = [
  {
    title: "Portfólio v1",
    summary:
      "Primeira versão do portfólio pessoal: link-in-bio e página de projetos, publicada na Vercel.",
    tags: ["Next.js", "React", "Tailwind", "Vercel"],
    image: "/project1.png",
    repo: "https://github.com/usrJosephC/meus-links",
    live: "https://usrjosephc.vercel.app",
  },
  {
    title: "GestaBem",
    summary:
      "Landing page da GestaBem, plataforma de acompanhamento de gestantes, construída para a Pantanal Studio.",
    tags: ["React", "Vite", "Tailwind", "Vercel"],
    image: "/project2.png",
    repo: "https://github.com/pantanalstudio/pregnancy-landing-v1",
    live: "https://pregnancy-landing-v1.vercel.app",
  },
  {
    title: "Cavalcante Barbershop PWA",
    summary:
      "PWA mobile-first para agendamentos de barbearia, com notificações push e painel de gestão.",
    tags: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL", "PWA", "Vercel"],
    image: "/project3.png",
    repo: "https://github.com/usrJosephC/cavalcante-barbershop-pwa",
    live: "https://cavalcantebarbershop.vercel.app/",
  },
  {
    title: "InterEng Alagoas PWA",
    summary:
      "PWA para campeonatos de engenharia, com sorteios, tabelas, mata-mata, agenda, comunidade e área administrativa.",
    tags: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL", "Three.js", "Docker", "PWA"],
    image: "/project4.png",
    repo: "https://github.com/usrJosephC/intereng-alagoas-pwa",
    live: "https://interengalagoas.vercel.app/",
  },
];
