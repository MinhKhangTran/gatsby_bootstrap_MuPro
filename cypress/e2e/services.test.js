/// <reference types="Cypress" />
describe("Services", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check Services Desktop", () => {
    cy.viewport("macbook-13");
    cy.contains("This is what we offer");
    cy.get(".col_service").children().should("have.length", 3);
    cy.get(".service_img").should("be.visible");
  });
  it("Check Services table", () => {
    cy.viewport("ipad-mini");
    cy.contains("This is what we offer");
    cy.get(".col_service").children().should("have.length", 3);
    cy.get(".service_img").should("be.visible");
  });
  it("Check Services Iphone", () => {
    cy.viewport("iphone-8");
    cy.contains("This is what we offer");
    cy.get(".col_service").children().should("have.length", 3);
    cy.get(".service_img").should("not.be.visible");
  });
});
