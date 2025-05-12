import CheckboxGroup from "../page-objects/checkbox-group.js";

describe("Checkbox Group", () => {
  const cg = new CheckboxGroup();

  it("Checkbox Group - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-checkboxgroup--default");
      cy.log("Visiting the Checkbox component story");

      cy.get(cg.optionOneCheckbox).should("be.visible").click();
      cy.get(cg.optionOneCheckbox).should("not.be.checked");
      cy.log("Asserted that the checkbox is not checked");

      cy.get(cg.optionOneCheckboxText)
        .should("be.visible")
        .should("have.text", f.optionOneCheckboxText);
      cy.log(
        "Asserted that the checkbox label is visible and has the correct text"
      );

      cy.get(cg.optionTwoCheckbox).should("be.visible");
      cy.get(cg.optionTwoCheckbox).should("be.checked");
      cy.log("Asserted that the checkbox is checked");

      cy.get(cg.optionTwoCheckboxText)
        .should("be.visible")
        .should("have.text", f.optionTwoCheckboxText);
      cy.log(
        "Asserted that the checkbox label is visible and has the correct text"
      );
    });
  });
});
