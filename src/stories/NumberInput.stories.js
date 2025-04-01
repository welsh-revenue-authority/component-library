import WraNumberInput from "../components/NumberInput.vue";

export default {
  title: "Form Inputs & Controls/NumberInput",
  component: WraNumberInput,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select"
      },
      options: ["number", "password", "search"]
    },
    inputmode: {
      control: {
        type: "select"
      },
      options: ["numeric", "decimal", "text"]
    }
  }
};

export const Default = {
  args: {
    label: "Number input label",
    modelValue: 123,
    id: "numberInput"
  }
};
