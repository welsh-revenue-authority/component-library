import pluginVitest from "@vitest/eslint-plugin";
import prettierConfig from "@vue/eslint-config-prettier";
import {
  defineConfigWithVueTs,
  vueTsConfigs
} from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import pluginVueA11y from "eslint-plugin-vuejs-accessibility";
import { globalIgnores } from "eslint/config";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    ignores: ["**/cypress/support/commands.ts"]
  },
  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),
  pluginVue.configs["flat/strongly-recommended"],
  pluginVueA11y.configs["flat/recommended"],
  vueTsConfigs.recommended,
  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/tests/*"]
  },
  prettierConfig,
  {
    rules: {
      "no-else-return": "warn",
      "vue/component-name-in-template-casing": ["error", "PascalCase"],
      "vue/no-undef-components": ["error"],
      "vue/multi-word-component-names": "off"
    }
  }
);
