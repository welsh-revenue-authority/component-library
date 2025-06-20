import WraPagination from "../components/Pagination.vue";

export default {
  title: "Navigation/Pagination",
  component: WraPagination,
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

export const CustomDivider = {
  args: {
    modelValue: 1,
    totalPages: 20,
    length: 5,
    skip: true,
    startIndex: 1,
    nextLabel: "Next",
    previousLabel: "Previous"
  },
  render: (args) => ({
    components: { WraPagination },
    setup() {
      return { args };
    },
    template: `
    <WraPagination v-bind="args">
      <template #divider>
        —
      </template>
    </WraPagination>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-pagination
  :model-value="1"
  :total-pages="20"
  :length="5"
  :skip="true"
  :start-index="1"
  next-label="Next"
  previous-label="Previous"
>
  <template #divider>
    —
  </template>
</wra-pagination>
        `
      }
    }
  }
};
