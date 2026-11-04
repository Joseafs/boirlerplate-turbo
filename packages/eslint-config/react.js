import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import { base } from './base.js';

export const react = [
  ...base,
  { files: ['**/*.{ts,tsx}'], languageOptions: { globals: globals.browser } },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { 'react-hooks': reactHooks },
    rules: reactHooks.configs.flat.recommended.rules,
  },
];
