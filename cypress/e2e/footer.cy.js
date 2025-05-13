import Footer from "../page-objects/footer.js";

describe("Footer", () => {
  const foo = new Footer();

  it("Footer - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=navigation-footer--default");
      cy.log("Visiting the Footer component story");

      cy.get(foo.footer).should(
        "have.css",
        "background-color",
        "rgb(241, 241, 241)"
      );
      cy.log("Asserted that the footer background color is correct");
    });
  });
});
