# Arquitetura

- `apps/*` consome `packages/*`; packages não importam aplicações.
- `ui`: componentes React independentes de Vite/Next, sem regra de produto.
- `contracts`: Zod e tipos inferidos, sem dependência de UI ou API.
- Código específico fica na aplicação; promova para packages quando houver reuso real.
- Cada app tem scripts, configuração e deploy próprios.
- Turborepo orquestra, mas não determina frameworks.

## Next.js

Adicione `apps/site` como um novo app e reutilize `@repo/ui` e `@repo/contracts`, considerando limites server/client e configurações de bundler. Não converta o painel Vite sem motivo.

## Decisões deliberadas

Sem banco, ORM, autenticação, biblioteca de formulário, state manager ou design system pesado. São decisões de cada produto.
