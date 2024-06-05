import WraCheckboxGroup from "../components/CheckboxGroup.vue";

export default {
  title: "Form Inputs & Controls/CheckboxGroup",
  component: WraCheckboxGroup,
  tags: ["autodocs"]
};

export const Default = {
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
