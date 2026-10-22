import * as mdiIcons from "@mdi/js";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import WraButton from "../components/Button.vue";
import WraIcon from "../components/Icon.vue";

const meta: Meta<typeof WraButton> = {
  title: "Containment/Button",
  component: WraButton,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["default", "small"]
    },
    backgroundColor: {
      control: { type: "radio" },
      options: [
        "wra-revenue",
        "wra-blue",
        "wra-red",
        "wra-green",
        "wra-white",
        "wra-black"
      ]
    },
    outlined: { control: "boolean" },
    prependIcon: { table: { disable: true } },
    appendIcon: { table: { disable: true } }
  }
};
export default meta;

type ButtonProps = InstanceType<typeof WraButton>["$props"];
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: { size: "default" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Default Button" });

    await expect(button).toBeVisible();
    await expect(button).toHaveStyle({ backgroundColor: "rgb(31, 31, 31)" });
    await userEvent.click(button);
    await waitFor(() =>
      expect(button).toHaveStyle({ backgroundColor: "rgb(255, 213, 48)" })
    );
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

export const Small: Story = {
  args: { size: "small" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Small Button" });

    await expect(button).toBeVisible();
    await expect(button).toHaveStyle({ backgroundColor: "rgb(31, 31, 31)" });
    await userEvent.click(button);
    await waitFor(() =>
      expect(button).toHaveStyle({ backgroundColor: "rgb(255, 213, 48)" })
    );
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

export const BackgroundColour: Story = {
  args: { backgroundColor: "wra-blue" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Blue Button" });

    await expect(button).toBeVisible();
    await expect(button).toHaveStyle({ backgroundColor: "rgb(3, 96, 166)" });
    await userEvent.click(button);
    await waitFor(() =>
      expect(button).toHaveStyle({ backgroundColor: "rgb(255, 213, 48)" })
    );
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

export const Outlined: Story = {
  args: { outlined: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Outlined Button" });

    await expect(button).toBeVisible();
    await expect(button).toHaveStyle({ backgroundColor: "rgba(0, 0, 0, 0)" });
    await userEvent.click(button);
    await waitFor(() =>
      expect(button).toHaveStyle({ backgroundColor: "rgb(255, 213, 48)" })
    );
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

export const PrependIcon: Story = {
  args: { prependIcon: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Back Button" });

    await expect(button).toBeVisible();
    await expect(button).toHaveStyle({ backgroundColor: "rgb(31, 31, 31)" });
    await userEvent.click(button);
    await waitFor(() =>
      expect(button).toHaveStyle({ backgroundColor: "rgb(255, 213, 48)" })
    );
  },
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

export const AppendIcon: Story = {
  args: { appendIcon: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Next Button" });

    await expect(button).toBeVisible();
    await expect(button).toHaveStyle({ backgroundColor: "rgb(31, 31, 31)" });
    await userEvent.click(button);
    await waitFor(() =>
      expect(button).toHaveStyle({ backgroundColor: "rgb(255, 213, 48)" })
    );
  },
  render: (args) => ({
    components: { WraButton, WraIcon },
    setup() {
      const icon = mdiIcons.mdiChevronRight;
      const fill = "white";
      return { args, icon, fill };
    },
    template: `
    <WraButton v-bind="args">
      Next Button
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

export const AppendCustomIcon: Story = {
  args: { appendIcon: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Upload File" });

    await expect(button).toBeVisible();
    await expect(button).toHaveStyle({ backgroundColor: "rgb(31, 31, 31)" });
    await userEvent.click(button);
    await waitFor(() =>
      expect(button).toHaveStyle({ backgroundColor: "rgb(255, 213, 48)" })
    );
  },
  render: (args) => ({
    components: { WraButton, WraIcon },
    setup() {
      const icon = mdiIcons.mdiUpload;
      const fill = "white";
      return { args, icon, fill };
    },
    template: `
    <WraButton v-bind="args">
      Upload File
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

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Disabled Button" });

    await expect(button).toBeVisible();
    await expect(button).toHaveStyle({ backgroundColor: "rgb(50, 50, 50)" });
    await expect(button).toBeDisabled();
  },
  render: (args) => ({
    components: { WraButton },
    setup() {
      return { args };
    },
    template: `<WraButton v-bind="args">Disabled Button</WraButton>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button disabled>
  Disabled Button
</wra-button>
        `
      }
    }
  }
};
