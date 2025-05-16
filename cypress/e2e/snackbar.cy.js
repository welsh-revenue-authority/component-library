import Snackbar from "../page-objects/snackbar.js";

describe("Snackbar", () => {
  const s = new Snackbar();

  it("Snackbar - Info", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=feedback-snackbar--info");
      cy.log("Visiting the Snackbar component story");

      cy.get(s.snackbar)
        .should("contain", "This is an info snackbar")
        .should("have.css", "background-color", "rgb(194, 224, 252)")
        .should("have.css", "border-color", "rgb(3, 96, 166)");
      cy.log(
        "Asserted that the snackbar contains 'This is an info snackbar' and has the correct background and border colors"
      );

      cy.get(s.snackbarClose).click();
      cy.log("Clicked the close button on the snackbar");

      cy.get(s.snackbar).should("not.exist");
      cy.log("Asserted that the snackbar no longer exists");
    });
  });
});
