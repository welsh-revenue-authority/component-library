import ExpansionPanel from "../page-objects/expansion-panel.js";

describe("Expansion Panel", () => {
  const ep = new ExpansionPanel();

  it("Expansion Panel - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-expansionpanel--default");
      cy.log("Visiting the Expansion Panel component story");

      cy.get(ep.expansionControl).click();
      cy.log("Clicked the expansion control");

      cy.get(ep.expansionControl).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log(
        "Asserted that the expansion control has the correct background color following click"
      );

      cy.get(ep.expansionText).should("be.visible");
      cy.log("Asserted that the expansion text is visible");
    });
  });
});
