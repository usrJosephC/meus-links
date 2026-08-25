import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import Panel from "@/components/ui/Panel";
import { profile, socials } from "@/data/profile";

const CHANNELS = [
  { href: socials.github, label: "GitHub", Icon: FaGithub },
  { href: socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: socials.instagram, label: "Instagram", Icon: FaInstagram },
];

export default function Hero() {
  return (
    <Panel id="manifesto" index="01" label="Manifesto" className="p-6 sm:p-9">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div className="order-2 lg:order-1">
          <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-mist sm:text-base">
            {profile.manifesto}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-lilac px-6 py-3 font-display text-sm font-bold text-[#1a0f2b] transition-colors hover:bg-lilac-soft"
            >
              Contrate-me
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>

            {CHANNELS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-lilac/20 text-mist transition-colors hover:border-lilac/45 hover:text-lilac-soft"
              >
                <Icon size={16} aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 flex flex-col items-center gap-5 lg:order-2 lg:items-end">
          <div className="rounded-full border border-dashed border-lilac/30 p-2">
            <Image
              src={profile.avatar}
              alt={`Retrato de ${profile.name}`}
              width={144}
              height={144}
              priority
              className="size-32 rounded-full object-cover sm:size-36"
            />
          </div>

          <h1 className="text-center font-display text-[2.5rem] leading-[0.92] font-extrabold sm:text-6xl lg:text-right lg:text-[4.25rem]">
            <span className="text-lilac-soft">Joseph</span>
            <br />
            <span className="text-lilac">Cavalcante</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-end">
            <span className="chip">{profile.role}</span>
            <span className="chip">
              <MapPin size={12} aria-hidden />
              {profile.location}
            </span>
          </div>
        </div>
      </div>
    </Panel>
  );
}
