import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export const links = [
  { name: "Portfólio", href: "/portfolio", icon: <CgWebsite size={20} /> },
  { name: "GitHub", href: "https://github.com/usrJosephC", icon: <FaGithub size={20} /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/joseph-cavalcante", icon: <FaLinkedin size={20} /> },
  { name: "Instagram", href: "https://instagram.com/usr.josephc", icon: <FaInstagram size={20} /> },
  { name: "Email", href: "mailto:josephcavalcante.dev@gmail.com", icon: <FaEnvelope size={20} /> },
];