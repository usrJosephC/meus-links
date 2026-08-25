import Link from "next/link";
import { LayoutGrid, Mail, ChevronRight, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const ICONS = {
  grid: (p) => <LayoutGrid {...p} />,
  code: (p) => <FaGithub {...p} />,
  users: (p) => <FaLinkedinIn {...p} />,
  camera: (p) => <FaInstagram {...p} />,
  mail: (p) => <Mail {...p} />,
};

function isExternal(href) {
  return href.startsWith("http") || href.startsWith("mailto");
}

function Badge({ icon, size = 16 }) {
  const Icon = ICONS[icon];
  return (
    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-lilac/20 bg-lilac/10 text-lilac transition-colors group-hover:border-lilac/45 group-hover:text-lilac-soft">
      <Icon size={size} aria-hidden />
    </span>
  );
}

/**
 * Um destino da bio. `feature` vira o bloco alto do topo, `half` divide a
 * linha em dois e o padrão é a linha larga com chevron.
 */
export default function LinkTile({ link, eyebrow }) {
  const external = isExternal(link.href);
  const anchorProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const base =
    "panel panel-hover group block focus-visible:outline-2 focus-visible:outline-offset-2";

  if (link.feature) {
    return (
      <Link href={link.href} {...anchorProps} className={`${base} p-6`}>
        {eyebrow && <p className="mono">{eyebrow}</p>}
        <div className="mt-2 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-extrabold">
              {link.label}
            </h2>
            <p className="mono mt-1.5 flex items-center gap-1 text-mist">
              {link.caption}
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </p>
          </div>
          <LayoutGrid
            size={40}
            strokeWidth={1.25}
            className="shrink-0 text-lilac/35 transition-colors group-hover:text-lilac/70"
            aria-hidden
          />
        </div>
      </Link>
    );
  }

  if (link.half) {
    return (
      <Link href={link.href} {...anchorProps} className={`${base} p-5`}>
        <Badge icon={link.icon} />
        <h2 className="mt-8 font-display text-xl font-extrabold">
          {link.label}
        </h2>
        <p className="mono mt-1 normal-case tracking-[0.08em]">{link.caption}</p>
      </Link>
    );
  }

  return (
    <Link
      href={link.href}
      {...anchorProps}
      className={`${base} flex items-center gap-4 p-4`}
    >
      <Badge icon={link.icon} />
      <span className="min-w-0 flex-1">
        <span className="block font-display text-xl font-extrabold text-[#f2edfb]">
          {link.label}
        </span>
        <span className="mono block normal-case tracking-[0.08em]">
          {link.caption}
        </span>
      </span>
      <ChevronRight
        size={18}
        className="shrink-0 text-fog transition-transform group-hover:translate-x-1 group-hover:text-lilac"
        aria-hidden
      />
    </Link>
  );
}
