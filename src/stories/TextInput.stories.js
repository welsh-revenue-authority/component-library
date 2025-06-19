import WraTextInput from "../components/TextInput.vue";

export default {
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

export const Default = {
  args: {
    label: "Text input label",
    modelValue: "Enter text here...",
    id: "textInput"
  }
};
