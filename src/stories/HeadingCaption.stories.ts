import WraHeadingCaption from "../components/HeadingCaption.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof WraHeadingCaption> = {
  title: "Miscellaneous/Heading Caption",
  component: WraHeadingCaption,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"]
    }
  }
};
export default meta;

export const HeadingCaptionH1: StoryObj<typeof WraHeadingCaption> = {
  args: {
    size: "h1",
    caption: "Land Transaction Tax"
  },
  render: (args) => ({
    components: { WraHeadingCaption },
    setup() {
      return { args };
    },
    template: `<WraHeadingCaption v-bind="args">Submit a return</WraHeadingCaption>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-heading-caption size="h1" caption="Land Transaction Tax">
  Submit a return
</wra-heading-caption>
        `
      }
    }
  }
};

export const HeadingCaptionH2: StoryObj<typeof WraHeadingCaption> = {
  args: {
    size: "h2",
    caption: "Land Transaction Tax"
  },
  render: (args) => ({
    components: { WraHeadingCaption },
    setup() {
      return { args };
    },
    template: `<WraHeadingCaption v-bind="args">Check your answers</WraHeadingCaption>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-heading-caption size="h2" caption="Land Transaction Tax">
  Check your answers
</wra-heading-caption>
        `
      }
    }
  }
};

export const HeadingCaptionH3: StoryObj<typeof WraHeadingCaption> = {
  args: {
    size: "h3",
    caption: "Land Transaction Tax"
  },
  render: (args) => ({
    components: { WraHeadingCaption },
    setup() {
      return { args };
    },
    template: `<WraHeadingCaption v-bind="args">About the transaction</WraHeadingCaption>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-heading-caption size="h3" caption="Land Transaction Tax">
  About the transaction
</wra-heading-caption>
        `
      }
    }
  }
};
