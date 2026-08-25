import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-lilac/10 px-2 pt-6 sm:flex-row">
      <p className="mono">
        © {new Date().getFullYear()} Developer.bio — {profile.name}
      </p>
      <p className="mono">
        {profile.location} · {profile.role}
      </p>
    </footer>
  );
}
