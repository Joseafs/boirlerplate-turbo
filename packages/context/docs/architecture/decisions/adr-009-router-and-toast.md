# ADR-009 — Router em objeto e toast de erro

- **Data:** 2026-11-05
- **Status:** aceita

## Decisão

- `apps/web` usa `react-router-dom` **6.30.6** com `createBrowserRouter`, definindo as rotas como objeto em `src/router` (não `<Routes>/<Route>` em JSX).
- Erros de API são exibidos com `react-toastify` **11.2.0** (`ToastContainer` no `TemplateSystem`).
- Hook genérico `useDidMount` em `@repo/hooks`.

## Motivo

- Rotas como dado são testáveis (`createMemoryRouter(routes)`), compõem layout e providers por rota-grupo e crescem sem JSX aninhado.
- Toast é o jeito mais curto de mostrar um erro de `services/methods` sem criar estado de erro em cada tela.
- Mesmas versões validadas no `aurum-challenge`. Versões exatas conforme [ADR-006](adr-006-exact-dependency-versions.md).
