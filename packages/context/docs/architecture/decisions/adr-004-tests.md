# ADR-004 — Convenções de teste

- **Data:** 2026-11-04
- **Status:** aceita

## Decisão

Vitest + Testing Library em `jsdom`, sem globals. Componentes: `tests.tsx` na pasta (como no painel). Hooks, serviços e utils: `tests.ts` na própria pasta. Estrutura `describe("Nome")` + `it("should ...")`.

## Nota (confirmada pelo dono em 2026-11-04)

O painel usa globals e títulos como "calls onChange when…"; aqui mantivemos imports explícitos (como no checkout) e o prefixo `should`. Revisitar se divergir do seu hábito.
