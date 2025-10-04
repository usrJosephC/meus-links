import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Portfólio Pessoal',
    description: 'Este próprio site! Construído com Next.js, Tailwind CSS e design responsivo.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    imageUrl: '/project1.png', 
    githubUrl: 'https://github.com/usrJosephC/meus-links',
    liveUrl: '/',
  }
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="rounded-[0.75rem] backdrop-blur-[10px] [background-color:rgba(255,255,255,0.2)] p-[1.5rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
       <h2 className="text-[1.5rem] font-[700] text-purple-800 mb-[0.5rem]">Projetos</h2>
       <p className="text-slate-100 mb-[1.5rem]">Uma seleção de projetos que demonstram minhas habilidades.</p>

       <div className="[display:grid] grid-cols-[1fr] md:grid-template-columns[1fr_1fr] gap-[1.5rem]">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
       </div>
    </section>
  );
}