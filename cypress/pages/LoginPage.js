class LoginPage {

  elements = {
    username: () => cy.get('#user-name'),
    password: () => cy.get('#password'),
    loginButton: () => cy.get('#login-button')
  }

  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  fillUsername(user) {
    this.elements.username().type(user)
  }

  fillPassword(pass) {
    this.elements.password().type(pass)
  }

  clickLogin() {
    this.elements.loginButton().click()
  }

  login(user, pass) {
    this.fillUsername(user)
    this.fillPassword(pass)
    this.clickLogin()
  }
}

export default new LoginPage()