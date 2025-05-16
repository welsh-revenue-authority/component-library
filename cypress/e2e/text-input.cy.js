import TextInput from "../page-objects/text-input.js";

describe("Text Input", () => {
  const ti = new TextInput();

  it("Text Input - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-textinput--default");
      cy.log("Visiting the Text Input component story");

      cy.get(ti.textInputLabel)
        .should("be.visible")
        .should("contain", "Text input label");
      cy.log(
        "Asserted that the text input label is visible and contains the expected text"
      );

      cy.get(ti.textInput).clear();
      cy.get(ti.textInput).type(f.text);
      cy.log("Typed text into the text input");

      cy.get(ti.textInput).should("have.value", f.text);
      cy.log("Asserted that the text input has the expected value");
    });
  });
});
