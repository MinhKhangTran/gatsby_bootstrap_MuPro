/// <reference types="Cypress" />
describe("Project", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check Project Desktop", () => {
    cy.viewport("macbook-13");
    cy.contains("Check our latest works");
    cy.get(".project_row").children().should("have.length", 3);
    cy.get(".project_img").should("have.length", 3);
  });
  it("Check Project table", () => {
    cy.viewport("ipad-mini");
    cy.contains("Check our latest works");
    cy.get(".project_row").children().should("have.length", 3);
    cy.get(".project_img").should("have.length", 3);
  });
  it("Check Project Iphone", () => {
    cy.viewport("iphone-8");
    cy.contains("Check our latest works");
    cy.get(".project_row").children().should("have.length", 3);
    cy.get(".project_img").should("have.length", 3);
  });
});
