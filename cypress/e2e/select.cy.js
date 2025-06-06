import Select from "../page-objects/select.js";

describe("Select", () => {
  const s = new Select();

  it("Select - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-select--default");
      cy.log("Visiting the Select component story");

      cy.get(s.option1).contains("Item 1");
      cy.get(s.option2).contains("Item 2");
      cy.log(
        "Asserted that the first and second options contain 'Item 1' & 'Item 2' respectively"
      );

      cy.get(s.select).select("Item 1");
      cy.log("Selected 'Item 1' from the select dropdown");

      cy.get(s.select).should("have.value", "1");
      cy.log("Asserted that the selected value is correct");
    });
  });
});
