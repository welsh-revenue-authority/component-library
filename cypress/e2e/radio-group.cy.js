import RadioGroup from "../page-objects/radio-group.js";

describe("Radio Group", () => {
  const rg = new RadioGroup();

  it("Radio Group - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-radiogroup--default");
      cy.log("Visiting the Radio Group component story");

      cy.get(rg.radio1Text).contains("Option 1");
      cy.log("Asserted that the first radio button text is correct");

      cy.get(rg.radio1).should("not.be.checked");
      cy.log("Asserted that the first radio button is not checked");

      cy.get(rg.radio2Text).contains("Option 2");
      cy.log("Asserted that the second radio button text is correct");

      cy.get(rg.radio2).should("not.be.checked");
      cy.log("Asserted that the second radio button is not checked");

      cy.get(rg.radio1).check();
      cy.log("Checked the first radio button");

      cy.get(rg.radio1).should("be.checked");
      cy.log("Asserted that the first radio button is checked");

      cy.get(rg.radio2).should("not.be.checked");
      cy.log("Asserted that the second radio button is not checked");
    });
  });
});
