import ExpansionPanel from "../page-objects/expansion-panel.js";

describe("Expansion Panel", () => {
  const ep = new ExpansionPanel();

  it("Expansion Panel - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-expansionpanel--default");
      cy.log("Visiting the Expansion Panel component story");

      cy.get(ep.expansionControl).contains("Expansion panel title").click();
      cy.log("Clicked the expansion control");

      cy.get(ep.expansionControl).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log(
        "Asserted that the expansion control has the correct background color following click"
      );

      cy.get(ep.expansionText).should("be.visible").contains(f.placeholderText);
      cy.log("Asserted that the expansion text is visible");
    });
  });

  it("Expansion Panel - Title Slot", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-expansionpanel--title-slot");
      cy.log("Visiting the Expansion Panel component story");

      cy.get(ep.expansionControlTitleSlot).click();
      cy.log("Clicked the expansion control");

      cy.get(ep.expansionControlTitleSlot).should(
        "have.css",
        "background-color",
        "rgb(255, 213, 48)"
      );
      cy.log(
        "Asserted that the expansion control has the correct background color following click"
      );

      cy.get(ep.expansionSlotText)
        .should("be.visible")
        .contains(f.placeholderText);
      cy.log("Asserted that the expansion text is visible");

      cy.get(ep.expansionSlot1).contains("Custom slot");
      cy.get(ep.expansionSlot2).contains("multi-line");
      cy.get(ep.expansionSlot3).contains("expansion panel title");
      cy.log("Asserted that the expansion text is visible");
    });
  });
});
