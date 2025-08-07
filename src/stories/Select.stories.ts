import type { Meta, StoryObj } from "@storybook/vue3";
import WraSelect from "../components/Select.vue";

const meta: Meta<typeof WraSelect> = {
  title: "Form Inputs & Controls/Select",
  component: WraSelect,
  decorators: [
    () => ({
      template:
        "<div style='margin: 20px; margin-bottom: 200px'><story /></div>"
    })
  ],
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof WraSelect>;

export const Default: Story = {
  args: {
    items: [
      { value: 1, label: "Item 1" },
      { value: 2, label: "Item 2" },
      { value: 3, label: "Item 3" },
      { value: 4, label: "Item 4" },
      { value: 5, label: "Item 5" }
    ],
    itemValue: "value",
    itemLabel: "label"
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-select
  :items="items"
  item-value="value"
  item-label="label"
></wra-select>
        `
      }
    }
  }
};
