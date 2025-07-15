/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
