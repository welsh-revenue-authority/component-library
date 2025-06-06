import Breadcrumbs from "../page-objects/breadcrumbs.js";

describe("Breadcrumbs", () => {
  const b = new Breadcrumbs();

  it("Breadcrumbs - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=navigation-breadcrumbs--default");
      cy.log("Visiting the breadcrumbs component story");

      cy.get(b.activePage).should("be.visible").should("not.have.attr", "href");
      cy.log("Assert active page is visible and does not have href attribute");

      cy.get(b.inactivePageHyperlink)
        .should("be.visible")
        .should("have.attr", "href");
      cy.log("Assert inactive page is visible and has href attribute");

      cy.get(b.breadcrumbDivider)
        .should("be.visible")
        .should("have.class", "wra-breadcrumbs-chevron");
      cy.log("Assert breadcrumb divider is visible and has correct class");
    });
  });

  it("Breadcrumbs - Replace Divider", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=navigation-breadcrumbs--replace-divider");
      cy.log("Visiting the breadcrumbs component story");

      cy.get(b.activePage).should("be.visible").should("not.have.attr", "href");
      cy.log("Assert active page is visible and does not have href attribute");

      cy.get(b.inactivePageHyperlink)
        .should("be.visible")
        .should("have.attr", "href");
      cy.log("Assert inactive page is visible and has href attribute");

      cy.get(b.breadcrumbReplaceDivider)
        .should("be.visible")
        .should("have.class", "wra-breadcrumbs-divider");
      cy.log("Assert breadcrumb divider is visible and has correct class");
    });
  });

  it("Breadcrumbs - Replace Content", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=navigation-breadcrumbs--replace-content");
      cy.log("Visiting the breadcrumbs component story");

      cy.get(b.activePage).should("be.visible");
      cy.log("Assert active page is visible and has correct class");

      cy.get(b.inactivePage).should("be.visible");
      cy.log("Assert inactive page is visible");

      cy.get(b.breadcrumbDivider)
        .should("be.visible")
        .should("have.class", "wra-breadcrumbs-chevron");
      cy.log("Assert breadcrumb divider is visible and has correct class");
    });
  });
});
