"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Panel from "@/components/ui/Panel";
import { profile } from "@/data/profile";

const FIELD =
  "w-full rounded-[14px] border border-lilac/15 bg-ink/60 px-4 py-3 font-mono text-xs tracking-[0.06em] text-mist placeholder:text-fog transition-colors focus:border-lilac/45 focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  // Sem backend: a mensagem é montada e entregue ao cliente de email do visitante.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato de ${form.name || "site"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Panel id="contato" index="06" label="Contato" className="h-full p-6 sm:p-8">
      <h2 className="font-display text-3xl font-extrabold">
        Vamos nos conectar
      </h2>
      <p className="mt-2 text-sm text-mist">
        Preencha os campos e o rascunho abre no seu app de email, já endereçado.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
        <label className="sr-only" htmlFor="contact-name">
          Nome
        </label>
        <input
          id="contact-name"
          className={FIELD}
          placeholder="NOME"
          value={form.name}
          onChange={update("name")}
          required
        />

        <label className="sr-only" htmlFor="contact-email">
          Seu email
        </label>
        <input
          id="contact-email"
          type="email"
          className={FIELD}
          placeholder="EMAIL"
          value={form.email}
          onChange={update("email")}
          required
        />

        <label className="sr-only" htmlFor="contact-message">
          Mensagem
        </label>
        <textarea
          id="contact-message"
          rows={4}
          className={`${FIELD} resize-y`}
          placeholder="MENSAGEM"
          value={form.message}
          onChange={update("message")}
          required
        />

        <button
          type="submit"
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-[14px] bg-lilac px-5 py-3 font-display text-sm font-bold text-[#1a0f2b] transition-colors hover:bg-lilac-soft"
        >
          <Send size={15} aria-hidden />
          Abrir email
        </button>
      </form>

      <p className="mono mt-4 normal-case tracking-[0.06em]">
        Ou escreva direto para{" "}
        <a
          href={`mailto:${profile.email}`}
          className="text-lilac underline underline-offset-4 hover:text-lilac-soft"
        >
          {profile.email}
        </a>
      </p>
    </Panel>
  );
}
