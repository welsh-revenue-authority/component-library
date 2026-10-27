import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraValidationTooltip from "../components/ValidationTooltip.vue";
import WraIcon from "../components/Icon.vue";
import * as mdiIcons from "@mdi/js";

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
      control: {
        type: "radio"
      },
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
  args: {
    type: "wra-default"
  },
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
  args: {
    type: "wra-info"
  },
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
  args: {
    type: "wra-success"
  },
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
  args: {
    type: "wra-warning"
  },
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
  args: {
    type: "wra-error"
  },
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
  args: {
    type: "wra-info"
  },
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
            <wra-icon :icon="icon" :fill="fill" width="25" height="25" />
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
    <wra-icon :icon="mdiInformation" fill="var(--color-wra-blue)" width="25" height="25" />
  </template>
  This is an info message
</wra-validation-tooltip>
        `
      }
    }
  }
};

export const CustomIconError: Story = {
  args: {
    type: "wra-error"
  },
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
            <wra-icon :icon="icon" :fill="fill" width="25" height="25" />
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
    <wra-icon :icon="mdiAlert" fill="var(--color-wra-red)" width="25" height="25" />
  </template>
  This is an error message
</wra-validation-tooltip>
        `
      }
    }
  }
};

export const ErrorSummary: Story = {
  args: {
    type: "wra-error"
  },
  render: (args) => {
    const icon = mdiIcons.mdiAlert;
    const css = `
.main-validation-link {
  color: black;
  font-weight: normal;
}

.validation-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.validation-list li:not(:last-child) {
  margin-bottom: 4px;
}
`;
    return {
      components: { WraValidationTooltip, WraIcon },
      setup() {
        return {
          args,
          icon,
          css
        };
      },
      template: `
        <component :is="'style'">{{ css }}</component>
        <WraValidationTooltip
          role="alert"
          type="wra-error"
        >
          <template #custom-icon>
            <WraIcon :icon="icon" fill="var(--color-wra-red)" />
          </template>
          <div>
            <div class="pb-5 font-bold text-[20px]">There is a problem</div>
            <ul class="validation-list">
              <li><a href="#" class="main-validation-link">Enter your first name</a></li>
              <li><a href="#" class="main-validation-link">Enter your last name</a></li>
            </ul>
          </div>
        </WraValidationTooltip>
      `
    };
  },
  parameters: {
    docs: {
      source: {
        code: `
<WraValidationTooltip
  role="alert"
  type="wra-error"
>
  <template #custom-icon>
    <WraIcon :icon="mdiAlert" fill="var(--color-wra-red)" />
  </template>
  <div>
    <div class="pb-5 font-bold text-[20px]">There is a problem</div>
    <ul class="validation-list">
      <li><a href="#" class="main-validation-link">Enter your first name</a></li>
      <li><a href="#" class="main-validation-link">Enter your last name</a></li>
    </ul>
  </div>
</WraValidationTooltip>

<style>
.main-validation-link {
  color: black;
  font-weight: normal;
}

.validation-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.validation-list li:not(:last-child) {
  margin-bottom: 4px;
}
</style>
        `
      }
    }
  }
};
