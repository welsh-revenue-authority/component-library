import Autocomplete from "../page-objects/autocomplete";

describe("Autocomplete", () => {
  const a = new Autocomplete();

  it("Autocomplete - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-autocomplete--default");
      cy.log("Visiting the autocomplete component story");

      cy.get(a.autocompleteInput).type(f.autocompleteInputText);
      cy.log("Input beginning of valid local authority name");

      cy.get(a.autocompleteResult)
        .should("be.visible")
        .contains(f.autocompleteResultText);
      cy.log("Assert autocomplete result is visible and has correct text");

      cy.get(a.autocompleteInput).clear();
      cy.log("Clear the autocomplete input");

      cy.get(a.autocompleteInput).type(f.text);
      cy.log("Input invalid local authority name");

      cy.get(a.autocompleteResult)
        .should("be.visible")
        .contains(f.autocompleteNoResultText);
      cy.log("Assert autocomplete result is visible and has no results text");
    });
  });

  it("Autocomplete - Autoexpand", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-autocomplete--autoexpand");
      cy.log("Visiting the autocomplete component story");

      cy.get(a.autocompleteInputAutoexpand).click();
      cy.log("Click on the autocomplete input");

      cy.get(a.autocompleteResult)
        .should("be.visible")
        .contains(f.autoexpandResultText);
      cy.log(
        "Assert autocomplete results are visible and top result has correct text"
      );
    });
  });

  it("Autocomplete - Pre Filled", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-autocomplete--pre-filled");
      cy.log("Visiting the autocomplete component story");

      cy.get(a.autocompleteInputPreFilled)
        .should("be.visible")
        .should("have.value", f.preFilledInput);
      cy.log(
        "Assert autocomplete results are visible and top result has correct text"
      );

      cy.get(a.autocompleteInputPreFilled).clear();
      cy.log("Clear the autocomplete input");

      cy.get(a.autocompleteInputPreFilled).type(f.text);
      cy.log("Input invalid local authority name");

      cy.get(a.autocompleteResult)
        .should("be.visible")
        .contains(f.autocompleteNoResultText);
      cy.log("Assert autocomplete result is visible and has no results text");
    });
  });
});
