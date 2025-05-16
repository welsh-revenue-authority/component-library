import Checkbox from "../page-objects/checkbox";

describe("Checkbox", () => {
  const c = new Checkbox();

  it("Checkbox - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-checkbox--default");
      cy.log("Visiting the Checkbox component story");

      cy.get(c.checkboxInput).should("be.visible").click();
      cy.get(c.checkboxInput).should("be.checked");
      cy.log("Asserted that the checkbox is checked");

      cy.get(c.checkboxLabel)
        .should("be.visible")
        .should("have.text", f.checkboxLabelText);
      cy.log(
        "Asserted that the checkbox label is visible and has the correct text"
      );
    });
  });
});
