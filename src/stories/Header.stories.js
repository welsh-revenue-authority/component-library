import WraHeader from "../components/Header.vue";

export default {
  title: "Miscellaneous/Header",
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
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-header size="h1">
  This is a H1 header
</wra-header>
        `
      }
    }
  }
};

export const Header2 = {
  args: {
    size: "h2",
    default: "This is a H2 header"
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-header size="h2">
  This is a H2 header
</wra-header>
        `
      }
    }
  }
};

export const Header3 = {
  args: {
    size: "h3",
    default: "This is a H3 header"
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-header size="h3">
  This is a H3 header
</wra-header>
        `
      }
    }
  }
};

export const Header4 = {
  args: {
    size: "h4",
    default: "This is a H4 header"
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-header size="h4"> 
  This is a H4 header
</wra-header>
        `
      }
    }
  }
};

export const Header5 = {
  args: {
    size: "h5",
    default: "This is a H5 header"
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-header size="h5">
  This is a H5 header
</wra-header>
        `
      }
    }
  }
};

export const Header6 = {
  args: {
    size: "h6",
    default: "This is a H6 header"
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-header size="h6">
  This is a H6 header
</wra-header>
        `
      }
    }
  }
};
