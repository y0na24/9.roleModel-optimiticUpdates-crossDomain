import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import boundaries from "eslint-plugin-boundaries";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    plugins: {
      boundaries,
    },
    settings: {
      "boundaries/elements": [
        { type: "app", pattern: "app/*" },
        { type: "pages", pattern: "pages/*" },
        { type: "widgets", pattern: "widgets/*" },
        { type: "features", pattern: "features/*" },
        { type: "entities", pattern: "entities/*" },
        { type: "core", pattern: "core/*" },
        { type: "shared", pattern: "shared/*" },
      ],

      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-refresh/only-export-components": "off",
      ...boundaries.configs.recommended.rules,
      "boundaries/element-types": [
        2,
        {
          default: "disallow",
          rules: [
            { from: "app", allow: ["*"] },
            {
              from: "pages",
              allow: ["features", "entities", "shared", "widgets", "core"],
            },
            {
              from: "widgets",
              allow: ["features", "entities", "shared", "core"],
            },
            { from: "features", allow: ["entities", "shared", "core"] },
            {
              from: "entities",
              allow: ["shared", "core"],
            },
            { from: "core", allow: ["shared"] },
            { from: "shared", allow: ["shared"] },
          ],
        },
      ],
    },
  },
]);
