import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraBanner from "../components/Banner.vue";
import WraButton from "../components/Button.vue";
import WraStatusTag from "../components/WraStatusTag.vue";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<typeof WraBanner> = {
  title: "Feedback/Banner",
  component: WraBanner,
  tags: ["autodocs"]
};
export default meta;

type BannerProps = InstanceType<typeof WraBanner>["$props"];
type Story = StoryObj<BannerProps>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Tell us what you think/i)).toBeVisible();
    await expect(canvas.getByRole("link")).toHaveAttribute("href");
  },
  render: (args) => ({
    components: { WraBanner },
    setup() {
      return { args };
    },
    template: `
    <WraBanner v-bind="args">
      Tell us what you think of this service by <a href=".">giving feedback</a>.
    </WraBanner>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-banner>
  Tell us what you think of this service by <a href=".">giving feedback</a>.
</wra-banner>
        `
      }
    }
  }
};

export const NewService: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/This is a new service/i)).toBeVisible();
    await expect(canvas.getByRole("link")).toHaveAttribute("href");
  },
  args: {
    newService: true
  },
  render: (args) => ({
    components: { WraBanner },
    setup() {
      return { args };
    },
    template: `
    <WraBanner v-bind="args">
      This is a new service. <a href=".">Give feedback</a> to help improve it.
    </WraBanner>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-banner new-service>
  Tell us what you think of this service by <a href=".">giving feedback</a>.
</wra-banner>
        `
      }
    }
  }
};

export const CookiesExample: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const accept = canvas.getByRole("button", { name: "Accept cookies" });
    const settings = canvas.getByRole("button", {
      name: "Change cookie settings"
    });
    await expect(accept).toBeVisible();
    await expect(settings).toBeVisible();
    await userEvent.click(accept);
    await expect(accept).toHaveStyle({ backgroundColor: "rgb(255, 213, 48)" });
    await userEvent.click(settings);
    await expect(settings).toHaveStyle({
      backgroundColor: "rgb(255, 213, 48)"
    });
  },
  render: () => ({
    components: { WraBanner, WraButton },
    template: `
      <wra-banner>
        <template #default>
          We use cookies to collect information about how you use this website. We use this information to improve our services.
        </template>
        <template #actions>
          <wra-button size="small" outlined>Accept cookies</wra-button>
          <wra-button size="small" outlined>Change cookie settings</wra-button>
        </template>
      </wra-banner>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-banner>
  <p>We use cookies to collect information about how you use this website. We use this information to improve our services.</p>
  <template #actions>
    <wra-button size="small" outlined>Accept cookies</wra-button>
    <wra-button size="small" outlined>Change cookie settings</wra-button>
  </template>
</wra-banner>
        `
      }
    }
  }
};

export const Closable: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const banner = canvas.getByText(/You've accepted all cookies/i);
    await expect(banner).toBeVisible();
    await userEvent.click(canvas.getByRole("button", { name: /close/i }));
    await expect(banner).not.toBeInTheDocument();
  },
  args: {
    closable: true
  },
  render: (args) => ({
    components: { WraBanner },
    setup() {
      return { args };
    },
    template: `
    <WraBanner v-bind="args">
      You've accepted all cookies. You can <a href=".">change your cookie settings</a> at any time.
    </WraBanner>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-banner closable>
  You've accepted all cookies. You can <a href=".">change your cookie settings</a> at any time.
</wra-banner>
        `
      }
    }
  }
};

export const WithBetaTag: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/This is a new service/i)).toBeVisible();
    await expect(canvas.getByText("Beta")).toBeVisible();
    await expect(canvas.getByRole("link")).toHaveAttribute("href");
  },
  args: {
    newService: true
  },
  render: (args) => ({
    components: { WraBanner, WraStatusTag },
    setup() {
      return { args };
    },
    template: `
    <WraBanner v-bind="args">
      <template #status-tag>
        <WraStatusTag variant="beta" label="Beta" />
      </template>
      This is a new service. <a href=".">Give feedback</a> to help improve it.
    </WraBanner>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-banner new-service>
  <template #status-tag>
    <wra-status-tag variant="beta" label="Beta" />
  </template>
  This is a new service. <a href=".">Give feedback</a> to help improve it.
</wra-banner>
        `
      }
    }
  }
};

export const WithAlphaTag: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/This is not a real service/i)).toBeVisible();
    await expect(canvas.getByText("Alpha")).toBeVisible();
  },
  args: {
    newService: true
  },
  render: (args) => ({
    components: { WraBanner, WraStatusTag },
    setup() {
      return { args };
    },
    template: `
    <WraBanner v-bind="args">
      <template #status-tag>
        <WraStatusTag variant="alpha" label="Alpha" />
      </template>
      This is not a real service.
    </WraBanner>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-banner new-service>
  <template #status-tag>
    <wra-status-tag variant="alpha" label="Alpha" />
  </template>
  This is not a real service.
</wra-banner>
        `
      }
    }
  }
};
