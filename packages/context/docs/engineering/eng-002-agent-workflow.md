# ENG-002 — Como agentes atuam neste projeto

Fluxo obrigatório para qualquer tarefa. Regras de código: [ENG-001](eng-001-code-conventions.md). Este arquivo trata de **como trabalhar**.

## 1. Antes de alterar

1. Leia `context.md` (estado atual) e `tasks.md` (pendências).
2. Leia [ARCH-001](../architecture/arch-001-monorepo-boundaries.md) e, se tocar UI, [UI-001](../ui/ui-001-atomic-components.md).
3. Procure um exemplar existente e siga-o (ex.: `packages/ui/src/atoms/Button`). Consistência vence preferência pessoal.
4. Confirme o workspace: específico de um app fica no app; só vira package com reuso real.
5. **Não invente regra de negócio.** Sem fonte clara, diga e marque `TODO` em `tasks.md`.

## 2. Escopo

- Faça só o que foi pedido. Sem refatorações, renomeações ou "melhorias" paralelas; registre-as como sugestão ao final.
- Sem dependência, camada ou abstração nova sem justificativa; se adicionar, escreva um ADR em `docs/architecture/decisions/`.
- Sem arquivos vazios, placeholders nem pastas "para o futuro".
- Decisão de produto ou gosto do dono (nome, estilo, biblioteca): pergunte, não assuma.

## 3. Definição de pronto

Na raiz, estes comandos passam **e você os executou de fato**:

```bash
pnpm format:check
pnpm check   # lint + typecheck + test + build via Turborepo
```

- Corrija estilo com `pnpm type:fix` (format + lint --fix + typecheck), nunca com `eslint-disable`/`@ts-ignore`/`any`.
- Comportamento novo ou alterado tem teste ([ENG-001](eng-001-code-conventions.md#testes)).
- Componente novo segue o checklist de [UI-001](../ui/ui-001-atomic-components.md#checklist-de-um-componente-novo).
- Se algo falhar e você não conseguir corrigir, relate a falha com a saída, em vez de reportar sucesso.

## 4. Manter o contexto vivo (mesma alteração)

| Mudou…                          | Atualize…                                           |
| ------------------------------- | --------------------------------------------------- |
| Estado do projeto               | `context.md`                                        |
| Tarefa concluída ou replanejada | `tasks.md` e, se relevante, `history.md`            |
| Arquitetura, regra ou lib       | ADR em `docs/architecture/decisions/` + doc afetado |

## 5. Relato final

Curto e honesto: o que mudou, comandos executados e resultado, o que não foi verificado, sugestões fora de escopo.

## 6. Exige confirmação

Commit, push, mudança de CI, alteração de versão de dependência existente, remoção de arquivos e qualquer operação destrutiva ou externa. Commits seguem Conventional Commits com escopo ([ENG-001](eng-001-code-conventions.md#commits)).

## Mapa rápido

| Preciso de…                   | Onde                                                   |
| ----------------------------- | ------------------------------------------------------ |
| Componente reutilizável       | `packages/ui/src/{atoms,molecules,organisms}`          |
| Schema/tipo compartilhado     | `packages/contracts/src`                               |
| Regra de lint / tsconfig      | `packages/eslint-config`, `packages/typescript-config` |
| Tela, rota, lógica de produto | `apps/web/src`                                         |
| Endpoint, lógica de servidor  | `apps/api/src`                                         |
| Documentação / decisões       | `packages/context`                                     |
