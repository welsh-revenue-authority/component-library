import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraCheckbox from "../components/Checkbox.vue";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<typeof WraCheckbox> = {
  title: "Form Inputs & Controls/Checkbox",
  component: WraCheckbox,
  tags: ["autodocs"]
};
export default meta;

type CheckboxProps = InstanceType<typeof WraCheckbox>["$props"];
type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
    await expect(canvas.getByText("This is a checkbox label")).toBeVisible();
  },
  args: {
    label: "This is a checkbox label",
    id: "checkboxId"
  }
};

export const InfoText: Story = {
  args: {
    label: "This is a checkbox label",
    id: "checkboxId",
    info: "This is additional information about the checkbox"
  }
};
