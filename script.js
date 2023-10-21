const products = document.querySelectorAll('.product');
const cartItems = document.querySelector('.cart-items');
const total = document.getElementById('total');

let cartTotal = 0;

products.forEach(product => {
    const addToCartButton = product.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        const productName = product.querySelector('h2').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - $${productPrice}`;
        cartItems.appendChild(cartItem);

        cartTotal += productPrice;
        total.textContent = cartTotal.toFixed(2);
    });
});
