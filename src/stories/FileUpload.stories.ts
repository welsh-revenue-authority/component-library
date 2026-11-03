import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, userEvent, within } from "storybook/test";
import WraFileUpload from "../components/FileUpload.vue";

const meta: Meta<typeof WraFileUpload> = {
  title: "Form Inputs & Controls/FileUpload",
  component: WraFileUpload,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: {
        type: "radio"
      },
      options: ["wra-revenue", "wra-blue", "wra-red", "wra-green", "wra-white"]
    }
  }
};
export default meta;

export const Default: StoryObj<typeof WraFileUpload> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvasElement.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    await expect(canvas.getByText("No file chosen")).toBeVisible();
    await expect(
      canvas.getByRole("button", { name: /upload file/i })
    ).toHaveStyle({
      backgroundColor: "rgb(42, 34, 91)"
    });
    await userEvent.upload(
      input,
      new File(["test"], "wra-logo.jpg", { type: "image/jpeg" })
    );
    await expect(canvas.getByText("wra-logo.jpg")).toBeVisible();
  },
  args: {
    label: "File upload label",
    buttonText: "Upload file",
    error: false
  }
};

export const CustomButtonColour: StoryObj<typeof WraFileUpload> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvasElement.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    await expect(
      canvas.getByRole("button", { name: /upload file/i })
    ).toHaveStyle({
      backgroundColor: "rgb(3, 96, 166)"
    });
    await userEvent.upload(
      input,
      new File(["test"], "wra-logo.jpg", { type: "image/jpeg" })
    );
    await expect(canvas.getByText("wra-logo.jpg")).toBeVisible();
  },
  args: {
    label: "File upload label",
    buttonText: "Upload file",
    error: false,
    backgroundColor: "wra-blue"
  }
};

export const Error: StoryObj<typeof WraFileUpload> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvasElement.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    await expect(canvas.getByText("File is too large")).toBeVisible();
    await userEvent.upload(
      input,
      new File(["test"], "wra-logo.jpg", { type: "image/jpeg" })
    );
    await expect(canvas.getByText("wra-logo.jpg")).toBeVisible();
  },
  args: {
    label: "File upload label",
    buttonText: "Upload file",
    error: true,
    errorMessage: "File is too large"
  }
};
