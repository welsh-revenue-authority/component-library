import WraButton from "../components/Button.vue";

export default {
  title: "Containment/Button",
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
      control: {
        type: "radio"
      },
      options: ["wra-revenue", "wra-blue", "wra-red", "wra-green"]
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
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button>
  Default Button
</wra-button>
        `
      }
    }
  }
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
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button size="small">
  Small Button
</wra-button>
        `
      }
    }
  }
};

export const BackgroundColour = {
  args: {
    backgroundColor: "wra-blue"
  },
  render: (args) => ({
    components: { WraButton },
    setup() {
      return { args };
    },
    template: `<WraButton v-bind="args">Blue Button</WraButton>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button backgroundColor="wra-blue">
  Blue Button
</wra-button>
        `
      }
    }
  }
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
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button outlined>
  Outlined Button
</wra-button>
        `
      }
    }
  }
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
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button prependIcon>
  Back Button
</wra-button>
        `
      }
    }
  }
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
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button appendIcon>
  Next Button
</wra-button>
        `
      }
    }
  }
};
