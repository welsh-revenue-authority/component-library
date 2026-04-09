import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ServiceBar from "../components/ServiceBar.vue";

const meta = {
  title: "Navigation/ServiceBar",
  component: ServiceBar,
  tags: ["autodocs"],
  argTypes: {
    serviceName: {
      control: "text",
      description: "The name of the service to display"
    },
    navigationLinks: {
      control: "object",
      description:
        "Array of navigation links. Each link should have a label, href, and aria label. If more than 3, burger menu will be displayed"
    },
    hiddenPrint: {
      control: "boolean",
      description:
        "If true, the service bar will be hidden when printing the page"
    },
    showNavLinks: {
      control: "boolean",
      description: "Show navigation links div"
    }
  }
} satisfies Meta<typeof ServiceBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ServiceBar with service name and 3 or less navigation links (no burger menu)
 */
export const Default: Story = {
  args: {
    serviceName: "Service name",
    navigationLinks: [
      { label: "Navigation link", href: "#", ariaLabel: "Navigation link 1" },
      { label: "Navigation link", href: "#", ariaLabel: "Navigation link 2" },
      { label: "Navigation link", href: "#", ariaLabel: "Navigation link 3" }
    ],
    hiddenPrint: false
  }
};

/**
 * ServiceBar with service name and 4 or more navigation links (shows burger menu)
 */
export const BurgerMenu: Story = {
  args: {
    serviceName: "Service name",
    navigationLinks: [
      { label: "Navigation link", href: "#", ariaLabel: "Navigation link 1" },
      { label: "Navigation link", href: "#", ariaLabel: "Navigation link 2" },
      { label: "Navigation link", href: "#", ariaLabel: "Navigation link 3" },
      { label: "Navigation link", href: "#", ariaLabel: "Navigation link 4" }
    ],
    hiddenPrint: false
  }
};

/**
 * ServiceBar with custom slot content for navigation links
 */
export const WithSlot: Story = {
  args: {
    serviceName: "Service name",
    navigationLinks: [],
    hiddenPrint: false
  },
  render: (args) => ({
    components: { ServiceBar },
    setup() {
      return { args };
    },
    template: `
      <ServiceBar v-bind="args">
        <a href="#home" aria-label="Home">Home</a>
        <a href="#about" aria-label="About">About</a>
        <a href="#services" aria-label="Services">Services</a>
      </ServiceBar>
    `
  })
};

/**
 * ServiceBar with custom slot content for navigation links
 */
export const BurgerMenuDoesNotAppearGivenShowNavLinksFalse: Story = {
  args: {
    serviceName: "Service name",
    navigationLinks: [
      { label: "Navigation link", href: "#", ariaLabel: "Navigation link 1" },
    ],
    hiddenPrint: false,
    showNavLinks: false
  },
  render: (args) => ({
    components: { ServiceBar },
    setup() {
      return { args };
    },
    template: `
      <ServiceBar v-bind="args">
      </ServiceBar>
    `
  })
}


/**
 * ServiceBar with custom slot content for navigation links
 */
export const BurgerMenuDoesNotAppearGivenNoLinks: Story = {
  args: {
    serviceName: "Service name",
    navigationLinks: [
    ],
    hiddenPrint: false
  },
  render: (args) => ({
    components: { ServiceBar },
    setup() {
      return { args };
    },
    template: `
      <ServiceBar v-bind="args">
      </ServiceBar>
    `
  })
}

/**
 * ServiceBar with custom slot content in burger menu mode (4+ links)
 */
export const WithSlotBurgerMenu: Story = {
  args: {
    serviceName: "Service name",
    navigationLinks: [
      { label: "Placeholder 1", href: "#", ariaLabel: "Placeholder 1" },
      { label: "Placeholder 2", href: "#", ariaLabel: "Placeholder 2" },
      { label: "Placeholder 3", href: "#", ariaLabel: "Placeholder 3" },
      { label: "Placeholder 4", href: "#", ariaLabel: "Placeholder 4" }
    ],
    hiddenPrint: false
  },
  render: (args) => ({
    components: { ServiceBar },
    setup() {
      return { args };
    },
    template: `
      <ServiceBar v-bind="args">
        <a href="#home" aria-label="Home">Custom Home</a>
        <a href="#about" aria-label="About">Custom About</a>
        <a href="#services" aria-label="Services">Custom Services</a>
        <a href="#contact" aria-label="Contact">Custom Contact</a>
      </ServiceBar>
    `
  })
};
