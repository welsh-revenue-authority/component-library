import WraInset from "../components/Inset.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof WraInset> = {
  title: "Containment/Inset",
  component: WraInset,
  tags: ["autodocs"],
  argTypes: {
    colour: {
      control: {
        type: "radio"
      },
      options: [
        "wra-revenue",
        "wra-charcoal",
        "wra-red",
        "wra-blue",
        "wra-green",
        "wra-yellow"
      ]
    }
  }
};
export default meta;

export const Default: StoryObj<typeof WraInset> = {
  render: (args) => ({
    components: { WraInset },
    setup() {
      return { args };
    },
    template: `<WraInset v-bind="args">This is an inset</WraInset>`
  })
};

export const CharcoalInset: StoryObj<typeof WraInset> = {
  render: (args) => ({
    components: { WraInset },
    setup() {
      return { args };
    },
    template: `<WraInset v-bind="args">This is a charcoal inset</WraInset>`
  }),
  args: {
    colour: "wra-charcoal"
  }
};

export const RedInset: StoryObj<typeof WraInset> = {
  render: (args) => ({
    components: { WraInset },
    setup() {
      return { args };
    },
    template: `<WraInset v-bind="args">This is a red inset</WraInset>`
  }),
  args: {
    colour: "wra-red"
  }
};

export const BlueInset: StoryObj<typeof WraInset> = {
  render: (args) => ({
    components: { WraInset },
    setup() {
      return { args };
    },
    template: `<WraInset v-bind="args">This is a blue inset</WraInset>`
  }),
  args: {
    colour: "wra-blue"
  }
};

export const GreenInset: StoryObj<typeof WraInset> = {
  render: (args) => ({
    components: { WraInset },
    setup() {
      return { args };
    },
    template: `<WraInset v-bind="args">This is a green inset</WraInset>`
  }),
  args: {
    colour: "wra-green"
  }
};

export const YellowInset: StoryObj<typeof WraInset> = {
  render: (args) => ({
    components: { WraInset },
    setup() {
      return { args };
    },
    template: `<WraInset v-bind="args">This is a yellow inset</WraInset>`
  }),
  args: {
    colour: "wra-yellow"
  }
};
