import Divider from "../page-objects/divider.js";

describe("Divider", () => {
  const d = new Divider();

  it("Divider - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-divider--default");
      cy.log("Visiting the Divider component story");

      cy.get(d.divider)
        .should("be.visible")
        .should("have.css", "border", "2.4px solid rgb(229, 229, 229)");
      cy.log(
        "Asserted that the divider is visible and has the correct border style"
      );
    });
  });

  it("Divider - Large Divider", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-divider--large-divider");
      cy.log("Visiting the Divider component story");

      cy.get(d.divider)
        .should("be.visible")
        .should("have.css", "border", "4px solid rgb(229, 229, 229)");
      cy.log(
        "Asserted that the divider is visible and has the correct border style"
      );
    });
  });

  it("Divider - Small Divider", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-divider--small-divider");
      cy.log("Visiting the Divider component story");

      cy.get(d.divider)
        .should("be.visible")
        .should("have.css", "border", "1.6px solid rgb(229, 229, 229)");
      cy.log(
        "Asserted that the divider is visible and has the correct border style"
      );
    });
  });
});
