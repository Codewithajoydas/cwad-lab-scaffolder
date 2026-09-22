import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["dist", "coverage"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];