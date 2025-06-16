import ContentSectionTitle from "../page-objects/content-section-title.js";

describe("Content Section Title", () => {
  const cst = new ContentSectionTitle();

  it("Content Section Title - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=miscellaneous-contentsectiontitle--default");
      cy.log("Visiting the Content Section Title component story");

      cy.get(cst.contentSectionTitle)
        .should("be.visible")
        .should("have.css", "border-top", "10px solid rgb(229, 229, 229)");
      cy.log("Asserted that the content section title has a top border");

      cy.get("h1").should("be.visible").contains("This is a H1 header");
      cy.log("Asserted that the H1 header is visible and has the correct text");

      cy.get(cst.contentSectionTitle)
        .should("be.visible")
        .should("have.css", "border-bottom", "2px solid rgb(229, 229, 229)");
      cy.log("Asserted that the content section title has a bottom border");
    });
  });
});
