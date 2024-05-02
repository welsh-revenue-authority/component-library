import WraRadioGroup from "../components/RadioGroup.vue";

export default {
  title: "Form Inputs & Controls/RadioGroup",
  component: WraRadioGroup,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    groupName: "groupName",
    options: [
      { value: "OptionOne", label: "Option 1" },
      { value: "OptionTwo", label: "Option 2" }
    ]
  }
};
