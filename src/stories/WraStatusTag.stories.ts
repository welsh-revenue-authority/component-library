import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraStatusTag from "@/components/WraStatusTag.vue";

const meta: Meta<typeof WraStatusTag> = {
  title: "Containment/StatusTag",
  component: WraStatusTag,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["alpha", "beta", "live", "retired"]
    },
    label: {
      control: "text"
    }
  },
  tags: ["autodocs"]
};
export default meta;

type StatusTagProps = InstanceType<typeof WraStatusTag>["$props"];
type Story = StoryObj<StatusTagProps>;

export const Alpha: Story = {
  args: {
    variant: "alpha"
  },
  render: (args) => ({
    components: { WraStatusTag },
    setup() {
      return { args };
    },
    template: `<WraStatusTag v-bind="args" />`
  }),
  parameters: {
    docs: {
      source: {
        code: `<wra-status-tag variant="alpha" />`
      }
    }
  }
};

export const Beta: Story = {
  args: {
    variant: "beta"
  },
  render: (args) => ({
    components: { WraStatusTag },
    setup() {
      return { args };
    },
    template: `<WraStatusTag v-bind="args" />`
  }),
  parameters: {
    docs: {
      source: {
        code: `<wra-status-tag variant="beta" />`
      }
    }
  }
};

export const Live: Story = {
  args: {
    variant: "live"
  },
  render: (args) => ({
    components: { WraStatusTag },
    setup() {
      return { args };
    },
    template: `<WraStatusTag v-bind="args" />`
  }),
  parameters: {
    docs: {
      source: {
        code: `<wra-status-tag variant="live" />`
      }
    }
  }
};

export const Retired: Story = {
  args: {
    variant: "retired"
  },
  render: (args) => ({
    components: { WraStatusTag },
    setup() {
      return { args };
    },
    template: `<WraStatusTag v-bind="args" />`
  }),
  parameters: {
    docs: {
      source: {
        code: `<wra-status-tag variant="retired" />`
      }
    }
  }
};

export const CustomLabel: Story = {
  args: {
    variant: "beta",
    label: "Preview"
  },
  render: (args) => ({
    components: { WraStatusTag },
    setup() {
      return { args };
    },
    template: `<WraStatusTag v-bind="args" />`
  }),
  parameters: {
    docs: {
      source: {
        code: `<wra-status-tag variant="beta" label="Preview" />`
      }
    }
  }
};
