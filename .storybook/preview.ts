import "../src/styles/global.css";
import "../src/styles/tailwind.css";

const preview = {
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
    }
  }
};

export default preview;
