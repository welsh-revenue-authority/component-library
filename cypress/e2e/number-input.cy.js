import NumberInput from "../page-objects/number-input.js";

describe("Number Input", () => {
  const ni = new NumberInput();

  it("Number Input - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-numberinput--default");
      cy.log("Visiting the Number Input component story");

      cy.get(ni.label).should("be.visible").contains("Number input label");
      cy.log(
        "Asserted that the label is visible and contains the correct text"
      );

      cy.get(ni.numberInput).should("have.value", f.numberInputDisplay);
      cy.log("Asserted that the input displays the correct value");

      cy.get(ni.numberInput).clear().type(f.valueInput);
      cy.log("Cleared the input and typed a new value");

      cy.get(ni.numberInput).should("have.value", f.value);
      cy.log("Asserted that the input now has the new value");
    });
  });
});
