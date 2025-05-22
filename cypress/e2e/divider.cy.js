import Divider from "../page-objects/divider.js";

describe("Divider", () => {
  const d = new Divider();

  it("Divider - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-divider--default");
      cy.log("Visiting the Divider component story");

      cy.get(d.divider).should("be.visible");
      cy.log("Asserted that the divider is visible");
    });
  });
});
