"use client";

import dynamic from "next/dynamic";

// A cena só é baixada no cliente: o HTML inicial continua leve e legível sem WebGL.
const Scene = dynamic(() => import("./Scene"), { ssr: false });

// z-[-1] mantém o campo acima do glow de fundo (body::before, que fica em -2)
// e abaixo de todo o conteúdo.
export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-1]">
      <Scene />
    </div>
  );
}
