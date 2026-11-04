# ENG-001 — Convenções de código

Padrão herdado do painel (`admin-checkout-front`), ver [ADR-002](../architecture/decisions/adr-002-lint-and-format-standard.md). A maior parte é **imposta por ESLint/Prettier**: rode `pnpm lint:fix` e `pnpm format` em vez de ajustar à mão.

## Formatação (Prettier)

Aspas duplas, `;`, largura 80, 2 espaços, `arrowParens: "avoid"`, LF.

## Imposto pelo ESLint

- **Imports:** `react` primeiro, depois externos, `~/` (internos), irmãos `./`; grupos separados por linha em branco e em ordem alfabética (`import-x/order`).
- **Sem `../`:** use o alias `~/` (apps) ou o subpath público do pacote, ex.: `@repo/ui/atoms/Button`. Exceção: `apps/api`, cujo build é `tsc` puro, sem resolver de alias.
- **Só exports nomeados** (`import-x/no-default-export`); exceção: `*.config.*` e `*.stories.tsx`.
- **Ordem natural ascendente** de chaves de objetos, interfaces, enums e arrays em `includes` (`perfectionist`).
- **Linhas em branco** em volta de `const` multilinha, expressões, blocos, funções e antes de `case` (`padding-line-between-statements`).
- **Complexidade cognitiva ≤ 16** e sem funções/ramos duplicados (`sonarjs`).
- **TypeScript:** sem `any`, `import type` para tipos, sem promessas soltas, sem condições desnecessárias.
- **`no-console`** e **warnings contam como erro** (`--max-warnings 0`).
- Nunca silencie com `eslint-disable`/`@ts-ignore`; corrija a causa.

## Componentes e estado

- Componente: `export const Nome: FC<NomeProps> = ...`, props em `types.ts` (`interface NomeProps`). Estrutura de pastas em [UI-001](../ui/ui-001-atomic-components.md).
- Componentes pequenos e responsabilidade única; sem abstrair prematuramente.
- Estado local primeiro; calcule estado derivado em vez de duplicar `useState`.
- Context API para compartilhamento real, não para toda lista.
- `useMemo`/`useCallback`/`memo` só com justificativa.
- Não mute props/estado; setter funcional quando depender do valor anterior.
- Lógica de negócio fora do componente (hooks/serviços).
- Valide dados externos com Zod; tipos de contrato vêm de `z.infer`.

## Testes

- Componente: `tests.tsx` dentro da pasta. Outros módulos: `nome.test.ts` ao lado.
- Estrutura: `describe("Nome")` + `it("should ...")`, com `describe/it/expect/vi` importados de `vitest` (sem globals).
- Teste comportamento: `screen`, `getByRole`, `userEvent`; evite `getByTestId` e snapshots.
- Ambiente `jsdom` + `@testing-library/jest-dom` via `vitest.setup.ts` (replicado em cada workspace com UI).
- Faker só quando agregar valor. API: `app.inject`, sem subir porta.

## Commits

Conventional Commits com escopo do workspace:

```text
feat(web): ...      fix(api): ...      chore(repo): ...
feat(ui): ...       docs(context): ... refactor(contracts): ...
```
