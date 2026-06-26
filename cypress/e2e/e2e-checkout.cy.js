import LoginPage from "../pages/LoginPage"
import InventoryPage from "../pages/InventoryPage"
import CartPage from "../pages/CartPage"
import CheckoutPage from "../pages/CheckoutPage"

describe('Fluxo completo SauceDemo E2E', () => {

  it('deve finalizar compra com sucesso', () => {

    cy.log('Abrir site SauceDemo')
    LoginPage.visit()

    cy.log('Fazer login')
    LoginPage.login('standard_user', 'secret_sauce')

    cy.log('Adicionar produto')
    InventoryPage.addBackpackToCart()

    cy.log('Ir para carrinho')
    InventoryPage.goToCart()

    cy.log('Validar produto no carrinho')
    CartPage.validateProductName('Sauce Labs Backpack')
    CartPage.goToCheckout()

    cy.log('Preencher checkout')
    CheckoutPage.fillCheckoutInfo('Leandro', 'Souza', '12345')
    CheckoutPage.continue()
    CheckoutPage.finish()

    cy.log('Validar sucesso')
    CheckoutPage.validateSuccessMessage()

  })

})