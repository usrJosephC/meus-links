export default function EducationSection() {
    return (
        <section id="formacao" className="rounded-[0.75rem] backdrop-blur-[10px] [background-color:rgba(255,255,255,0.2)] p-[1.5rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <h2 className="text-[1.5rem] font-[700] text-purple-800 mb-[1.5rem]">Formação</h2>
            <div className="border-l-[2px] [border-color:#ffbc00] pl-[1.5rem]">
                <div className="[position:relative] mb-[1.5rem]">
                    <div className="[position:absolute] w-[1rem] h-[1rem] [background-color:#581c87] rounded-[9999px] mt-[0rem] left-[-2.15rem] border-[2px] [border-color:#ffffff]"></div>
                    <h3 className="font-[600] text-slate-200">Graduando em Ciências da Computação</h3>
                    <p className="text-slate-100">Afya Centro Universitário Unima (5º Período)</p>
                </div>
                 <div className="[position:relative]">
                    <div className="[position:absolute] w-[1rem] h-[1rem] [background-color:#581c87] rounded-[9999px] mt-[0.1rem] left-[-2.15rem] border-[2px] [border-color:#ffffff]"></div>
                    <h3 className="font-[600] text-slate-200">Curso de JavaScript</h3>
                    <p className="text-slate-100">OxeTech LAB (2025)</p>
                </div>
                <div className="[position:relative]">
                    <div className="[position:absolute] w-[1rem] h-[1rem] [background-color:#581c87] rounded-[9999px] mt-[0.1rem] left-[-2.15rem] border-[2px] [border-color:#ffffff]"></div>
                    <h3 className="font-[600] text-slate-200">Curso de Introdução a GoLang</h3>
                    <p className="text-slate-100">OxeTech LAB (2024)</p>
                </div>
                <div className="[position:relative]">
                    <div className="[position:absolute] w-[1rem] h-[1rem] [background-color:#581c87] rounded-[9999px] mt-[0.1rem] left-[-2.15rem] border-[2px] [border-color:#ffffff]"></div>
                    <h3 className="font-[600] text-slate-200">Curso de Programação em Java</h3>
                    <p className="text-slate-100">OxeTech LAB (2024)</p>
                </div>
            </div>
        </section>
    );
}