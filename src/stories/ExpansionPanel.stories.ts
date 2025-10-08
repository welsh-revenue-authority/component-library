import WraExpansionPanel from "../components/ExpansionPanel.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof WraExpansionPanel> = {
  title: "Containment/ExpansionPanel",
  component: WraExpansionPanel,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "color"
    },
    title: {
      description: "Title of the expansion panel."
    }
  }
};
export default meta;

export const Default: StoryObj<typeof WraExpansionPanel> = {
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

export const TitleSlot: StoryObj<typeof WraExpansionPanel> = {
  args: {
    ariaTitle: "expansion-panel-title-slot"
  },
  render: (args) => ({
    components: { WraExpansionPanel },
    setup() {
      return { args };
    },
    template: `
      <WraExpansionPanel v-bind="args">
        <template #title>
          <div>
            <span style="display:block;">Custom slot</span>
            <span style="display:block;">multi-line</span>
            <span style="display:block;">expansion panel title</span>
          </div>
        </template>
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
      </WraExpansionPanel>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-expansion-panel aria-title="expansion-panel-title-slot">
  <template #title>
    <div>
      <span>Custom slot</span>
      <span>multi-line</span>
      <span>expansion panel title</span>
    </div>
  </template>
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
