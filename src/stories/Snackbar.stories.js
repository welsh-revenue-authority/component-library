import WraSnackBar from "../components/Snackbar.vue";

export default {
  title: "All/Snackbar",
  component: WraSnackBar,
  tags: ["autodocs"],
  argTypes: {
    timeout: {
      control: {
        type: "number",
        min: 0,
        step: 100,
      },
    },
    borderColor: {
      control: {
        type: "radio",
      },
      options: ["default", "red", "green", "yellow", "blue"],
    },
    default: {
      description: "Slot to override the default label HTML content",
      control: {
        type: "text",
      },
    },
  },
  decorators: [
    () => ({
      template: "<div style='margin-top: 100px'><story /></div>",
    }),
  ],
};

export const Default = {
  args: {
    label: "Snackbar",
    visible: true,
  },
};

export const TimeOut4Seconds = {
  args: {
    label: "4 second timer",
    timeout: 4000,
    visible: true,
  },
};

export const NoCloseButton = {
  args: {
    label: "No close button with 10 second timer",
    timeout: 10000,
    showClose: false,
    visible: true,
  },
};
