/// <reference types="Cypress" />
describe("Aboutpage", () => {
  beforeEach(() => {
    cy.visit("/about");
  });
  it("Check Aboutpage Desktop", () => {
    cy.viewport("macbook-13");
    cy.contains("Dj MuPro").should("be.visible");
    cy.contains("CEO, MuPro").should("be.visible");
    cy.get(".row > :nth-child(1) > :nth-child(3)").should("be.visible");
    cy.get(".row > :nth-child(1) > :nth-child(4)").should("be.visible");
    cy.contains("Contacts").should("be.visible");
    cy.contains("Follow Me").should("be.visible");
    cy.contains("Mupro@example.com").should("be.visible");
    cy.get(".row > :nth-child(1) > .socials")
      .children()
      .should("have.length", 3);
  });
  it("Check Aboutpage table", () => {
    cy.viewport("ipad-mini");
    cy.contains("Dj MuPro").should("be.visible");
    cy.contains("CEO, MuPro").should("be.visible");
    cy.get(".col-md-8").children().should("have.length", 2);
    cy.contains("Contacts").should("be.visible");
    cy.contains("Follow Me").should("be.visible");
    cy.contains("Mupro@example.com").should("be.visible");
    cy.get(".px-md-5 > .socials").children().should("have.length", 3);
  });
  it("Check Aboutpage Iphone", () => {
    cy.viewport("iphone-8");
    cy.contains("Dj MuPro").should("be.visible");
    cy.contains("CEO, MuPro").should("be.visible");
    cy.get(".col-md-8").children().should("have.length", 2);
    cy.contains("Contacts").should("be.visible");
    cy.contains("Follow Me").should("be.visible");
    cy.contains("Mupro@example.com").should("be.visible");
    cy.get(".px-md-5 > .socials").children().should("have.length", 3);
  });
});
