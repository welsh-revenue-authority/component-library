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
        "Array of navigation links. Each link should have a label and href. If more than 3, burger menu will be displayed"
    },
    hiddenPrint: {
      control: "boolean",
      description:
        "If true, the service bar will be hidden when printing the page"
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
      { label: "Navigation link", href: "#" },
      { label: "Navigation link", href: "#" },
      { label: "Navigation link", href: "#" }
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
      { label: "Navigation link", href: "#" },
      { label: "Navigation link", href: "#" },
      { label: "Navigation link", href: "#" },
      { label: "Navigation link", href: "#" }
    ],
    hiddenPrint: false
  }
};
