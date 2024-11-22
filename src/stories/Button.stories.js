import WraButton from "../components/Button.vue";
import WraIcon from "../components/Icon.vue";
import * as mdiIcons from "@mdi/js";

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
      options: [
        "wra-revenue",
        "wra-blue",
        "wra-red",
        "wra-green",
        "wra-white",
        "wra-black"
      ]
    },
    outlined: {
      control: "boolean"
    },
    prependIcon: {
      table: {
        disable: true
      }
    },
    appendIcon: {
      table: {
        disable: true
      }
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
    prependIcon: "true",
    icon: "mdiChevronLeft",
    fill: "white"
  },
  render: (args) => ({
    components: { WraButton, WraIcon },
    computed: { icon: () => mdiIcons[args.icon] },
    setup() {
      return { args };
    },
    template: `
    <WraButton v-bind="args">
      <template #prepend-icon>
        <wra-icon v-bind="args" :icon="icon" />
      </template>
      Back Button
    </WraButton>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button prependIcon>
  <template #prepend-icon>
    <wra-icon :icon="mdiChevronLeft" />
  </template>
  Back Button
</wra-button>
        `
      }
    }
  }
};

export const AppendIcon = {
  args: {
    appendIcon: "true",
    icon: "mdiChevronRight",
    fill: "white"
  },
  render: (args) => ({
    components: { WraButton, WraIcon },
    computed: { icon: () => mdiIcons[args.icon] },
    setup() {
      return { args };
    },
    template: `
    <WraButton v-bind="args">
      Next Button
      <template #append-icon>
        <wra-icon v-bind="args" :icon="icon" />
      </template>
    </WraButton>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button appendIcon>
  Next Button
  <template #append-icon>
    <wra-icon :icon="mdiChevronRight" />
  </template>
</wra-button>
        `
      }
    }
  }
};

export const AppendCustomIcon = {
  args: {
    appendIcon: "true",
    icon: "mdiUpload",
    fill: "white"
  },
  render: (args) => ({
    components: { WraButton, WraIcon },
    computed: { icon: () => mdiIcons[args.icon] },
    setup() {
      return { args };
    },
    template: `
    <WraButton v-bind="args">
      Upload File
      <template #append-icon>
        <wra-icon v-bind="args" :icon="icon" />
      </template>
    </WraButton>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button appendIcon>
  Upload File
  <template #append-icon>
    <wra-icon :icon="mdiUpload" />
  </template>
</wra-button>
        `
      }
    }
  }
};
