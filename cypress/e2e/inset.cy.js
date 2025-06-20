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
        "rgb(42, 34, 91)"
      );
      cy.log("Asserted that the inset has the correct background color");
    });
  });

  it("Inset - Charcoal Inset", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-inset--charcoal-inset");
      cy.log("Visiting the Inset component story");

      cy.get(i.inset).contains("This is a charcoal inset");
      cy.log("Asserted that the inset contains the correct text");

      cy.get(i.inset).should(
        "have.css",
        "border-left-color",
        "rgb(50, 50, 50)"
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

  it("Inset - Blue Inset", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-inset--blue-inset");
      cy.log("Visiting the Inset component story");

      cy.get(i.inset).contains("This is a blue inset");
      cy.log("Asserted that the inset contains the correct text");

      cy.get(i.inset).should(
        "have.css",
        "border-left-color",
        "rgb(3, 96, 166)"
      );
      cy.log("Asserted that the inset has the correct background color");
    });
  });

  it("Inset - Green Inset", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-inset--green-inset");
      cy.log("Visiting the Inset component story");

      cy.get(i.inset).contains("This is a green inset");
      cy.log("Asserted that the inset contains the correct text");

      cy.get(i.inset).should(
        "have.css",
        "border-left-color",
        "rgb(0, 112, 21)"
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
});
