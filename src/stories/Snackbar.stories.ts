import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraSnackBar from "../components/Snackbar.vue";
import { expect, userEvent, within } from "storybook/test";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const snackbar = canvas.getByText("This is an info snackbar");
    await expect(snackbar).toBeVisible();
    await userEvent.click(canvas.getByRole("button", { name: /close/i }));
    await expect(snackbar).not.toBeInTheDocument();
  },
  args: {
    label: "This is an info snackbar",
    visible: true,
    type: "wra-info"
  }
};

export const Success: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const snackbar = canvas.getByText("This is a success snackbar");
    await expect(snackbar).toBeVisible();
    await userEvent.click(canvas.getByRole("button", { name: /close/i }));
    await expect(snackbar).not.toBeInTheDocument();
  },
  args: {
    label: "This is a success snackbar",
    visible: true,
    type: "wra-success"
  }
};

export const Warning: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const snackbar = canvas.getByText("This is a warning snackbar");
    await expect(snackbar).toBeVisible();
    await userEvent.click(canvas.getByRole("button", { name: /close/i }));
    await expect(snackbar).not.toBeInTheDocument();
  },
  args: {
    label: "This is a warning snackbar",
    visible: true,
    type: "wra-warning"
  }
};

export const Error: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const snackbar = canvas.getByText("This is an error snackbar");
    await expect(snackbar).toBeVisible();
    await userEvent.click(canvas.getByRole("button", { name: /close/i }));
    await expect(snackbar).not.toBeInTheDocument();
  },
  args: {
    label: "This is an error snackbar",
    visible: true,
    type: "wra-error"
  }
};

export const NoCloseButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText("Snackbar with no close button")
    ).toBeVisible();
    await expect(
      canvas.queryByRole("button", { name: /close/i })
    ).not.toBeInTheDocument();
  },
  args: {
    label: "Snackbar with no close button",
    showClose: false,
    visible: true
  }
};
