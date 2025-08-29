import type { Meta, StoryObj } from "@storybook/vue3";
import TextArea from "../components/TextArea.vue";

const meta: Meta<typeof TextArea> = {
  title: "Form Inputs & Controls/TextArea",
  component: TextArea
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    label: "Text area label"
  }
};

export const MaxLength: Story = {
  args: {
    label: "Text area label",
    maxLength: 10
  }
};
