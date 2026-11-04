# ARCH-001 — Monorepo e fronteiras

## Regras de fronteira

- `apps/*` consome `packages/*`; packages nunca importam apps.
- Apps não importam código um do outro; compartilhamento só por `packages/*`.
- `packages/context` não é runtime: nunca importar em código de aplicação.
- `ui`: componentes React independentes de Vite/Next, sem regra de produto.
- `contracts`: Zod e tipos inferidos, sem dependência de UI ou API.
- `eslint-config` e `typescript-config`: configuração compartilhada, sem código de produto.
- Código específico de feature fica próximo da feature no app; promova para package só com reuso real.
- Regra de negócio pura não mora em componente React.
- Dados externos são validados nos limites com Zod (`contracts`).
- Route handlers/endpoints ficam finos: request/validação → serviço → resposta.
- Nunca expor segredos em variáveis públicas do cliente (`VITE_*`, `NEXT_PUBLIC_*`).

## Organização

- Cada app tem scripts, configuração e deploy próprios.
- Turborepo orquestra tarefas, mas não determina frameworks.
- Pacotes internos são consumidos como TypeScript fonte (ver [ADR-005](decisions/adr-005-internal-packages-as-source.md)).

## Next.js

Adicione `apps/site` como novo app reutilizando `@repo/ui` e `@repo/contracts`, considerando limites server/client e bundler. Server Components são o padrão; `use client` apenas na menor fronteira interativa. Não converta o painel Vite sem motivo.

## Decisões deliberadas

Sem banco, ORM, autenticação, biblioteca de formulário, state manager ou design system pesado. São decisões de cada produto e entram via ADR.
