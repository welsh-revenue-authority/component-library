import WraBanner from "../components/Banner.vue";
import WraButton from "../components/Button.vue";

export default {
  title: "Feedback/Banner",
  component: WraBanner,
  tags: ["autodocs"]
};

export const Default = {
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
  // Make source code box accurate
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

export const NewService = {
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
  // Make source code box accurate
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

export const CookiesExample = {
  args: {
    default:
      "We use cookies to collect information about how you use this website. We use this information to improve our services.",
    actions: `
      <wra-button size="small" outlined>Accept cookies</wra-button>
      <wra-button size="small" outlined>Change cookie settings</wra-button>
    `
  },
  // Process for putting other components in slots in storybook
  render: (args) => ({
    components: { WraBanner, WraButton },
    setup() {
      return args;
    },
    template: `
      <wra-banner>
        <template v-slot:default v-if="${"default" in args}">
          ${args.default}
        </template>
        <template v-slot:actions v-if="${"actions" in args}">
          ${args.actions}
        </template>
      </wra-banner>
    `
  }),
  // Make source code box accurate
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

export const Closable = {
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
  // Make source code box accurate
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
