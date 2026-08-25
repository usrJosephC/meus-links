"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Revela o bloco quando ele entra na viewport. Com movimento reduzido a
 * transição global cai para ~0s, então o bloco aparece de imediato.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(20px)",
        transition: `opacity .8s var(--ease-out-soft) ${delay}ms, transform .8s var(--ease-out-soft) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
