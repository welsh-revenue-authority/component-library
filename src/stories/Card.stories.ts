import type { Meta, StoryObj } from "@storybook/vue3";
import WraCard from "../components/Card.vue";
import WraHeader from "../components/Header.vue";
import WraButton from "../components/Button.vue";

const meta: Meta<typeof WraCard> = {
  title: "Containment/Card",
  component: WraCard,
  tags: ["autodocs"]
};
export default meta;

type CardProps = InstanceType<typeof WraCard>["$props"];
type Story = StoryObj<CardProps>;

export const Default: Story = {
  render: (args) => ({
    components: { WraCard, WraHeader, WraButton },
    setup() {
      return { args };
    },
    template: `
    <WraCard v-bind="args">
      <WraHeader size="h1">H1 Header</WraHeader>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis
        aliquam faucibus purus in. Ornare suspendisse sed nisi lacus sed viverra tellus.
        Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Proin sed
        libero enim sed faucibus. Diam quis enim lobortis scelerisque fermentum dui faucibus
        in. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ut consequat semper
        viverra nam libero justo laoreet.
      </p>
      <WraButton style="margin-top: 18px">Button</WraButton>
    </WraCard>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-card>
  <wra-header size="h1">H1 Header</wra-header>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis
    aliquam faucibus purus in. Ornare suspendisse sed nisi lacus sed viverra tellus.
    Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Proin sed
    libero enim sed faucibus. Diam quis enim lobortis scelerisque fermentum dui faucibus
    in. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ut consequat semper
    viverra nam libero justo laoreet.
  </p>
  <wra-button>Button</wra-button>
</wra-card>
        `
      }
    }
  }
};
