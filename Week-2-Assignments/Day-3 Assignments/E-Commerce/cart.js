import { getProductById, checkStock, reduceStock } from './product.js';

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
    let product = getProductById(productId);
    if (!product) {
        return "Product not found";
    }
    let available = checkStock(productId, quantity)
    if (!available) {
        return "Stock not available";
    }
    let existing = cartItems.find(item => item.productId === productId);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cartItems.push({ productId, quantity });
    }

    reduceStock(productId, quantity);

    return "Item added successfully";
    // 2. Check stock availability
    // 3. Check if product already in cart
    //    - If yes, update quantity
    //    - If no, add new item
    // 4. Return success/error message
}

export function removeFromCart(productId) {
    // Remove product from cart
    let index = cartItems.findIndex(item => item.productId === productId);
    if (index !== -1) {
        cartItems.splice(index, 1);
        return "Item removed";
    }
    return "Item not found in cart";

}

export function updateQuantity(productId, newQuantity) {
    // Update quantity of product in cart
    // Check stock before updating
    let product = cartItems.find(item => item.productId === productId);
    if (!product) {
        return "Product not in cart";
    }
    let available = checkStock(productId, newQuantity);
    if (!available) {
        return "Not enough stock";
    }
    product.quantity = newQuantity;
    return "Quantity updated";
}

export function getCartItems() {
    // Return all cart items with product details
    return cartItems
}

export function getCartTotal() {
    // Calculate total price of all items in cart
    // Return total
    let total = 0;
    for (let item of cartItems) {
        let product = getProductById(item.productId);
        total += product.price * item.quantity;
    }
    return total;
}

export function clearCart() {
    // Empty the cart
    cartItems = [];
    return "Cart cleared";
}
