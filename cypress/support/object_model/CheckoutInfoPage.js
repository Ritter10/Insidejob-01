class CheckoutInfoPage {
  elements = {
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
  };

  fillForm(firstName, lastName, postalCode) {
    this.elements.firstNameInput().type(firstName);
    this.elements.lastNameInput().type(lastName);
    this.elements.postalCodeInput().type(postalCode);
  }

  clickContinue() {
    this.elements.continueButton().click();
  }

  shouldBeOnCheckoutInfoPage() {
    cy.url().should("include", "/checkout-step-one.html");
  }
}

export default new CheckoutInfoPage();
