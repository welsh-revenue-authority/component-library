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
});
