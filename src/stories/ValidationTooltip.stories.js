import WraValidationTooltip from "../components/ValidationTooltip.vue";

export default {
  title: "All/ValidationTooltip",
  component: WraValidationTooltip,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select"
      },
      options: ["wra-info", "wra-success", "wra-warning", "wra-error"]
    }
  }
};

const Template = (args) => ({
  components: { WraValidationTooltip },
  setup() {
    return { args };
  },
  template:
    '<wra-validation-tooltip v-bind="args">{{ args.slotContent }}</wra-validation-tooltip>'
});

export const Info = Template.bind({});
Info.args = {
  type: "wra-info",
  slotContent: "This is an info message"
};

export const Success = Template.bind({});
Success.args = {
  type: "wra-success",
  slotContent: "This is a success message"
};

export const Warning = Template.bind({});
Warning.args = {
  type: "wra-warning",
  slotContent: "This is a warning message"
};

export const Error = Template.bind({});
Error.args = {
  type: "wra-error",
  slotContent: "This is an error message"
};
