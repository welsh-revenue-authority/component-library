import WraContentSectionTitle from "../components/ContentSectionTitle.vue";
import WraHeader from "../components/Header.vue";

import { Header1 } from "./Header.stories";

export default {
  title: "Miscellaneous/ContentSectionTitle",
  component: WraContentSectionTitle,
  tags: ["autodocs"],
  argTypes: {
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
    ...Header1.args
  },
  render: (args) => ({
    components: { WraContentSectionTitle, WraHeader },
    setup() {
      return { args };
    },
    template:
      '<WraContentSectionTitle v-bind="args"><WraHeader v-bind="args">{{ args.default }}</WraHeader></WraContentSectionTitle>'
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-content-section-title>
  <wra-header size="h1">
    This is a H1 header
  </wra-header>
</wra-content-section-title>
        `
      }
    }
  }
};
