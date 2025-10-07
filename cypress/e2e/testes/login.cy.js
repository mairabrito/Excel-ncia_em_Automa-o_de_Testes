import { LoginPage } from '../../support/pages/LoginPage.js'

describe('Login com credenciais do último cadastro', () => {
  it('Deve logar com sucesso usando o último usuário cadastrado', () => {
    cy.fixture('lastUser.json').then((user) => {
      const loginPage = new LoginPage()
      loginPage.visit()
      loginPage.login(user.email, user.password)
      loginPage.validateLoginSuccess()
    })
  })
})
