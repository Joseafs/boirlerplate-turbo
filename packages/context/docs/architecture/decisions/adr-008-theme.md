# ADR-008 — Tema claro/escuro padrão

- **Data:** 2026-11-05
- **Status:** aceita

## Decisão

- Tokens do tema em `packages/ui-base/src/styles/theme.css` (variáveis CSS `:root` e `.dark`, paleta neutra do shadcn, mapeadas para o Tailwind via `@theme inline`). `globals.css` só importa Tailwind, `tw-animate-css` e o `theme.css`.
- Modo escuro por **classe** `.dark` no `<html>` (`@custom-variant dark`).
- `ThemeProvider` e `useTheme` em `@repo/ui-base/components/theme-provider`: valores `light | dark | system`, padrão `system`, persistido em `localStorage` (chave `theme`) e reagindo à mudança do sistema.
- Script inline no `index.html` aplica a classe antes da primeira pintura (sem flash). Deve ficar em sincronia com o provider.
- O app envolve a árvore em `<ThemeProvider>` dentro do `TemplateSystem` (ENG-006) e oferece `ThemeToggle` (`components/ThemeToggle`) como exemplo de uso.

## Para trocar cores ou raio

Edite só `theme.css`. Não use cores fixas nos componentes: use os tokens (`bg-background`, `text-foreground`, `bg-primary`…).

## Verificado

Alternância claro/escuro/sistema e persistência após recarregar, no navegador, e testes de unidade (provider e toggle).
