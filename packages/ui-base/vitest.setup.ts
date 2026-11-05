import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Node 25+ deixa o localStorage global indefinido no jsdom; um Storage em memória
// deixa os testes independentes da versão do Node.
const createStorage = (): Storage => {
  const store = new Map<string, string>();

  return {
    clear: () => store.clear(),
    getItem: key => store.get(key) ?? null,
    key: index => [...store.keys()][index] ?? null,
    get length() {
      return store.size;
    },
    removeItem: key => {
      store.delete(key);
    },
    setItem: (key, value) => {
      store.set(key, String(value));
    },
  };
};

Object.defineProperty(globalThis, "localStorage", {
  configurable: true,
  value: createStorage(),
});

afterEach(cleanup);
