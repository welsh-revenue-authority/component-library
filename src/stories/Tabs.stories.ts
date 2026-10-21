import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, userEvent, within } from "storybook/test";
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
  play: async ({ canvasElement }) => {
    // TODO: Add colour assertions back
    const canvas = within(canvasElement);
    const tab1 = canvas.getByRole("button", { name: "Tab 1" });
    const tab2 = canvas.getByRole("button", { name: "Tab 2" });
    await expect(tab1).toBeVisible();
    await expect(tab2).toBeVisible();

    await expect(tab1).toHaveClass("tab-button tab-button--active");
    await expect(tab2).toHaveClass("tab-button");
    await expect(tab2).not.toHaveClass("tab-button--active");

    await userEvent.click(tab2);

    await expect(tab2).toHaveClass("tab-button tab-button--active");
    await expect(tab1).toHaveClass("tab-button");
    await expect(tab1).not.toHaveClass("tab-button--active");
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tab1 = canvas.getByRole("button", { name: "Tab 1" });
    const tab2 = canvas.getByRole("button", { name: "Tab 2" });
    const tab3 = canvas.getByRole("button", { name: "Tab 3" });

    await expect(tab3).toHaveClass("tab-button tab-button--active");
    await expect(tab2).toHaveClass("tab-button");

    await userEvent.click(tab2);

    await expect(tab2).toHaveClass("tab-button tab-button--active");
    await expect(tab1).toHaveClass("tab-button");
    await expect(tab1).not.toHaveClass("tab-button--active");
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
