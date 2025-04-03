import WraDataTable from "../components/DataTable.vue";

export default {
  title: "Data & Display/DataTable",
  component: WraDataTable,
  tags: ["autodocs"],
  argTypes: {}
};

export const Default = {
  args: {
    caption: "Table caption",
    headers: [
      { key: "description", title: "Purchase price bands (£)" },
      { key: "rate", title: "Percentage rate (%)" },
      { key: "amount", title: "Amount (£)" },
      { key: "tax", title: "Tax due (£)" }
    ],
    itemsPerPage: 5,
    items: [
      { description: "Up to 225,000", rate: 0, amount: 225000, tax: 0 },
      {
        description: "Above 225,000 and up to 400,000",
        rate: 6,
        amount: 175000,
        tax: 10500
      },
      {
        description: "Above 400,000 and up to 750,000",
        rate: 7.5,
        amount: 10000,
        tax: 7500
      },
      {
        description: "Above 750,000 and up to 1,500,000",
        rate: 10,
        amount: 0,
        tax: 0
      },
      { description: "Above 1,500,000", rate: 12, amount: 0, tax: 0 }
    ]
  }
};
