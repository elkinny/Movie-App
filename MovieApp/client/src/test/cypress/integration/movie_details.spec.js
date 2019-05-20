/* eslint-disable */

describe('Movie details page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('1. Should redirect on movie details page after click on See More button', () => {
    cy.get('.movie-item__link--cy')
      .first()
      .click();
    cy.get('.movie-card__link-back--cy').click();
    cy.url().should('include', '/');
  });
});
