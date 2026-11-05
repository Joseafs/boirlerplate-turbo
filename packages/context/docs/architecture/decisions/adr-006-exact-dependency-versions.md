# ADR-006 — Dependências com versão exata

- **Data:** 2026-11-05
- **Status:** aceita

## Decisão

Nenhuma dependência usa `^` ou `~`: `dependencies`, `devDependencies` e `optionalDependencies` têm versão exata em todos os `package.json`. O `.npmrc` tem `save-exact=true`, então `pnpm add` já grava versão exata. `pnpm-lock.yaml` é obrigatório e o CI usa `--frozen-lockfile`.

## Exceções

- `peerDependencies` mantêm range (`react: ^19.0.0`, `eslint: ^9.0.0`): são o contrato de compatibilidade do pacote, e fixá-los quebraria quem o consome.
- `workspace:*` para pacotes internos.

## Como atualizar

Atualização é ação deliberada: `pnpm up <pacote>@<versão>`, rodar `pnpm check` e registrar a mudança em `history.md`. Agentes não atualizam versões existentes sem confirmação (ENG-002).
