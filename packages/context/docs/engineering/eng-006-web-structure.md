# ENG-006 — Estrutura do `apps/web`

Esqueleto para uma SPA que cresce sem virar bagunça. Exemplar: `apps/web/src/`. Cada item abaixo vive na sua pasta, com `index.tsx`, `types.ts` (quando há props) e `tests.tsx`/`tests.ts`.

## Pastas

```text
src/
├─ App/                  só o <RouterProvider router={router} />
├─ router/               rotas como objeto (createBrowserRouter)
├─ components/           componentes do app (TemplateSystem, ThemeToggle, ...)
├─ pages/                uma pasta por página; filhos específicos em pages/<Pagina>/components/
├─ context/              Provider + hook que lê o contexto (ex.: context/Users)
├─ services/             ENG-004
└─ main.tsx
```

Hooks genéricos ficam em `@repo/hooks` (ENG-005); só um hook usado por um único app mora em `src/hooks`.

## Regras

- **Rotas em objeto, não em JSX.** `router/index.tsx` exporta `routes: RouteObject[]` (usado nos testes com `createMemoryRouter`) e `router = createBrowserRouter(routes)`. Página nova = um item em `children`.
- **`TemplateSystem` é o layout do sistema todo**: providers globais (`ThemeProvider`), `ToastContainer` e `<Outlet />`. Nada específico de uma página entra nele.
- **Provider de domínio** (ex.: usuários) envolve só as rotas que o usam, numa rota-grupo no `router`, para as páginas compartilharem o estado:

  ```tsx
  { element: <UsersProvider><Outlet /></UsersProvider>, children: [...] }
  ```

- **Contextos ficam em `src/context/<Nome>/`** (Provider + hook, com `types.ts` e `tests.tsx`), mesmo que exponham um hook.
- **Página** é `export const Nome: FC` em `pages/<Nome>/index.tsx`; o que só ela usa fica em `pages/<Nome>/components/`.
- **Erros de API** viram toast na ponta (`toast.error((e as Error).message)`), sem tela de erro por página.
- **Env:** `.env.dev` é versionado e carregado pelo `pnpm dev` (`vite --mode dev`); `.env` e `.env.local` ficam fora do git.
