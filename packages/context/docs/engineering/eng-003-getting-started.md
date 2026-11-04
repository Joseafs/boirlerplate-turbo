# ENG-003 — Começando

1. Node 22+ (`.nvmrc`) e pnpm 10; o repositório só aceita pnpm.
2. Na raiz, `corepack enable && pnpm install` (instala também os hooks do Husky).
3. `pnpm dev`; web em :5173 e API em :3001/health.
4. Instale as extensões recomendadas de VS Code.
5. Antes de concluir qualquer mudança: `pnpm format:check` e `pnpm check`.

Atalhos: `pnpm format` (Prettier), `pnpm lint:fix` (ESLint --fix), `pnpm type:fix` (os dois + typecheck).

O hook de `pre-commit` roda Prettier nos arquivos staged e `lint` + `typecheck` nos workspaces afetados.

## Novo app

Crie `apps/nome` com `package.json`, scripts e TS/ESLint estendidos dos packages compartilhados (`@repo/typescript-config`, `@repo/eslint-config/{base,node,react}`). Apps com Vite replicam o alias `~/` (tsconfig `paths` + `resolve.alias`). O workspace encontra apps automaticamente.

## Novo package

Crie `packages/nome`, defina `exports` explícitos e adicione como `workspace:*` nos consumidores. Evite ciclos. Registre um ADR se a decisão não for óbvia.

## Novo componente

Siga [UI-001](../ui/ui-001-atomic-components.md).
