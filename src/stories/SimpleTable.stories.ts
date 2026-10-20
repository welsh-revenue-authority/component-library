import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraSimpleTable from "../components/SimpleTable.vue";
import { expect, within } from "storybook/test";

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
    await expect(canvas.getByText("Up to 225,000")).toBeVisible();
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
</wra-simple-table>
        `
      }
    }
  }
};

export const InheritBackground: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("table")).toBeVisible();
    await expect(canvas.getByText("10000")).toBeVisible();
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
