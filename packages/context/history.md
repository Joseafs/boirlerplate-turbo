# Histórico

Mais recente primeiro.

## 2026-11-04

- Confirmados pelo dono: `no-explicit-any` como erro, prefixo `should` nos testes e `noUncheckedIndexedAccess` mantido (ADR-002, ADR-004).

- Boilerplate revisado: corrigidos lint quebrado, `tsconfig` do `contracts`, dependência `globals` do api, `autocrlf`/CRLF e CI com `--frozen-lockfile`; lockfile gerado.
- `docs/` movido para `packages/context` e reorganizado no formato do casadasbruxas (`context.md`, `tasks.md`, `history.md`, `docs/`).
- `@repo/ui` estruturado em `atoms/molecules/organisms` com subpaths; `Button` com testes.
- Padrão de lint/format do painel aplicado em `@repo/eslint-config` (ADR-002); Husky + lint-staged; alias `~/` no web (ADR-003).
- Leitura dos projetos painel, checkout e casadasbruxas-platform como referência de padrões.
