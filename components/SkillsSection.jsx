// Componente para a barra de progresso individual
const SkillBar = ({ skill, percentage, colorClass }) => (
  <div>
    <div className="flex justify-between mb-1">
      <p className="font-medium text-slate-200">{skill}</p>
      <p className="text-sm font-medium text-slate-200">{percentage}%</p>
    </div>

    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full ${colorClass}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

export default function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="rounded-xl backdrop-blur-md bg-white/20 p-6 shadow-md"
    >
      <h2 className="text-2xl font-bold text-purple-800 mb-6">Habilidades</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Técnicas */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-slate-100 text-lg border-b-2 border-purple-700 pb-2">
            Técnicas
          </h3>

          <SkillBar
            skill="React & Next.js"
            percentage={60}
            colorClass="bg-purple-900"
          />
          <SkillBar
            skill="JavaScript (ES6+)"
            percentage={70}
            colorClass="bg-purple-900"
          />
          <SkillBar
            skill="HTML5 & CSS3"
            percentage={75}
            colorClass="bg-purple-900"
          />
          <SkillBar
            skill="Tailwind CSS"
            percentage={60}
            colorClass="bg-purple-900"
          />
        </div>

        {/* Interpessoais */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-slate-100 text-lg border-b-2 border-purple-700 pb-2">
            Interpessoais
          </h3>

          <SkillBar
            skill="Comunicação"
            percentage={80}
            colorClass="bg-yellow-400"
          />
          <SkillBar
            skill="Trabalho em Equipe"
            percentage={95}
            colorClass="bg-yellow-400"
          />
          <SkillBar
            skill="Resolução de Problemas"
            percentage={85}
            colorClass="bg-yellow-400"
          />
          <SkillBar
            skill="Aprendizagem Contínua"
            percentage={100}
            colorClass="bg-yellow-400"
          />
        </div>
      </div>
    </section>
  );
}