class InventoryPage {

  elements = {
    productBackpack: () => cy.get('#add-to-cart-sauce-labs-backpack'),
    cartIcon: () => cy.get('.shopping_cart_link')
  }

  addBackpackToCart() {
    this.elements.productBackpack().click()
  }

  goToCart() {
    this.elements.cartIcon().click()
  }
}

export default new InventoryPage()