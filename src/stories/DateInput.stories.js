import WraDateInput from "../components/DateInput.vue";

export default {
  title: "All/DateInput",
  component: WraDateInput,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    label: "Date input label",
    modelValue: new Date(),
    id: "dateInput",
    placeholder: "DD/MM/YYYY"
  }
};
