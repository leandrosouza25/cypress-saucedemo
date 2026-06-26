class CartPage {

  elements = {
    productName: () => cy.get('.inventory_item_name'),
    checkoutButton: () => cy.get('#checkout')
  }

  validateProductName(expectedName) {
    this.elements.productName().should('contain.text', expectedName)
  }

  goToCheckout() {
    this.elements.checkoutButton().click()
  }
}

export default new CartPage()