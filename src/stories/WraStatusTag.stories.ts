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
    variant: "alpha",
    label: "Alpha"
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
        code: `<wra-status-tag variant="alpha" label="Alpha" />`
      }
    }
  }
};

export const Beta: Story = {
  args: {
    variant: "beta",
    label: "Beta"
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
        code: `<wra-status-tag variant="beta" label="Beta" />`
      }
    }
  }
};

export const Live: Story = {
  args: {
    variant: "live",
    label: "Live"
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
        code: `<wra-status-tag variant="live" label="Live" />`
      }
    }
  }
};

export const Retired: Story = {
  args: {
    variant: "retired",
    label: "Retired"
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
        code: `<wra-status-tag variant="retired" label="Retired" />`
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
