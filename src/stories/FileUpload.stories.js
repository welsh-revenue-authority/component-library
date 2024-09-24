import FileUpload from "../components/FileUpload.vue";

export default {
  title: "Form Inputs & Controls/FileUpload",
  component: FileUpload,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    label: "Upload a file",
    error: false
  }
};

export const Error = {
  args: {
    label: "Upload a file",
    error: true,
    errorMessage: "File is too large"
  }
};
