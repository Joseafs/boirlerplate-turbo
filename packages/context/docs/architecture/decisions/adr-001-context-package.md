# ADR-001 — `packages/context` como fonte única de contexto

- **Data:** 2026-11-04
- **Status:** aceita

## Decisão

`docs/` virou `packages/context` (`@repo/context`), apenas Markdown, no formato do casadasbruxas-platform: `context.md` (estado), `tasks.md` (pendências), `history.md` (cronologia) e `docs/` com documentos numerados (ARCH, ENG, UI, ADR). `AGENTS.md` na raiz é só o ponto de entrada; `CLAUDE.md` o importa.

## Motivo

Agentes precisam de um único lugar para ler regras e estado, e atualizá-lo na mesma alteração que muda o projeto. Contexto espalhado em chats e arquivos soltos faz agentes divergirem.
