/// <reference types="Cypress" />
describe("Testimonials", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check Testimonials Desktop", () => {
    cy.viewport("macbook-13");
    cy.contains("Our pricing");
    cy.get(".container > .justify-content-center")
      .children()
      .should("have.length", 3);
    cy.get(".badge").should("be.visible");
    cy.contains("Platinum").should("be.visible");
    cy.contains("Penthouse").should("be.visible");
    cy.contains("Gold").should("be.visible");
    cy.get(".d-grid > .btn").should("have.length", 3);
  });
  it("Check Testimonials table", () => {
    cy.viewport("ipad-mini");
    cy.contains("Our pricing");
    cy.get(".container > .justify-content-center")
      .children()
      .should("have.length", 3);
    cy.get(".badge").should("be.visible");
    cy.contains("Platinum").should("be.visible");
    cy.contains("Penthouse").should("be.visible");
    cy.contains("Gold").should("be.visible");
    cy.get(".d-grid > .btn").should("have.length", 3);
  });
  it("Check Testimonials Iphone", () => {
    cy.viewport("iphone-8");
    cy.contains("Our pricing");
    cy.get(".container > .justify-content-center")
      .children()
      .should("have.length", 3);
    cy.get(".badge").should("be.visible");
    cy.contains("Platinum").should("be.visible");
    cy.contains("Penthouse").should("be.visible");
    cy.contains("Gold").should("be.visible");
    cy.get(".d-grid > .btn").should("have.length", 3);
  });
});
