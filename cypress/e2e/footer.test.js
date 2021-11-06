/// <reference types="Cypress" />
describe("Contact", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check Contact Desktop", () => {
    cy.viewport("macbook-13");
    cy.contains("2021, MuPro").should("be.visible");
    cy.get(".goUp > svg").should("be.visible");
    cy.get(".goUp > svg").click();
    cy.get(".socials").should("be.visible");
    cy.get(".socials").children().should("have.length", 3);
  });
  it("Check Contact table", () => {
    cy.viewport("ipad-mini");
    cy.contains("2021, MuPro").should("be.visible");
    cy.get(".goUp > svg").should("be.visible");
    cy.get(".goUp > svg").click();
    cy.get(".socials").should("be.visible");
    cy.get(".socials").children().should("have.length", 3);
  });
  it("Check Contact Iphone", () => {
    cy.viewport("iphone-8");
    cy.contains("2021, MuPro").should("be.visible");
    cy.get(".goUp > svg").should("be.visible");
    cy.get(".goUp > svg").click();
    cy.get(".socials").should("be.visible");
    cy.get(".socials").children().should("have.length", 3);
  });
});
