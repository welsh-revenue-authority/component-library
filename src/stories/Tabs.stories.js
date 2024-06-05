import Tabs from "../components/Tabs.vue";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    options: ["Tab 1", "Tab 2"],
    modelValue: 0
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-tabs :options="options" />
        `
      }
    }
  }
};

export const ThirdTabSelected = {
  args: {
    options: ["Tab 1", "Tab 2", "Tab 3"],
    modelValue: 2
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-tabs :options="options" model-value="2" />
        `
      }
    }
  }
};
