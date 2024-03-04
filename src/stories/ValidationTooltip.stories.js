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

export const Info = {
  args: {
    type: "wra-info",
    default: "This is an info message"
  }
};

export const Success = {
  args: {
    type: "wra-success",
    default: "This is a success message"
  }
};

export const Warning = {
  args: {
    type: "wra-warning",
    default: "This is a warning message"
  }
};

export const Error = {
  args: {
    type: "wra-error",
    default: "This is an error message"
  }
};
