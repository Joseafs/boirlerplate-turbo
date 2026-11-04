import globals from "globals";

import { base } from "./base.js";

export const node = [
  ...base,
  { files: ["**/*.{ts,tsx}"], languageOptions: { globals: globals.node } },
  {
    // O build do api é tsc puro, sem resolver de alias: imports relativos com ../ são necessários.
    files: ["**/*.{ts,tsx}"],
    rules: { "no-restricted-imports": "off" },
  },
];
