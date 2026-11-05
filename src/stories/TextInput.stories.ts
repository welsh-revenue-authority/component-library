import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraTextInput from "../components/TextInput.vue";
import WraValidationTooltip from "../components/ValidationTooltip.vue";

const meta: Meta<typeof WraTextInput> = {
  title: "Form Inputs & Controls/TextInput",
  component: WraTextInput,
  argTypes: {
    type: {
      control: {
        type: "select"
      },
      options: ["text", "tel", "url", "email", "numeric", "decimal"]
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
    },
    dataMaska: {
      description:
        "The mask pattern for the input field. [maska v2 docs](https://beholdr.github.io/maska/v2/)"
    }
  }
};

export default meta;

type Story = StoryObj<typeof WraTextInput>;

export const Default: Story = {
  args: {
    modelValue: "Enter text here...",
    id: "textInput"
  }
};

export const WithLabelDescriptionAndHint: Story = {
  args: {
    label: "Text input label",
    description: "This is a description for the input field.",
    hint: "This is a hint for the input field.",
    modelValue: "Enter text here...",
    id: "textInput"
  }
};

export const WithError: Story = {
  args: {
    label: "Text input label",
    description: "This is a description for the input field.",
    hint: "This is a hint for the input field.",
    id: "textInput",
    error: true
  },
  render: (args) => ({
    components: { WraTextInput, WraValidationTooltip },
    setup() {
      return { args };
    },
    template: `
      <WraTextInput v-bind="args">
        <template #validation-tooltip>
          <WraValidationTooltip type="wra-error">
            This is an error message
          </WraValidationTooltip>
        </template>
      </WraTextInput>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-text-input
  id="textInput"
  label="Text input label"
  description="This is a description for the input field."
  hint="This is a hint for the input field."
  :error="true"
>
  <template #validation-tooltip>
    <wra-validation-tooltip type="wra-error">
      This is an error message
    </wra-validation-tooltip>
  </template>
</wra-text-input>
        `
      }
    }
  }
};
