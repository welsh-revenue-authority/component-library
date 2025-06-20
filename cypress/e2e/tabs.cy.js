import Tabs from "../page-objects/tabs.js";

describe("Tabs", () => {
  const t = new Tabs();

  it("Tabs - Default", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=navigation-tabs--default");
      cy.log("Visiting the Tabs component story");

      cy.get(t.selectedTab)
        .should("have.css", "border-top", "6px solid rgb(181, 181, 181)")
        .should("have.class", "tab-button tab-button--active");
      cy.log(
        "Asserted that the selected tab has the expected styles and attributes"
      );

      cy.get(t.tab2Unselected)
        .should("have.css", "border-top", "6px solid rgb(3, 96, 166)")
        .should("have.class", "tab-button");
      cy.log(
        "Asserted that the unselected tab has the expected styles and attributes"
      );

      cy.get(t.tab2Unselected).click();
      cy.log("Clicked on the unselected tab");

      cy.get(t.selectedTab)
        .should("have.css", "border-top", "6px solid rgb(31, 31, 31)")
        .should(
          "have.css",
          "background",
          "rgb(255, 213, 48) none repeat scroll 0% 0% / auto padding-box border-box"
        )
        .should("have.class", "tab-button tab-button--active");
      cy.log(
        "Asserted that the selected tab has the expected styles and attributes"
      );

      cy.get(t.tab1Unselected)
        .should("have.css", "border-top", "6px solid rgb(3, 96, 166)")
        .should("have.class", "tab-button");
      cy.log(
        "Asserted that the unselected tab has the expected styles and attributes"
      );
    });
  });

  it("Tabs - Third Tab Selected", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=navigation-tabs--third-tab-selected");
      cy.log("Visiting the Tabs component story");

      cy.get(t.selectedTab)
        .should("have.css", "border-top", "6px solid rgb(181, 181, 181)")
        .should("have.class", "tab-button tab-button--active");
      cy.log(
        "Asserted that the selected tab has the expected styles and attributes"
      );

      cy.get(t.tab2Unselected)
        .should("have.css", "border-top", "6px solid rgb(3, 96, 166)")
        .should("have.class", "tab-button");
      cy.log(
        "Asserted that the unselected tab has the expected styles and attributes"
      );

      cy.get(t.tab2Unselected).click();
      cy.log("Clicked on the unselected tab");

      cy.get(t.selectedTab)
        .should("have.css", "border-top", "6px solid rgb(31, 31, 31)")
        .should(
          "have.css",
          "background",
          "rgb(255, 213, 48) none repeat scroll 0% 0% / auto padding-box border-box"
        )
        .should("have.class", "tab-button tab-button--active");
      cy.log(
        "Asserted that the selected tab has the expected styles and attributes"
      );

      cy.get(t.tab1Unselected)
        .should("have.css", "border-top", "6px solid rgb(3, 96, 166)")
        .should("have.class", "tab-button");
      cy.log(
        "Asserted that the unselected tab has the expected styles and attributes"
      );
    });
  });
});
