import reactHooks from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

import { base } from "./base.js";

export const react = [
  ...base,
  { files: ["**/*.{ts,tsx}"], languageOptions: { globals: globals.browser } },
  {
    ...reactPlugin.configs.flat.recommended,
    files: ["**/*.{ts,tsx}"],
    settings: { react: { version: "detect" } },
  },
  { ...reactPlugin.configs.flat["jsx-runtime"], files: ["**/*.{ts,tsx}"] },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { "react-hooks": reactHooks },
    rules: {
      ...reactHooks.configs.flat.recommended.rules,
      "react/prop-types": "off",
    },
  },
];
