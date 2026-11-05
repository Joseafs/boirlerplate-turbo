# @repo/context

Pacote de conhecimento vivo do projeto, para pessoas e agentes. Sem código: apenas Markdown. Não importar em código de aplicação.

## Estrutura

```text
packages/context/
├─ README.md
├─ context.md        → estado atual e padrões vigentes
├─ tasks.md          → pendências e roadmap
├─ history.md        → histórico cronológico
└─ docs/
   ├─ architecture/  → ARCH-* e decisions/ (ADR-*)
   ├─ engineering/   → ENG-* (convenções, fluxo de agentes, setup, services)
   └─ ui/            → UI-* (componentes atômicos)
```

## Regra de uso

```text
Antes de implementar → ler context.md → conferir tasks.md → abrir o doc/ADR relacionado
Ao concluir algo     → atualizar tasks.md, history.md e, se o estado mudou, context.md
```

Comece por [ENG-002](docs/engineering/eng-002-agent-workflow.md).
