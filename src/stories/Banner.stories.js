import WraBanner from "../components/Banner.vue";
import WraButton from "../components/Button.vue";

export default {
  title: "All/Banner",
  component: WraBanner,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    text: "This is a banner",
    hiddenPrint: false,
  },
};

export const CookiesExample = {
  args: {
    text: "We use cookies to collect information about how you use this website. We use this information to improve our services.",
    actions: `
      <wra-button label="Accept cookies" :outlined="true"  />
      <wra-button label="Change cookie settings" :outlined="true" />
    `,
  },
  // Process for putting other components in slots in storybook
  // Would not recommend
  render: (args) => ({
    components: { WraBanner, WraButton },
    setup() {
      return args;
    },
    template: `
      <wra-banner text="${args.text}">
        <template v-slot:actions v-if="${"actions" in args}">
          ${args.actions}
        </template>
      </wra-banner>
    `,
  }),
  // Make source code box accurate
  parameters: {
    docs: {
      source: {
        code: `
<wra-banner text="We use cookies to collect information about how you use this website. We use this information to improve our services.">
  <template #actions>
    <wra-button label="Accept cookies" :outlined="true" />
    <wra-button label="Change cookie settings" :outlined="true" />
  </template>
</wra-banner>
        `,
      },
    },
  },
};
