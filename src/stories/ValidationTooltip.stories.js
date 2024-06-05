import WraValidationTooltip from "../components/ValidationTooltip.vue";

export default {
  title: "Containment/ValidationTooltip",
  component: WraValidationTooltip,
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
