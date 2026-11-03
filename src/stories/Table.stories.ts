import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, waitFor, within } from "storybook/test";
import WraTable from "../components/Table.vue";

const meta: Meta<typeof WraTable> = {
  title: "Data & Display/Table",
  component: WraTable,
  argTypes: {
    caption: {
      control: "text",
      description: "The caption text displayed above the table."
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
<p style="margin-bottom: 0px">
  <b>Column Alignment</b>: Aligns table column based on each header's <b>align property</b>, defaulting to left alignment if unspecified.
</p>
<p style="margin-top: 0px">
  <b>e.g.</b> { key: "rate", title: "Percentage rate (%)", <b>align: "right"</b> }
</p>

<p style="margin-bottom: 0px">
  <b>Column Width</b>: Sets the width of the table column based on each header's <b>width property</b>, defaulting to auto if unspecified.
</p>
<p style="margin-top: 0px">
  <b>e.g.</b> { key: "calories", title: "Calories", <b>width: 200</b> }
</p>

<p style="margin-bottom: 0px">
  <b>Row Styling</b>: Applies bold styling to rows where the item's <b>bold property</b> is true.
</p>
<p style="margin-top: 0px">
  <b>e.g.</b> { description: "Above 225,000 and up to 400,000", rate: 6, amount: 175000, tax: 10500, <b>bold: true</b> }
</p>
        `
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof WraTable>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const regularTable = canvasElement.querySelector("#regular") as HTMLElement;
    const table = within(regularTable);
    await expect(regularTable).toBeVisible();
    await expect(table.getByText("Table caption")).toBeVisible();
    await expect(table.getByText("Up to 225,000")).toBeVisible();
    await expect(table.getByText("10000")).toBeVisible();
  },
  args: {
    caption: "Table caption",
    headers: [
      { key: "description", title: "Purchase price bands (£)" },
      { key: "rate", title: "Percentage rate (%)", align: "right" },
      { key: "amount", title: "Amount (£)", align: "right" },
      { key: "tax", title: "Tax due (£)", align: "right" }
    ],
    items: [
      { id: 1, description: "Up to 225,000", rate: 0, amount: 225000, tax: 0 },
      {
        id: 2,
        description: "Above 225,000 and up to 400,000",
        rate: 6,
        amount: 175000,
        tax: 10500
      },
      {
        id: 3,
        description: "Above 400,000 and up to 750,000",
        rate: 7.5,
        amount: 10000,
        tax: 7500
      },
      {
        id: 4,
        description: "Above 750,000 and up to 1,500,000",
        rate: 10,
        amount: 0,
        tax: 0
      },
      { id: 5, description: "Above 1,500,000", rate: 12, amount: 0, tax: 0 }
    ]
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-table
  caption="Table caption"
  :headers="headers"
  :items="items"
></wra-table>
        `
      }
    }
  }
};

export const Mobile: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    await waitFor(() =>
      expect(canvasElement.querySelector("#pivoted")).toBeVisible()
    );
    await expect(canvasElement.querySelector("#regular")).not.toBeVisible();
  },
  globals: { viewport: { value: "mobile1", isRotated: false } }
};

export const InheritBackground: Story = {
  play: async ({ canvasElement }) => {
    const regularTable = canvasElement.querySelector("#regular") as HTMLElement;
    const table = within(regularTable);
    await expect(regularTable).toBeVisible();
    await expect(table.getByText("10000")).toBeVisible();
  },
  args: {
    caption: "Table caption",
    inheritBackground: true,
    headers: [
      { key: "description", title: "Purchase price bands (£)" },
      { key: "rate", title: "Percentage rate (%)", align: "right" },
      { key: "amount", title: "Amount (£)", align: "right" },
      { key: "tax", title: "Tax due (£)", align: "right" }
    ],
    items: [
      { id: 1, description: "Up to 225,000", rate: 0, amount: 225000, tax: 0 },
      {
        id: 2,
        description: "Above 225,000 and up to 400,000",
        rate: 6,
        amount: 175000,
        tax: 10500
      },
      {
        id: 3,
        description: "Above 400,000 and up to 750,000",
        rate: 7.5,
        amount: 10000,
        tax: 7500
      },
      {
        id: 4,
        description: "Above 750,000 and up to 1,500,000",
        rate: 10,
        amount: 0,
        tax: 0
      },
      { id: 5, description: "Above 1,500,000", rate: 12, amount: 0, tax: 0 }
    ]
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-table
  caption="Table caption"
  :headers="headers"
  :items="items"
  inherit-background
></wra-table>
        `
      }
    }
  }
};

export const BoldRows: Story = {
  play: async ({ canvasElement }) => {
    const regularTable = canvasElement.querySelector("#regular") as HTMLElement;
    const table = within(regularTable);
    await expect(regularTable).toBeVisible();
    await expect(table.getByText("Up to 225,000")).toBeVisible();
  },
  args: {
    caption: "Table caption",
    inheritBackground: true,
    headers: [
      { key: "description", title: "Purchase price bands (£)" },
      { key: "rate", title: "Percentage rate (%)", align: "right" },
      { key: "amount", title: "Amount (£)", align: "right" },
      { key: "tax", title: "Tax due (£)", align: "right" }
    ],
    items: [
      { id: 1, description: "Up to 225,000", rate: 0, amount: 225000, tax: 0 },
      {
        id: 2,
        description: "Above 225,000 and up to 400,000",
        rate: 6,
        amount: 175000,
        tax: 10500,
        bold: true
      },
      {
        id: 3,
        description: "Above 400,000 and up to 750,000",
        rate: 7.5,
        amount: 10000,
        tax: 7500
      },
      {
        id: 4,
        description: "Above 750,000 and up to 1,500,000",
        rate: 10,
        amount: 0,
        tax: 0,
        bold: true
      },
      { id: 5, description: "Above 1,500,000", rate: 12, amount: 0, tax: 0 }
    ]
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-table
  caption="Table caption"
  :headers="headers"
  :items="items"
  inherit-background
></wra-table>
        `
      }
    }
  }
};
