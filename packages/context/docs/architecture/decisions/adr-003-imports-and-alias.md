# ADR-003 — Imports sem `../` e alias `~/`

- **Data:** 2026-11-04
- **Status:** aceita

## Decisão

- `apps/web`: alias `~/` → `src/` (tsconfig `paths` + `resolve.alias` do Vite).
- `packages/*`: sem alias. Importe pelo subpath público do pacote, inclusive dentro do próprio pacote (self-reference), ex.: `@repo/ui/atoms/Button`.
- `apps/api`: `../` permitido, pois o build é `tsc` puro e não reescreve aliases.

## Motivo

Um alias `~` no app capturaria o `~` de pacotes consumidos como fonte. A self-reference por `exports` é isolada por pacote e foi validada em `tsc`, Vitest e Vite.
