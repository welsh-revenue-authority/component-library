import Header from "../page-objects/header.js";

describe("Header", () => {
  const h = new Header();

  it("Header - Header 1", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=miscellaneous-header--header-1");
      cy.log("Visiting the Header component story");

      cy.get(h.header).contains("This is a H1 header");
      cy.log("Asserted that the header text is correct");
    });
  });
});
