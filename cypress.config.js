import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      styles: ["src/styles/tailwind.css"]
    }
  }
});
