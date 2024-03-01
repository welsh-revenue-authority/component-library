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
  template:
    '<wra-subheader v-bind="args">{{ args.slotContent }}</wra-subheader>'
});

export const Default = Template.bind({});
Default.args = {
  slotContent: "This is a subheader"
};
