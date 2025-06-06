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

      cy.get(t.table)
        .should("be.visible")
        .should("have.css", "background-color", "rgb(241, 241, 241)");
      cy.log(
        "Asserted that the table is visible and has the correct background color"
      );

      cy.get(t.column1Row1)
        .should("be.visible")
        .should("contain", "Up to 225,000");
      cy.get(t.column3Row3).should("be.visible").should("contain", "10000");
      cy.log("Asserted that the expected table content is visible");
    });
  });

  it("Table - Inherit Background", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=data-display-table--inherit-background");
      cy.log("Visiting the Table component story");

      cy.get(t.tableCaption)
        .should("be.visible")
        .should("contain", "Table caption");
      cy.log(
        "Asserted that the table caption is visible and contains 'Table caption'"
      );

      cy.get(t.table)
        .should("be.visible")
        .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
      cy.log(
        "Asserted that the table is visible and has the correct background color"
      );

      cy.get(t.column1Row1)
        .should("be.visible")
        .should("contain", "Up to 225,000");
      cy.get(t.column3Row3).should("be.visible").should("contain", "10000");
      cy.log("Asserted that the expected table content is visible");
    });
  });

  it("Table - Bold Rows", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=data-display-table--bold-rows");
      cy.log("Visiting the Table component story");

      cy.get(t.tableCaption)
        .should("be.visible")
        .should("contain", "Table caption");
      cy.log(
        "Asserted that the table caption is visible and contains 'Table caption'"
      );

      cy.get(t.table)
        .should("be.visible")
        .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
      cy.log(
        "Asserted that the table is visible and has the correct background color"
      );

      cy.get(t.row2)
        .should("have.class", "bold")
        .should("have.css", "font-weight", "700");
      cy.log("Asserted that the second row is bold");

      cy.get(t.column1Row1)
        .should("be.visible")
        .should("contain", "Up to 225,000");
      cy.get(t.column3Row3).should("be.visible").should("contain", "10000");
      cy.log("Asserted that the expected table content is visible");
    });
  });
});
