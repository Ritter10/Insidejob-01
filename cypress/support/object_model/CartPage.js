class CartPage {
  elements = {
    checkoutButton: () => cy.get('[data-test="checkout"]'),
  };

  clickCheckout() {
    this.elements.checkoutButton().click();
  }

  shouldBeOnCartPage() {
    cy.url().should("include", "/cart.html");
  }
}

export default new CartPage();
