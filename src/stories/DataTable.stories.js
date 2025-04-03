import WraDataTable from "../components/DataTable.vue";

export default {
  title: "Data & Display/DataTable",
  component: WraDataTable,
  tags: ["autodocs"],
  argTypes: {
    body: {
      table: {
        disable: true
      }
    },
    item: {
      table: {
        disable: true
      }
    },
    "`item.${header.key}`": {
      table: {
        disable: true
      }
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
  <b>e.g.</b> { key: "calories", title: "Calories", <b>align: "right"</b> }
</p>
        `
      }
    }
  }
};

export const Default = {
  args: {
    caption: "Nutrition Facts for 30 Common Vegetables",
    headers: [
      { key: "name", title: "Vegetable" },
      { key: "calories", title: "Calories" },
      { key: "fat", title: "Fat (g)" },
      { key: "carbs", title: "Carbs (g)" },
      { key: "protein", title: "Protein (g)" },
      { key: "iron", title: "Iron (%)" }
    ],
    itemsPerPage: 10,
    sortBy: [{ key: "name", order: "asc" }],
    items: [
      {
        name: "Artichoke",
        calories: 47,
        fat: 0.2,
        carbs: 10.5,
        protein: 3.3,
        iron: 1.3
      },
      {
        name: "Asparagus",
        calories: 20,
        fat: 0.1,
        carbs: 3.7,
        protein: 2.2,
        iron: 2.1
      },
      {
        name: "Beet",
        calories: 43,
        fat: 0.2,
        carbs: 9.6,
        protein: 1.6,
        iron: 0.8
      },
      {
        name: "Bell pepper",
        calories: 31,
        fat: 0.3,
        carbs: 6.0,
        protein: 1.0,
        iron: 0.4
      },
      {
        name: "Broccoli",
        calories: 55,
        fat: 0.6,
        carbs: 11.2,
        protein: 3.7,
        iron: 0.7
      },
      {
        name: "Brussels sprouts",
        calories: 43,
        fat: 0.3,
        carbs: 9.0,
        protein: 3.4,
        iron: 1.4
      },
      {
        name: "Cabbage",
        calories: 25,
        fat: 0.1,
        carbs: 5.8,
        protein: 1.3,
        iron: 0.4
      },
      {
        name: "Carrot",
        calories: 41,
        fat: 0.2,
        carbs: 9.6,
        protein: 0.9,
        iron: 0.3
      },
      {
        name: "Cauliflower",
        calories: 25,
        fat: 0.3,
        carbs: 4.9,
        protein: 1.9,
        iron: 0.4
      },
      {
        name: "Celery",
        calories: 16,
        fat: 0.2,
        carbs: 3.0,
        protein: 0.7,
        iron: 0.2
      },
      {
        name: "Chard",
        calories: 19,
        fat: 0.2,
        carbs: 3.7,
        protein: 1.8,
        iron: 1.8
      },
      {
        name: "Collard greens",
        calories: 32,
        fat: 0.6,
        carbs: 5.7,
        protein: 3.0,
        iron: 0.5
      },
      {
        name: "Corn",
        calories: 86,
        fat: 1.2,
        carbs: 19.0,
        protein: 3.2,
        iron: 0.5
      },
      {
        name: "Cucumber",
        calories: 15,
        fat: 0.1,
        carbs: 3.6,
        protein: 0.7,
        iron: 0.3
      },
      {
        name: "Eggplant",
        calories: 25,
        fat: 0.2,
        carbs: 5.9,
        protein: 1.0,
        iron: 0.2
      },
      {
        name: "Garlic",
        calories: 149,
        fat: 0.5,
        carbs: 33.1,
        protein: 6.4,
        iron: 1.7
      },
      {
        name: "Green beans",
        calories: 31,
        fat: 0.1,
        carbs: 7.1,
        protein: 1.8,
        iron: 1.0
      },
      {
        name: "Kale",
        calories: 49,
        fat: 0.9,
        carbs: 8.8,
        protein: 4.3,
        iron: 1.5
      },
      {
        name: "Leek",
        calories: 61,
        fat: 0.3,
        carbs: 14.2,
        protein: 1.5,
        iron: 2.1
      },
      {
        name: "Lettuce",
        calories: 15,
        fat: 0.2,
        carbs: 2.9,
        protein: 1.4,
        iron: 0.5
      },
      {
        name: "Mushroom",
        calories: 22,
        fat: 0.3,
        carbs: 3.3,
        protein: 3.1,
        iron: 0.5
      },
      {
        name: "Okra",
        calories: 33,
        fat: 0.2,
        carbs: 7.5,
        protein: 1.9,
        iron: 0.6
      },
      {
        name: "Onion",
        calories: 40,
        fat: 0.1,
        carbs: 9.3,
        protein: 1.1,
        iron: 0.2
      },
      {
        name: "Parsnip",
        calories: 75,
        fat: 0.3,
        carbs: 18.0,
        protein: 1.2,
        iron: 0.6
      },
      {
        name: "Pea",
        calories: 81,
        fat: 0.4,
        carbs: 14.5,
        protein: 5.4,
        iron: 1.5
      },
      {
        name: "Potato",
        calories: 77,
        fat: 0.1,
        carbs: 17.6,
        protein: 2.0,
        iron: 0.8
      },
      {
        name: "Pumpkin",
        calories: 26,
        fat: 0.1,
        carbs: 6.5,
        protein: 1.0,
        iron: 0.8
      },
      {
        name: "Radish",
        calories: 16,
        fat: 0.1,
        carbs: 3.4,
        protein: 0.7,
        iron: 0.3
      },
      {
        name: "Spinach",
        calories: 23,
        fat: 0.4,
        carbs: 3.6,
        protein: 2.9,
        iron: 2.7
      },
      {
        name: "Tomato",
        calories: 18,
        fat: 0.2,
        carbs: 3.9,
        protein: 0.9,
        iron: 0.2
      }
    ]
  }
};
