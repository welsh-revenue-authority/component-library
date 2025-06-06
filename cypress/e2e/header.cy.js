import Header from "../page-objects/header.js";

describe("Header", () => {
  const h = new Header();

  it("Header - Header 1", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=miscellaneous-header--header-1");
      cy.log("Visiting the Header component story");

      cy.get(h.header)
        .should("have.css", "font-size", "48px")
        .contains("This is a H1 header");
      cy.log("Asserted that the header text is correct");
    });
  });

  it("Header - Header 2", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=miscellaneous-header--header-2");
      cy.log("Visiting the Header component story");

      cy.get("h2")
        .should("have.css", "font-size", "36px")
        .contains("This is a H2 header");
      cy.log("Asserted that the header text is correct");
    });
  });

  it("Header - Header 3", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=miscellaneous-header--header-3");
      cy.log("Visiting the Header component story");

      cy.get("h3")
        .should("have.css", "font-size", "28px")
        .contains("This is a H3 header");
      cy.log("Asserted that the header text is correct");
    });
  });

  it("Header - Header 4", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=miscellaneous-header--header-4");
      cy.log("Visiting the Header component story");

      cy.get("h4")
        .should("have.css", "font-size", "24px")
        .contains("This is a H4 header");
      cy.log("Asserted that the header text is correct");
    });
  });

  it("Header - Header 5", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=miscellaneous-header--header-5");
      cy.log("Visiting the Header component story");

      cy.get("h5")
        .should("have.css", "font-size", "22px")
        .contains("This is a H5 header");
      cy.log("Asserted that the header text is correct");
    });
  });

  it("Header - Header 6", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=miscellaneous-header--header-6");
      cy.log("Visiting the Header component story");

      cy.get("h6")
        .should("have.css", "font-size", "18px")
        .contains("This is a H6 header");
      cy.log("Asserted that the header text is correct");
    });
  });
});
