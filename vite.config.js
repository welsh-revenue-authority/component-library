import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "unplugin-dts/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "src/styles/tailwind.css", // Source file
          dest: "." // Destination folder in dist
        }
      ]
    }),
    dts({
      processor: "vue",
      bundleTypes: true,
      exclude: ["src/stories", "src/docs"],
      tsConfigPath: "./tsconfig.app.json",
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
      entry: resolve(__dirname, "src/index.ts"),
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
