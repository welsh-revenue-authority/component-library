import ServiceLogo from "../page-objects/service-logo.js";

describe("Service Logo", () => {
  const sl = new ServiceLogo();

  it("Service Logo - WRA", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=images-icons-servicelogo--wra");
      cy.log("Visiting the Service Logo component story");

      cy.get(sl.serviceLogo)
        .should("be.visible")
        .should("have.attr", "href", f.wraLogoLink);
      cy.log("Service Logo for WRA is visible and has the correct link");
    });
  });

  it("Service Logo - WG", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=images-icons-servicelogo--wg");
      cy.log("Visiting the Service Logo component story");

      cy.get(sl.serviceLogo)
        .should("be.visible")
        .should("have.attr", "href", f.wgLogoLink);
      cy.log("Service Logo for WG is visible and has the correct link");
    });
  });
});
