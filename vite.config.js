import { defineConfig } from "vite";
import { readFileSync } from "node:fs";

function apacheSpaFallback() {
  return {
    name: "apache-spa-fallback",
    apply: "build",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: ".htaccess",
        source: readFileSync(new URL("./.htaccess", import.meta.url), "utf8"),
      });
    },
  };
}

export default defineConfig({
  plugins: [apacheSpaFallback()],
  esbuild: {
    jsx: "automatic",
  },
});
