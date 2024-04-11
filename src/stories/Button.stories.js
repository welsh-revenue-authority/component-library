import WraButton from "../components/Button.vue";

export default {
  title: "All/Button",
  component: WraButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "radio"
      },
      options: ["default", "small"]
    },
    backgroundColor: {
      control: "color"
    },
    color: {
      table: {
        disable: true
      }
    },
    outlined: {
      control: "boolean"
    },
    prependIcon: {
      control: "boolean"
    },
    appendIcon: {
      control: "boolean"
    }
  }
};

export const Default = {
  args: {
    size: "default"
  },
  render: (args) => ({
    components: { WraButton },
    setup() {
      return { args };
    },
    template: `<WraButton v-bind="args">Default Button</WraButton>`
  })
};

export const Small = {
  args: {
    size: "small"
  },
  render: (args) => ({
    components: { WraButton },
    setup() {
      return { args };
    },
    template: `<WraButton v-bind="args">Small Button</WraButton>`
  })
};

export const Outlined = {
  args: {
    outlined: "true"
  },
  render: (args) => ({
    components: { WraButton },
    setup() {
      return { args };
    },
    template: `<WraButton v-bind="args">Outlined Button</WraButton>`
  })
};

export const PrependIcon = {
  args: {
    prependIcon: "true"
  },
  render: (args) => ({
    components: { WraButton },
    setup() {
      return { args };
    },
    template: `<WraButton v-bind="args">Back Button</WraButton>`
  })
};

export const AppendIcon = {
  args: {
    appendIcon: "true"
  },
  render: (args) => ({
    components: { WraButton },
    setup() {
      return { args };
    },
    template: `<WraButton v-bind="args">Next Button</WraButton>`
  })
};
