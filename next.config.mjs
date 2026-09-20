/**
 * next.config.mjs
 *
 * Production configuration for Hostinger Node.js 22 hosting.
 *
 * Key decisions:
 *  - output: "standalone" → self-contained bundle; server.js handles static copy
 *  - poweredByHeader: false → security hardening
 *  - compress: true → gzip at the Node.js level (no nginx in front on Hostinger)
 *  - optimizePackageImports → tree-shakes lucide-react (major JS bundle savings)
 *  - images.formats → serve WebP/AVIF for faster image loads
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Standalone build ──────────────────────────────────────────────────────
  output: "standalone",

  // ── Security ─────────────────────────────────────────────────────────────
  poweredByHeader: false,

  // ── Performance ──────────────────────────────────────────────────────────
  compress: true,

  // ── Bundle optimisation ───────────────────────────────────────────────────
  // Tree-shakes large icon/utility packages — only the icons actually used
  // are included in the bundle, cutting JS significantly.
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // ── Images ───────────────────────────────────────────────────────────────
  images: {
    // Serve next-gen image formats where the browser supports them
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 60 days
    minimumCacheTTL: 60 * 60 * 24 * 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
