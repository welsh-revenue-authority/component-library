import WraExpansionPanel from "../components/ExpansionPanel.vue";

export default {
  title: "Containment/ExpansionPanel",
  component: WraExpansionPanel,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "color"
    }
  }
};

export const Default = {
  args: {
    title: "Expansion panel title",
    ariaTitle: "expansion-panel-title"
  },
  render: (args) => ({
    components: { WraExpansionPanel },
    setup() {
      return { args };
    },
    template: `<WraExpansionPanel title='{{ args.title }}' aria-title='{{ args.aria-title }}' v-bind="args">
        <div>
          <p style="margin-block-start: 0px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis
            aliquam faucibus purus in. Ornare suspendisse sed nisi lacus sed viverra tellus.
            Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Proin sed
            libero enim sed faucibus. Diam quis enim lobortis scelerisque fermentum dui faucibus
            in. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ut consequat semper
            viverra nam libero justo laoreet.
          </p>
          <p>
            Eu lobortis elementum nibh tellus molestie. Gravida cum sociis natoque penatibus et
            magnis. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.
            Ultrices dui sapien eget mi proin sed. Phasellus faucibus scelerisque eleifend donec
            pretium.Mattis molestie a iaculis at erat pellentesque adipiscing. Duis ut diam quam
            nulla porttitor massa. Maecenas sed enim ut sem viverra aliquet eget sit. Venenatis
            urna cursus eget nunc scelerisque. Tincidunt dui ut ornare lectus. Accumsan in nisl
            nisi scelerisque eu ultrices.
          </p>
        </div>
      </WraExpansionPanel>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-expansion-panel title="Expansion panel title" aria-title="expansion-panel-title">
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis
      aliquam faucibus purus in. Ornare suspendisse sed nisi lacus sed viverra tellus.
      Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Proin sed
      libero enim sed faucibus. Diam quis enim lobortis scelerisque fermentum dui faucibus
      in. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ut consequat semper
      viverra nam libero justo laoreet.
    </p>
    <p>
      Eu lobortis elementum nibh tellus molestie. Gravida cum sociis natoque penatibus et
      magnis. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.
      Ultrices dui sapien eget mi proin sed. Phasellus faucibus scelerisque eleifend donec
      pretium.Mattis molestie a iaculis at erat pellentesque adipiscing. Duis ut diam quam
      nulla porttitor massa. Maecenas sed enim ut sem viverra aliquet eget sit. Venenatis
      urna cursus eget nunc scelerisque. Tincidunt dui ut ornare lectus. Accumsan in nisl
      nisi scelerisque eu ultrices.
    </p>
  </div>
</wra-expansion-panel>
        `
      }
    }
  }
};
