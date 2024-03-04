import WraSubheader from "../components/Subheader.vue";

export default {
  title: "All/Subheader",
  component: WraSubheader,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "color"
    }
  }
};

export const Default = {
  args: {
    default: `This is a subheader`
  }
};
