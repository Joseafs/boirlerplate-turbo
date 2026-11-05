# Contexto atual

Estado vigente do projeto. Atualize junto de qualquer mudança que altere o que está escrito aqui.

## O que é

Boilerplate Turborepo + pnpm + TypeScript, base para os produtos Aurum. Foco atual: **regras de TS, lint e convenções que dão assertividade a pessoas e agentes**.

## Workspaces

| Workspace                    | Papel                                                       | Estado                                   |
| ---------------------------- | ----------------------------------------------------------- | ---------------------------------------- |
| `apps/web`                   | Vite + React; alias `~/`; axios em `services/`; Tailwind v4 | App de exemplo + services com testes     |
| `apps/api`                   | Fastify; `/health` validado com Zod                         | Dev ok; produção pendente (ADR-005)      |
| `packages/ui`                | Componentes atômicos (`atoms/*` com `Button`)               | Só `Button`; molecules/organisms por vir |
| `packages/ui-base`           | shadcn/ui: button, card, input, label (Tailwind v4)         | Vendorizado; ver UI-002                  |
| `packages/hooks`             | `useDebounce`, `useToggle`                                  | Estável                                  |
| `packages/contracts`         | Schemas Zod (`health`)                                      | Mínimo                                   |
| `packages/eslint-config`     | `base`, `node`, `react` (padrão do painel)                  | Estável                                  |
| `packages/typescript-config` | `base`, `library`, `node`, `react`                          | Estável                                  |
| `packages/context`           | Este pacote                                                 | Em evolução                              |

## Padrões vigentes

- Código: [ENG-001](docs/engineering/eng-001-code-conventions.md). Agentes: [ENG-002](docs/engineering/eng-002-agent-workflow.md).
- Services HTTP: [ENG-004](docs/engineering/eng-004-services-template.md). Hooks: [ENG-005](docs/engineering/eng-005-hooks-package.md).
- Fronteiras: [ARCH-001](docs/architecture/arch-001-monorepo-boundaries.md). UI atômica: [UI-001](docs/ui/ui-001-atomic-components.md). shadcn e tema: [UI-002](docs/ui/ui-002-ui-base-shadcn.md).
- Decisões: `docs/architecture/decisions/` (ADR-001 a 008).

## Dependências

Todas com **versão exata** (sem `^`/`~`), exceto `peerDependencies` ([ADR-006](docs/architecture/decisions/adr-006-exact-dependency-versions.md)).

## Verificação

```bash
pnpm format:check
pnpm check
```
