// components/LinkCard.jsx
"use client";

import { Globe, Linkedin, Github, Mail, Instagram } from "lucide-react";

const icons = {
  globe: Globe,
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  instagram: Instagram,
};

export default function LinkCard({ link }) {
  const Icon = icons[link.icon] || Globe;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center gap-[0.75rem] p-[1rem] rounded-[1.5rem] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-colors duration-[300ms]
        no-underline
        ${
          link.highlight
            ? "bg-[var(--color-accent)] text-[#fff] hover:bg-[var(--color-accent-dark)]"
            : "bg-[#fff] text-[var(--color-text-default)] hover:bg-[var(--color-primary)] hover:text-[#fff]"
        }
      `}
    >
      <Icon size={24} className="flex-shrink-0" />
      <span className="font-[500] text-[1.125rem]">{link.title}</span>
    </a>
  );
}