import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraPriceInput from "../components/PriceInput.vue";

const meta: Meta<typeof WraPriceInput> = {
  title: "Form Inputs & Controls/PriceInput",
  component: WraPriceInput,
  argTypes: {
    inputmode: {
      control: {
        type: "select"
      },
      options: ["numeric", "decimal", "text"]
    }
  }
};
export default meta;

type Story = StoryObj<typeof WraPriceInput>;

export const Default: Story = {
  args: {
    label: "Price input label",
    modelValue: 1234.56,
    id: "priceInput",
    placeholder: "0.00",
    prefix: "£"
  }
};
