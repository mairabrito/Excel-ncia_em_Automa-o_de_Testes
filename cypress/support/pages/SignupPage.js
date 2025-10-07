export class SignupPage {
  visit() {
    cy.visit('/login')
  }

  fillSignupForm(user) {
    if(user.name) cy.get('input[data-qa="signup-name"]').type(user.name)
    if(user.email) cy.get('input[data-qa="signup-email"]').type(user.email)
    cy.get('button[data-qa="signup-button"]').click()
  }

  fillDetailsForm(user) {
    cy.url().should('include', '/signup')
    if(user.gender !== undefined) cy.get(`#id_gender${user.gender}`).check()
    if(user.password) cy.get('#password').type(user.password)
    if(user.birth) {
      cy.get('#days').select(user.birth.day)
      cy.get('#months').select(user.birth.month)
      cy.get('#years').select(user.birth.year)
    }
    if(user.newsletter) cy.get('#newsletter').check()
    if(user.optin) cy.get('#optin').check()
    if(user.firstName) cy.get('#first_name').type(user.firstName)
    if(user.lastName) cy.get('#last_name').type(user.lastName)
    if(user.company) cy.get('#company').type(user.company)
    if(user.address1) cy.get('#address1').type(user.address1)
    if(user.address2) cy.get('#address2').type(user.address2)
    if(user.country) cy.get('#country').select(user.country)
    if(user.state) cy.get('#state').type(user.state)
    if(user.city) cy.get('#city').type(user.city)
    if(user.zipcode) cy.get('#zipcode').type(user.zipcode)
    if(user.mobile) cy.get('#mobile_number').type(user.mobile)
    cy.get('button[data-qa="create-account"]').click()
  }

  validateAccountCreated() {
    cy.get('h2[data-qa="account-created"]').should('contain.text', 'Account Created!')
  }

  validateErrorMessage(message) {
  cy.get('input[name="email"]') // ou o seletor do input
    .then($input => {
      expect($input[0].validationMessage).to.eq(message)
    })
}
}
