/// <reference types="Cypress" />

const urls = ["/local-coffee-gig", "/voxy-house-part", "/podcast-for-peter"];

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

describe("Accessibility tests", () => {
  urls.forEach((url) => {
    it(`Accessibility tests on ${url}`, () => {
      cy.visit(url).get("main").injectAxe();
      cy.checkA11y();
    });
  });
});
