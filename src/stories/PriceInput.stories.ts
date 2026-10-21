import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraPriceInput from "../components/PriceInput.vue";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<typeof WraPriceInput> = {
  title: "Form Inputs & Controls/PriceInput",
  component: WraPriceInput,
  argTypes: {
    inputmode: {
      control: { type: "select" },
      options: ["numeric", "decimal", "text"]
    }
  }
};
export default meta;

type Story = StoryObj<typeof WraPriceInput>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "1234.55");
    await expect(input).toHaveValue("1,234.55");
    await expect(canvas.getByText("£")).toBeVisible();
  },
  args: {
    label: "Price input label",
    modelValue: 1234.56,
    id: "priceInput",
    placeholder: "0.00",
    prefix: "£"
  }
};

export const ForcesTwoDecimalPlaces: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "1234.5");
    await expect(input).toHaveValue("1,234.5");

    await userEvent.clear(input);

    await userEvent.type(input, "1234.5555");
    await expect(input).toHaveValue("1,234.55");
  },
  args: {
    label: "Price input with two decimal places",
    modelValue: 1234.5,
    id: "priceInputTwoDecimals",
    placeholder: "0.00",
    prefix: "£"
  }
};
