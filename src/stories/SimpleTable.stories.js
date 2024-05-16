import WraSimpleTable from "../components/SimpleTable.vue";

export default {
  title: "Data & Display/SimpleTable",
  component: WraSimpleTable,
  tags: ["autodocs"],
  argTypes: {
    caption: {
      control: "text"
    }
  }
};

export const Default = {
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
  })
};

export const InheritBackground = {
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
  })
};
