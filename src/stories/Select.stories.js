import WraSelect from "../components/Select.vue";

export default {
  title: "Form Inputs & Controls/Select",
  component: WraSelect,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    items: [
      { value: 1, label: "Item 1" },
      { value: 2, label: "Item 2" }
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
