import WraAppBar from "../components/AppBar.vue";
import WraButton from "../components/Button.vue";
import WraServiceLogo from "../components/ServiceLogo.vue";
import WgLogoFile from "./assets/wg-logo-white.svg";

import { Small } from "./Button.stories";

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
};

const wgImage = {
  src: WgLogoFile
};

export const Default = {
  args: {
    ...Small.args,
    backgroundColor: "wra-white"
  },
  render: (args) => ({
    components: { WraAppBar, WraServiceLogo, WraButton },
    setup() {
      return { args };
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
        v-bind="args"
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
