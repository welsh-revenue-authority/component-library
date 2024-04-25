import WraIcon from "../components/Icon.vue";
import { mdiAbacus } from "@mdi/js";
import { mdiAccessPoint } from "@mdi/js";
import { mdiSeal } from "@mdi/js";

export default {
  title: "All/Icon",
  component: WraIcon,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      options: [mdiAbacus, mdiAccessPoint, mdiSeal],
      control: {
        type: "radio",
        labels: {
          "M5 5H7V11H5V5M10 5H8V11H10V5M5 19H7V13H5V19M10 13H8V19H10V17H15V15H10V13M2 21H4V3H2V21M20 3V7H13V5H11V11H13V9H20V15H18V13H16V19H18V17H20V21H22V3H20Z":
            "mdiAbacus",
          "M4.93,4.93C3.12,6.74 2,9.24 2,12C2,14.76 3.12,17.26 4.93,19.07L6.34,17.66C4.89,16.22 4,14.22 4,12C4,9.79 4.89,7.78 6.34,6.34L4.93,4.93M19.07,4.93L17.66,6.34C19.11,7.78 20,9.79 20,12C20,14.22 19.11,16.22 17.66,17.66L19.07,19.07C20.88,17.26 22,14.76 22,12C22,9.24 20.88,6.74 19.07,4.93M7.76,7.76C6.67,8.85 6,10.35 6,12C6,13.65 6.67,15.15 7.76,16.24L9.17,14.83C8.45,14.11 8,13.11 8,12C8,10.89 8.45,9.89 9.17,9.17L7.76,7.76M16.24,7.76L14.83,9.17C15.55,9.89 16,10.89 16,12C16,13.11 15.55,14.11 14.83,14.83L16.24,16.24C17.33,15.15 18,13.65 18,12C18,10.35 17.33,8.85 16.24,7.76M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z":
            "mdiAccessPoint",
          "M20.39,19.37L16.38,18L15,22L11.92,16L9,22L7.62,18L3.61,19.37L6.53,13.37C5.57,12.17 5,10.65 5,9A7,7 0 0,1 12,2A7,7 0 0,1 19,9C19,10.65 18.43,12.17 17.47,13.37L20.39,19.37M7,9L9.69,10.34L9.5,13.34L12,11.68L14.5,13.33L14.33,10.34L17,9L14.32,7.65L14.5,4.67L12,6.31L9.5,4.65L9.67,7.66L7,9Z":
            "mdiSeal",
        },
      },
    },
    stroke: {
      control: {
        type: "color",
      },
    },
    fill: {
      control: {
        type: "color",
      },
    },
  },
  args: {
    icon: "mdiAbacus",
  },
  parameters: {
    docs: {
      description: {
        component: "Icon that displays Pictogrammers Material Design Icons",
      },
    },
  },
};

export const Default = {
  args: {
    icon: mdiAbacus,
  },
};
