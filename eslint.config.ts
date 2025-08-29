import pluginVue from "eslint-plugin-vue";
import {
  defineConfigWithVueTs,
  vueTsConfigs
} from "@vue/eslint-config-typescript";
import prettierConfig from "@vue/eslint-config-prettier";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"]
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]
  },
  {
    rules: {
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowInterfaces: "always"
        }
      ]
    }
  },
  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,
  prettierConfig
);
