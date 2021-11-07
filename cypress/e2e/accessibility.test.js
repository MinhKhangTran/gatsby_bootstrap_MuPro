/// <reference types="Cypress" />
describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
  it("Go to the about page and check for a11y issues", () => {
    cy.get('[href="/about"]').click().checkA11y();
  });
});
