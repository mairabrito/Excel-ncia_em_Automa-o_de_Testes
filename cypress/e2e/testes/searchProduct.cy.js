import { HomePage } from '../../support/pages/HomePage.js'

describe('Pesquisa de produto', () => {
  it('Deve pesquisar um produto e validar resultado', () => {
    const homePage = new HomePage()
    homePage.visit()
    cy.visit('/products')
    const product = 'Dress'  
    homePage.searchProduct(product)
    homePage.validateProductExists(product)
  })
})
