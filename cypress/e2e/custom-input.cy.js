import CustomInput from "../page-objects/custom-input.js";

describe("Custom Input", () => {
  const ci = new CustomInput();

  it("Custom Input - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-custominput--default");
      cy.log("Visiting the Custom Input component story");

      cy.get(ci.customInput).should(
        "have.attr",
        "placeholder",
        "0000 0000 0000"
      );
      cy.log("Asserted that the input has the correct placeholder");

      cy.get(ci.customInput).type(f.customInputValue);
      cy.log("Typed in the custom input");

      cy.get(ci.customInput).should("have.value", f.customInputValueDisplay);
      cy.log("Asserted that the input displays the correct value");
    });
  });
});
