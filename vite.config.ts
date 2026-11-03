import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { viteStaticCopy } from "vite-plugin-static-copy";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "src/styles/tailwind.css",
          dest: ".",
          rename: { stripBase: true }
        }
      ]
    }),
    dts({
      processor: "vue",
      bundleTypes: true,
      tsconfigPath: "./tsconfig.app.json",
      exclude: ["src/stories", "src/docs"],
      copyDtsFiles: true,
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(projectRoot, "src/index.ts"),
      name: "vueComponents",
      // the proper extensions will be added
      fileName: "vue-components"
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
