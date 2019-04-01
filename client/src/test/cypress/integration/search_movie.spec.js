/* eslint-disable */

describe('Search movie page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('1. Should redirect on search movie page after click on Back button', () => {
    cy.get('.movie-item__link--cy')
      .first()
      .should('have.attr', 'href')
      .then(href => {
        cy.get('.movie-item__link--cy')
          .first()
          .click();
        cy.url().should('include', href);
      });
  });
});
