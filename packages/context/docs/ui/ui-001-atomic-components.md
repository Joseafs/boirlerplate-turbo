# UI-001 — Componentes modulares e atômicos

Componentes reutilizáveis vivem em `packages/ui`, organizados por Atomic Design. Componentes de uma única tela ficam no app, até haver reuso real.

## Níveis

| Nível       | O que é                                         | Regra de dependência                          | Exemplo               |
| ----------- | ----------------------------------------------- | --------------------------------------------- | --------------------- |
| `atoms`     | Elemento indivisível, sem lógica de produto     | Só HTML/React e outros tokens/utilitários     | `Button`, `Input`     |
| `molecules` | Composição pequena de átomos com uma finalidade | Átomos (e outras moléculas só se justificado) | `SearchField`         |
| `organisms` | Seção funcional composta de moléculas/átomos    | Moléculas e átomos                            | `DataTable`, `Header` |

Dependências só descem: `organisms → molecules → atoms`. Nunca o contrário, nunca para pares circulares.

Templates e páginas **não** ficam em `ui`: são composição de produto e vivem no app.

## Estrutura de pastas

```
packages/ui/src/
  atoms/
    Button/
      index.tsx          # componente (export nomeado)
      types.ts           # props e tipos públicos
      tests.tsx           # comportamento via Testing Library
```

- Uma pasta por componente, em PascalCase. Crie `types.ts`, estilos e testes quando houver conteúdo; nunca vazios.
- `index.tsx` exporta o componente nomeado (`export const Nome: FC<NomeProps>`); tipos públicos saem de `types.ts`.
- Sem arquivo barrel por nível: o consumo é por subpath (abaixo). Dentro do próprio `ui`, importe outro componente pelo subpath público (`@repo/ui/atoms/Button`), nunca com `../`.

## Consumo

`package.json` do `ui` mapeia um subpath por nível:

```ts
import { Button } from "@repo/ui/atoms/Button";
import { SearchField } from "@repo/ui/molecules/SearchField";
import { DataTable } from "@repo/ui/organisms/DataTable";
```

Ao criar o primeiro componente de um nível novo, o `exports` já está pronto; só crie a pasta.

## Princípios

- **Contrato explícito:** props tipadas em `types.ts`; estenda atributos nativos (`ButtonHTMLAttributes`) em vez de reinventar.
- **Sem regra de produto:** nada de fetch, rota, contexto de app ou texto fixo de negócio. Receba por props.
- **Composição antes de configuração:** prefira `children`/slots a dezenas de flags booleanas.
- **Padrões seguros:** ex.: `Button` usa `type="button"` por padrão.
- **Acessibilidade:** elemento semântico correto, rótulo acessível, foco visível. Teste por `getByRole`.
- **Estado local:** componente controlado quando o pai precisa do valor; derive em vez de duplicar estado.
- **Sem dependência de framework de app:** nada de Vite/Next específico em `ui`.

## Checklist de um componente novo

- [ ] Está no nível certo e só depende de níveis abaixo.
- [ ] Pasta PascalCase com `index.tsx` (+ `types.ts` se houver tipos públicos).
- [ ] Props tipadas, sem `any`, extendendo atributos nativos quando aplicável.
- [ ] `tests.tsx` com comportamento (`describe` + `it("should ...")`, `screen`, `getByRole`, `userEvent`).
- [ ] Usado/consumido pelo subpath `@repo/ui/<nível>/<Nome>`.
- [ ] `pnpm format:check` e `pnpm check` passam.
