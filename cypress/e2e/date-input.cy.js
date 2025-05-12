import DateInput from "../page-objects/date-input.js";

describe("Date Input", () => {
  const di = new DateInput();

  it("Date Input - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-dateinput--default");
      cy.log("Visiting the Date Input component story");

      cy.get(di.dateInput).clear();
      cy.log("Cleared the date input");

      cy.get(di.dateInput).should(
        "have.attr",
        "placeholder",
        "DD/MM/YYYY"
      );
      cy.log("Asserted that the input has the correct placeholder");

      cy.get(di.dateInput).type(f.dateInput);
      cy.log("Typed in the date input");

      cy.get(di.dateInput).should("have.value", f.date);
      cy.log("Asserted that the input displays the correct date");
    });
  });
});
