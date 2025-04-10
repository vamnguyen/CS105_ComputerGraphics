import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: "terser",
    cssTarget: ["chrome95", "firefox95", "safari15"],
  },
  css: {
    devSourcemap: true,
  },
});
