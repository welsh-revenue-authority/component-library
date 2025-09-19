import type { Meta, StoryObj } from "@storybook/vue3";
import WraCustomInput from "../components/CustomInput.vue";

const meta: Meta<typeof WraCustomInput> = {
  title: "Form Inputs & Controls/CustomInput",
  component: WraCustomInput,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["none", "text", "tel", "url", "email", "numeric", "decimal"]
    },
    inputmode: {
      control: { type: "select" },
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
    },
    dataMaska: {
      description:
        "The mask pattern for the input field. [maska v2 docs](https://beholdr.github.io/maska/v2/)"
    }
  }
};
export default meta;

type CustomInputProps = InstanceType<typeof WraCustomInput>["$props"];
type Story = StoryObj<CustomInputProps>;

export const Default: Story = {
  args: {
    label: "Custom input label",
    placeholder: "0000 0000 0000",
    dataMaska: "#### #### ####"
  }
};

export const MinimumValue: Story = {
  args: {
    label: "Custom input with minimum value of 0",
    type: "number",
    minimumValue: 0
  }
};

export const Prefix: Story = {
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

export const Suffix: Story = {
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

export const MaxLengthRule: Story = {
  args: {
    label: "Maximum 10 characters",
    placeholder: "Type up to 10 characters",
    rules: [
      (value: string | number) => {
        if (String(value).length > 10) {
          return "Maximum 10 characters allowed";
        }
        return true;
      }
    ]
  },
  render: (args) => ({
    components: { WraCustomInput },
    setup() {
      return { args };
    },
    template: `
      <WraCustomInput v-bind="args" />
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-custom-input
  label="Maximum 10 characters"
  placeholder="Type up to 10 characters"
  :rules="[(value) => value.length > 10 ? 'Maximum 10 characters allowed' : true]"
/>
type CustomInputProps = InstanceType<typeof WraCustomInput>["$props"];
        `
      }
    }
  }
};
