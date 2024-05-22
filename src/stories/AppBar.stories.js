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
    }
  }
};

const wgImage = {
  src: WgLogoFile
};

export const Default = {
  args: {
    ...Small.args
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
        style="background-color: #fff;
        color: #1f1f1f;
        margin-left: auto;
        padding: 8px 20px"
      >
        Cymraeg
      </WraButton>
    </WraAppBar>`
  })
};
