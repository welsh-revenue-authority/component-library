import Inset from "../page-objects/inset.js";

describe("Inset", () => {
  const i = new Inset();

  it("Inset - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-inset--default");
      cy.log("Visiting the Inset component story");

      cy.get(i.inset).contains("This is an inset");
      cy.log("Asserted that the inset contains the correct text");

      cy.get(i.inset).should(
        "have.css",
        "border-left-color",
        "rgb(3, 96, 166)"
      );
      cy.log("Asserted that the inset has the correct background color");
    });
  });

  it("Inset - Red Inset", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-inset--red-inset");
      cy.log("Visiting the Inset component story");

      cy.get(i.inset).contains("This is a red inset");
      cy.log("Asserted that the inset contains the correct text");

      cy.get(i.inset).should(
        "have.css",
        "border-left-color",
        "rgb(170, 17, 17)"
      );
      cy.log("Asserted that the inset has the correct background color");
    });
  });

  it("Inset - Yellow Inset", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-inset--yellow-inset");
      cy.log("Visiting the Inset component story");

      cy.get(i.inset).contains("This is a yellow inset");
      cy.log("Asserted that the inset contains the correct text");

      cy.get(i.inset).should(
        "have.css",
        "border-left-color",
        "rgb(255, 213, 48)"
      );
      cy.log("Asserted that the inset has the correct background color");
    });
  });

  it("Inset - Light Green Inset", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-inset--light-green-inset");
      cy.log("Visiting the Inset component story");

      cy.get(i.inset).contains("This is a light green inset");
      cy.log("Asserted that the inset contains the correct text");

      cy.get(i.inset).should(
        "have.css",
        "border-left-color",
        "rgb(205, 247, 212)"
      );
      cy.log("Asserted that the inset has the correct background color");
    });
  });

  it("Inset - Revenue Blue Inset", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-inset--revenue-blue-inset");
      cy.log("Visiting the Inset component story");

      cy.get(i.inset).contains("This is a revenue blue inset");
      cy.log("Asserted that the inset contains the correct text");

      cy.get(i.inset).should(
        "have.css",
        "border-left-color",
        "rgb(42, 34, 91)"
      );
      cy.log("Asserted that the inset has the correct background color");
    });
  });
});
