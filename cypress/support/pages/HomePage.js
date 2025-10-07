export class HomePage {
  visit() {
    cy.visit('/')
  }

  searchProduct(productName) {
    cy.get('#search_product').type(productName)
    cy.get('#submit_search').click()
  }

  validateProductExists(productName) {
    cy.get('.productinfo.text-center').should('contain.text', productName)
  }

  addMultipleProductsToCart(count = 2) {
    cy.get('.features_items .product-image-wrapper').each(($el, index) => {
      if(index < count) {
        cy.wrap($el).trigger('mouseover')
        cy.wrap($el).contains('Add to cart').click()
        cy.get('.modal-content .btn.btn-success').click()
      }
    })
  }

  validateCartQuantity(expected) {
    cy.get('.cart_quantity').should('have.length', expected)
  }

  validateSocialLinks() {
    cy.get('.social-icons > li > a').should('have.length.at.least', 3).and('be.visible')
  }

  subscribeNewsletter(email) {
    cy.get('#susbscribe_email').type(email)
    cy.get('#subscribe').click()
  }

  validateNewsletterSuccess() {
    cy.get('#success-subscribe').should('contain.text', 'You have been successfully subscribed!')
  }
}
