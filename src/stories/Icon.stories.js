import WraIcon from "../components/Icon.vue";
import * as mdiIcons from "@mdi/js";

export default {
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

export const Default = {
  args: {
    icon: "mdiAbacus"
  }
};
