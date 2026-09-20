/**
 * server.js — Hostinger Node.js 22 Entry Point
 *
 * ─── HOW THIS WORKS ─────────────────────────────────────────────────────────
 *
 *  next build (with output: "standalone") creates:
 *    .next/
 *      standalone/
 *        server.js        ← Next.js self-contained server
 *        node_modules/    ← minimal production deps (auto-included by Next.js)
 *        .next/           ← server-side compiled files
 *
 *  Static browser assets are NOT copied automatically — this file handles that:
 *    public/           → .next/standalone/public/
 *    .next/static/     → .next/standalone/.next/static/
 *
 * ─── HOSTINGER SETTINGS ─────────────────────────────────────────────────────
 *   Framework preset : Other
 *   Node.js version  : 22
 *   Entry file       : server.js
 *   Output directory : .next
 *
 * ─── DEPLOYMENT STEPS ───────────────────────────────────────────────────────
 *   1. Upload project files (see UPLOAD CHECKLIST below)
 *   2. SSH → cd public_html → npm install
 *   3. SSH → npm run build
 *   4. hPanel → Node.js → Restart app
 *   (npm start also works: node server.js)
 *
 * ─── UPLOAD CHECKLIST ───────────────────────────────────────────────────────
 *   ✅ Upload: app/ components/ config/ hooks/ lib/ prisma/ public/ utils/
 *   ✅ Upload: server.js package.json package-lock.json next.config.mjs
 *   ✅ Upload: prisma.config.ts tailwind.config.ts tsconfig.json .env
 *   ✅ Upload: postcss.config.mjs theme.config.ts .eslintrc.json
 *   ❌ Skip:   node_modules/  .next/  .git/  *.tsbuildinfo
 */

"use strict";

const path = require("path");
const fs   = require("fs");

// ── Environment ──────────────────────────────────────────────────────────────
process.env.NODE_ENV = "production";

// ── Paths ────────────────────────────────────────────────────────────────────
const ROOT_DIR        = __dirname;

// Load .env file automatically for Hostinger (standalone mode doesn't do this automatically)
try {
  require("dotenv").config({ path: path.join(ROOT_DIR, ".env") });
} catch (e) {
  console.log("No dotenv package or .env file found. Error:", e.message);
}

const PORT     = parseInt(process.env.PORT     || "3000", 10);
const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
const STANDALONE_DIR  = path.join(ROOT_DIR, ".next", "standalone");
const STANDALONE_SRV  = path.join(STANDALONE_DIR, "server.js");

// ── Guard: ensure build was run ───────────────────────────────────────────────
if (!fs.existsSync(STANDALONE_SRV)) {
  console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.error("  ❌  .next/standalone/server.js not found!");
  console.error("  Run: npm install && npm run build");
  console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  process.exit(1);
}

// ── Copy static assets into the standalone bundle ─────────────────────────────
// Next.js does NOT do this — must be done before starting the server.
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return; // skip if source missing
  fs.mkdirSync(dest, { recursive: true });
  fs.cpSync(src, dest, { recursive: true, force: true });
}

copyDir(
  path.join(ROOT_DIR, "public"),
  path.join(STANDALONE_DIR, "public")
);
copyDir(
  path.join(ROOT_DIR, ".next", "static"),
  path.join(STANDALONE_DIR, ".next", "static")
);

// ── Set runtime env for standalone server ────────────────────────────────────
process.env.PORT     = String(PORT);
process.env.HOSTNAME = HOSTNAME;

// ── Startup log ──────────────────────────────────────────────────────────────
const now = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("  🚀  AJ Legal Consultant — Production Server");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`  Node.js     : ${process.version}`);
console.log(`  Environment : ${process.env.NODE_ENV}`);
console.log(`  Port        : ${PORT}`);
console.log(`  Started at  : ${now} IST`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// ── Start Next.js standalone server ──────────────────────────────────────────
require(STANDALONE_SRV);
