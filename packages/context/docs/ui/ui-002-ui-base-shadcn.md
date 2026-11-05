# UI-002 — `@repo/ui-base` (shadcn/ui)

Primitivos prontos para montar telas rápido. Componentes atuais: `button`, `card`, `input`, `label`.

## Uso

```tsx
import { Button } from "@repo/ui-base/components/button";
import { Input } from "@repo/ui-base/components/input";
```

`apps/web` importa o tema uma vez em `main.tsx`: `import "@repo/ui-base/globals.css"`. O `globals.css` já usa `@source` para o Tailwind enxergar os componentes.

## Adicionar um componente

```bash
cd packages/ui-base
pnpm dlx shadcn@latest add dialog -y
```

Depois, **sempre**:

1. Se o CLI gerar `import { cn } from "cn"`, troque por `import { cn } from "@repo/ui-base/lib/utils"` (o alias `utils` do CLI não resolve sozinho neste monorepo).
2. Dependências novas entram com versão exata (`.npmrc` `save-exact`), conferir no `package.json`.
3. Rode `pnpm lint:fix` e `pnpm format`: o código gerado é ajustado ao padrão do projeto (ordem de imports/chaves, aspas).
4. Escreva um teste `nome.test.tsx` de comportamento ao lado do componente.
5. Registre o componente na lista acima.

## Regras

- Não edite componentes vendorizados para regra de produto: componha em `@repo/ui` (molecules/organisms) ou no app.
- Arquivos do shadcn usam kebab-case (`button.tsx`); é a exceção à regra de pastas PascalCase de [UI-001](ui-001-atomic-components.md).
- Tema (cores, raio) muda em `src/styles/globals.css`, via variáveis CSS.

## Tema claro/escuro

Tokens em `src/styles/theme.css`; `globals.css` os importa. O app envolve tudo em `ThemeProvider` e usa `useTheme()` para ler/alterar (`light`, `dark`, `system`). Detalhes em [ADR-008](../architecture/decisions/adr-008-theme.md). Exemplo de uso: `apps/web/src/ThemeToggle`.

Em testes que renderizam componentes com `useTheme`, envolva em `<ThemeProvider defaultTheme="light">`. O jsdom não tem `matchMedia`, e o `localStorage` é um Storage em memória criado no `vitest.setup.ts` (Node 25+ o deixa indefinido).
