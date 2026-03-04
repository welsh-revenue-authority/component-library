import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ServiceBar from "../components/ServiceBar.vue";

const meta = {
  title: "Navigation/ServiceBar",
  component: ServiceBar,
  tags: ["autodocs"],
  argTypes: {
    hiddenPrint: {
      control: "boolean",
      description:
        "If true, the service bar will be hidden when printing the page"
    },
    navigationCount: {
      control: "number",
      description:
        "The number of navigation links. If more than 3, burger menu will be displayed"
    }
  }
} satisfies Meta<typeof ServiceBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ServiceBar with service name and few navigation links (no burger menu)
 */
export const FewLinks: Story = {
  args: {
    hiddenPrint: false,
    navigationCount: 2
  },
  render: (args) => ({
    components: { ServiceBar },
    template: `
      <ServiceBar v-bind="args">
        <template #service>
          <span>Register your visitor accommodation</span>
        </template>
        <template #navigation>
          <a href="#">Home</a>
          <a href="#">About</a>
        </template>
      </ServiceBar>
    `,
    setup() {
      return { args };
    }
  })
};
