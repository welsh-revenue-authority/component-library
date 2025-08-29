import type { Meta, StoryObj } from "@storybook/vue3";
import WraTextInput from "../components/TextInput.vue";

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
  args: {
    label: "Text input label",
    modelValue: "Enter text here...",
    id: "textInput"
  }
};
