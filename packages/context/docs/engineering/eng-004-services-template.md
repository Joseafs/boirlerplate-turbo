# ENG-004 — Template de services (chamadas HTTP)

Padrão simples e único para falar com APIs no front. Exemplar: `apps/web/src/services/`.

## Estrutura

```text
src/services/
├─ config/
│  ├─ index.ts        → instância do axios (baseURL, config base)
│  └─ error.ts        → handleError
└─ methods/
   ├─ index.ts        → reexporta os métodos
   ├─ apiGet/index.ts
   ├─ apiPost/index.ts
   ├─ apiPut/index.ts
   ├─ apiPatch/index.ts
   ├─ apiDelete/index.ts
```

## Molde de um método

```ts
import { api } from "~/services/config";
import { handleError } from "~/services/config/error";

export const apiGet = async <Response>(url: string) => {
  try {
    const { data } = await api.get<Response>(url);

    return data;
  } catch (e) {
    throw handleError(e);
  }
};
```

## Regras

- Métodos disponíveis: `apiGet`, `apiPost`, `apiPut`, `apiPatch` e `apiDelete` (POST/PUT/PATCH recebem `body`).
- Todo método: `try { api.xxx } catch (e) { throw handleError(e) }`, devolvendo só `data`.
- `handleError` sempre devolve um `Error` com mensagem legível; o tratamento fica num lugar só.
- Componentes e hooks **não** importam `axios`; usam `~/services/methods`.
- Quem chama trata na ponta: `catch (e) { setError((e as Error).message) }`.
- Tipos da resposta vêm do genérico (`apiGet<User[]>("/users")`); dados externos relevantes são validados com Zod (`@repo/contracts`).
- Base URL via `VITE_API_URL` (padrão `http://localhost:3001`).
- Método novo ganha teste `nome.test.ts` na própria pasta, mockando `~/services/config`.

## Versão com `fetch` (se não houver axios)

Mesmo molde, mas é preciso checar `res.ok` e chamar `res.json()`, pois o `fetch` não rejeita em 404/500.
