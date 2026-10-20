import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraServiceLogo from "../components/ServiceLogo.vue";
import WraLogoFile from "./assets/wra-logo-english.svg";
import WgLogoFile from "./assets/wg-logo.svg";
import { expect, within } from "storybook/test";

const meta: Meta<typeof WraServiceLogo> = {
  title: "Images & Icons/ServiceLogo",
  component: WraServiceLogo,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof WraServiceLogo>;

const wraImage = {
  src: WraLogoFile
};

const wgImage = {
  src: WgLogoFile
};

export const WRA: Story = {
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByRole("img")).toBeVisible();
  },
  args: {
    label: "Go to the main Welsh Revenue Authority site",
    alt: "Welsh Revenue Authority Logo",
    serviceLogo: wraImage.src,
    href: "https://gov.wales/welsh-revenue-authority",
    height: "60px"
  }
};

export const WG: Story = {
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByRole("img")).toBeVisible();
  },
  args: {
    label: "Go to the main Welsh Government site",
    alt: "Welsh Government Logo",
    serviceLogo: wgImage.src,
    href: "https://gov.wales/",
    height: "80px"
  }
};
