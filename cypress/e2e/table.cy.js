import Table from "../page-objects/table.js";

describe("Table", () => {
  const t = new Table();

  it("Table - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=data-display-table--default");
      cy.log("Visiting the Table component story");

      cy.get(t.tableCaption)
        .should("be.visible")
        .should("contain", "Table caption");
      cy.log(
        "Asserted that the table caption is visible and contains 'Table caption'"
      );

      cy.get(t.column1Row1)
        .should("be.visible")
        .should("contain", "Up to 225,000");
      cy.get(t.column3Row3).should("be.visible").should("contain", "10000");
      cy.log("Asserted that the expected table content is visible");
    });
  });
});
