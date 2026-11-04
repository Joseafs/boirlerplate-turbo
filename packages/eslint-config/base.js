import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import prettier from "eslint-config-prettier";
import importX from "eslint-plugin-import-x";
import perfectionist from "eslint-plugin-perfectionist";
import sonarjs from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";

const sort = ["error", { type: "natural", order: "asc" }];

const sonarjsRules = {
  "sonarjs/cognitive-complexity": ["error", 16],
  "sonarjs/no-identical-functions": "error",
  "sonarjs/no-collapsible-if": "error",
  "sonarjs/no-extra-arguments": "error",
  "sonarjs/no-inverted-boolean-check": "error",
  "sonarjs/no-identical-expressions": "error",
  "sonarjs/no-duplicated-branches": "error",
  "sonarjs/slow-regex": "off",
  "sonarjs/todo-tag": "off",
  "sonarjs/no-nested-functions": "off",
  "sonarjs/no-nested-conditional": "off",
  "sonarjs/no-exclusive-tests": "off",
};

const importRules = {
  "import-x/first": "error",
  "import-x/newline-after-import": "error",
  "import-x/no-default-export": "error",
  "import-x/order": [
    "error",
    {
      alphabetize: { caseInsensitive: true, order: "asc" },
      groups: ["builtin", "external", "internal", "object", "index", "sibling"],
      "newlines-between": "always",
      pathGroups: [
        { group: "builtin", pattern: "react", position: "before" },
        { group: "internal", pattern: "~/**", position: "after" },
      ],
      pathGroupsExcludedImportTypes: ["react"],
    },
  ],
};

const perfectionistRules = {
  "perfectionist/sort-array-includes": sort,
  "perfectionist/sort-enums": sort,
  "perfectionist/sort-interfaces": sort,
  "perfectionist/sort-objects": sort,
};

const stylisticRules = {
  "@stylistic/padding-line-between-statements": [
    "error",
    { blankLine: "always", prev: "multiline-const", next: "*" },
    { blankLine: "always", prev: "*", next: "multiline-const" },
    { blankLine: "always", prev: "expression", next: "*" },
    { blankLine: "always", prev: "*", next: "expression" },
    { blankLine: "always", prev: "block-like", next: "*" },
    { blankLine: "always", prev: "*", next: "block-like" },
    { blankLine: "always", prev: "function", next: "*" },
    { blankLine: "always", prev: "*", next: "function" },
    { blankLine: "always", prev: ["break", "return"], next: "case" },
  ],
};

const typescriptRules = {
  "@typescript-eslint/consistent-type-imports": "error",
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-floating-promises": "error",
  "@typescript-eslint/no-misused-promises": "error",
  "@typescript-eslint/no-unnecessary-condition": "error",
  "@typescript-eslint/no-unused-vars": [
    "error",
    { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
  ],
};

export const base = tseslint.config(
  { ignores: ["dist/**", ".next/**", "coverage/**", "node_modules/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  sonarjs.configs.recommended,
  { files: ["**/*.{js,mjs,cjs}"], ...tseslint.configs.disableTypeChecked },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { parserOptions: { projectService: true } },
    plugins: {
      "@stylistic": stylistic,
      "import-x": importX,
      perfectionist,
    },
    rules: {
      "no-console": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["..*"],
              message:
                "Imports com ../ são proibidos: use o alias ~/ ou o subpath público do pacote.",
            },
          ],
        },
      ],
      "no-useless-rename": "error",
      ...typescriptRules,
      ...importRules,
      ...perfectionistRules,
      ...stylisticRules,
      ...sonarjsRules,
    },
  },
  {
    files: ["**/*.config.{js,mjs,cjs,ts}", "**/*.stories.tsx"],
    rules: { "import-x/no-default-export": "off" },
  },
  prettier,
);
