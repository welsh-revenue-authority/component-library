import WraHeader from "../components/Header.vue";

export default {
  title: "All/Header",
  component: WraHeader,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"]
    }
  }
};

export const Header1 = {
  args: {
    size: "h1",
    default: "This is a H1 header"
  }
};

export const Header2 = {
  args: {
    size: "h2",
    default: "This is a H2 header"
  }
};

export const Header3 = {
  args: {
    size: "h3",
    default: "This is a H3 header"
  }
};

export const Header4 = {
  args: {
    size: "h4",
    default: "This is a H4 header"
  }
};

export const Header5 = {
  args: {
    size: "h5",
    default: "This is a H5 header"
  }
};

export const Header6 = {
  args: {
    size: "h6",
    default: "This is a H6 header"
  }
};
