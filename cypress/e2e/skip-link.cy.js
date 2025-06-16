import SkipLink from "../page-objects/skip-link.js";

describe("Skip Link", () => {
  const sl = new SkipLink();

  it("Skip Link - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-skiplink--default");
      cy.log("Visiting the Skip Link component story");

      cy.get(sl.skipLink)
        .trigger("active", { force: true })
        .contains("Skip to main content");
      cy.log("Asserted that the skip link contains 'Skip to main content'");
    });
  });

  it("Skip Link - Custom Text", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-skiplink--custom-text");
      cy.log("Visiting the Skip Link component story");

      cy.get(sl.skipLink)
        .trigger("active", { force: true })
        .contains("Skip cookies");
      cy.log("Asserted that the skip link contains 'Skip cookies'");
    });
  });

  it("Skip Link - Full Width Skiplink", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit(
        "/iframe.html?id=form-inputs-controls-skiplink--full-width-skiplink"
      );
      cy.log("Visiting the Skip Link component story");

      cy.get(sl.skipLink)
        .trigger("active", { force: true })
        .contains("Skip cookies");
      cy.log("Asserted that the skip link contains 'Skip cookies'");
    });
  });

  it("Skip Link - Skip Id", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit(
        "/iframe.html?id=form-inputs-controls-skiplink--skip-id"
      );
      cy.log("Visiting the Skip Link component story");

      cy.get(sl.skipLink)
        .trigger("active", { force: true })
        .contains("Skip to main content");
      cy.log("Asserted that the skip link contains 'Skip to main content'");
    });
  });
});
