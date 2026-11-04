# Orientação para agentes

Este projeto é context-first. Este arquivo é só o ponto de entrada; a fonte de verdade está em `packages/context/`.

## Leia antes de alterar, nesta ordem

1. `packages/context/context.md` (estado) e `packages/context/tasks.md` (pendências).
2. `packages/context/docs/engineering/eng-002-agent-workflow.md` (como trabalhar).
3. `packages/context/docs/engineering/eng-001-code-conventions.md` e `docs/architecture/arch-001-monorepo-boundaries.md`.
4. `packages/context/docs/ui/ui-001-atomic-components.md`: obrigatório ao tocar em UI.
5. Siga um exemplar existente (`packages/ui/src/atoms/Button`).

## Regras inegociáveis

- Direção de dependência: apps -> packages; apps não importam entre si; `packages/context` não é runtime.
- TypeScript estrito. Sem `any`, `@ts-ignore` ou `eslint-disable` para passar verificação; warnings contam como erro.
- Sem imports com `../`: use `~/` (apps) ou o subpath público do pacote.
- Só exports nomeados.
- Sem nova dependência, camada ou abstração sem justificativa (registre um ADR).
- Não invente regra de negócio; sem fonte, marque `TODO` em `tasks.md`.
- Faça só o que foi pedido; sugestões extras vão no relato final.
- Escolhas de gosto do dono (nomes, estilo, bibliotecas): pergunte.
- Mudança de estado, arquitetura ou regra atualiza `context.md`/`tasks.md`/ADR na mesma alteração.
- Commit, push, CI e remoções só com confirmação. Commits em Conventional Commits com escopo.

## Pronto significa

Executar na raiz e ver passar: `pnpm format:check` e `pnpm check`. Use `pnpm type:fix` para corrigir estilo. Só diga que validou o que realmente executou; se falhar, mostre a falha.
