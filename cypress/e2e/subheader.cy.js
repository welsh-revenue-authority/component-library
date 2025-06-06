import Subheader from "../page-objects/subheader.js";

describe("Subheader", () => {
  const s = new Subheader();

  it("Subheader - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=miscellaneous-subheader--default");
      cy.log("Visiting the Subheader component story");

      cy.get(s.subheader)
        .should("be.visible")
        .should("contain", "This is a subheader")
        .should("have.css", "font-size", "14px");
      cy.log(
        "Asserted that the subheader is visible and contains 'This is a subheader'"
      );

      cy.get(s.header)
        .should("be.visible")
        .should("contain", "This is a H1 header")
        .should("have.css", "font-size", "48px");
      cy.log(
        "Asserted that the header is visible and contains 'This is a H1 header'"
      );
    });
  });
});
