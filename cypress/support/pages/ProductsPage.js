export class ProductsPage {
  visit() {
    cy.visit('/')
  }

  addFirstProductToCart() {
    cy.get('.features_items .product-image-wrapper').first().trigger('mouseover')
    cy.contains('Add to cart').click()
    cy.get('.modal-content').should('be.visible')
    cy.get('.modal-content .btn.btn-success').click()
  }
}
