"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const LINK_DISTANCE = 2.2; // distância máxima, em unidades de mundo, para desenhar um fio
const POINTER_RADIUS = 3.2; // raio de influência do ponteiro
const DEPTH = 6;

/** Deriva e semente de cada nó. Sorteado fora do render, no primeiro quadro. */
function createMotion(count) {
  const velocities = new Float32Array(count * 3);
  const seeds = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    velocities[i * 3] = (Math.random() - 0.5) * 0.012;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.012;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.006;
    seeds[i] = Math.random() * Math.PI * 2;
  }

  return { count, velocities, seeds, area: 0 };
}

/**
 * Campo de nós conectados. Cada nó deriva sua cor da profundidade e da
 * proximidade do ponteiro; os fios só existem enquanto dois nós estão perto.
 */
export default function LinkField({ count = 90, reduced = false }) {
  const { viewport } = useThree();
  const pointsRef = useRef(null);
  const linesRef = useRef(null);
  const motionRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0, active: false });
  const scroll = useRef(0);

  const maxSegments = count * 6;

  // Só a alocação acontece no render; o conteúdo é preenchido no useFrame.
  const buffers = useMemo(
    () => ({
      positions: new Float32Array(count * 3),
      colors: new Float32Array(count * 3),
      linePositions: new Float32Array(maxSegments * 2 * 3),
      lineColors: new Float32Array(maxSegments * 2 * 3),
    }),
    [count, maxSegments]
  );

  // O canvas não recebe eventos (pointer-events: none), então o ponteiro vem
  // da janela e é convertido para coordenadas normalizadas.
  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      pointer.current.active = true;
    };
    const onLeave = () => {
      pointer.current.active = false;
    };
    const onScroll = () => {
      scroll.current = window.scrollY;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useFrame((_, delta) => {
    const points = pointsRef.current;
    const lines = linesRef.current;
    if (!points || !lines) return;

    if (!motionRef.current || motionRef.current.count !== count) {
      motionRef.current = createMotion(count);
    }
    const motion = motionRef.current;
    const { velocities, seeds } = motion;

    // As arrays vêm dos atributos da geometria: é o que o three.js vai reenviar.
    const positions = points.geometry.attributes.position.array;
    const colors = points.geometry.attributes.color.array;
    const linePositions = lines.geometry.attributes.position.array;
    const lineColors = lines.geometry.attributes.color.array;

    const step = reduced ? 0 : Math.min(delta, 0.05) * 60;
    const halfW = viewport.width / 2 + 1;
    const halfH = viewport.height / 2 + 1;

    // Espalha os nós pelo viewport real assim que ele é medido (e a cada
    // mudança grande). Sem isso uma caixa inicial fixa deixa o campo empelotado.
    const area = Math.round(viewport.width * viewport.height);
    if (area > 0 && Math.abs(area - motion.area) > area * 0.2) {
      motion.area = area;
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2 * halfW;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2 * halfH;
        positions[i * 3 + 2] = (Math.random() - 0.5) * DEPTH;
      }
    }

    const px = pointer.current.x * (viewport.width / 2);
    const py = pointer.current.y * (viewport.height / 2);
    const pointerOn = pointer.current.active && !reduced;

    // Deriva vertical lenta acompanhando a rolagem, para o fundo não parecer colado.
    const drift = reduced ? 0 : scroll.current * 0.0015;
    const now = performance.now() * 0.0004;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;

      positions[ix] += velocities[ix] * step;
      positions[ix + 1] += velocities[ix + 1] * step;
      positions[ix + 2] += velocities[ix + 2] * step;

      // Envolve o nó nas bordas do viewport para o campo nunca esvaziar.
      if (positions[ix] > halfW) positions[ix] = -halfW;
      if (positions[ix] < -halfW) positions[ix] = halfW;
      if (positions[ix + 1] > halfH) positions[ix + 1] = -halfH;
      if (positions[ix + 1] < -halfH) positions[ix + 1] = halfH;
      if (Math.abs(positions[ix + 2]) > DEPTH / 2) velocities[ix + 2] *= -1;

      let glow = 0;
      if (pointerOn) {
        const dx = positions[ix] - px;
        const dy = positions[ix] + drift - py;
        const dist = Math.hypot(dx, dy);
        if (dist < POINTER_RADIUS) {
          const fade = 1 - dist / POINTER_RADIUS;
          const force = fade * fade;
          glow = force;
          // Afasta suavemente: o cursor abre espaço em vez de arrastar tudo junto.
          positions[ix] += (dx / (dist || 1)) * force * 0.06 * step;
          positions[ix + 1] += (dy / (dist || 1)) * force * 0.06 * step;
        }
      }

      // Pulso próprio de cada nó, para o campo respirar mesmo parado.
      const pulse = 0.55 + 0.45 * Math.sin(seeds[i] + now);
      const depth = 1 - (positions[ix + 2] + DEPTH / 2) / DEPTH; // 0 fundo, 1 frente
      const base = 0.26 + depth * 0.5 * pulse;

      colors[ix] = base * 0.72 + glow * 0.9;
      colors[ix + 1] = base * 0.55 + glow * 0.66;
      colors[ix + 2] = base * 1.15 + glow;
    }

    points.geometry.attributes.position.needsUpdate = true;
    points.geometry.attributes.color.needsUpdate = true;
    points.position.y = drift;

    // Reconstrói os fios: só sobrevivem os pares que ainda estão próximos.
    let seg = 0;
    for (let i = 0; i < count && seg < maxSegments; i++) {
      const ix = i * 3;
      for (let j = i + 1; j < count && seg < maxSegments; j++) {
        const jx = j * 3;
        const dx = positions[ix] - positions[jx];
        const dy = positions[ix + 1] - positions[jx + 1];
        const dz = positions[ix + 2] - positions[jx + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist > LINK_DISTANCE) continue;

        const strength = (1 - dist / LINK_DISTANCE) * 0.5;
        const o = seg * 6;

        linePositions[o] = positions[ix];
        linePositions[o + 1] = positions[ix + 1];
        linePositions[o + 2] = positions[ix + 2];
        linePositions[o + 3] = positions[jx];
        linePositions[o + 4] = positions[jx + 1];
        linePositions[o + 5] = positions[jx + 2];

        // A cor do fio herda o brilho dos dois nós que ele une. O teto baixo
        // mantém os cruzamentos em violeta — somados, iam estourar para branco.
        for (let k = 0; k < 2; k++) {
          const src = k === 0 ? ix : jx;
          const t = o + k * 3;
          const lit = Math.min(colors[src] * 0.3 + strength * 0.4, 0.3);
          lineColors[t] = lit * 0.62;
          lineColors[t + 1] = lit * 0.34;
          lineColors[t + 2] = lit;
        }
        seg++;
      }
    }

    lines.geometry.setDrawRange(0, seg * 2);
    lines.geometry.attributes.position.needsUpdate = true;
    lines.geometry.attributes.color.needsUpdate = true;
    lines.position.y = drift;
  });

  return (
    <group>
      <points ref={pointsRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[buffers.positions, 3]}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[buffers.colors, 3]}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.09}
          sizeAttenuation
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[buffers.linePositions, 3]}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[buffers.lineColors, 3]}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}
