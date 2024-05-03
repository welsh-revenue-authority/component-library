import WraSnackBar from "../components/Snackbar.vue";

export default {
  title: "Feedback/Snackbar",
  component: WraSnackBar,
  tags: ["autodocs"],
  argTypes: {
    timeout: {
      control: {
        type: "number",
        min: 0,
        step: 100
      }
    },
    type: {
      control: {
        type: "radio"
      },
      options: ["wra-info", "wra-success", "wra-warning", "wra-error"]
    },
    default: {
      description: "Slot to override the default label HTML content",
      control: {
        type: "text"
      }
    }
  },
  decorators: [
    () => ({
      template: "<div style='margin-top: 100px'><story /></div>"
    })
  ]
};

export const Info = {
  args: {
    label: "This is an info snackbar",
    visible: true,
    type: "wra-info"
  }
};

export const Success = {
  args: {
    label: "This is a success snackbar",
    visible: true,
    type: "wra-success"
  }
};

export const Warning = {
  args: {
    label: "This is a warning snackbar",
    visible: true,
    type: "wra-warning"
  }
};

export const Error = {
  args: {
    label: "This is an error snackbar",
    visible: true,
    type: "wra-error"
  }
};

export const NoCloseButton = {
  args: {
    label: "Snackbar with no close button",
    showClose: false,
    visible: true
  }
};
