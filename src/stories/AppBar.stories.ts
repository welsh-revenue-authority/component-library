import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, userEvent, within } from "storybook/test";
import WraAppBar from "../components/AppBar.vue";
import WraButton from "../components/Button.vue";
import WraServiceLogo from "../components/ServiceLogo.vue";
import WgLogoFile from "./assets/wg-logo-white.svg";
import { Small } from "./Button.stories";

const wgImage = {
  src: WgLogoFile
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const languageButton = canvas.getByRole("button", { name: "Cymraeg" });
    await expect(languageButton).toBeVisible();
    const logo = canvas.getByRole("link");
    await expect(canvasElement.querySelector(".wra-app-bar")).toHaveStyle({
      backgroundColor: "rgb(50, 50, 50)"
    });
    await expect(logo).toBeVisible();
    await expect(languageButton).toBeVisible();
    await expect(languageButton).toHaveStyle({
      backgroundColor: "rgb(255, 255, 255)"
    });
    await userEvent.click(languageButton);
    await expect(languageButton).toHaveStyle({
      backgroundColor: "rgb(255, 213, 48)"
    });
  },
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
