import WraIcon from "../components/Icon.vue";
import * as mdiIcons from "@mdi/js";
import type { Meta, StoryObj } from "@storybook/vue3";

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
    computed: { icon: () => mdiIcons[args.icon] },
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
  args: {
    icon: "mdiAbacus"
  }
};
