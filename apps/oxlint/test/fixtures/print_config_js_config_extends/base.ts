import { defineConfig } from "#oxlint";

export default defineConfig({
  categories: {
    suspicious: "off",
  },
  plugins: ["import"],
  rules: {
    "import/no-unassigned-import": "error",
  },
  overrides: [
    {
      files: ["**/*.test.ts"],
      rules: {
        "no-debugger": "error",
      },
    },
  ],
});
