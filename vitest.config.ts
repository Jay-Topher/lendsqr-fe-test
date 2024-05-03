/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
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
