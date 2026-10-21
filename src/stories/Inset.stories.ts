import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, within } from "storybook/test";
import WraInset from "../components/Inset.vue";

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
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText("This is an inset")
    ).toBeVisible();
  },
  render: (args) => ({
    components: { WraInset },
    setup() {
      return { args };
    },
    template: `<WraInset v-bind="args">This is an inset</WraInset>`
  })
};

export const CharcoalInset: StoryObj<typeof WraInset> = {
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText("This is a charcoal inset")
    ).toBeVisible();
  },
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
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText("This is a red inset")
    ).toBeVisible();
  },
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
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText("This is a blue inset")
    ).toBeVisible();
  },
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
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText("This is a green inset")
    ).toBeVisible();
  },
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
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText("This is a yellow inset")
    ).toBeVisible();
  },
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
