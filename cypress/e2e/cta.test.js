/// <reference types="Cypress" />
describe("CTA", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check CTA Desktop", () => {
    cy.viewport("macbook-13");
    cy.contains("Book a session now").should("be.visible");
    cy.get(".article > .lead").should("be.visible");
    cy.get(".article > .btn").should("be.visible");
    cy.get('[alt="Call to action image"]').should("be.visible");
  });
  it("Check CTA table", () => {
    cy.viewport("ipad-mini");
    cy.contains("Book a session now").should("be.visible");
    cy.get(".article > .lead").should("be.visible");
    cy.get(".article > .btn").should("be.visible");
    // cy.get('[alt="Call to action image"]').should("be.visible");
  });
  it("Check CTA Iphone", () => {
    cy.viewport("iphone-8");
    cy.contains("Book a session now").should("be.visible");
    cy.get(".article > .lead").should("be.visible");
    cy.get(".article > .btn").should("be.visible");
    // cy.get('[alt="Call to action image"]').should("be.visible");
  });
});
