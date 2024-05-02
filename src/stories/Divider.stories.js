import Divider from "../components/Divider.vue";

export default {
  title: "Containment/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    thickness: {
      control: {
        type: "radio"
      },
      options: ["large", "medium", "small"]
    }
  }
};

export const Default = {
  args: {}
};

export const LargeDivider = {
  args: {
    thickness: "large"
  }
};

export const SmallDivider = {
  args: {
    thickness: "small"
  }
};
