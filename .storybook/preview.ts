import "@/styles/global.css";
import "@/styles/tailwind.css";
import { Preview } from "@storybook/vue3-vite";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Resources",
          "Containment",
          "Navigation",
          "Form Inputs & Controls",
          "Data & Display",
          "Feedback",
          "Images & Icons",
          "Miscellaneous"
        ]
      }
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  }
};

export default preview;
