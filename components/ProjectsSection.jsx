import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Portfólio Pessoal',
    description:
      'Este próprio site! Construído com Next.js, Tailwind CSS e design responsivo.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    imageUrl: '/project1.png',
    githubUrl: 'https://github.com/usrJosephC/meus-links',
    liveUrl: '/',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="rounded-xl backdrop-blur-md bg-white/20 p-6 shadow-md"
    >
      <h2 className="text-2xl font-bold text-purple-800 mb-2">Projetos</h2>
      <p className="text-slate-100 mb-6">
        Uma seleção de projetos que demonstram minhas habilidades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}