import WraCheckboxGroup from "../components/CheckboxGroup.vue";

export default {
  title: "All/CheckboxGroup",
  component: WraCheckboxGroup,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    options: [
      { value: "OptionOne", label: "Option 1" },
      { value: "OptionTwo", label: "Option 2" }
    ]
  }
};
