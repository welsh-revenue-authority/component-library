import SimpleTable from "../page-objects/simple-table.js";

describe("Simple Table", () => {
  const st = new SimpleTable();

  it("Simple Table - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=data-display-simpletable--default");
      cy.log("Visiting the Simple Table component story");

      cy.get(st.tableCaption)
        .should("be.visible")
        .should("contain", "Table caption");
      cy.log(
        "Asserted that the table caption is visible and contains 'Table caption'"
      );

      cy.get(st.column1Row1)
        .should("be.visible")
        .should("contain", "First 6 weeks");
      cy.get(st.column2Row3)
        .should("be.visible")
        .should("contain", "£4,282.20");
      cy.log("Asserted that the expected table content is visible");
    });
  });
});
