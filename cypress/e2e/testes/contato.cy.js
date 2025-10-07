import { ContactPage } from '../../support/pages/ContactPage.js'

describe('Formulário de Contato', () => {
  it('Deve enviar uma mensagem com sucesso', () => {
    cy.fixture('contact.json').then((contact) => {
      const contactPage = new ContactPage()
      contactPage.visit()
      const timestamp = Date.now()
      contactPage.fillForm(contact.message1.name, `teste${timestamp}@mail.com`, contact.message1.message)
      contactPage.validateSuccess()
    })
  })
})
