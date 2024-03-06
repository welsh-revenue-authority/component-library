import WraRadioGroup from "../components/RadioGroup.vue";
import WraRadio from "../components/Radio.vue";

export default {
  title: "All/RadioGroup",
  component: WraRadioGroup,
  tags: ["autodocs"]
};

const RadioGroupTemplate = {
  render: (args) => ({
    components: { WraRadioGroup, WraRadio },
    setup() {
      return { args };
    },
    template: '<WraRadioGroup v-bind="args" />'
  })
};

export const Default = {
  ...RadioGroupTemplate,
  args: {
    groupName: "groupName",
    options: [
      { value: "OptionOne", label: "Option 1" },
      { value: "OptionTwo", label: "Option 2" }
    ]
  }
};
