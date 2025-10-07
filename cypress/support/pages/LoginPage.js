export class LoginPage {
  visit() {
    cy.visit('/login')
  }

  login(email, password) {
    cy.get('input[data-qa="login-email"]').type(email)
    cy.get('input[data-qa="login-password"]').type(password)
    cy.get('button[data-qa="login-button"]').click()
  }

  validateLoginSuccess() {
    cy.get('a[href="/logout"]').should('be.visible')
  }
}
