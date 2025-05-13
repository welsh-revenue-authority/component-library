import PriceInput from "../page-objects/price-input.js";

describe("Price Input", () => {
  const pi = new PriceInput();

  it("Price Input - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-priceinput--default");
      cy.log("Visiting the Price Input component story");

      cy.get(pi.priceInput).clear();
      cy.log("Cleared the input");

      cy.get(pi.priceInput).type(f.priceInputValue);
      cy.log("Typed the input value");

      cy.get(pi.priceInput).should("have.value", f.priceInputDisplay);
      cy.log("Asserted that the input displays the correct value");

      cy.get(pi.priceInputPrefix)
        .should("have.class", "prefix")
        .should("contain", "£");
      cy.log("Asserted that the input prefix is correct");
    });
  });
});
