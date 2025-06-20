import AppBar from "../page-objects/app-bar";

describe("AppBar", () => {
  const ab = new AppBar();

  beforeEach("Storybook load", () => {
    cy.visit("/iframe.html?id=navigation-appbar--default");
    cy.log("Visiting the app bar component story");
  });

  it("App Bar - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.get(ab.appBar).should(
        "have.css",
        "background-color",
        "rgb(50, 50, 50)"
      );
      cy.get(ab.wgLogo)
        .should("be.visible")
        .should("have.attr", "href", f.wgLogoLink);
      cy.log(
        "Assert app bar is the correct background colour and the logo is visible and the link is correct"
      );

      cy.get(ab.languageToggleButton)
        .should("be.visible")
        .should("have.css", "background-color", "rgb(255, 255, 255)");
      cy.log(
        "Assert app bar language toggle button is visible and has the correct background colour"
      );

      cy.get(ab.languageToggleButton).click();
      cy.get(ab.languageToggleButton).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log(
        "Clicked the language toggle button and asserted the background colour changed"
      );
    });
  });
});
