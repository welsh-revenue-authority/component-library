import * as mdiIcons from "@mdi/js";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect } from "storybook/test";
import WraIcon from "../components/Icon.vue";

const meta: Meta<typeof WraIcon> = {
  title: "Images & Icons/Icon",
  component: WraIcon,
  argTypes: {
    icon: {
      control: {
        type: "text"
      },
      description:
        "Name of icon from material design icons by pictogrammers. [List of icons](https://pictogrammers.com/library/mdi/)"
    },
    stroke: {
      control: {
        type: "color"
      }
    },
    fill: {
      control: {
        type: "color"
      }
    }
  },
  render: (args) => ({
    components: { WraIcon },
    computed: { icon: () => (mdiIcons as Record<string, string>)[args.icon] },
    setup() {
      return { args };
    },
    template: `
      <wra-icon v-bind="args" :icon="icon" /> 
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <wra-icon :icon="mdiAbacus" />
</template>

<script>
import { mdiAbacus } from "@mdi/js";

export default {
  data: () => ({
    mdiAbacus: mdiAbacus
  })
}
</script>
        `
      }
    }
  }
};
export default meta;

export const Default: StoryObj<typeof WraIcon> = {
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector("svg")).toBeVisible();
    await expect(canvasElement.querySelector("path")).toHaveAttribute(
      "d",
      mdiIcons.mdiAbacus
    );
  },
  args: {
    icon: "mdiAbacus"
  }
};
