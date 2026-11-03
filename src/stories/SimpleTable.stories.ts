import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, within } from "storybook/test";
import WraSimpleTable from "../components/SimpleTable.vue";

const meta: Meta<typeof WraSimpleTable> = {
  title: "Data & Display/SimpleTable",
  component: WraSimpleTable,
  tags: ["autodocs"],
  argTypes: {
    caption: {
      control: "text",
      description: "The caption text displayed above the table."
    }
  }
};
export default meta;

type Story = StoryObj<typeof WraSimpleTable>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("table")).toBeVisible();
    await expect(canvas.getByText("Table caption")).toBeVisible();
    await expect(canvas.getByText("Date")).toBeVisible();
    await expect(canvas.getByText("Amount")).toBeVisible();
    await expect(canvas.getByText("First 6 weeks")).toBeVisible();
    await expect(canvas.getByText("£109.80 per week")).toBeVisible();
    await expect(canvas.getByText("Next 33 weeks")).toBeVisible();
    await expect(canvas.getByText("£120.80 per week")).toBeVisible();
  },
  args: {
    caption: "Table caption",
    leftAlignHeaders: true
  },
  render: (args) => ({
    components: { WraSimpleTable },
    setup() {
      return { args };
    },
    template: `
    <wra-simple-table v-bind="args" > 
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>First 6 weeks</td>
          <td>£109.80 per week</td>
        </tr>
        <tr>
          <td>Next 33 weeks</td>
          <td>£120.80 per week</td>
        </tr>
        <tr>
          <td>Total estimated pay</td>
          <td>£4,282.20</td>
        </tr>
      </tbody>
    </wra-simple-table>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-simple-table caption="Table caption">
  <thead>
    <tr>
      <th>Date</th>
      <th>Amount</th> 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>First 6 weeks</td>
      <td>£109.80 per week</td>
    </tr>
    <tr>
      <td>Next 33 weeks</td>
      <td>£109.80 per week</td>
    </tr>
    <tr>
      <td>Total estimated pay</td>
      <td>£4,282.20</td>
    </tr>
  </tbody>
</wra-simple-tabl e>
        `
      }
    }
  }
};

export const InheritBackground: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("table")).toBeVisible();
    await expect(canvas.getByText("Total estimated pay")).toBeVisible();
    await expect(canvas.getByText("£4,282.20")).toBeVisible();
  },
  args: {
    caption: "Table caption",
    inheritBackground: true
  },
  render: (args) => ({
    components: { WraSimpleTable },
    setup() {
      return { args };
    },
    template: `
    <wra-simple-table v-bind="args" > 
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>First 6 weeks</td>
          <td>£109.80 per week</td>
        </tr>
        <tr>
          <td>Next 33 weeks</td>
          <td>£109.80 per week</td>
        </tr>
        <tr>
          <td>Total estimated pay</td>
          <td>£4,282.20</td>
        </tr>
      </tbody>
    </wra-simple-table>`
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-simple-table caption="Table caption" inherit-background>
  <thead>
    <tr>
      <th>Date</th>
      <th>Amount</th> 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>First 6 weeks</td>
      <td>£109.80 per week</td>
    </tr>
    <tr>
      <td>Next 33 weeks</td>
      <td>£109.80 per week</td>
    </tr>
    <tr>
      <td>Total estimated pay</td>
      <td>£4,282.20</td>
    </tr>
  </tbody>
</wra-simple-table>
        `
      }
    }
  }
};
