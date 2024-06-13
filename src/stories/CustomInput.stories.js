import WraCustomInput from "../components/CustomInput.vue";

export default {
  title: "Form Inputs & Controls/CustomInput",
  component: WraCustomInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Refer to [maska v2 docs](https://beholdr.github.io/maska/v2/) for more information on data masking options
        `
      }
    }
  }
};

export const Default = {
  args: {
    label: "Custom input label",
    placeholder: "0000 0000 0000",
    dataMaska: "#### #### ####"
  }
};
