import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://abhijejurkar.github.io",
  base: "/Texol_demo",
  output: "static",
  build: { format: "file" }
});
