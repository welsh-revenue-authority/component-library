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

export const WithLongContent: Story = {
  render: (args) => ({
    components: { WraTaskList, WraTaskListItem, WraTag },
    setup() {
      return { args };
    },
    template: `
      <WraTaskList v-bind="args">
        <WraTaskListItem>
          Comprehensive review and analysis of all system documentation including API specifications, integration guides, and architectural diagrams
          <template #hint>Review all documentation files in the docs directory, verify examples work correctly on all supported platforms, and check for any outdated or deprecated information that needs updating</template>
          <template #status>
            <WraTag content="Completed" color="wra-green" />
          </template>
        </WraTaskListItem>
        <WraTaskListItem>
          Update and refactor component property definitions to ensure full backward compatibility while introducing new optional features for enhanced functionality
          <template #hint>Analyze all existing component props, maintain backward compatibility for deprecated props, add new props with proper TypeScript typing, and update JSDoc comments with detailed examples</template>
          <template #status>
            <WraTag content="In progress" color="wra-blue" />
          </template>
        </WraTaskListItem>
        <WraTaskListItem>
          Implement comprehensive unit test suite with broad code coverage, integration tests, and edge case handling for all component variations and user interactions
          <template #hint>Write unit tests for all component methods and computed properties, create integration tests with real-world scenarios, aim for minimum 80% code coverage, and document test cases for future maintainers</template>
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
    Comprehensive review and analysis of all system documentation including API specifications, integration guides, and architectural diagrams
    <template #hint>Review all documentation files in the docs directory, verify examples work correctly on all supported platforms, and check for any outdated or deprecated information that needs updating</template>
    <template #status>
      <WraTag content="Completed" color="wra-green" />
    </template>
  </WraTaskListItem>
  <WraTaskListItem>
    Update and refactor component property definitions to ensure full backward compatibility while introducing new optional features for enhanced functionality
    <template #hint>Analyze all existing component props, maintain backward compatibility for deprecated props, add new props with proper TypeScript typing, and update JSDoc comments with detailed examples</template>
    <template #status>
      <WraTag content="In progress" color="wra-blue" />
    </template>
  </WraTaskListItem>
  <WraTaskListItem>
    Implement comprehensive unit test suite with broad code coverage, integration tests, and edge case handling for all component variations and user interactions
    <template #hint>Write unit tests for all component methods and computed properties, create integration tests with real-world scenarios, aim for minimum 80% code coverage, and document test cases for future maintainers</template>
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
