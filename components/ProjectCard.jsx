import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
} ) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200/70 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 hover:opacity-95">
      
      <div className="relative h-96">
        <Image
          src={imageUrl || '/project1.png'}
          alt={title}
          fill
          className="object-cover"
          priority={false}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg font-bold leading-tight">{title}</h3>
          <p className="text-white/90 text-sm mt-1 line-clamp-2">{description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/15"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 border-t border-slate-200/70 bg-slate-950/40">
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-200 hover:opacity-80 transition-opacity"
        >
          <FaGithub aria-hidden />
          <span>Código</span>
        </Link>

        {liveUrl && (
          <Link
            href={liveUrl}
            target={liveUrl.startsWith('http') ? '_blank' : '_self'}
            rel={liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 text-slate-200 hover:opacity-80 transition-opacity"
          >
            <FaExternalLinkAlt aria-hidden />
            <span>Ver Projeto</span>
          </Link>
        )}
      </div>
    </div>
  );
}