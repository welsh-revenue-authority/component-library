import WraSubheader from "../components/Subheader.vue";

export default {
  title: "All/Subheader",
  component: WraSubheader,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "color"
    }
  }
};

const Template = (args) => ({
  components: { WraSubheader },
  setup() {
    return { args };
  },
  template: '<wra-subheader v-bind="args">{{ args.default }}</wra-subheader>'
});

export const Default = Template.bind({});
Default.args = {
  default: "This is a subheader"
};
