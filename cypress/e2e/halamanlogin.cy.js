import LoginPage from "../support/object_model/LoginPage";


describe("Halaman Login - SauceDemo", () => {
  beforeEach(() => {
    // Kunjungi halaman sebelum setiap test
    LoginPage.visit();
  });

  it("Berhasil login dengan kredensial valid", () => {
    LoginPage.login("standard_user", "secret_sauce");
    LoginPage.shouldRedirectToInventory();
  });

  it("Gagal login dengan password salah", () => {
    LoginPage.login("standard_user", "password_salah");
    LoginPage.shouldShowError("Epic sadface: Username and password do not match any user in this service");
  });

  it("Gagal login dengan username kosong", () => {
    LoginPage.login("", "secret_sauce");
    LoginPage.shouldShowError("Epic sadface: Username is required");
  });

  it("Gagal login dengan password kosong", () => {
    LoginPage.login("standard_user", "");
    LoginPage.shouldShowError("Epic sadface: Password is required");
  });

  it("Menampilkan elemen penting di halaman login", () => {
    LoginPage.shouldBeOnLoginPage();
    LoginPage.elements.usernameInput().should("be.visible");
    LoginPage.elements.passwordInput().should("be.visible");
    LoginPage.elements.loginButton().should("be.visible");
  });
});


