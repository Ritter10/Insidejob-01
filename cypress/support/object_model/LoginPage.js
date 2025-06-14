// cypress/support/pages/LoginPage.js

class LoginPage {
  // *Element Locators*
  elements = {
    usernameInput: () => cy.get("#user-name"),
  
    passwordInput: () => cy.get("#password"),
    loginButton: () => cy.get("#login-button"),
    errorMessage: () => cy.get('[data-test="error"]'),
    loginLogo: () => cy.get(".login_logo"),
    botImage: () => cy.get(".bot_column"),
  };

  // *Page Actions*
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  typeUsername(username) {
    this.elements.usernameInput().clear();
    if (username) {
      this.elements.usernameInput().type(username);
    }
  }

  typePassword(password) {
    this.elements.passwordInput().clear();
    if (password) {
      this.elements.passwordInput().type(password);
    }
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  // *Shortcut: Login dengan username & password*
  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }

  // *Validations*
  shouldShowError(message) {
    this.elements.errorMessage()
      .should("be.visible")
      .and("contain.text", message);
  }

  shouldBeOnLoginPage() {
    cy.url().should("eq", "https://www.saucedemo.com/");
    this.elements.loginLogo().should("be.visible");
  }

  shouldRedirectToInventory() {
    cy.url().should("include", "/inventory.html");
  }
}

// Export instance agar bisa langsung digunakan
export default new LoginPage();
