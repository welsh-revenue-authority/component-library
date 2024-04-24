import WraTable from "../components/Table.vue";

export default {
  title: "All/Table",
  component: WraTable,
  tags: ["autodocs"],
  argTypes: {
    caption: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    caption: "This is a table",
  },
  render: (args) => ({
    components: { WraTable },
    setup() {
      return { args };
    },
    template: `
    <wra-table v-bind="args" > 
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>First 6 weeks</th>
          <td>£109.80 per week</td>
        </tr>
        <tr>
          <th>Next 33 weeks</th>
          <td>£109.80 per week</td>
        </tr>
        <tr>
          <th>Total estimated pay</th>
          <td>£4,282.20</td>
        </tr>
      </tbody>
    </wra-table>`,
  }),
};

export const InheritBackground = {
  args: {
    caption: "This is a table",
    inheritBackground: true,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: (args) => ({
    components: { WraTable },
    setup() {
      return { args };
    },
    template: `
    <wra-table v-bind="args" > 
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>First 6 weeks</th>
          <td>£109.80 per week</td>
        </tr>
        <tr>
          <th>Next 33 weeks</th>
          <td>£109.80 per week</td>
        </tr>
        <tr>
          <th>Total estimated pay</th>
          <td>£4,282.20</td>
        </tr>
      </tbody>
    </wra-table>`,
  }),
};
