import TextArea from "../page-objects/text-area.js";

describe("Text Area", () => {
  const ta = new TextArea();

  it("Text Area - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-textarea--default");
      cy.log("Visiting the Text Area component story");

      cy.get(ta.textAreaLabel)
        .should("be.visible")
        .should("contain", "Text area label");
      cy.log(
        "Asserted that the text area label is visible and contains the expected text"
      );

      cy.get(ta.textArea).type(f.text);
      cy.log("Typed text into the text area");

      cy.get(ta.textArea).should("have.value", f.text);
      cy.log("Asserted that the text area has the expected value");

      cy.get(ta.textArea).clear();
      cy.get(ta.textArea).type(f.textArea);
      cy.log("Typed text into the text area");

      cy.get(ta.textArea).should("have.value", f.textArea);
      cy.log("Asserted that the text area has the expected value");
    });
  });

  it("Text Area - Max Length", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-textarea--max-length");
      cy.log("Visiting the Text Area component story");

      cy.get(ta.textAreaLabel)
        .should("be.visible")
        .should("contain", "Text area label");
      cy.log(
        "Asserted that the text area label is visible and contains the expected text"
      );

      cy.get(ta.textArea).type(f.textArea);
      cy.log("Typed text into the text area");

      cy.get(ta.textArea).should("have.value", f.textAreaMax);
      cy.log(
        "Asserted that the text area has the expected value when trimmed to max length"
      );
    });
  });
});
