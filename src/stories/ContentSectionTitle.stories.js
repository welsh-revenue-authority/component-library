import WraContentSectionTitle from "../components/ContentSectionTitle.vue";
import WraHeader from "../components/Header.vue";

import { Header1 } from "./Header.stories";

export default {
  title: "All/ContentSectionTitle",
  component: WraContentSectionTitle,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"]
    }
  }
};

export const Default = {
  args: {
    ...Header1.args
  },
  render: (args) => ({
    components: { WraContentSectionTitle, WraHeader },
    setup() {
      return { args };
    },
    template:
      '<WraContentSectionTitle v-bind="args"><WraHeader v-bind="args">{{ args.default }}</WraHeader></WraContentSectionTitle>'
  })
};
