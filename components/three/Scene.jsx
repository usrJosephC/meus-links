"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import LinkField from "./LinkField";

function useNodeCount() {
  const [count, setCount] = useState(70);

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth;
      setCount(w < 640 ? 42 : w < 1100 ? 70 : 100);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return count;
}

export default function Scene() {
  const count = useNodeCount();
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  // Nada anima enquanto a aba está em segundo plano.
  useEffect(() => {
    const sync = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0, 14], fov: 60 }}
      dpr={[1, 1.75]}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      frameloop={reduced || !visible ? "demand" : "always"}
      style={{ position: "absolute", inset: 0 }}
    >
      <LinkField key={count} count={count} reduced={reduced} />
    </Canvas>
  );
}
