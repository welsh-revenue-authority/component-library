import WraCustomInput from "../components/CustomInput.vue";

export default {
  title: "Form Inputs & Controls/CustomInput",
  component: WraCustomInput,
  parameters: {
    docs: {
      description: {
        component: `
Refer to [maska v2 docs](https://beholdr.github.io/maska/v2/) for more information on data masking options
        `
      }
    }
  },
  argTypes: {
    type: {
      control: {
        type: "select"
      },
      options: ["none", "text", "tel", "url", "email", "numeric", "decimal"]
    },
    inputmode: {
      control: {
        type: "select"
      },
      options: [
        "none",
        "text",
        "tel",
        "url",
        "email",
        "numeric",
        "decimal",
        "search"
      ]
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

export const Prefix = {
  args: {
    label: "Phone number",
    placeholder: "0000 000000",
    dataMaska: "#### ######",
    prefix: "+44"
  },
  render: (args) => ({
    components: { WraCustomInput },
    setup() {
      return { args };
    },
    template: `
      <WraCustomInput style="width: 150px;" v-bind="args" />
      `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-custom-input
  label="Phone number"
  placeholder="0000 000000"
  dataMaska="#### ######"
  prefix="+44"
/>
        `
      }
    }
  }
};

export const Suffix = {
  args: {
    label: "Percentage",
    placeholder: "00.00",
    dataMaska: "##.##",
    suffix: "%"
  },
  render: (args) => ({
    components: { WraCustomInput },
    setup() {
      return { args };
    },
    template: `
      <WraCustomInput style="width: 90px;" v-bind="args" />
      `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-custom-input
  label="Percentage"
  placeholder="00.00"
  dataMaska="##.##"
  suffix="%"
/>
        `
      }
    }
  }
};
