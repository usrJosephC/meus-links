import Image from 'next/image';
import LinkCard from '@/components/LinkCard';
import { links } from '@/data/links';

export default function LinksPage() {
  return (
    <main 
      className="[display:flex] min-h-[100vh] w-[100%] [flex-direction:column] [align-items:center] [justify-content:center] p-[1rem]"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #581c87, #ffbc00)'
      }}
    >
      <div className="[display:flex] [flex-direction:column] [align-items:center] gap-[1rem]">
        <Image
          src="/me.jpeg" 
          alt="Foto de Joseph Cavalcante"
          width={250}
          height={250}
          className="rounded-[9999px] border-[2px] border-[#ffbc00] shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
        />

        <div className="[text-align:center]">
          <h1 className="text-[1.5rem] font-[700] text-white">Joseph Cavalcante</h1>
          <p className="text-white/[0.8]">Desenvolvedor Frontend e entusiasta de tecnologia</p>
        </div>

        <div className="mt-[1rem] [display:flex] w-[100%] max-w-[20rem] [flex-direction:column] gap-[1rem]">
          {links.map((link) => (
            <LinkCard key={link.name} href={link.href} title={link.name} icon={link.icon} />
          ))}
        </div>
      </div>
    </main>
  );
}