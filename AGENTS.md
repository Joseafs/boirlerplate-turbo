# Orientação para agentes

Este arquivo é só o ponto de entrada. A fonte de verdade está em `packages/context/`.

## Leia antes de alterar

1. `packages/context/workflow.md`: como trabalhar, definição de pronto, relato final.
2. `packages/context/architecture.md` e `conventions.md`.
3. `packages/context/components.md`: obrigatório ao tocar em UI.
4. Siga um exemplar existente (`packages/ui/src/atoms/Button`).

## Regras inegociáveis

- Direção de dependência: apps -> packages; nunca o contrário.
- TypeScript estrito. Sem `any`, `@ts-ignore` ou `eslint-disable` para passar verificação.
- Sem nova dependência, camada ou abstração sem justificativa (registre em `packages/context/decisions.md`).
- Faça só o que foi pedido; sugestões extras vão no relato final.
- Escolhas de gosto do dono (nomes, estilo, bibliotecas): pergunte.
- Commit, push, CI e remoções só com confirmação.

## Pronto significa

Executar na raiz e ver passar: `pnpm format:check` e `pnpm check`. Só diga que validou o que realmente executou; se falhar, mostre a falha.
