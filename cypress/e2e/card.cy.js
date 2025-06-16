import Card from "../page-objects/card.js";

describe("Card", () => {
  const c = new Card();

  it("Card - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-card--default");
      cy.log("Visiting the card component story");

      cy.get(c.card)
        .should("be.visible")
        .should("have.class", "card")
        .should("have.css", "background-color", "rgb(241, 241, 241)");

      cy.get(c.header).should("be.visible").contains("H1 Header");
      cy.log("Asserted the header is visible and has correct text");

      cy.get(c.paragraph).should("be.visible").contains(f.placeholderText);
      cy.log("Asserted the paragraph is visible and has correct text");

      cy.get(c.button)
        .should("be.visible")
        .should("have.css", "background-color", "rgb(31, 31, 31)");
      cy.log(
        "Asserted the button is visible and has correct default background colour"
      );

      cy.get(c.button).invoke("focus");
      cy.get(c.button).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log("Asserted the button has correct background colour on focus");
    });
  });
});
