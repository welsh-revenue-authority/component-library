import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraDateInput from "../components/DateInput.vue";
import { expect, userEvent, within } from "storybook/test";

type DateInputArgs = {
  label?: string;
  modelValue: string | Date;
  id?: string;
  placeholder?: string;
};

const meta: Meta<DateInputArgs> = {
  title: "Form Inputs & Controls/DateInput",
  component: WraDateInput,
  tags: ["autodocs"]
};

export default meta;

export const Default: StoryObj<DateInputArgs> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.clear(input);
    await expect(input).toHaveAttribute("placeholder", "DD/MM/YYYY");
    await userEvent.type(input, "01012024");
    await expect(input).toHaveValue("01/01/2024");
  },
  args: {
    label: "Date input label",
    modelValue: new Date(),
    id: "dateInput",
    placeholder: "DD/MM/YYYY"
  }
};
