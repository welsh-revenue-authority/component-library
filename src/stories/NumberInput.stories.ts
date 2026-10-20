import WraNumberInput from "../components/NumberInput.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, userEvent, within } from "storybook/test";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("spinbutton");
    await expect(input).toHaveValue("0");
    await userEvent.clear(input);
    await userEvent.type(input, "1234");
    await expect(input).toHaveValue("1234");
  },
  args: {
    label: "Number input label",
    modelValue: 123,
    id: "numberInput"
  }
};
