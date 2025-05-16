import SkipLink from "../page-objects/skip-link.js";

describe("Skip Link", () => {
  const sl = new SkipLink();

  it("Skip Link - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-skiplink--default");
      cy.log("Visiting the Skip Link component story");

      cy.get(sl.skipLink).contains("Skip to main content");
      cy.log("Asserted that the skip link contains 'Skip to main content'");
    });
  });
});
