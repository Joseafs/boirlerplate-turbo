# ENG-005 — `@repo/hooks`

Hooks reutilizáveis entre apps. Hooks usados por um único app ficam no app.

## Estrutura

```text
packages/hooks/src/
├─ useDebounce/
│  ├─ index.ts
│  └─ useDebounce.test.ts
├─ useSelect/
│  ├─ index.ts
│  └─ useSelect.test.ts
└─ useToggle/
   ├─ index.ts
   └─ useToggle.test.ts
```

## Regras

- Uma pasta por hook, `useNome` em camelCase com prefixo `use`; export nomeado em `index.ts`.
- Consumo por subpath: `import { useDebounce } from "@repo/hooks/useDebounce"`; sem barrel geral.
- Sem dependência de app, rota ou regra de produto; parâmetros e retorno tipados.
- Todo hook tem teste com `renderHook` (Testing Library), usando timers falsos quando houver tempo.
- Chamadas HTTP não viram hook genérico aqui: usam `services/methods` do app (ENG-004).

## Hooks atuais

- `useDebounce(value, delay = 300)`: valor atrasado, para busca.
- `useToggle(initial = false)`: `[on, toggle, setOn]`; o modelo mais simples de estado para um `onClick`.
- `useSelect(initial = null)`: seleção única, retorna `{ clear, isSelected, select, selected }`; compara por igualdade estrita (`===`), então para objetos use o mesmo referencial ou um id.

Use-os como modelo para novos hooks: tipos explícitos, retorno simples e teste com `renderHook`.
