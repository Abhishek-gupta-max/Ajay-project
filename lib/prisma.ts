/**
 * lib/prisma.ts — Prisma v7 Client Singleton
 *
 * ─── WHY SINGLETON ──────────────────────────────────────────────────────────
 * Next.js dev mode hot-reloads create new module instances each time.
 * Without caching on globalThis, every hot-reload opens a new DB connection,
 * quickly exhausting the MySQL "max_connections" limit.
 *
 * In production (NODE_ENV=production) this is not an issue — module is loaded
 * once. But the pattern is kept for safety.
 *
 * ─── PRISMA v7 CHANGE ───────────────────────────────────────────────────────
 * Prisma v7 removed `url` from schema.prisma datasource.
 * The DB URL is now passed via `datasourceUrl` in the PrismaClient constructor.
 * The prisma.config.ts file handles CLI operations (migrate, db push, generate).
 */

import { PrismaClient } from "@prisma/client";

// ── Global type declaration for hot-reload caching ───────────────────────────
declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

// ── Client factory ────────────────────────────────────────────────────────────
function createPrismaClient(): PrismaClient {
  return new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
}

// ── Singleton export ──────────────────────────────────────────────────────────
export const prisma: PrismaClient =
  globalThis.__prisma ?? createPrismaClient();

// Cache in dev to survive hot-reloads; in production this never runs.
if (process.env.NODE_ENV !== "production") {
  globalThis.__prisma = prisma;
}
