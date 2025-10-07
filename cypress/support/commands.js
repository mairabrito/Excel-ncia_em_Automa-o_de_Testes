// Comando para login
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('input[data-qa="login-email"]').type(email)
  cy.get('input[data-qa="login-password"]').type(password)
  cy.get('button[data-qa="login-button"]').click()
})

// Comando para preencher formulário de contato
Cypress.Commands.add('fillContactForm', (name, email, message) => {
  cy.get('input[name="name"]').type(name)
  cy.get('input[name="email"]').type(email)
  cy.get('textarea[name="message"]').type(message)
  cy.get('input[name="submit"]').click()
})

// Comando para cadastro completo
Cypress.Commands.add('signupComplete', (user) => {
  cy.visit('/login')
  cy.get('input[data-qa="signup-name"]').type(user.name)
  cy.get('input[data-qa="signup-email"]').type(user.email)
  cy.get('button[data-qa="signup-button"]').click()

  cy.url().should('include', '/signup')

  // Preenche dados do cadastro
  cy.get(`#id_gender${user.gender}`).check()
  cy.get('#password').type(user.password)
  cy.get('#days').select(user.birth.day)
  cy.get('#months').select(user.birth.month)
  cy.get('#years').select(user.birth.year)
  if(user.newsletter) cy.get('#newsletter').check()
  if(user.optin) cy.get('#optin').check()

  cy.get('#first_name').type(user.firstName)
  cy.get('#last_name').type(user.lastName)
  cy.get('#company').type(user.company)
  cy.get('#address1').type(user.address1)
  cy.get('#address2').type(user.address2)
  cy.get('#country').select(user.country)
  cy.get('#state').type(user.state)
  cy.get('#city').type(user.city)
  cy.get('#zipcode').type(user.zipcode)
  cy.get('#mobile_number').type(user.mobile)

  cy.get('button[data-qa="create-account"]').click()
})
