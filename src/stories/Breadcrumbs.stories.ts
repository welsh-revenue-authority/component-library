import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Breadcrumbs from "../components/Breadcrumbs.vue";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  argTypes: {}
};
export default meta;

type BreadcrumbsProps = InstanceType<typeof Breadcrumbs>["$props"];
type Story = StoryObj<BreadcrumbsProps>;

export const Default: Story = {
  args: {
    items: [
      { title: "Dashboard", disabled: false, href: "." },
      { title: "Link 1", disabled: false, href: "." },
      { title: "Link 2", disabled: true, href: "." }
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

export const replaceDivider: Story = {
  args: {
    items: [
      { title: "Dashboard", disabled: false, href: "." },
      { title: "Link 1", disabled: false, href: "." },
      { title: "Link 2", disabled: true, href: "." }
    ]
  },
  render: (args) => ({
    components: { Breadcrumbs },
    setup() {
      return { args };
    },
    template: `
      <Breadcrumbs v-bind="args">
        <template #divider> - </template>
      </Breadcrumbs>
    `
  }),
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

export const replaceContent: Story = {
  args: {
    items: [
      { title: "Dashboard", disabled: false, href: "." },
      { title: "Link 1", disabled: false, href: "." },
      { title: "Link 2", disabled: true, href: "." }
    ]
  },
  render: (args) => ({
    components: { Breadcrumbs },
    setup() {
      return { args };
    },
    template: `
      <Breadcrumbs v-bind="args">
        <template #default> Link </template>
      </Breadcrumbs>
    `
  }),
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

export const customRouterLink: Story = {
  args: {
    items: [
      { title: "Dashboard", to: { name: "dashboard" }, disabled: false },
      { title: "Link 1", to: { name: "link1" }, disabled: false },
      { title: "Link 2", to: { name: "link2" }, disabled: true }
    ]
  },
  render: (args) => ({
    components: { Breadcrumbs },
    setup() {
      return { args };
    },
    template: `
      <Breadcrumbs v-bind="args">
        <template #link="{ to, title, disabled }">
          <RouterLink :to="to" :class="{ 'disabled-link': disabled }">{{ title }}</RouterLink>
        </template>
      </Breadcrumbs>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<WraBreadcrumbs :items="items">
  <template #link="{ to, title, disabled }">
    <RouterLink :to="to" :class="{ 'disabled-link': disabled }">{{ title }}</RouterLink>
  </template>
</WraBreadcrumbs>
        `
      }
    }
  }
};
