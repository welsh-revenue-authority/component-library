import WraServiceLogo from "../components/ServiceLogo.vue";
import WraLogoFile from "./assets/wra-logo-english.svg";
import WgLogoFile from "./assets/wg-logo.svg";

export default {
  title: "Images & Icons/ServiceLogo",
  component: WraServiceLogo,
  tags: ["autodocs"]
};

const wraImage = {
  src: WraLogoFile
};

const wgImage = {
  src: WgLogoFile
};

export const WRA = {
  args: {
    label: "Go to the main Welsh Revenue Authority site",
    alt: "Welsh Revenue Authority Logo",
    serviceLogo: wraImage.src,
    href: "https://gov.wales/welsh-revenue-authority"
  }
};

export const WG = {
  args: {
    label: "Go to the main Welsh Government site",
    alt: "Welsh Government Logo",
    serviceLogo: wgImage.src,
    href: "https://gov.wales/"
  }
};
