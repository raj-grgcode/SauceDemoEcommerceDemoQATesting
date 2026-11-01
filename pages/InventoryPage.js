class InventoryPage {
    constructor(page) {
        this.page = page;
        this.pageTitle = page.locator('.title');
        this.productList = page.locator('.inventory_list');
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon = page.locator('.shopping_cart_link');
    }
}

module.exports = { InventoryPage };