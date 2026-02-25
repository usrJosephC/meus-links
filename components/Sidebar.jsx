import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope, FaLink, FaDev } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="rounded-xl backdrop-blur-md bg-white/20 p-6 shadow-md flex flex-col items-center text-center">
      <Image
        src="/me.jpeg"
        alt="Foto de Joseph Cavalcante"
        width={128}
        height={128}
        className="rounded-full border-4 border-yellow-400"
      />

      <h1 className="mt-4 text-2xl font-bold text-slate-200">
        Joseph Cavalcante
      </h1>

      <p className="mt-2 text-slate-100">
        Desenvolvedor em formação focado em criar experiências digitais marcantes,
        unindo design moderno e funcionalidade.
      </p>

      <div className="mt-6 flex flex-col gap-3 text-left w-full">
        <div className="flex items-center gap-3 text-slate-200">
          <FaDev size={25} className="text-purple-800" />
          <span>Dev Frontend</span>
        </div>

        <div className="flex items-center gap-3 text-slate-200">
          <FaMapMarkerAlt size={25} className="text-purple-800" />
          <span>Maceió, Alagoas</span>
        </div>

        <div className="flex items-center gap-3 text-slate-200">
          <FaEnvelope size={25} className="text-purple-800" />
          <span>josephcavalcante.dev@gmail.com</span>
        </div>

        <div className="flex items-center gap-3 text-slate-200">
          <FaLink size={25} className="text-purple-800" />
          <Link href="/" className="underline hover:opacity-80">
            Meus Links
          </Link>
        </div>
      </div>
    </div>
  );
}