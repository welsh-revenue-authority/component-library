import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraDateInput from "../components/DateInput.vue";

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
  args: {
    label: "Date input label",
    modelValue: new Date(),
    id: "dateInput",
    placeholder: "DD/MM/YYYY"
  }
};
