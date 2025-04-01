import WraCard from "../components/Card.vue";
import WraHeader from "../components/Header.vue";
import WraButton from "../components/Button.vue";

export default {
  title: "Containment/Card",
  component: WraCard,
  tags: ["autodocs"]
};

export const Default = {
  render: (args) => ({
    components: { WraCard, WraHeader, WraButton },
    setup() {
      return { args };
    },
    template: `
    <WraCard v-bind="args">
      <WraHeader size="h1">H1 Header</WraHeader>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis
        aliquam faucibus purus in. Ornare suspendisse sed nisi lacus sed viverra tellus.
        Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Proin sed
        libero enim sed faucibus. Diam quis enim lobortis scelerisque fermentum dui faucibus
        in. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ut consequat semper
        viverra nam libero justo laoreet.
      </p>
      <WraButton style="margin-top: 18px">Button</WraButton>
    </WraCard>`
  }),
  // Make source code box accurate
  parameters: {
    docs: {
      source: {
        code: `
<wra-card>
  <wra-header size="h1">H1 Header</wra-header>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis
    aliquam faucibus purus in. Ornare suspendisse sed nisi lacus sed viverra tellus.
    Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Proin sed
    libero enim sed faucibus. Diam quis enim lobortis scelerisque fermentum dui faucibus
    in. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ut consequat semper
    viverra nam libero justo laoreet.
  </p>
  <wra-button>Button</wra-button>
</wra-card>
        `
      }
    }
  }
};
