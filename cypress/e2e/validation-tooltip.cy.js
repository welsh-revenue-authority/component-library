import ValidationTooltip from "../page-objects/validation-tooptip.js";

describe("Validation Tooltip", () => {
  const vt = new ValidationTooltip();

  it("Validation Tooltip - Info", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-validationtooltip--info");
      cy.log("Visiting the Validation Tooltip component story");

      cy.get(vt.tooltipInfo)
        .should("be.visible")
        .should("contain", "This is an info message")
        .should("have.css", "background-color", "rgb(194, 224, 252)")
        .should("have.css", "border-left", "10px solid rgb(3, 96, 166)");
      cy.log(
        "Asserted that the validation tooltip is visible and contains the expected text and styles"
      );
    });
  });

  it("Validation Tooltip - Success", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-validationtooltip--success");
      cy.log("Visiting the Validation Tooltip component story");

      cy.get(vt.tooltipInfo)
        .should("be.visible")
        .should("contain", "This is a success message")
        .should("have.css", "background-color", "rgb(205, 247, 212)")
        .should("have.css", "border-left", "10px solid rgb(1, 138, 30)");
      cy.log(
        "Asserted that the validation tooltip is visible and contains the expected text and styles"
      );
    });
  });

  it("Validation Tooltip - Warning", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-validationtooltip--warning");
      cy.log("Visiting the Validation Tooltip component story");

      cy.get(vt.tooltipInfo)
        .should("be.visible")
        .should("contain", "This is a warning message")
        .should("have.css", "background-color", "rgb(255, 245, 206)")
        .should("have.css", "border-left", "10px solid rgb(255, 213, 48)");
      cy.log(
        "Asserted that the validation tooltip is visible and contains the expected text and styles"
      );
    });
  });

  it("Validation Tooltip - Error", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-validationtooltip--error");
      cy.log("Visiting the Validation Tooltip component story");

      cy.get(vt.tooltipInfo)
        .should("be.visible")
        .should("contain", "This is an error message")
        .should("have.css", "background-color", "rgb(255, 228, 229)")
        .should("have.css", "border-left", "10px solid rgb(170, 17, 17)");
      cy.log(
        "Asserted that the validation tooltip is visible and contains the expected text and styles"
      );
    });
  });

  it("Validation Tooltip - Custom Icon Info", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit(
        "/iframe.html?id=containment-validationtooltip--custom-icon-info"
      );
      cy.log("Visiting the Validation Tooltip component story");

      cy.get(vt.tooltipInfo)
        .should("be.visible")
        .should("contain", "This is an info message")
        .should("have.css", "background-color", "rgb(194, 224, 252)")
        .should("have.css", "border-left", "10px solid rgb(3, 96, 166)");
      cy.log(
        "Asserted that the validation tooltip is visible and contains the expected text and styles"
      );

      cy.get(vt.tooltipIcon)
        .should("be.visible")
        .should("have.css", "fill", "rgb(3, 96, 166)");
      cy.log(
        "Asserted that the custom icon is visible and has the correct color"
      );
    });
  });

  it("Validation Tooltip - Custom Icon Error", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit(
        "/iframe.html?id=containment-validationtooltip--custom-icon-error"
      );
      cy.log("Visiting the Validation Tooltip component story");

      cy.get(vt.tooltipInfo)
        .should("be.visible")
        .should("contain", "This is an error message")
        .should("have.css", "background-color", "rgb(255, 228, 229)")
        .should("have.css", "border-left", "10px solid rgb(170, 17, 17)");
      cy.log(
        "Asserted that the validation tooltip is visible and contains the expected text and styles"
      );

      cy.get(vt.tooltipIcon)
        .should("be.visible")
        .should("have.css", "fill", "rgb(170, 17, 17)");
      cy.log(
        "Asserted that the custom icon is visible and has the correct color"
      );
    });
  });
});
