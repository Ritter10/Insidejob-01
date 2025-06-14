class InventoryPage {
  elements = {
    addToCartButton: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    cartIcon: () => cy.get(".shopping_cart_link"),
    menuButton: () => cy.get("#react-burger-menu-btn"),
    logoutLink: () => cy.get("#logout_sidebar_link"),
  };

  addItemToCart() {
    this.elements.addToCartButton().click();
  }

  goToCart() {
    this.elements.cartIcon().click();
  }

  openMenu() {
    this.elements.menuButton().click();
  }

  clickLogout() {
    this.elements.logoutLink().click();
  }

  logout() {
    this.openMenu();
    this.clickLogout();
  }

  shouldRedirectToInventory() {
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("exist");
  }
}

export default new InventoryPage();
