import WraSubheader from "../components/Subheader.vue";
import WraHeader from "../components/Header.vue";

import { Header1 } from "./Header.stories";

export default {
  title: "Miscellaneous/Subheader",
  component: WraSubheader,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "color"
    },
    size: {
      control: {
        type: "select"
      },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description:
        "The size of the header. This will apply the appropriate HTML tag and styling."
    }
  }
};

export const Default = {
  args: {
    ...Header1.args,
    default: "This is a subheader"
  },
  render: (args) => ({
    components: { WraSubheader, WraHeader },
    setup() {
      return { args };
    },
    template: `<WraSubheader v-bind="args">{{ args.default }}</WraSubheader>
      <WraHeader v-bind="args">This is a H1 header</WraHeader>`
  })
};
