import NumberInput from "../page-objects/number-input.js";

describe("Number Input", () => {
  const ni = new NumberInput();

  it("Number Input - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-numberinput--default");
      cy.log("Visiting the Number Input component story");

      cy.get(ni.numberInput).should("have.value", f.numberInputDisplay);
      cy.log("Asserted that the input displays the correct value");
    });
  });
});
