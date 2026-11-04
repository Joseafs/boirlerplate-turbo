# Convenções

- Componentes pequenos e responsabilidades claras; sem abstrair prematuramente.
- Organize `index.tsx`, `types.ts`, estilos e testes quando necessário, sem arquivos vazios.
- Prefira estado local. Calcule estado derivado em vez de duplicar `useState`.
- Context API para compartilhamento real, não para toda lista.
- Use `useMemo`/`useCallback` quando houver justificativa; evite otimização automática.
- Não mute props/estado; use setter funcional se o novo estado depender do anterior.
- Testes: `test('should ...')`, `screen` no Testing Library; faker quando acrescentar valor.
- Não ignore warnings de TS/ESLint ou use `any` sem justificativa clara.
- Valide dados externos nos limites com Zod.
