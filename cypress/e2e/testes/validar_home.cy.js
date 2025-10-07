describe('Teste Allure', () => {
  it('Deve gerar allure-results', () => {
    cy.allure().label('feature', 'Página Inicial');
    cy.visit('/');
    cy.allure().step('Página acessada');
    cy.contains('AutomationExercise').should('exist');
  });
});
