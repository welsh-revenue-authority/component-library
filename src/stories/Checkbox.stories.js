import WraCheckbox from "../components/Checkbox.vue";

export default {
  title: "Form Inputs & Controls/Checkbox",
  component: WraCheckbox,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    label: "This is a checkbox label",
    id: "checkboxId"
  }
};

export const InfoText = {
  args: {
    label: "This is a checkbox label",
    id: "checkboxId",
    info: "This is additional information about the checkbox"
  }
};
