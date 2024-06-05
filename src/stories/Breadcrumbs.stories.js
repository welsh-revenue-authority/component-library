import Breadcrumbs from "../components/Breadcrumbs.vue";

export default {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  argTypes: {
    divider: {
      description:
        "Slot for the user to replace default divider behaviour with their components."
    },
    default: {
      description: "Slot to replace the default links with something else"
    }
  }
};

export const Default = {
  args: {
    items: [
      {
        title: "Dashboard",
        disabled: false,
        href: "."
      },
      {
        title: "Link 1",
        disabled: false,
        href: "."
      },
      {
        title: "Link 2",
        disabled: true,
        href: "."
      }
    ]
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-breadcrumbs :items="items" />
        `
      }
    }
  }
};

export const replaceDivider = {
  args: {
    items: [
      {
        title: "Dashboard",
        disabled: false,
        href: "."
      },
      {
        title: "Link 1",
        disabled: false,
        href: "."
      },
      {
        title: "Link 2",
        disabled: true,
        href: "."
      }
    ],
    divider: "-"
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-breadcrumbs :items="items">
  <template #divider> - </template>
</wra-breadcrumbs>
        `
      }
    }
  }
};

export const replaceContent = {
  args: {
    items: [
      {
        title: "Dashboard",
        disabled: false,
        href: "."
      },
      {
        title: "Link 1",
        disabled: false,
        href: "."
      },
      {
        title: "Link 2",
        disabled: true,
        href: "."
      }
    ],
    default: "Link"
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-breadcrumbs :items="items">
  <template #default> Link </template>
</wra-breadcrumbs>
        `
      }
    }
  }
};
