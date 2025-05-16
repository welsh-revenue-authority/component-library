import FileUpload from "../page-objects/file-upload.js";

describe("File Upload", () => {
  const fu = new FileUpload();

  it("File Upload - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-fileupload--default");
      cy.log("Visiting the File Upload component story");

      cy.get(fu.fileName).should("have.text", "No file chosen");
      cy.log("Asserted that the file name is 'No file chosen'");

      cy.get(fu.fileUpload).invoke("show");
      cy.get(fu.fileUpload).selectFile("cypress/fixtures/wra-logo.jpg");
      cy.get(fu.fileUpload).invoke("hide");
      cy.log("Selected the file 'wra-logo.jpg'");

      cy.get(fu.fileName).should("have.text", "wra-logo.jpg");
      cy.log("Asserted that the file name is 'wra-logo.jpg'");
    });
  });
});
