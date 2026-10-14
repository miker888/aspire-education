import type { NextConfig } from "next";

// GitHub Pages serves a project site from /<repo-name>/, so the deploy
// workflow sets NEXT_PUBLIC_BASE_PATH. Leave it empty for a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
