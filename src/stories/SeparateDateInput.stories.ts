import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraSeparateDateInput from "../components/SeparateDateInput.vue";

type SeparateDateInputArgs = {
  modelValue: Date | null;
  dayLabel: string;
  monthLabel: string;
  yearLabel: string;
  id: string;
  inputmode: string;
  autoAdvance?: boolean;
};

const meta: Meta<SeparateDateInputArgs> = {
  title: "Form Inputs & Controls/SeparateDateInput",
  component: WraSeparateDateInput,
  tags: ["autodocs"]
};

export default meta;

export const Default: StoryObj<SeparateDateInputArgs> = {
  args: {
    modelValue: null,
    dayLabel: "Day",
    monthLabel: "Month",
    yearLabel: "Year",
    id: "dateInput",
    inputmode: "numeric"
  }
};

export const WithInitialValue: StoryObj<SeparateDateInputArgs> = {
  args: {
    modelValue: new Date("1995-06-15"),
    dayLabel: "Day",
    monthLabel: "Month",
    yearLabel: "Year",
    id: "dateInput",
    inputmode: "numeric"
  }
};

export const AutoAdvance: StoryObj<SeparateDateInputArgs> = {
  args: {
    modelValue: null,
    dayLabel: "Day",
    monthLabel: "Month",
    yearLabel: "Year",
    id: "dateInput",
    inputmode: "numeric",
    autoAdvance: true
  }
};
