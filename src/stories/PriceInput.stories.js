import WraPriceInput from "../components/PriceInput.vue";

export default {
  title: "Form Inputs & Controls/PriceInput",
  component: WraPriceInput,
  argTypes: {
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
    label: "Price input label",
    modelValue: 1234.56,
    id: "priceInput",
    placeholder: "0.00",
    prefix: "£"
  }
};
