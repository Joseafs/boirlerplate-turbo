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

Leia [arquitetura](docs/architecture.md), [convenções](docs/conventions.md) e [guia](docs/getting-started.md).

> O lockfile será gerado ao executar `pnpm install`. Comite-o após instalar e validar as dependências.
