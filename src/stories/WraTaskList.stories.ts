import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraTaskList from "@/components/WraTaskList.vue";
import WraTaskListItem from "@/components/WraTaskListItem.vue";
import WraTag from "@/components/WraTag.vue";

const meta: Meta<typeof WraTaskList> = {
  title: "Containment/TaskList",
  component: WraTaskList,
  tags: ["autodocs"]
};
export default meta;

type TaskListProps = InstanceType<typeof WraTaskList>["$props"];
type Story = StoryObj<TaskListProps>;

export const Default: Story = {
  render: (args) => ({
    components: { WraTaskList, WraTaskListItem },
    setup() {
      return { args };
    },
    template: `
      <WraTaskList v-bind="args">
        <WraTaskListItem>First task item</WraTaskListItem>
        <WraTaskListItem>Second task item</WraTaskListItem>
        <WraTaskListItem>Third task item</WraTaskListItem>
      </WraTaskList>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<WraTaskList>
  <WraTaskListItem>First task item</WraTaskListItem>
  <WraTaskListItem>Second task item</WraTaskListItem>
  <WraTaskListItem>Third task item</WraTaskListItem>
</WraTaskList>
        `
      }
    }
  }
};

export const SingleItem: Story = {
  render: (args) => ({
    components: { WraTaskList, WraTaskListItem },
    setup() {
      return { args };
    },
    template: `
      <WraTaskList v-bind="args">
        <WraTaskListItem>Single task item</WraTaskListItem>
      </WraTaskList>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<WraTaskList>
  <WraTaskListItem>Single task item</WraTaskListItem>
</WraTaskList>
        `
      }
    }
  }
};

export const MultipleItems: Story = {
  render: (args) => ({
    components: { WraTaskList, WraTaskListItem },
    setup() {
      return { args };
    },
    template: `
      <WraTaskList v-bind="args">
        <WraTaskListItem>Review documentation</WraTaskListItem>
        <WraTaskListItem>Update component props</WraTaskListItem>
        <WraTaskListItem>Add unit tests</WraTaskListItem>
        <WraTaskListItem>Create storybook stories</WraTaskListItem>
        <WraTaskListItem>Submit for review</WraTaskListItem>
      </WraTaskList>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<WraTaskList>
  <WraTaskListItem>Review documentation</WraTaskListItem>
  <WraTaskListItem>Update component props</WraTaskListItem>
  <WraTaskListItem>Add unit tests</WraTaskListItem>
  <WraTaskListItem>Create storybook stories</WraTaskListItem>
  <WraTaskListItem>Submit for review</WraTaskListItem>
</WraTaskList>
        `
      }
    }
  }
};

export const WithHints: Story = {
  render: (args) => ({
    components: { WraTaskList, WraTaskListItem },
    setup() {
      return { args };
    },
    template: `
      <WraTaskList v-bind="args">
        <WraTaskListItem>
          Review documentation
          <template #hint>Check API documentation and examples</template>
        </WraTaskListItem>
        <WraTaskListItem>
          Update component props
          <template #hint>Ensure backward compatibility</template>
        </WraTaskListItem>
        <WraTaskListItem>
          Add unit tests
          <template #hint>Target 80% code coverage</template>
        </WraTaskListItem>
      </WraTaskList>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<WraTaskList>
  <WraTaskListItem>
    Review documentation
    <template #hint>Check API documentation and examples</template>
  </WraTaskListItem>
  <WraTaskListItem>
    Update component props
    <template #hint>Ensure backward compatibility</template>
  </WraTaskListItem>
  <WraTaskListItem>
    Add unit tests
    <template #hint>Target 80% code coverage</template>
  </WraTaskListItem>
</WraTaskList>
        `
      }
    }
  }
};

export const WithStatus: Story = {
  render: (args) => ({
    components: { WraTaskList, WraTaskListItem, WraTag },
    setup() {
      return { args };
    },
    template: `
      <WraTaskList v-bind="args">
        <WraTaskListItem>
          Review documentation
          <template #status>
            <WraTag content="Completed" color="wra-green" />
          </template>
        </WraTaskListItem>
        <WraTaskListItem>
          Update component props
          <template #status>
            <WraTag content="In progress" color="wra-blue" />
          </template>
        </WraTaskListItem>
        <WraTaskListItem>
          Add unit tests
          <template #status>
            <WraTag content="Not started" color="wra-grey" />
          </template>
        </WraTaskListItem>
      </WraTaskList>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<WraTaskList>
  <WraTaskListItem>
    Review documentation
    <template #status>
      <WraTag content="Completed" color="wra-green" />
    </template>
  </WraTaskListItem>
  <WraTaskListItem>
    Update component props
    <template #status>
      <WraTag content="In progress" color="wra-blue" />
    </template>
  </WraTaskListItem>
  <WraTaskListItem>
    Add unit tests
    <template #status>
      <WraTag content="Not started" color="wra-grey" />
    </template>
  </WraTaskListItem>
</WraTaskList>
        `
      }
    }
  }
};

export const WithHintsAndStatus: Story = {
  render: (args) => ({
    components: { WraTaskList, WraTaskListItem, WraTag },
    setup() {
      return { args };
    },
    template: `
      <WraTaskList v-bind="args">
        <WraTaskListItem>
          Review documentation
          <template #hint>Check API documentation and examples</template>
          <template #status>
            <WraTag content="Completed" color="wra-green" />
          </template>
        </WraTaskListItem>
        <WraTaskListItem>
          Update component props
          <template #hint>Ensure backward compatibility</template>
          <template #status>
            <WraTag content="In progress" color="wra-blue" />
          </template>
        </WraTaskListItem>
        <WraTaskListItem>
          Add unit tests
          <template #hint>Target 80% code coverage</template>
          <template #status>
            <WraTag content="Not started" color="wra-grey" />
          </template>
        </WraTaskListItem>
      </WraTaskList>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<WraTaskList>
  <WraTaskListItem>
    Review documentation
    <template #hint>Check API documentation and examples</template>
    <template #status>
      <WraTag content="Completed" color="wra-green" />
    </template>
  </WraTaskListItem>
  <WraTaskListItem>
    Update component props
    <template #hint>Ensure backward compatibility</template>
    <template #status>
      <WraTag content="In progress" color="wra-blue" />
    </template>
  </WraTaskListItem>
  <WraTaskListItem>
    Add unit tests
    <template #hint>Target 80% code coverage</template>
    <template #status>
      <WraTag content="Not started" color="wra-grey" />
    </template>
  </WraTaskListItem>
</WraTaskList>
        `
      }
    }
  }
};
