/// <reference types="Cypress" />
describe("Contact", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check Contact Desktop", () => {
    cy.viewport("macbook-13");
    cy.get("#contact > .container > h2").should("be.visible");
    cy.contains("Get in touch").should("be.visible");
    cy.get(".erste_reihe > :nth-child(2)").children().should("have.length", 3);
    cy.get(".erste_reihe > :nth-child(5)").children().should("have.length", 3);
    cy.get(".erste_reihe > :nth-child(6)").children().should("have.length", 3);
    cy.get(".erste_reihe > :nth-child(3)").children().should("have.length", 3);
    cy.contains("Location").should("be.visible");
    cy.get(".container > .mt-5 > :nth-child(2)")
      .children()
      .should("have.length", 3);
    cy.get(".container > .mt-5 > :nth-child(3)")
      .children()
      .should("have.length", 3);
    cy.get(".container > .mt-5 > :nth-child(5)")
      .children()
      .should("have.length", 3);
    cy.get(".container > .mt-5 > :nth-child(6)")
      .children()
      .should("have.length", 3);
  });
  it("Check Contact table", () => {
    cy.viewport("ipad-mini");
    cy.get("#contact > .container > h2").should("be.visible");
    cy.contains("Get in touch").should("be.visible");
    cy.get(".erste_reihe > :nth-child(2)").children().should("have.length", 3);
    cy.get(".erste_reihe > :nth-child(5)").children().should("have.length", 3);
    cy.get(".erste_reihe > :nth-child(6)").children().should("have.length", 3);
    cy.get(".erste_reihe > :nth-child(3)").children().should("have.length", 3);
    cy.contains("Location").should("be.visible");
    cy.get(".container > .mt-5 > :nth-child(2)")
      .children()
      .should("have.length", 3);
    cy.get(".container > .mt-5 > :nth-child(3)")
      .children()
      .should("have.length", 3);
    cy.get(".container > .mt-5 > :nth-child(5)")
      .children()
      .should("have.length", 3);
    cy.get(".container > .mt-5 > :nth-child(6)")
      .children()
      .should("have.length", 3);
  });
  it("Check Contact Iphone", () => {
    cy.viewport("iphone-8");
    cy.get("#contact > .container > h2").should("be.visible");
    cy.contains("Get in touch").should("be.visible");
    cy.get(".erste_reihe > :nth-child(2)").children().should("have.length", 3);
    cy.get(".erste_reihe > :nth-child(5)").children().should("have.length", 3);
    cy.get(".erste_reihe > :nth-child(6)").children().should("have.length", 3);
    cy.get(".erste_reihe > :nth-child(3)").children().should("have.length", 3);
    cy.contains("Location").should("be.visible");
    cy.get(".container > .mt-5 > :nth-child(2)")
      .children()
      .should("have.length", 3);
    cy.get(".container > .mt-5 > :nth-child(3)")
      .children()
      .should("have.length", 3);
    cy.get(".container > .mt-5 > :nth-child(5)")
      .children()
      .should("have.length", 3);
    cy.get(".container > .mt-5 > :nth-child(6)")
      .children()
      .should("have.length", 3);
  });
});
