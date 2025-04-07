import DataTable from "../page-objects/data-table";

describe("DataTable", () => {
  const dt = new DataTable();

  beforeEach("Storybook load", () => {
    cy.visit("/iframe.html?id=data-display-datatable--default");
    cy.log("Visiting the data table component story");
  });

  it("Data Table - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.get(dt.topRowName).should("have.text", f.vegArtichoke);
      cy.log("Assert top row name vegetable name is Artichoke");

      cy.get(dt.vegetableNameInput).type(f.vegBroccoli);
      cy.log("Type in a valid vegetable name");

      cy.get(dt.topRowName).should("have.text", f.vegBroccoli);
      cy.log("Assert top row name vegetable name is Broccoli");
    });
  });
});
