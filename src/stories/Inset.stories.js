import WraInset from "../components/Inset.vue";

export default {
  title: "Containment/Inset",
  component: WraInset,
  tags: ["autodocs"],
  argTypes: {
    colour: {
      control: {
        type: "radio"
      },
      options: [
        "wra-revenue",
        "wra-charcoal",
        "wra-red",
        "wra-blue",
        "wra-green",
        "wra-yellow"
      ]
    }
  }
};

export const Default = {
  args: {
    default: "This is an inset"
  }
};

export const CharcoalInset = {
  args: {
    default: "This is a charcoal inset",
    colour: "wra-charcoal"
  }
};

export const RedInset = {
  args: {
    default: "This is a red inset",
    colour: "wra-red"
  }
};

export const BlueInset = {
  args: {
    default: "This is a blue inset",
    colour: "wra-blue"
  }
};

export const GreenInset = {
  args: {
    default: "This is a green inset",
    colour: "wra-green"
  }
};

export const YellowInset = {
  args: {
    default: "This is a yellow inset",
    colour: "wra-yellow"
  }
};
