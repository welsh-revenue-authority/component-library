import Icon from "../page-objects/icon.js";

describe("Icon", () => {
  const i = new Icon();

  it("Icon - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=images-icons-icon--default");
      cy.log("Visiting the Icon component story");

      cy.get(i.icon).should("be.visible");
      cy.log("Asserted that the icon is visible");
    });
  });
});
