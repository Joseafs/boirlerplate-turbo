# ADR-007 — `@repo/hooks` e `@repo/ui-base` (shadcn)

- **Data:** 2026-11-05
- **Status:** aceita

## Decisão

- `packages/hooks` (`@repo/hooks`): hooks reutilizáveis, uma pasta por hook em `src/useNome/` com `index.ts` e `useNome.test.ts`. Consumo por subpath: `@repo/hooks/useDebounce`. Hooks específicos de um app ficam no app.
- `packages/ui-base` (`@repo/ui-base`): primitivos do **shadcn/ui** (estilo new-york, Tailwind v4, Radix) para componentes rápidos e simples. Consumo por subpath: `@repo/ui-base/components/button`; tema em `@repo/ui-base/globals.css`.
- `packages/ui` continua sendo a camada atômica própria (atoms/molecules/organisms) e pode compor os primitivos do `ui-base`.

## Motivo

Separar o código **vendorizado** do shadcn (gerado pelo CLI, kebab-case, regenerável) do código autoral, que segue as convenções do projeto. Assim `ui-base` pode ser atualizado/regerado sem tocar na estrutura atômica.

## Consequências

- Tailwind v4 entra no `apps/web` (`@tailwindcss/vite`) e o `globals.css` é importado no `main.tsx`.
- Existe sobreposição entre `@repo/ui/atoms/Button` e `@repo/ui-base/components/button`. Decidir, quando houver produto, qual é o botão oficial (ver `tasks.md`).
