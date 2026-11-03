import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, userEvent, within } from "storybook/test";
import TextArea from "../components/TextArea.vue";

const meta: Meta<typeof TextArea> = {
  title: "Form Inputs & Controls/TextArea",
  component: TextArea
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    await userEvent.type(textarea, "Text area content");
    await expect(textarea).toHaveValue("Text area content");
    await userEvent.clear(textarea);
    await userEvent.type(textarea, "Replacement text");
    await expect(textarea).toHaveValue("Replacement text");
  },
  args: {
    label: "Text area label"
  }
};

export const MaxLength: Story = {
  play: async ({ canvasElement }) => {
    const textarea = within(canvasElement).getByRole("textbox");
    const text = "This text is longer than the allowed maximum";
    const expected = text.slice(0, 10);
    await userEvent.type(
      textarea,
      "This text is longer than the allowed maximum"
    );
    await expect(textarea).toHaveValue(expected);
  },
  args: {
    label: "Text area label",
    maxLength: 10
  }
};
