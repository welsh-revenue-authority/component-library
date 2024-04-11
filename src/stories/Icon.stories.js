import WraIcon from "../components/Icon.vue";
import { mdiAbacus } from "@mdi/js";

export default {
  title: "All/Icon",
  component: WraIcon,
  tags: ["autodocs"],
  argTypes: {
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
};

export const Default = {
  args: {
    icon: mdiAbacus,
  },
};
