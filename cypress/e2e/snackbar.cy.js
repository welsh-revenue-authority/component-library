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

  it("Snackbar - Success", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=feedback-snackbar--success");
      cy.log("Visiting the Snackbar component story");

      cy.get(s.snackbar)
        .should("contain", "This is a success snackbar")
        .should("have.css", "background-color", "rgb(205, 247, 212)")
        .should("have.css", "border-color", "rgb(0, 112, 21)");
      cy.log(
        "Asserted that the snackbar contains 'This is a success snackbar' and has the correct background and border colors"
      );

      cy.get(s.snackbarClose).click();
      cy.log("Clicked the close button on the snackbar");

      cy.get(s.snackbar).should("not.exist");
      cy.log("Asserted that the snackbar no longer exists");
    });
  });

  it("Snackbar - Warning", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=feedback-snackbar--warning");
      cy.log("Visiting the Snackbar component story");

      cy.get(s.snackbar)
        .should("contain", "This is a warning snackbar")
        .should("have.css", "background-color", "rgb(255, 245, 206)")
        .should("have.css", "border-color", "rgb(255, 213, 48)");
      cy.log(
        "Asserted that the snackbar contains 'This is a warning snackbar' and has the correct background and border colors"
      );

      cy.get(s.snackbarClose).click();
      cy.log("Clicked the close button on the snackbar");

      cy.get(s.snackbar).should("not.exist");
      cy.log("Asserted that the snackbar no longer exists");
    });
  });

  it("Snackbar - Error", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=feedback-snackbar--error");
      cy.log("Visiting the Snackbar component story");

      cy.get(s.snackbar)
        .should("contain", "This is an error snackbar")
        .should("have.css", "background-color", "rgb(255, 228, 229)")
        .should("have.css", "border-color", "rgb(170, 17, 17)");
      cy.log(
        "Asserted that the snackbar contains 'This is an error snackbar' and has the correct background and border colors"
      );

      cy.get(s.snackbarClose).click();
      cy.log("Clicked the close button on the snackbar");

      cy.get(s.snackbar).should("not.exist");
      cy.log("Asserted that the snackbar no longer exists");
    });
  });

  it("Snackbar - No Close Button", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=feedback-snackbar--no-close-button");
      cy.log("Visiting the Snackbar component story");

      cy.get(s.snackbar)
        .should("contain", "Snackbar with no close button")
        .should("have.css", "background-color", "rgb(194, 224, 252)")
        .should("have.css", "border-color", "rgb(3, 96, 166)");
      cy.log(
        "Asserted that the snackbar contains 'Snackbar with no close button' and has the correct background and border colors"
      );

      cy.get(s.snackbarClose).should("not.exist");
      cy.log("Asserted that the snackbar close button does not exist");
    });
  });
});
