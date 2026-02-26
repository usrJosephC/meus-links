export default function EducationSection() {
  return (
    <section
      id="formacao"
      className="rounded-xl backdrop-blur-md bg-white/20 p-6 shadow-md"
    >
      <h2 className="text-2xl font-bold text-purple-800 mb-6">Formação</h2>

      <div className="border-l-2 border-yellow-400 pl-6 space-y-6">
        {/* Item */}
        <div className="relative">
          <div className="absolute w-4 h-4 bg-purple-900 rounded-full left-[-2.05rem] border-2 border-white"></div>
          <h3 className="font-semibold text-slate-200">
            Graduando em Ciências da Computação
          </h3>
          <p className="text-slate-100">
            Afya Centro Universitário Unima (6º Período)
          </p>
        </div>

        {/* Item */}
        <div className="relative">
          <div className="absolute w-4 h-4 bg-purple-900 rounded-full left-[-2.05rem] border-2 border-white"></div>
          <h3 className="font-semibold text-slate-200">Curso de JavaScript</h3>
          <p className="text-slate-100">OxeTech LAB (2025)</p>
        </div>

        {/* Item */}
        <div className="relative">
          <div className="absolute w-4 h-4 bg-purple-900 rounded-full left-[-2.05rem] border-2 border-white"></div>
          <h3 className="font-semibold text-slate-200">
            Curso de Introdução a GoLang
          </h3>
          <p className="text-slate-100">OxeTech LAB (2024)</p>
        </div>

        {/* Item */}
        <div className="relative">
          <div className="absolute w-4 h-4 bg-purple-900 rounded-full left-[-2.05rem] border-2 border-white"></div>
          <h3 className="font-semibold text-slate-200">
            Curso de Programação em Java
          </h3>
          <p className="text-slate-100">OxeTech LAB (2024)</p>
        </div>
      </div>
    </section>
  );
}