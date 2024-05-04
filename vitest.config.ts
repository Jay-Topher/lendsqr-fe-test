/// <reference types="vitest" />
import { defineConfig } from "vite";
import * as path from "path";

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/tests/setup.ts"],
    // setupFilesAfterEnv: ["@testing-library/jest-dom"],
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
    },
  },
});
