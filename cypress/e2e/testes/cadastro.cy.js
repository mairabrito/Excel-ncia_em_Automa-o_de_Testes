import { SignupPage } from '../../support/pages/SignupPage.js'

describe('Cadastro de usuário completo', () => {
  it('Deve cadastrar um usuário com sucesso e salvar credenciais', () => {
    cy.fixture('users.json').then((users) => {
      const timestamp = Date.now()
      const user = {
        ...users.user1,
        email: `teste${timestamp}@mail.com`
      }

      const signupPage = new SignupPage()
      signupPage.visit()
      signupPage.fillSignupForm(user)
      signupPage.fillDetailsForm(user)
      signupPage.validateAccountCreated()

      // Salvar credenciais em um arquivo fixture para usar depois
      cy.writeFile('cypress/fixtures/lastUser.json', {
        email: user.email,
        password: user.password
      })
    })
  })
})



describe('Cadastro - Campos obrigatórios', () => {
  it('Não deve seguir para tela de cadastrar sem preencher campos obrigatórios', () => {
    const signupPage = new SignupPage()
    signupPage.visit()
    signupPage.fillSignupForm({}) // nenhum dado preenchido
    signupPage.validateErrorMessage('Preencha este campo.')
  })
})


