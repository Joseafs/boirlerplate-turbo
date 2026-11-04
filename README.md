# Boilerplate Turbo

Base full-stack simples e extensível com Turborepo, pnpm e TypeScript.

## Requisitos

Node.js 22+ e pnpm 10.

```bash
corepack enable
pnpm install
pnpm dev
```

- Web (Vite + React): http://localhost:5173
- API (Fastify): http://localhost:3001/health

## Verificações

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm format:check
```

Apps são independentes. Uma aplicação Next.js pode ser adicionada em `apps/site` sem converter o painel Vite.

Leia [contexto](packages/context/context.md), [arquitetura](packages/context/docs/architecture/arch-001-monorepo-boundaries.md), [convenções](packages/context/docs/engineering/eng-001-code-conventions.md) e [guia](packages/context/docs/engineering/eng-003-getting-started.md).
