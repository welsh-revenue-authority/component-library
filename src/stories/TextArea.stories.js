import TextArea from "../components/TextArea.vue";

export default {
  title: "Inputs/TextArea",
  component: TextArea,
  tags: ["autodocs"]
};

export const Enabled = {
  args: {
    disabled: false,
    label: "An enabled text area"
  }
};

export const Disabled = {
  args: {
    disabled: true,
    label: "A disabled text area"
  }
};
