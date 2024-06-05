import WraSubheader from "../components/Subheader.vue";

export default {
  title: "Miscellaneous/Subheader",
  component: WraSubheader,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "color"
    }
  }
};

export const Default = {
  args: {
    default: "This is a subheader"
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-subheader>
  This is a subheader
</wra-subheader>
        `
      }
    }
  }
};
