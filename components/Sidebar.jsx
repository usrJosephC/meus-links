import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope, FaLink, FaDev } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className=" text- rounded-[0.75rem] backdrop-blur-[10px] [background-color:rgba(255,255,255,0.2)] p-[1.5rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)] [display:flex] [flex-direction:column] [align-items:center] [text-align:center]">
      <Image
        src="/me.jpeg"
        alt="Foto de Joseph Cavalcante"
        width={128}
        height={128}
        className="rounded-[9999px] border-[4px] border-[#ffbc00]"
      />
      <h1 className="mt-[1rem] text-[1.5rem] font-[700] text-slate-200">Joseph Cavalcante</h1>
      <p className="mt-[0.5rem] text-slate-100">
        Desenvolvedor em formação focado em criar experiências digitais marcantes, unindo design moderno e funcionalidade.
      </p>

      <div className="mt-[1.5rem] [display:flex] [flex-direction:column] gap-[0.75rem] [text-align:left]">
        <div className="[display:flex] [align-items:center] gap-[0.75rem] text-slate-200">
          <FaDev size={25} className="text-purple-800" />
          <span>Dev Frontend</span>
        </div>
        <div className="[display:flex] [align-items:center] gap-[0.75rem] text-slate-200">
          <FaMapMarkerAlt size={25} className="text-purple-800" />
          <span>Maceió, Alagoas</span>
        </div>
        <div className="[display:flex] [align-items:center] gap-[0.75rem] text-slate-200">
          <FaEnvelope size={25} className="text-purple-800" />
          <span>josephcavalcante.dev@gmail.com</span>
        </div>
        <div className="[display:flex] [align-items:center] gap-[0.75rem] text-slate-200">
          <FaLink size={25} className="text-purple-800" />
          <Link href="/" className="text-slate-200 underline">Meus Links</Link>
        </div>
      </div>
    </div>
  );
}