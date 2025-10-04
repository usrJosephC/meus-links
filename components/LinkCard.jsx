import Link from 'next/link';

export default function LinkCard({ href, title, icon }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto');
  
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="[display:flex] w-[100%] [align-items:center] [justify-content:center] gap-[0.75rem] rounded-[0.5rem] p-[0.75rem] backdrop-blur-[10px] [transition-property:transform,background-color] [transition-duration:200ms] hover:scale-[1.05] [color:#ffffff] [background-color:rgba(255,255,255,0.2)] hover:[background-color:rgba(255,255,255,0.3)]"
    >
      {icon}
      <span className="font-[500]">{title}</span>
    </Link>
  );
}