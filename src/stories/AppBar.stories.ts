import type { Meta, StoryObj } from "@storybook/vue3";
import WraAppBar from "../components/AppBar.vue";
import WraButton from "../components/Button.vue";
import WraServiceLogo from "../components/ServiceLogo.vue";
import WgLogoFile from "./assets/wg-logo-white.svg";

import { Small } from "./Button.stories";

const wgImage = {
  src: WgLogoFile as string
};

export default {
  title: "Navigation/AppBar",
  component: WraAppBar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      table: {
        disable: true
      }
    },
    backgroundColor: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

type AppBarProps = {
  hiddenPrint?: boolean;
};

export const Default: StoryObj<AppBarProps> = {
  args: {
    hiddenPrint: false
  },
  render: (args) => ({
    components: { WraAppBar, WraServiceLogo, WraButton },
    setup() {
      const buttonProps = {
        backgroundColor: "wra-white",
        size: Small.args?.size
      };
      return { args, buttonProps };
    },
    template: `<WraAppBar v-bind="args" style="display: flex; align-items: center;">
      <WraServiceLogo
        label="Go to the main Welsh Government site"
        alt="Welsh Government Logo"
        serviceLogo="${wgImage.src}"
        href="https://gov.wales/"
        height="34px"
      />
      <WraButton
        v-bind="buttonProps"
        style="margin-left: auto;"
      >
        Cymraeg
      </WraButton>
    </WraAppBar>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-app-bar>
  <wra-service-logo
    label="Go to the main Welsh Government site"
    alt="Welsh Government Logo"
    service-logo="${wgImage.src}"
    href="https://gov.wales/"
    height="34px"
  ></wra-service-logo>
  <wra-button
    backgroundColor="wra-white"
    size="small"
  >
    Cymraeg
  </wra-button>
</wra-app-bar>
        `
      }
    }
  }
};
