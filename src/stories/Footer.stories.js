import Footer from "../components/Footer.vue";

export default {
  title: "All/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    default: {
      control: {
        type: "text",
      },
      description: "Slot to replace the default links with something else",
    },
  },
};

export const Default = {
  args: {
    default: "This is a footer",
  },
};
