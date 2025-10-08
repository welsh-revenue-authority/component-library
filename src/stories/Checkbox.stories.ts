import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraCheckbox from "../components/Checkbox.vue";

const meta: Meta<typeof WraCheckbox> = {
  title: "Form Inputs & Controls/Checkbox",
  component: WraCheckbox,
  tags: ["autodocs"]
};
export default meta;

type CheckboxProps = InstanceType<typeof WraCheckbox>["$props"];
type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
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
