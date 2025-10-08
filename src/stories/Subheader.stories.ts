import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraSubheader from "../components/Subheader.vue";
import WraHeader from "../components/Header.vue";

import { Header1 } from "./Header.stories";

const meta: Meta<typeof WraSubheader> = {
  title: "Miscellaneous/Subheader",
  component: WraSubheader,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "color"
    }
  }
};

export default meta;

type Story = StoryObj<typeof WraSubheader>;

export const Default: Story = {
  args: {
    ...Header1.args
  },
  render(args) {
    return {
      components: { WraSubheader, WraHeader },
      setup() {
        return { args };
      },
      template: `<WraSubheader v-bind="args">This is a subheader</WraSubheader>
        <WraHeader v-bind="args">This is a H1 header</WraHeader>`
    };
  }
};
