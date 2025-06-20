import FileUpload from "../page-objects/file-upload.js";

describe("File Upload", () => {
  const fu = new FileUpload();

  it("File Upload - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-fileupload--default");
      cy.log("Visiting the File Upload component story");

      cy.get(fu.fileUploadLabel)
        .should("be.visible")
        .contains("File upload label");
      cy.log(
        "Asserted that the file upload label is visible and contains the correct text"
      );

      cy.get(fu.fileName).should("have.text", "No file chosen");
      cy.log("Asserted that the file name is 'No file chosen'");

      cy.get(fu.fileUploadButton)
        .should("be.visible")
        .should("have.css", "background-color", "rgb(31, 31, 31)");

      cy.get(fu.fileUpload).invoke("show");
      cy.get(fu.fileUpload).selectFile("cypress/fixtures/wra-logo.jpg");
      cy.get(fu.fileUpload).invoke("hide");
      cy.log("Selected the file 'wra-logo.jpg'");

      cy.get(fu.fileName).should("have.text", "wra-logo.jpg");
      cy.log("Asserted that the file name is 'wra-logo.jpg'");
    });
  });

  it("File Upload - Custom Button Colour", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit(
        "/iframe.html?id=form-inputs-controls-fileupload--custom-button-colour"
      );
      cy.log("Visiting the File Upload component story");

      cy.get(fu.fileUploadLabel)
        .should("be.visible")
        .contains("File upload label");
      cy.log(
        "Asserted that the file upload label is visible and contains the correct text"
      );

      cy.get(fu.fileName).should("have.text", "No file chosen");
      cy.log("Asserted that the file name is 'No file chosen'");

      cy.get(fu.fileUploadButton)
        .should("be.visible")
        .should("have.css", "background-color", "rgb(3, 96, 166)");

      cy.get(fu.fileUpload).invoke("show");
      cy.get(fu.fileUpload).selectFile("cypress/fixtures/wra-logo.jpg");
      cy.get(fu.fileUpload).invoke("hide");
      cy.log("Selected the file 'wra-logo.jpg'");

      cy.get(fu.fileName).should("have.text", "wra-logo.jpg");
      cy.log("Asserted that the file name is 'wra-logo.jpg'");
    });
  });

  it("File Upload - Error", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=form-inputs-controls-fileupload--error");
      cy.log("Visiting the File Upload component story");

      cy.get(fu.fileUploadError)
        .should("be.visible")
        .contains("File is too large");
      cy.log(
        "Asserted that the file upload error is visible and contains the correct text"
      );

      cy.get(fu.fileUploadLabel)
        .should("be.visible")
        .contains("File upload label");
      cy.log(
        "Asserted that the file upload label is visible and contains the correct text"
      );

      cy.get(fu.fileName).should("have.text", "No file chosen");
      cy.log("Asserted that the file name is 'No file chosen'");

      cy.get(fu.fileUploadButton)
        .should("be.visible")
        .should("have.css", "background-color", "rgb(31, 31, 31)");

      cy.get(fu.fileUpload).invoke("show");
      cy.get(fu.fileUpload).selectFile("cypress/fixtures/wra-logo.jpg");
      cy.get(fu.fileUpload).invoke("hide");
      cy.log("Selected the file 'wra-logo.jpg'");

      cy.get(fu.fileName).should("have.text", "wra-logo.jpg");
      cy.log("Asserted that the file name is 'wra-logo.jpg'");
    });
  });
});
