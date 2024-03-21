import WraButton from "../components/Button.vue";

export default {
  title: "All/Button",
  component: WraButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "radio"
      },
      options: ["default", "small"]
    },
    backgroundColor: {
      control: "color"
    },
    color: {
      control: {
        type: "radio"
      },
      options: ["black", "white"]
    }
  }
};

export const Default = {
  args: {
    size: "default",
    label: "Default Button"
  }
};

export const Small = {
  args: {
    size: "small",
    label: "Small Button"
  }
};
