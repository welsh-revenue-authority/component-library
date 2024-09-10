import Pagination from "../components/Pagination.vue";

export default {
  title: "Pagination",
  component: Pagination,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    modelValue: 1,
    totalPages: 20,
    length: 5,
    skip: true,
    startIndex: 1,
    nextLabel: "Next",
    previousLabel: "Previous"
  }
};
