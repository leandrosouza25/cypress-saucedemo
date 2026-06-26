class CheckoutPage {

  elements = {
    firstName: () => cy.get('#first-name'),
    lastName: () => cy.get('#last-name'),
    postalCode: () => cy.get('#postal-code'),
    continueButton: () => cy.get('#continue'),
    finishButton: () => cy.get('#finish'),
    successMessage: () => cy.get('.complete-header')
  }

  fillCheckoutInfo(first, last, zip) {
    this.elements.firstName().type(first)
    this.elements.lastName().type(last)
    this.elements.postalCode().type(zip)
  }

  continue() {
    this.elements.continueButton().click()
  }

  finish() {
    this.elements.finishButton().click()
  }

  validateSuccessMessage() {
    this.elements.successMessage()
      .should('contain.text', 'Thank you for your order!')
  }
}

export default new CheckoutPage()