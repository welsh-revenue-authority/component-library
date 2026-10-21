import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraSkipLink from "../components/SkipLink.vue";
import WraCard from "../components/Card.vue";
import WraButton from "../components/Button.vue";
import { expect, within, userEvent } from "storybook/test";

const meta: Meta<typeof WraSkipLink> = {
  title: "Form Inputs & Controls/SkipLink",
  component: WraSkipLink,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof WraSkipLink>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByRole("button", { hidden: true })
    ).toHaveTextContent("Skip to main content");
  }
};

export const CustomText: Story = {
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByRole("button", { hidden: true })
    ).toHaveTextContent("Skip cookies");
  },
  args: { text: "Skip cookies" }
};

export const FullWidthSkiplink: Story = {
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByRole("button", { hidden: true })
    ).toHaveTextContent("Skip cookies");
  },
  args: { text: "Skip cookies", fullWidth: true }
};

export const SkipId: Story = {
  play: async ({ canvasElement }) => {
    const skipLink = within(canvasElement).getByRole("button", {
      hidden: true,
      name: "Skip to main content"
    });
    const container = canvasElement.querySelector("#container");
    await expect(skipLink).toHaveTextContent("Skip to main content");
    await expect(container).toBeVisible();
    await userEvent.click(skipLink);
    expect(document.activeElement).toBe(container);
  },
  args: { text: "Skip to main content", skipId: "container" },
  render: (args) => ({
    components: { WraSkipLink, WraCard, WraButton },
    setup() {
      return { args };
    },
    template: `
    <WraSkipLink v-bind="args"></WraSkipLink>
    <h1>H1 Header</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis
      aliquam faucibus purus in. Ornare suspendisse sed nisi lacus sed viverra tellus.
      Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Proin sed
      libero enim sed faucibus. Diam quis enim lobortis scelerisque fermentum dui faucibus
      in. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ut consequat semper
      viverra nam libero justo laoreet.
    </p>
    <WraCard id="container" style="margin-top: 20px;">
      <WraButton>Next</WraButton>
    </WraCard>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-skip-link :skip-id="id"></wra-skip-link>
<h1>H1 Header</h1>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis
  aliquam faucibus purus in. Ornare suspendisse sed nisi lacus sed viverra tellus.
  Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Proin sed
  libero enim sed faucibus. Diam quis enim lobortis scelerisque fermentum dui faucibus
  in. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ut consequat semper
  viverra nam libero justo laoreet.
</p>
<wra-card id="container">
  <wra-button>Next</wra-button>
</wra-card>
`
      },
      description: {
        story: `
Skip ID uses the HTML ID attribute to skip to a specific element on the page.
        `
      }
    }
  }
};
