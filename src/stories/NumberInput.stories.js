import WraNumberInput from "../components/NumberInput.vue";

export default {
  title: "All/NumberInput",
  component: WraNumberInput,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    label: "Number input label",
    modelValue: 123,
    id: "numberInput"
  }
};
