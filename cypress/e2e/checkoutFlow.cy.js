import LoginPage from "../support/object_model/LoginPage";
import InventoryPage from "../support/object_model/InventoryPage";
import CartPage from "../support/object_model/CartPage";
import CheckoutInfoPage from "../support/object_model/CheckoutInfoPage";



describe("Checkout Flow - Swag Labs", () => {
  it("Login dan checkout barang", () => {
    // Step 1: Buka halaman login
    LoginPage.visit();

    // Step 2: Login dengan akun valid
    LoginPage.login("standard_user", "secret_sauce");
    LoginPage.shouldRedirectToInventory();

    // Step 3: Tambahkan 1 barang ke keranjang
    InventoryPage.addItemToCart();

    // Step 4: Masuk ke halaman cart
    InventoryPage.goToCart();
    CartPage.shouldBeOnCartPage();

    // Step 5: Klik tombol Checkout
    CartPage.clickCheckout();

    // Step 6: Verifikasi berpindah ke halaman checkout step one
    cy.url().should("include", "/checkout-step-one.html");
    cy.get('[data-test="firstName"]').should("be.visible");

    // Step 6: Isi form data pembeli
CheckoutInfoPage.shouldBeOnCheckoutInfoPage();
CheckoutInfoPage.fillForm("Budi", "Santoso", "12345");

// Step 7: Klik tombol Continue
CheckoutInfoPage.clickContinue();


// Step 8: Verifikasi redirect ke halaman ringkasan
cy.url().should("include", "/checkout-step-two.html");
  });
});
