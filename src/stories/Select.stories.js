import WraSelect from "../components/Select.vue";

export default {
  title: "All/Select",
  component: WraSelect,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    items: [
      { value: 1, label: "Item 1" },
      { value: 2, label: "Item 2" }
    ]
  }
};
