import WraIcon from "../components/Icon.vue";
import * as mdiIcons from "@mdi/js";

export default {
  title: "Images & Icons/Icon",
  component: WraIcon,
  tags: ["autodocs"],
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
      description: {
        component: `
Icon that displays [Pictogrammers Material Design Icons](https://pictogrammers.com/library/mdi/)

1. First, import the icon at the top of your script section
2. Then, add it to your component's data
3. Finally, use it in your template by passing it as a prop to the wra-icon component
        `
      },
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
