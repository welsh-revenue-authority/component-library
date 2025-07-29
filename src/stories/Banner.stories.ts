import type { Meta, StoryObj } from "@storybook/vue3";
import WraBanner from "../components/Banner.vue";
import WraButton from "../components/Button.vue";

const meta: Meta<typeof WraBanner> = {
  title: "Feedback/Banner",
  component: WraBanner,
  tags: ["autodocs"]
};
export default meta;

type BannerProps = InstanceType<typeof WraBanner>["$props"];
type Story = StoryObj<BannerProps>;

export const Default: Story = {
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
