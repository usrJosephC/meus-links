import Link from 'next/link';

export default function LinkCard({ href, title, icon }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto');

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="
        flex w-full items-center justify-center gap-3
        rounded-lg p-3
        backdrop-blur-md
        transition-transform transition-colors duration-200
        hover:scale-105
        text-white
        bg-white/20 hover:bg-white/30
      "
    >
      {icon}
      <span className="font-medium">{title}</span>
    </Link>
  );
}