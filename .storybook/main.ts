import { withoutVitePlugins } from "@storybook/builder-vite";

const config = {
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
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  }
};

export default config;
