import DataTable from "../page-objects/data-table";

describe("DataTable", () => {
  const dt = new DataTable();

  beforeEach("Storybook load", () => {
    cy.visit("/iframe.html?id=data-display-datatable--default");
    cy.log("Visiting the data table component story");
  });

  it("Search for specific vegetable name", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.get(dt.topRowName).should("have.text", f.vegArtichoke);
      cy.log("Assert top row name vegetable name is Artichoke");

      cy.get(dt.vegetableNameInput).type(f.vegBroccoli);
      cy.log("Type in a valid vegetable name");

      cy.get(dt.topRowName).should("have.text", f.vegBroccoli);
      cy.log("Assert top row name vegetable name is Broccoli");
    });
  });

  it("Navigate to another page and search for specific calories", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.get(dt.nextNavButton).click();
      cy.log("Click the next page navigation button");

      cy.get(dt.topRowName).should("have.text", f.vegChard);
      cy.log("Assert top row name vegetable name is Chard");

      cy.get(dt.caloriesAmountInput).type(f.caloriesAmount);
      cy.log("Type in a valid calories amount");

      cy.get(dt.topRowName).should("have.text", f.vegBroccoli);
      cy.log("Assert top row name vegetable name is Broccoli");
    });
  });
});
