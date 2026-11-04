# ADR-005 — Pacotes internos exportam TypeScript fonte

- **Data:** 2026-11-04
- **Status:** aceita, com pendência

## Decisão

`@repo/ui` e `@repo/contracts` exportam `.ts/.tsx` direto, consumidos por Vite e `tsx`, sem etapa de build própria.

## Pendência

`node dist/server.js` não carrega `.ts` de `@repo/contracts`, e o `apps/api` não tem script `start`. Definir bundler (ex.: tsup) ou build do `contracts`. Ver `tasks.md`.
