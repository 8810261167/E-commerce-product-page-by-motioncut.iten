let cart = [];
let totalPrice = 0;

function addToCart() {
    const item = {
        name: "Rahul's Shirt",
        price: 20.99
    };

    cart.push(item);
    totalPrice += item.price;

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    cartItemsElement.innerHTML = "";
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });

    cartTotalElement.textContent = totalPrice.toFixed(2);
}

function viewCart() {
    alert("Cart Items:\n" + cart.map(item => `${item.name} - $${item.price.toFixed(2)}`).join("\n"));
}
