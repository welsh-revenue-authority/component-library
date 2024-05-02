import WraBanner from "../components/Banner.vue";
import WraButton from "../components/Button.vue";

export default {
  title: "Feedback/Banner",
  component: WraBanner,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    default: "This is a banner",
    hiddenPrint: false
  }
};

export const CookiesExample = {
  args: {
    default:
      "We use cookies to collect information about how you use this website. We use this information to improve our services.",
    actions: `
      <wra-button label="Accept cookies" :outlined="true"  />
      <wra-button label="Change cookie settings" :outlined="true" />
    `
  },
  // Process for putting other components in slots in storybook
  // Would not recommend
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
    <wra-button label="Accept cookies" :outlined="true" />
    <wra-button label="Change cookie settings" :outlined="true" />
  </template>
</wra-banner>
        `
      }
    }
  }
};
