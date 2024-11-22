import FileUpload from "../components/FileUpload.vue";

export default {
  title: "Form Inputs & Controls/FileUpload",
  component: FileUpload,
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

export const Default = {
  args: {
    label: "File upload label",
    buttonText: "Upload file",
    error: false
  }
};

export const CustomButtonColour = {
  args: {
    label: "File upload label",
    buttonText: "Upload file",
    error: false,
    backgroundColor: "wra-blue"
  }
};

export const Error = {
  args: {
    label: "File upload label",
    buttonText: "Upload file",
    error: true,
    errorMessage: "File is too large"
  }
};
