import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Tabs from "../components/Tabs.vue";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
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

export const ThirdTabSelected: Story = {
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
