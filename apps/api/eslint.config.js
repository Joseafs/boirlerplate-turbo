import globals from 'globals';
import { base } from '@repo/eslint-config/base';

export default [
  ...base,
  { files: ['**/*.{ts,tsx}'], languageOptions: { globals: globals.node } },
];
