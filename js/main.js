let cartCount = 0;

function updateCart() {
    document.querySelector('.cart a').textContent = `Cart (${cartCount})`;
}

function addToCart() {
    cartCount++;
    updateCart();
}

// Example usage: Bind addToCart() to product 'Add to Cart' buttons in the HTML
