import Select from "../page-objects/select.js";

describe("Select", () => {
  const s = new Select();

  it("Select - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-select--default");
      cy.log("Visiting the Select component story");

      cy.get(s.option1).contains("Item 1");
      cy.get(s.option2).contains("Item 2");
      cy.get(s.option3).contains("Item 3");
      cy.get(s.option4).contains("Item 4");
      cy.get(s.option5).contains("Item 5");
      cy.log(
        "Asserted that the first, second, third, fourth & fifth options contain 'Item 1', 'Item 2', 'Item 3', 'Item 4' & 'Item 5' respectively"
      );

      cy.get(s.select).select("Item 1");
      cy.log("Selected 'Item 1' from the select dropdown");

      cy.get(s.select).should("have.value", "1");
      cy.log("Asserted that the selected value is correct");
    });
  });
});
