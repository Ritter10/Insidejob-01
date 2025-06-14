describe('Uji Filter Produk di Swag Labs', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    
    // Login ke akun
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Pastikan masuk ke halaman inventory
    cy.url().should('include', '/inventory.html');
  });

  it('Harus dapat mengurutkan produk dari A-Z', () => {
    cy.get('.product_sort_container').select('Name (A to Z)');

    cy.get('.inventory_item_name').then(($items) => {
      const namaProduk = $items.map((index, el) => Cypress.$(el).text()).get();
      const sortedNamaProduk = [...namaProduk].sort();
      
      expect(namaProduk).to.deep.equal(sortedNamaProduk);
    });
  });

  it('Harus dapat mengurutkan produk dari Z-A', () => {
    cy.get('.product_sort_container').select('Name (Z to A)');

    cy.get('.inventory_item_name').then(($items) => {
      const namaProduk = $items.map((index, el) => Cypress.$(el).text()).get();
      const sortedNamaProduk = [...namaProduk].sort().reverse();
      
      expect(namaProduk).to.deep.equal(sortedNamaProduk);
    });
  });

  it('Harus dapat mengurutkan produk berdasarkan harga dari rendah ke tinggi', () => {
    cy.get('.product_sort_container').select('Price (low to high)');

    cy.get('.inventory_item_price').then(($items) => {
      const hargaProduk = $items.map((index, el) => parseFloat(Cypress.$(el).text().replace('$', ''))).get();
      const sortedHargaProduk = [...hargaProduk].sort((a, b) => a - b);
      
      expect(hargaProduk).to.deep.equal(sortedHargaProduk);
    });
  });

  it('Harus dapat mengurutkan produk berdasarkan harga dari tinggi ke rendah', () => {
    cy.get('.product_sort_container').select('Price (high to low)');

    cy.get('.inventory_item_price').then(($items) => {
      const hargaProduk = $items.map((index, el) => parseFloat(Cypress.$(el).text().replace('$', ''))).get();
      const sortedHargaProduk = [...hargaProduk].sort((a, b) => b - a);
      
      expect(hargaProduk).to.deep.equal(sortedHargaProduk);
    });
  });
});
