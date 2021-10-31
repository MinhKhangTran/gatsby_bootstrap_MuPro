/// <reference types="Cypress" />
describe("Hero", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check Hero Desktop", () => {
    cy.viewport("macbook-13");
    cy.contains("Let's make some fresh beats").should(
      "have.css",
      "font-size",
      "64px"
    );

    cy.contains("We are your local music producer");
    cy.contains("Book Us");
    cy.get(".hero_img");
  });
  it("Check Hero table", () => {
    cy.viewport("ipad-mini");
    cy.contains("Let's make some fresh beats").should(
      "have.css",
      "font-size",
      "48px"
    );
    cy.contains("We are your local music producer");
    cy.contains("Book Us");
    cy.get(".hero_img");
  });
  it("Check Hero Iphone", () => {
    cy.viewport("iphone-8");
    cy.contains("Let's make some fresh beats").should(
      "have.css",
      "font-size",
      "36px"
    );
    cy.contains("We are your local music producer");
    cy.contains("Book Us");
    cy.get(".hero_img");
  });
});
