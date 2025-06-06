import Banner from "../page-objects/banner.js";

describe("Banner", () => {
  const b = new Banner();

  it("Banner - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=feedback-banner--default");
      cy.log("Visiting the Banner component story");

      cy.get(b.banner)
        .should("have.css", "background-color", "rgb(241, 241, 241)")
        .should(
          "contain",
          "Tell us what you think of this service by giving feedback."
        );
      cy.log("Assert banner background colour and text content");

      cy.get(b.bannerHyperlink)
        .should("be.visible")
        .should("have.attr", "href");
      cy.log("Assert banner hyperlink is visible and has href attribute");
    });
  });

  it("Banner - New Service", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=feedback-banner--new-service");
      cy.log("Visiting the Banner component story");

      cy.get(b.banner)
        .should("have.css", "background-color", "rgb(255, 213, 48)")
        .should(
          "contain",
          "This is a new service. Give feedback to help improve it."
        );
      cy.log("Assert banner background colour and text content");

      cy.get(b.bannerHyperlink)
        .should("be.visible")
        .should("have.attr", "href");
      cy.log("Assert banner hyperlink is visible and has href attribute");
    });
  });

  it("Banner - Cookies Example", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=feedback-banner--cookies-example");
      cy.log("Visiting the Banner component story");

      cy.get(b.banner)
        .should("have.css", "background-color", "rgb(241, 241, 241)")
        .should(
          "contain",
          "We use cookies to collect information about how you use this website. We use this information to improve our services."
        );
      cy.log("Assert banner background colour and text content");

      cy.get(b.acceptCookiesButton)
        .should("be.visible")
        .should("have.text", "Accept cookies");
      cy.log(
        "Assert banner 'Accept cookies' button is visible and has correct text"
      );

      cy.get(b.acceptCookiesButton).click();
      cy.log("Clicked the 'Accept cookies' button");

      cy.get(b.acceptCookiesButton).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log("Assert 'Accept cookies' button background colour after click");

      cy.get(b.changeCookiesSettingsButton)
        .should("be.visible")
        .should("have.text", "Change cookie settings");
      cy.log(
        "Assert banner 'Change cookie settings' button is visible and has correct text"
      );

      cy.get(b.changeCookiesSettingsButton).click();
      cy.log("Clicked the 'Change cookie settings' button");

      cy.get(b.changeCookiesSettingsButton).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log(
        "Assert 'Change cookie settings' button background colour after click"
      );
    });
  });

  it("Banner - Closable", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=feedback-banner--closable");
      cy.log("Visiting the Banner component story");

      cy.get(b.banner)
        .should("have.css", "background-color", "rgb(241, 241, 241)")
        .should(
          "contain",
          "You've accepted all cookies. You can change your cookie settings at any time."
        );
      cy.log("Assert banner background colour and text content");

      cy.get(b.bannerHyperlink)
        .should("be.visible")
        .should("have.attr", "href");
      cy.log("Assert banner hyperlink is visible and has href attribute");

      cy.get(b.bannerCloseButton).click();
      cy.log("Clicked the banner close button");

      cy.get(b.banner).should("not.exist");
      cy.log("Assert banner is not visible after clicking close button");
    });
  });
});
