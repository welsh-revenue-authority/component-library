import Banner from "../page-objects/banner.js";

describe("Banner", () => {
  const b = new Banner();

  it("Banner - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=feedback-banner--default");
      cy.log("Visiting the banner component story");

      cy.get(b.bannerHyperlink)
        .should("be.visible")
        .should("have.attr", "href");
      cy.log("Assert banner hyperlink is visible and has href attribute");
    });
  });

  it("Banner - New Service", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=feedback-banner--new-service");
      cy.log("Visiting the banner component story");

      cy.get(b.bannerHyperlink)
        .should("be.visible")
        .should("have.attr", "href");
      cy.log("Assert banner hyperlink is visible and has href attribute");
    });
  });

  it("Banner - Cookies Example", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=feedback-banner--cookies-example");
      cy.log("Visiting the banner component story");

      cy.get(b.acceptCookiesButton)
        .should("be.visible")
        .should("have.text", "Accept cookies");
      cy.log(
        "Assert banner 'Accept cookies' button is visible and has correct text"
      );

      cy.get(b.changeCookiesSettingsButton)
        .should("be.visible")
        .should("have.text", "Change cookie settings");
      cy.log(
        "Assert banner 'Change cookie settings' button is visible and has correct text"
      );
    });
  });
});
