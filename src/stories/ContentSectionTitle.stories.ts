import type { Meta, StoryObj } from "@storybook/vue3";
import WraContentSectionTitle from "../components/ContentSectionTitle.vue";
import WraHeader from "../components/Header.vue";

const meta: Meta = {
  title: "Miscellaneous/ContentSectionTitle",
  component: WraContentSectionTitle,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description:
        "The size of the header. This will apply the appropriate HTML tag and styling."
    },
    default: {
      control: { type: "text" },
      description: "Header text content."
    }
  }
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    size: "h1",
    default: "This is a H1 header"
  },
  render: (args) => ({
    components: { WraContentSectionTitle, WraHeader },
    setup() {
      return { args };
    },
    template:
      '<WraContentSectionTitle><WraHeader :size="args.size">{{ args.default }}</WraHeader></WraContentSectionTitle>'
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-content-section-title>
  <wra-header size="h1">
    This is a H1 header
  </wra-header>
</wra-content-section-title>
        `
      }
    }
  }
};
