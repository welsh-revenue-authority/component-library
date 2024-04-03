import Tab from "../components/Tab.vue";

export default {
  title: "All/Tab",
  component: Tab,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    label: "This is a single tab",
    active: false,
  },
};

export const Active = {
  args: {
    label: "This is a single tab that is active",
    active: true,
  },
  // Active tab is white so use dark background
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
