import * as mdiIcons from "@mdi/js";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect } from "storybook/test";
import WraIcon from "../components/Icon.vue";
import WraValidationTooltip from "../components/ValidationTooltip.vue";

const meta: Meta<typeof WraValidationTooltip> = {
  title: "Containment/ValidationTooltip",
  component: WraValidationTooltip,
  parameters: {
    docs: {
      description: {
        component: `
Refer to [Icon component](/docs/images-icons-icon--icondocs) for more information on custom icons.
        `
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: [
        "wra-default",
        "wra-info",
        "wra-success",
        "wra-warning",
        "wra-error"
      ]
    }
  }
};

export default meta;

type Story = StoryObj<typeof WraValidationTooltip>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const tooltip = canvasElement.querySelector(".validation-tooltip");
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveStyle({
      backgroundColor: "rgb(241, 241, 241)",
      borderLeft: "10px solid rgb(3, 96, 166)"
    });
  },
  args: { type: "wra-default" },
  render: (args) => ({
    components: { WraValidationTooltip },
    setup() {
      return { args };
    },
    template: `<WraValidationTooltip v-bind="args">This is a message</WraValidationTooltip>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-validation-tooltip type="wra-default">
  This is a message
</wra-validation-tooltip>
        `
      }
    }
  }
};

export const Info: Story = {
  play: async ({ canvasElement }) => {
    const tooltip = canvasElement.querySelector(".validation-tooltip");
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveStyle({
      backgroundColor: "rgb(194, 224, 252)",
      borderLeft: "10px solid rgb(3, 96, 166)"
    });
  },
  args: { type: "wra-info" },
  render: (args) => ({
    components: { WraValidationTooltip },
    setup() {
      return { args };
    },
    template: `<WraValidationTooltip v-bind="args">This is an info message</WraValidationTooltip>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-validation-tooltip type="wra-info">
  This is an info message
</wra-validation-tooltip>
        `
      }
    }
  }
};

export const Success: Story = {
  play: async ({ canvasElement }) => {
    const tooltip = canvasElement.querySelector(".validation-tooltip");
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveStyle({
      backgroundColor: "rgb(205, 247, 212)",
      borderLeft: "10px solid rgb(0, 112, 21)"
    });
  },
  args: { type: "wra-success" },
  render: (args) => ({
    components: { WraValidationTooltip },
    setup() {
      return { args };
    },
    template: `<WraValidationTooltip v-bind="args">This is a success message</WraValidationTooltip>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-validation-tooltip type="wra-success">
  This is a success message
</wra-validation-tooltip>
        `
      }
    }
  }
};

export const Warning: Story = {
  play: async ({ canvasElement }) => {
    const tooltip = canvasElement.querySelector(".validation-tooltip");
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveStyle({
      backgroundColor: "rgb(255, 245, 206)",
      borderLeft: "10px solid rgb(255, 213, 48)"
    });
  },
  args: { type: "wra-warning" },
  render: (args) => ({
    components: { WraValidationTooltip },
    setup() {
      return { args };
    },
    template: `<WraValidationTooltip v-bind="args">This is a warning message</WraValidationTooltip>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-validation-tooltip type="wra-warning">
  This is a warning message
</wra-validation-tooltip>
        `
      }
    }
  }
};

export const Error: Story = {
  play: async ({ canvasElement }) => {
    const tooltip = canvasElement.querySelector(".validation-tooltip");
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveStyle({
      backgroundColor: "rgb(255, 228, 229)",
      borderLeft: "10px solid rgb(170, 17, 17)"
    });
  },
  args: { type: "wra-error" },
  render: (args) => ({
    components: { WraValidationTooltip },
    setup() {
      return { args };
    },
    template: `<WraValidationTooltip v-bind="args">This is an error message</WraValidationTooltip>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-validation-tooltip type="wra-error">
  This is an error message
</wra-validation-tooltip>
        `
      }
    }
  }
};

export const CustomIconInfo: Story = {
  play: async ({ canvasElement }) => {
    await expect(
      canvasElement.querySelector(".validation-tooltip")
    ).toBeVisible();
    await expect(canvasElement.querySelector("svg")).toBeVisible();
  },
  args: { type: "wra-info" },
  render: (args) => {
    const icon = mdiIcons.mdiInformation;
    const fill = "var(--color-wra-blue)";
    return {
      components: { WraValidationTooltip, WraIcon },
      setup() {
        return { args, icon, fill };
      },
      template: `
        <WraValidationTooltip v-bind="args">
          <template #custom-icon>
            <wra-icon :icon="icon" :fill="fill" />
          </template>
          This is an info message
        </WraValidationTooltip>
      `
    };
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-validation-tooltip type="wra-info">
  <template #custom-icon>
    <wra-icon :icon="mdiInformation" fill="var(--color-wra-blue)" />
  </template>
  This is an info message
</wra-validation-tooltip>
        `
      }
    }
  }
};

export const CustomIconError: Story = {
  play: async ({ canvasElement }) => {
    await expect(
      canvasElement.querySelector(".validation-tooltip")
    ).toBeVisible();
    await expect(canvasElement.querySelector("svg")).toBeVisible();
  },
  args: { type: "wra-error" },
  render: (args) => {
    const icon = mdiIcons.mdiAlert;
    const fill = "var(--color-wra-red)";
    return {
      components: { WraValidationTooltip, WraIcon },
      setup() {
        return { args, icon, fill };
      },
      template: `
        <WraValidationTooltip v-bind="args">
          <template #custom-icon>
            <wra-icon :icon="icon" :fill="fill" />
          </template>
          This is an error message
        </WraValidationTooltip>
      `
    };
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-validation-tooltip type="wra-error">
  <template #custom-icon>
    <wra-icon :icon="mdiAlert" fill="var(--color-wra-red)" />
  </template>
  This is an error message
</wra-validation-tooltip>
        `
      }
    }
  }
};
