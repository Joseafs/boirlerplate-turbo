# Começando

1. Instale Node 22+ e pnpm 10.
2. Na raiz, `corepack enable && pnpm install`.
3. Execute `pnpm dev`; web em :5173 e API em :3001/health.
4. Instale as extensões recomendadas de VS Code.
5. Execute `pnpm format`, `pnpm lint`, `pnpm typecheck`, `pnpm test` e `pnpm build`.

## Novo app

Crie `apps/nome` com package.json, scripts e TS/ESLint estendidos dos packages compartilhados. O workspace encontra apps automaticamente.

## Novo package

Crie `packages/nome`, defina exports explícitos e adicione como `workspace:*` nos consumidores. Evite ciclos de dependência.
