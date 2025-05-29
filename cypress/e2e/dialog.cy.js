import Dialog from "../page-objects/dialog";

describe("Dialog", () => {
  const d = new Dialog();

  it("Dialog - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-dialog--default");
      cy.log("Visiting the Dialog component story");

      cy.get(d.dialogBox).should("not.be.visible");
      cy.log("Dialog box is not visible");

      cy.get(d.dialogBtn).should("contain", "Open Dialog").click();
      cy.log("Clicked the dialog button");

      cy.get(d.dialogBox).should("be.visible");
      cy.get(d.dialogTitle).contains("Dialog Title");
      cy.get(d.dialogContent).contains("Dialog message goes here.");
      cy.log("Dialog box is visible, and title and content is correct");

      cy.get(d.dialogConfirmBtn).click();
      cy.log("Clicked the confirm button");

      cy.get(d.dialogBox).should("not.be.visible");
      cy.log("Dialog box is not visible");
    });
  });

  it("Dialog - Is Delete", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=containment-dialog--is-delete");
      cy.log("Visiting the Dialog component story");

      cy.get(d.dialogBox).should("not.be.visible");
      cy.log("Dialog box is not visible");

      cy.get(d.dialogBtn).should("contain", "Open Delete Dialog").click();
      cy.log("Clicked the dialog button");

      cy.get(d.dialogBox).should("be.visible");
      cy.get(d.dialogTitle).contains("Are you sure?");
      cy.get(d.dialogContent).contains("This action cannot be undone.");
      cy.log("Dialog box is visible, and title and content is correct");

      cy.get(d.dialogDeleteBtn).click();
      cy.log("Clicked the confirm delete button");

      cy.get(d.dialogBox).should("not.be.visible");
      cy.log("Dialog box is not visible");
    });
  });
});
