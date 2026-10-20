import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraTextInput from "../components/TextInput.vue";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<typeof WraTextInput> = {
  title: "Form Inputs & Controls/TextInput",
  component: WraTextInput,
  argTypes: {
    type: {
      control: {
        type: "select"
      },
      options: ["text", "tel", "url", "email", "numeric", "decimal"]
    },
    inputmode: {
      control: {
        type: "select"
      },
      options: [
        "none",
        "text",
        "tel",
        "url",
        "email",
        "numeric",
        "decimal",
        "search"
      ]
    },
    dataMaska: {
      description:
        "The mask pattern for the input field. [maska v2 docs](https://beholdr.github.io/maska/v2/)"
    }
  }
};

export default meta;

type Story = StoryObj<typeof WraTextInput>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "Text input content");
    await expect(input).toHaveValue("Text input content");
  },
  args: {
    label: "Text input label",
    modelValue: "Enter text here...",
    id: "textInput"
  }
};
