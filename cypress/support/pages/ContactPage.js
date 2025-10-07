export class ContactPage {
  visit() {
    cy.visit('/contact_us')
  }

  fillForm(name, email, message) {
    cy.get('input[name="name"]').type(name)
    cy.get('input[name="email"]').type(email)
    cy.get('textarea[name="message"]').type(message)
    cy.get('input[name="submit"]').click()
  }

  validateSuccess() {
    cy.get('div.status.alert.alert-success')
      .should('contain.text', 'Success! Your details have been submitted successfully.')
  }
}
