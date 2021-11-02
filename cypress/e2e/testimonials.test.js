/// <reference types="Cypress" />
describe("Testimonials", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check Testimonials Desktop", () => {
    cy.viewport("macbook-13");
    cy.contains("Trusted by these partners");
    cy.get(".testimonials_wrapper > .container > .text-white")
      .children()
      .should("have.length", 4);
    cy.get('[alt="mixboard"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    cy.get(".mt-5 > .row").children().should("have.length", 4);
  });
  it("Check Testimonials table", () => {
    cy.viewport("ipad-mini");
    cy.contains("Trusted by these partners");
    cy.get(".testimonials_wrapper > .container > .text-white")
      .children()
      .should("have.length", 4);
    cy.get('[alt="mixboard"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    cy.get(".mt-5 > .row").children().should("have.length", 4);
  });
  it("Check Testimonials Iphone", () => {
    cy.viewport("iphone-8");
    cy.contains("Trusted by these partners");
    cy.get(".testimonials_wrapper > .container > .text-white")
      .children()
      .should("have.length", 4);
    cy.get('[alt="mixboard"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    cy.get(".mt-5 > .row").children().should("have.length", 4);
  });
});
