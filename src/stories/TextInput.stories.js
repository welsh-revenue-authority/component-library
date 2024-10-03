import WraTextInput from "../components/TextInput.vue";

export default {
  title: "Form Inputs & Controls/TextInput",
  component: WraTextInput,
  tags: ["autodocs"],
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
