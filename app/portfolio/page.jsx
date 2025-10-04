import Sidebar from '@/components/Sidebar';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-[72rem] p-[1rem] sm:p-[1.5rem] lg:p-[2rem]">
      <div className="[display:flex] [flex-direction:column] gap-[2rem] lg:[flex-direction:row] lg:gap-[3rem]">
        
        <aside className="w-[100%] lg:w-[33.33%] lg:[position:sticky] lg:top-[2rem] [align-self:flex-start]">
          <Sidebar />
        </aside>

        <main className="w-[100%] lg:w-[66.67%]">
          <div className="[display:flex] [flex-direction:column] gap-[3rem]">
            <AboutSection />
            <SkillsSection />
            <EducationSection />
            <ProjectsSection />
          </div>
        </main>

      </div>
    </div>
  );
}