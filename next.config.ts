import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fixa a raiz no repositório: sem isso o Turbopack sobe até C:\Users\Joseph.
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
