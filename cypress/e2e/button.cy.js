import Button from "../page-objects/button.js";

describe("Button", () => {
  const b = new Button();

  it("Button - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-button--default");
      cy.log("Visiting the button component story");

      cy.get(b.button)
        .should("be.visible")
        .should("have.css", "background-color", "rgb(31, 31, 31)");
      cy.log(
        "Asserted the button is visible and has correct default background colour"
      );

      cy.get(b.button).click();
      cy.get(b.button).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log("Asserted the button has correct background colour on focus");
    });
  });

  it("Button - Small", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-button--small");
      cy.log("Visiting the button component story");

      cy.get(b.button)
        .should("be.visible")
        .should("have.css", "background-color", "rgb(31, 31, 31)");
      cy.log(
        "Asserted the button is visible and has correct default background colour"
      );

      cy.get(b.button).click();
      cy.get(b.button).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log("Asserted the button has correct background colour on focus");
    });
  });

  it("Button - Background Colour", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-button--background-colour");
      cy.log("Visiting the button component story");

      cy.get(b.button)
        .should("be.visible")
        .should("have.css", "background-color", "rgb(3, 96, 166)");
      cy.log(
        "Asserted the button is visible and has correct default background colour"
      );

      cy.get(b.button).click();
      cy.get(b.button).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log("Asserted the button has correct background colour on focus");
    });
  });

  it("Button - Outlined", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-button--outlined");
      cy.log("Visiting the button component story");

      cy.get(b.button)
        .should("be.visible")
        .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
      cy.log(
        "Asserted the button is visible and has correct default background colour"
      );

      cy.get(b.button).click();
      cy.get(b.button).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log("Asserted the button has correct background colour on focus");
    });
  });

  it("Button - Prepend Icon", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-button--prepend-icon");
      cy.log("Visiting the button component story");

      cy.get(b.button)
        .should("be.visible")
        .should("have.css", "background-color", "rgb(31, 31, 31)");
      cy.log(
        "Asserted the button is visible and has correct default background colour"
      );

      cy.get(b.button).click();
      cy.get(b.button).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log("Asserted the button has correct background colour on focus");
    });
  });

  it("Button - Append Icon", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-button--append-icon");
      cy.log("Visiting the button component story");

      cy.get(b.button)
        .should("be.visible")
        .should("have.css", "background-color", "rgb(31, 31, 31)");
      cy.log(
        "Asserted the button is visible and has correct default background colour"
      );

      cy.get(b.button).click();
      cy.get(b.button).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log("Asserted the button has correct background colour on focus");
    });
  });

  it("Button - Append Custom Icon", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-button--append-custom-icon");
      cy.log("Visiting the button component story");

      cy.get(b.button)
        .should("be.visible")
        .should("have.css", "background-color", "rgb(31, 31, 31)");
      cy.log(
        "Asserted the button is visible and has correct default background colour"
      );

      cy.get(b.button).click();
      cy.get(b.button).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log("Asserted the button has correct background colour on focus");
    });
  });

  it("Button - Disabled", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-button--disabled");
      cy.log("Visiting the button component story");

      cy.get(b.button)
        .should("be.visible")
        .should("have.css", "background-color", "rgb(50, 50, 50)")
        .should("have.attr", "disabled");
      cy.log(
        "Asserted the button is visible, has correct default background colour, and is disabled"
      );
    });
  });
});
