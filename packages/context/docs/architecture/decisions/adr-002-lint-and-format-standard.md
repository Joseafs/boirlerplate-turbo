# ADR-002 — Padrão de lint e formatação (herdado do painel)

- **Data:** 2026-11-04
- **Status:** aceita (divergências confirmadas pelo dono)

## Decisão

`@repo/eslint-config` reproduz o padrão do `admin-checkout-front`: Prettier (aspas duplas, 80 colunas, `arrowParens: "avoid"`), `import-x` (ordem, sem default export), `no-restricted-imports "..*"`, `perfectionist` (ordem natural), `@stylistic/padding-line-between-statements`, `sonarjs` (complexidade ≤ 16), `no-console`, `react` e `react-hooks`.

## Divergências deliberadas do painel

- Mantém as **regras tipadas** (`recommendedTypeChecked`: `no-floating-promises`, `no-misused-promises`, `no-unnecessary-condition`), que o painel não usa.
- **`no-explicit-any` é erro** (o painel o desliga). Se quiser relaxar, mude em `packages/eslint-config/base.js`.
- Regras `warn` viram `error` e `eslint --max-warnings 0`: warning que ninguém corrige é dívida.
- Fora por ora: `eslint-typegen` (tipos gerados de ~400 KB), Storybook e `prettier-plugin-organize-imports`.
- TS: `strict` + `noUnused*` + `noUncheckedIndexedAccess`; **sem** `exactOptionalPropertyTypes` (atrito com props de React).
- Fim de linha LF (`.gitattributes` e `.editorconfig`): o Prettier exige e o `autocrlf` no Windows gerava CRLF.

## Hooks

Husky: `pre-commit` roda `lint-staged` (Prettier) e `turbo run lint typecheck --affected`. `only-allow pnpm`, `.nvmrc` e `engine-strict`, como no checkout.
