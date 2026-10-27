import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, userEvent, within } from "storybook/test";
import WraCheckboxGroup from "../components/CheckboxGroup.vue";

const meta: Meta<typeof WraCheckboxGroup> = {
  title: "Form Inputs & Controls/CheckboxGroup",
  component: WraCheckboxGroup,
  tags: ["autodocs"]
};
export default meta;

type CheckboxGroupProps = InstanceType<typeof WraCheckboxGroup>["$props"];
type Story = StoryObj<CheckboxGroupProps>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole("checkbox");
    await userEvent.click(checkboxes[0]);
    await expect(checkboxes[0]).not.toBeChecked();
    await expect(checkboxes[1]).toBeChecked();
    await expect(canvas.getByText("Option 1")).toBeVisible();
    await expect(canvas.getByText("Option 2")).toBeVisible();
  },
  args: {
    options: [
      { value: "OptionOne", label: "Option 1" },
      { value: "OptionTwo", label: "Option 2" }
    ],
    itemValue: "value",
    itemLabel: "label",
    modelValue: [
      { value: "OptionOne", label: "Option 1" },
      { value: "OptionTwo", label: "Option 2" }
    ]
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-checkbox-group
  :options="options"
  item-value="value"
  item-label="label"
></wra-checkbox-group>
        `
      }
    }
  }
};

export const InfoText: Story = {
  args: {
    options: [
      { value: "OptionOne", label: "Option 1", info: "This is option 1" },
      { value: "OptionTwo", label: "Option 2", info: "This is option 2" }
    ],
    itemValue: "value",
    itemLabel: "label",
    itemInfo: "info",
    modelValue: [
      { value: "OptionOne", label: "Option 1", info: "This is option 1" },
      { value: "OptionTwo", label: "Option 2", info: "This is option 2" }
    ]
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-checkbox-group
  :options="options"
  item-value="value"
  item-label="label"
  item-info="info"
></wra-checkbox-group>
        `
      }
    }
  }
};
