import Divider from "../components/Divider.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Divider> = {
  title: "Containment/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    thickness: {
      control: {
        type: "radio"
      },
      options: ["large", "medium", "small"]
    }
  }
};
export default meta;

export const Default: StoryObj<typeof Divider> = {
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByRole("separator")).toBeVisible();
  },
  args: {}
};

export const LargeDivider: StoryObj<typeof Divider> = {
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByRole("separator")).toBeVisible();
  },
  args: {
    thickness: "large"
  }
};

export const SmallDivider: StoryObj<typeof Divider> = {
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByRole("separator")).toBeVisible();
  },
  args: {
    thickness: "small"
  }
};
