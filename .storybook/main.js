/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  core: {
    disableTelemetry: true,
    builder: "@storybook/builder-vite"
  },

  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  }
};
export default config;
