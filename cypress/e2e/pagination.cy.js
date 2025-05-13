import Pagination from "../page-objects/pagination.js";

describe("Pagination", () => {
  const p = new Pagination();

  it("Pagination - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=navigation-pagination--default");
      cy.log("Visiting the Pagination Input component story");

      cy.get(p.selectedPage)
        .should("have.css", "background-color", "rgb(42, 34, 91)")
        .should("contain", "1");
      cy.log(
        "Asserted that the selected page has the correct background color"
      );

      cy.get(p.nextBtn).click();
      cy.log("Clicked the next button");

      cy.get(p.selectedPage)
        .should("have.css", "background-color", "rgb(42, 34, 91)")
        .should("contain", "2");
      cy.log(
        "Asserted that the new selected page has the correct background color"
      );

      cy.get(p.page1)
        .should("have.css", "background-color", "rgb(241, 241, 241)")
        .should("contain", "1");
      cy.log(
        "Asserted that the none selected page has the correct background color"
      );
    });
  });
});
