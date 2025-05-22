import DataTable from "../page-objects/data-table";

describe("DataTable", () => {
  const dt = new DataTable();

  it("DataTable - Default: Search for specific vegetable name", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=data-display-datatable--default");
      cy.log("Visiting the Data Table component story");

      cy.get(dt.topRowName).should("have.text", f.vegArtichoke);
      cy.log("Assert top row name vegetable name is Artichoke");

      cy.get(dt.vegetableNameInput).type(f.vegBroccoli);
      cy.log("Type in a valid vegetable name");

      cy.get(dt.topRowName).should("have.text", f.vegBroccoli);
      cy.log("Assert top row name vegetable name is Broccoli");
    });
  });

  it("DataTable - Default: Navigate to another page and search for specific calories", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=data-display-datatable--default");
      cy.log("Visiting the Data Table component story");

      cy.get(dt.nextNavButton).click();
      cy.log("Click the next page navigation button");

      cy.get(dt.topRowName).should("have.text", f.vegChard);
      cy.log("Assert top row name vegetable name is Chard");

      cy.get(dt.caloriesAmountInput).type(f.caloriesAmount);
      cy.log("Type in a valid calories amount");

      cy.get(dt.topRowName).should("have.text", f.vegBroccoli);
      cy.log("Assert top row name vegetable name is Broccoli");
    });
  });

  it("DataTable - Bold Rows", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=data-display-datatable--bold-rows");
      cy.log("Visiting the Data Table component story");

      cy.get(dt.topRowName)
        .should("have.text", f.vegArtichoke)
        .should("have.css", "font-weight", "400");
      cy.log(
        "Assert top row name vegetable name is Artichoke and has normal font weight"
      );

      cy.get(dt.secondRowName)
        .should("have.text", f.vegAsparagus)
        .should("have.css", "font-weight", "700");
      cy.log(
        "Assert second row name vegetable name is Asparagus and has bold font weight"
      );
    });
  });

  it("DataTable - Clickable Rows: Search for specific vegetable name & click", () => {
    cy.fixture("component-fixtures").then((f) => {
      cy.visit("/iframe.html?id=data-display-datatable--clickable-rows");
      cy.log("Visiting the Data Table component story");

      cy.get(dt.topRowName).should("have.text", f.vegArtichoke);
      cy.log("Assert top row name vegetable name is Artichoke");

      cy.get(dt.vegetableNameInput).type(f.vegBroccoli);
      cy.log("Type in a valid vegetable name");

      cy.get(dt.topRowName).should("have.text", f.vegBroccoli);
      cy.log("Assert top row name vegetable name is Broccoli");

      cy.get(dt.topRow).should("have.class", "clickable");
      cy.log("Assert the top row is clickable");
    });
  });
});
