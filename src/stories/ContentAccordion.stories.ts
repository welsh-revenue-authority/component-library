import WraContentAccordion from "../components/ContentAccordion.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof WraContentAccordion> = {
  title: "Containment/ContentAccordion",
  component: WraContentAccordion,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Title of the content accordion."
    }
  }
};
export default meta;

export const Default: StoryObj<typeof WraContentAccordion> = {
  args: {
    title: "Content accordion title",
    description: "This is the content accordion description",
    ariaTitle: "content-accordion-title",
    showText: "Show",
    hideText: "Hide"
  },
  render: (args) => ({
    components: { WraContentAccordion },
    setup() {
      return { args };
    },
    template: `<WraContentAccordion title='{{ args.title }}' description='{{ args.description }}' ariaTitle='{{ args.ariaTitle }}' showText='{{ args.showText }}' hideText='{{ args.hideText }}' v-bind="args">
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
      </WraContentAccordion>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-content-accordion 
  title="Content accordion title"
  description="This is the content accordion description"
  ariaTitle="content-accordion-title"
  showText="Show"
  hideText="Hide"
>
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
</wra-content-accordion>
        `
      }
    }
  }
};
