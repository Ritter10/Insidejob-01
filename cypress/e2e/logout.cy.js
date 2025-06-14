// Import instance InventoryPage dan LoginPage
import LoginPage from '../support/object_model/LoginPage';
import InventoryPage from '../support/object_model/InventoryPage';



describe("Halaman Inventory - Logout - SauceDemo", () => {
  beforeEach(() => {
    // Login terlebih dahulu sebelum setiap test
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");
    InventoryPage.shouldRedirectToInventory();
  });

  it("Berhasil logout dan kembali ke halaman login", () => {
    InventoryPage.logout();
    cy.url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="login-button"]').should("be.visible");
  });

  it("Menu sidebar muncul saat tombol menu ditekan", () => {
    InventoryPage.openMenu();
    cy.get(".bm-menu").should("be.visible"); // Menu sidebar harus muncul
  });

  it("Tombol logout muncul di sidebar menu", () => {
    InventoryPage.openMenu();
    cy.get("#logout_sidebar_link").should("be.visible");
  });

  it("Tidak bisa mengakses halaman inventory setelah logout (dengan back)", () => {
    InventoryPage.logout();
    cy.go('back');
    cy.url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="login-button"]').should("be.visible");
  });
});
