import Footer from "../components/Footer.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof Footer> = {
  title: "Navigation/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {}
};
export default meta;

export const Default: StoryObj<typeof Footer> = {
  render: (args) => ({
    components: { Footer },
    setup() {
      return { args };
    },
    template: `<Footer v-bind="args">This is a footer</Footer>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-footer>
  This is a footer
</wra-footer>
        `
      }
    }
  }
};
