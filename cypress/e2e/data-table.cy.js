import DataTable from "../page-objects/data-table";

describe.only("DataTable", () => {
  const dt = new DataTable();

  it("Renders", () => {
    cy.fixture("ComponentFixtures").then((f) => {
      cy.visit("/iframe.html?id=data-display-datatable--default");
      cy.get(dt.topRowName).should("have.text", "Artichoke");
    });
  });
});
