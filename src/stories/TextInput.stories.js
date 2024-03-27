import WraTextInput from "../components/TextInput.vue";

export default {
  title: "All/TextInput",
  component: WraTextInput,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    label: "Text input label",
    modelValue: "Enter text here...",
    id: "textInput"
  }
};
