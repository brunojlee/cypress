describe('LoginCard', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should login', () => {
    cy.get('input[name="email"]').type('teste@teste.com');
    cy.get('input[name="password"]').type('12345678');
    cy.get('button[type="button"]').click();
    cy.url().should('include', '/foods');
    cy.get('[data-testid=0-card-name]').should('have.text', 'Corba');
  });
});
