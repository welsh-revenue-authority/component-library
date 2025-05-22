import Inset from "../page-objects/inset.js";

describe("Inset", () => {
  const i = new Inset();

  it("Inset - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-inset--default");
      cy.log("Visiting the Inset component story");

      cy.get(i.inset).contains("This is an inset");
      cy.log("Asserted that the inset contains the correct text");

      cy.get(i.inset).should(
        "have.css",
        "border-left-color",
        "rgb(3, 96, 166)"
      );
      cy.log("Asserted that the inset has the correct background color");
    });
  });
});
