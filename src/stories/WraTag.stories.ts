import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraTag from "@/components/WraTag.vue";

const meta: Meta<typeof WraTag> = {
  title: "Containment/Tag",
  component: WraTag,
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["wra-blue", "wra-green", "wra-grey"]
    },
    content: {
      control: "text"
    }
  },
  tags: ["autodocs"]
};
export default meta;

type TagProps = InstanceType<typeof WraTag>["$props"];
type Story = StoryObj<TagProps>;

export const Default: Story = {
  args: {
    content: "In progress"
  },
  render: (args) => ({
    components: { WraTag },
    setup() {
      return { args };
    },
    template: `<WraTag v-bind="args" />`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-tag content="In progress" />
        `
      }
    }
  }
};

export const Blue: Story = {
  args: {
    content: "In progress",
    color: "wra-blue"
  },
  render: (args) => ({
    components: { WraTag },
    setup() {
      return { args };
    },
    template: `<WraTag v-bind="args" />`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-tag content="In progress" colour="wra-blue" />
        `
      }
    }
  }
};

export const Green: Story = {
  args: {
    content: "Completed",
    color: "wra-green"
  },
  render: (args) => ({
    components: { WraTag },
    setup() {
      return { args };
    },
    template: `<WraTag v-bind="args" />`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-tag content="Completed" colour="wra-green" />
        `
      }
    }
  }
};

export const WithSlot: Story = {
  args: {
    color: "wra-blue"
  },
  render: (args) => ({
    components: { WraTag },
    setup() {
      return { args };
    },
    template: `<WraTag v-bind="args">Custom slot content</WraTag>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-tag colour="wra-blue">
  Custom slot content
</wra-tag>
        `
      }
    }
  }
};
