import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraSnackBar from "../components/Snackbar.vue";

const meta: Meta<typeof WraSnackBar> = {
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
    }
  },
  decorators: [
    () => ({
      template: "<div style='margin-top: 100px'><story /></div>"
    })
  ]
};

export default meta;

type Story = StoryObj<typeof WraSnackBar>;

export const Info: Story = {
  args: {
    label: "This is an info snackbar",
    visible: true,
    type: "wra-info"
  }
};

export const Success: Story = {
  args: {
    label: "This is a success snackbar",
    visible: true,
    type: "wra-success"
  }
};

export const Warning: Story = {
  args: {
    label: "This is a warning snackbar",
    visible: true,
    type: "wra-warning"
  }
};

export const Error: Story = {
  args: {
    label: "This is an error snackbar",
    visible: true,
    type: "wra-error"
  }
};

export const NoCloseButton: Story = {
  args: {
    label: "Snackbar with no close button",
    showClose: false,
    visible: true
  }
};
