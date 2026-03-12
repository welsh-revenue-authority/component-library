import { withoutVitePlugins } from "@storybook/builder-vite";
import { StorybookConfig } from "@storybook/vue3-vite";

const config : StorybookConfig = {
  core: {
    disableTelemetry: true,
    builder: "@storybook/builder-vite"
  },
  async viteFinal(config) {
    config.plugins = await withoutVitePlugins(config.plugins, ["unplugin-dts"]);
    return config;
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  }
};

export default config;
