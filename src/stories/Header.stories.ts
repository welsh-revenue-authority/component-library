import WraHeader from "../components/Header.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof WraHeader> = {
  title: "Miscellaneous/Header",
  component: WraHeader,
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
export default meta;

export const Header1: StoryObj<typeof WraHeader> = {
  args: {
    size: "h1"
  },
  render: (args) => ({
    components: { WraHeader },
    setup() {
      return { args };
    },
    template: `<WraHeader v-bind="args">This is a H1 header</WraHeader>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-header size="h1">
  This is a H1 header
</wra-header>
        `
      }
    }
  }
};

export const Header2: StoryObj<typeof WraHeader> = {
  args: {
    size: "h2"
  },
  render: (args) => ({
    components: { WraHeader },
    setup() {
      return { args };
    },
    template: `<WraHeader v-bind="args">This is a H2 header</WraHeader>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-header size="h2">
  This is a H2 header
</wra-header>
        `
      }
    }
  }
};

export const Header3: StoryObj<typeof WraHeader> = {
  args: {
    size: "h3"
  },
  render: (args) => ({
    components: { WraHeader },
    setup() {
      return { args };
    },
    template: `<WraHeader v-bind="args">This is a H3 header</WraHeader>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-header size="h3">
  This is a H3 header
</wra-header>
        `
      }
    }
  }
};

export const Header4: StoryObj<typeof WraHeader> = {
  args: {
    size: "h4"
  },
  render: (args) => ({
    components: { WraHeader },
    setup() {
      return { args };
    },
    template: `<WraHeader v-bind="args">This is a H4 header</WraHeader>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-header size="h4"> 
  This is a H4 header
</wra-header>
        `
      }
    }
  }
};

export const Header5: StoryObj<typeof WraHeader> = {
  args: {
    size: "h5"
  },
  render: (args) => ({
    components: { WraHeader },
    setup() {
      return { args };
    },
    template: `<WraHeader v-bind="args">This is a H5 header</WraHeader>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-header size="h5">
  This is a H5 header
</wra-header>
        `
      }
    }
  }
};

export const Header6: StoryObj<typeof WraHeader> = {
  args: {
    size: "h6"
  },
  render: (args) => ({
    components: { WraHeader },
    setup() {
      return { args };
    },
    template: `<WraHeader v-bind="args">This is a H6 header</WraHeader>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-header size="h6">
  This is a H6 header
</wra-header>
        `
      }
    }
  }
};
