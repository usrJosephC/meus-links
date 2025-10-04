// Componente para a barra de progresso individual
const SkillBar = ({ skill, percentage, colorClass }) => (
  <div>
    <div className="[display:flex] [justify-content:space-between] mb-[0.25rem]">
        <p className="font-[500] text-slate-200">{skill}</p>
        <p className="text-[0.875rem] font-[500] text-slate-200">{percentage}%</p>
    </div>
    <div className="w-[100%] [background-color:#e5e7eb] rounded-[9999px] h-[0.625rem]">
      <div
        className={`h-[0.625rem] rounded-[9999px] ${colorClass}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default function SkillsSection() {
  return (
    <section id="habilidades" className="rounded-[0.75rem] backdrop-blur-[10px] [background-color:rgba(255,255,255,0.2)] [background-color:#ffffff] p-[1.5rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
      <h2 className="text-[1.5rem] font-[700] text-purple-800 mb-[1.5rem]">Habilidades</h2>
      <div className="[display:grid] grid-cols-[1fr] md:grid-template-columns[1fr_1fr] gap-[2rem]">
        
        <div className="[display:flex] [flex-direction:column] gap-[1rem]">
          <h3 className="font-[600] text-slate-100 text-[1.125rem] border-b-[2px] border-purple-700 pb-[0.5rem]">Técnicas</h3>
          <SkillBar skill="React & Next.js" percentage={60} colorClass="[background-color:#581c87]" />
          <SkillBar skill="JavaScript (ES6+)" percentage={70} colorClass="[background-color:#581c87]" />
          <SkillBar skill="HTML5 & CSS3" percentage={75} colorClass="[background-color:#581c87]" />
          <SkillBar skill="Tailwind CSS" percentage={60} colorClass="[background-color:#581c87]" />
        </div>
        
        <div className="[display:flex] [flex-direction:column] gap-[1rem]">
          <h3 className="font-[600] text-slate-100 text-[1.125rem] border-b-[2px] border-purple-700 pb-[0.5rem]">Interpessoais</h3>
          <SkillBar skill="Comunicação" percentage={80} colorClass="[background-color:#ffbc00]" />
          <SkillBar skill="Trabalho em Equipe" percentage={95} colorClass="[background-color:#ffbc00]" />
          <SkillBar skill="Resolução de Problemas" percentage={85} colorClass="[background-color:#ffbc00]" />
          <SkillBar skill="Aprendizagem Contínua" percentage={100} colorClass="[background-color:#ffbc00]" />
        </div>
      </div>
    </section>
  );
}