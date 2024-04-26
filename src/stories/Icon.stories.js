import WraIcon from "../components/Icon.vue";
import * as mdiIcons from "@mdi/js";

export default {
  title: "All/Icon",
  component: WraIcon,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: {
        type: "text",
      },
    },
    stroke: {
      control: {
        type: "color",
      },
    },
    fill: {
      control: {
        type: "color",
      },
    },
  },
  render: (args) => ({
    components: { WraIcon },
    computed: { icon: () => mdiIcons[args.icon] },
    setup() {
      return { args };
    },
    template: `
      <wra-icon v-bind="args" :icon="icon" /> 
    `,
  }),
  parameters: {
    docs: {
      description: {
        component: "Icon that displays Pictogrammers Material Design Icons",
      },
    },
  },
};

export const Default = {
  args: {
    icon: "mdiAbacus",
  },
};
