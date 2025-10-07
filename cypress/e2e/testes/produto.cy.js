import { ProductsPage } from '../../support/pages/ProductsPage.js'

describe('Adicionar produtos ao carrinho', () => {
  it('Deve adicionar um produto ao carrinho', () => {
    const productsPage = new ProductsPage()
    productsPage.visit()
    productsPage.addFirstProductToCart()
  })
})
