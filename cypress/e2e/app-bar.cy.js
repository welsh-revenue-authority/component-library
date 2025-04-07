import AppBar from "../page-objects/app-bar";

describe("AppBar", () => {
  const ab = new AppBar();

  beforeEach("Storybook load", () => {
    cy.visit("/iframe.html?id=navigation-appbar--default");
    cy.log("Visiting the app bar component story");
  });

  it("App Bar - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.get(ab.wgLogo).should("have.attr", "href", f.wgLogoLink);
      cy.log("Assert app bar logo link is correct");

      cy.get(ab.languageToggleButton).should("be.visible");
      cy.log("Assert app bar language toggle button is visible");
    });
  });
});
