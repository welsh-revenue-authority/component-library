import WraNumberInput from "../components/NumberInput.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof WraNumberInput> = {
  title: "Form Inputs & Controls/NumberInput",
  component: WraNumberInput,
  argTypes: {
    type: {
      control: {
        type: "select"
      },
      options: ["text", "number"]
    },
    inputmode: {
      control: {
        type: "select"
      },
      options: ["numeric", "decimal", "text"]
    }
  }
};
export default meta;

export const Default: StoryObj<typeof WraNumberInput> = {
  args: {
    label: "Number input label",
    modelValue: 123,
    id: "numberInput"
  }
};
