import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraButton from "../components/Button.vue";
import WraIcon from "../components/Icon.vue";
import * as mdiIcons from "@mdi/js";

const meta: Meta<typeof WraButton> = {
  title: "Containment/Button",
  component: WraButton,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "default", "large"]
    },
    backgroundColor: {
      control: { type: "radio" },
      options: [
        "wra-revenue",
        "wra-blue",
        "wra-red",
        "wra-green",
        "wra-black",
        "wra-white"
      ]
    },
    outlined: { control: "boolean" },
    disabled: { control: "boolean" },
    prependIcon: { table: { disable: true } },
    appendIcon: { table: { disable: true } }
  }
};
export default meta;

type ButtonProps = InstanceType<typeof WraButton>["$props"];
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: { size: "default" },
  render: (args) => ({
    components: { WraButton },
    setup() {
      return { args };
    },
    template: `<WraButton v-bind="args">Default button</WraButton>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button>
  Default button
</wra-button>
        `
      }
    }
  }
};

export const Small: Story = {
  args: { size: "small" },
  render: (args) => ({
    components: { WraButton },
    setup() {
      return { args };
    },
    template: `<WraButton v-bind="args">Small button</WraButton>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button size="small">
  Small button
</wra-button>
        `
      }
    }
  }
};

export const Large: Story = {
  args: { size: "large" },
  render: (args) => ({
    components: { WraButton },
    setup() {
      return { args };
    },
    template: `<WraButton v-bind="args">Large button</WraButton>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button size="large">
  Large button
</wra-button>
        `
      }
    }
  }
};

export const BackgroundColour: Story = {
  args: { backgroundColor: "wra-blue" },
  render: (args) => ({
    components: { WraButton },
    setup() {
      return { args };
    },
    template: `<WraButton v-bind="args">Blue button</WraButton>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button backgroundColor="wra-blue">
  Blue button
</wra-button>
        `
      }
    }
  }
};

export const Outlined: Story = {
  args: { outlined: true },
  render: (args) => ({
    components: { WraButton },
    setup() {
      return { args };
    },
    template: `<WraButton v-bind="args">Outlined button</WraButton>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button outlined>
  Outlined button
</wra-button>
        `
      }
    }
  }
};

export const PrependIcon: Story = {
  args: { prependIcon: true },
  render: (args) => ({
    components: { WraButton, WraIcon },
    setup() {
      const icon = mdiIcons.mdiChevronLeft;
      const fill = "white";
      return { args, icon, fill };
    },
    template: `
    <WraButton v-bind="args">
      <template #prepend-icon>
        <wra-icon :icon="icon" :fill="fill" />
      </template>
      Back button
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
  Back button
</wra-button>
        `
      }
    }
  }
};

export const AppendIcon: Story = {
  args: { appendIcon: true },
  render: (args) => ({
    components: { WraButton, WraIcon },
    setup() {
      const icon = mdiIcons.mdiChevronRight;
      const fill = "white";
      return { args, icon, fill };
    },
    template: `
    <WraButton v-bind="args">
      Next button
      <template #append-icon>
        <wra-icon :icon="icon" :fill="fill" />
      </template>
    </WraButton>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button appendIcon>
  Next button
  <template #append-icon>
    <wra-icon :icon="mdiChevronRight" />
  </template>
</wra-button>
        `
      }
    }
  }
};

export const AppendCustomIcon: Story = {
  args: { appendIcon: true },
  render: (args) => ({
    components: { WraButton, WraIcon },
    setup() {
      const icon = mdiIcons.mdiUpload;
      const fill = "white";
      return { args, icon, fill };
    },
    template: `
    <WraButton v-bind="args">
      Upload file
      <template #append-icon>
        <wra-icon :icon="icon" :fill="fill" />
      </template>
    </WraButton>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button appendIcon>
  Upload file
  <template #append-icon>
    <wra-icon :icon="mdiUpload" />
  </template>
</wra-button>
        `
      }
    }
  }
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => ({
    components: { WraButton },
    setup() {
      return { args };
    },
    template: `<WraButton v-bind="args">Disabled button</WraButton>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button disabled>
  Disabled button
</wra-button>
        `
      }
    }
  }
};
