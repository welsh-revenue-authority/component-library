import TextArea from "../components/TextArea.vue";

export default {
  title: "Form Inputs & Controls/TextArea",
  component: TextArea,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    label: "Text area label"
  }
};

export const MaxLength = {
  args: {
    label: "Text area label",
    maxLength: 10
  }
};
