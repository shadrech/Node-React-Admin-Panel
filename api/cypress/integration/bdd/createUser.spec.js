describe('Create User', () => {
  it('should display create user form when add button clicked', () => {
    cy.visit('localhost:3000');
    cy.get('.add-btn')
      .click();

    cy.get('.user-form')
      .should('be.visible');
  });
});