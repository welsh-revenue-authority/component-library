import Divider from "../components/Divider.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

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
  args: {}
};

export const LargeDivider: StoryObj<typeof Divider> = {
  args: {
    thickness: "large"
  }
};

export const SmallDivider: StoryObj<typeof Divider> = {
  args: {
    thickness: "small"
  }
};
