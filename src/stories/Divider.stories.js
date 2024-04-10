import Divider from "../components/Divider.vue";

export default {
  title: "All/Divider",
  component: Divider,
  tags: ["autodocs"],
  args: {
    thickness: 4,
  },
  argTypes: {
    color: {
      control: "color",
    },
    thickness: {
      control: {
        type: "number",
        min: 1,
      },
    },
  },
};

export const Default = {
  args: {},
};
