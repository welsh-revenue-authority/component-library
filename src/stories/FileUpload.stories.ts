import WraFileUpload from "../components/FileUpload.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

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
  args: {
    label: "File upload label",
    buttonText: "Upload file",
    error: false
  }
};

export const CustomButtonColour: StoryObj<typeof WraFileUpload> = {
  args: {
    label: "File upload label",
    buttonText: "Upload file",
    error: false,
    backgroundColor: "wra-blue"
  }
};

export const Error: StoryObj<typeof WraFileUpload> = {
  args: {
    label: "File upload label",
    buttonText: "Upload file",
    error: true,
    errorMessage: "File is too large"
  }
};
