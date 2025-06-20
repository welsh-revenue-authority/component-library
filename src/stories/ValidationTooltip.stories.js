import WraValidationTooltip from "../components/ValidationTooltip.vue";
import WraIcon from "../components/Icon.vue";
import * as mdiIcons from "@mdi/js";

export default {
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
      options: ["wra-info", "wra-success", "wra-warning", "wra-error"]
    }
  }
};

export const Info = {
  args: {
    type: "wra-info",
    default: "This is an info message"
  },
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

export const Success = {
  args: {
    type: "wra-success",
    default: "This is a success message"
  },
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

export const Warning = {
  args: {
    type: "wra-warning",
    default: "This is a warning message"
  },
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

export const Error = {
  args: {
    type: "wra-error",
    default: "This is an error message"
  },
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

export const CustomIconInfo = {
  args: {
    type: "wra-info",
    default: "This is an info message",
    icon: "mdiInformation",
    fill: "var(--color-wra-blue)"
  },
  render: (args) => ({
    components: { WraValidationTooltip, WraIcon },
    computed: { icon: () => mdiIcons[args.icon] },
    setup() {
      return { args };
    },
    template: `
      <WraValidationTooltip v-bind="args">
        <template #custom-icon>
          <wra-icon v-bind="args" :icon="icon" />
        </template>
        This is an info message
      </WraValidationTooltip>
      `
  }),
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

export const CustomIconError = {
  args: {
    type: "wra-error",
    default: "This is an error message",
    icon: "mdiAlert",
    fill: "var(--color-wra-red)"
  },
  render: (args) => ({
    components: { WraValidationTooltip, WraIcon },
    computed: { icon: () => mdiIcons[args.icon] },
    setup() {
      return { args };
    },
    template: `
      <WraValidationTooltip v-bind="args">
        <template #custom-icon>
          <wra-icon v-bind="args" :icon="icon" />
        </template>
        This is an error message
      </WraValidationTooltip>
      `
  }),
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
