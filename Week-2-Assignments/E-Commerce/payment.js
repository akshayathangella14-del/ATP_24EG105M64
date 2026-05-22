import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// TODO: Implement these functions
export function processPayment(paymentMethod, couponCode = null) {

    // 1. Get cart items and total
    let items = getCartItems();
    let subtotal = getCartTotal();

    if (items.length === 0) {
        return {
            status: "failed",
            message: "Cart is empty"
        };
    }

    // 2. Apply discount if coupon provided
    let discountDetails = {
        originalTotal: subtotal,
        discount: 0,
        finalTotal: subtotal
    };

    if (couponCode) {
        discountDetails = applyDiscount(subtotal, couponCode, items);
    }

    // 3. Validate payment method
    let validPayment = validatePaymentMethod(paymentMethod);

    if (!validPayment) {
        return {
            status: "failed",
            message: "Invalid payment method"
        };
    }

    // 4. Simulate payment (always success for now)
    let paymentStatus = "success";

    // 5. Reduce stock for all items
    // (Only needed if not already reduced in cart)
    for (let item of items) {
        reduceStock(item.productId, item.quantity);
    }

    // 6. Generate order ID
    let orderId = generateOrderId();

    // 7. Clear cart
    clearCart();

    // 8. Return order summary
    return {
        orderId: orderId,
        items: items,
        subtotal: discountDetails.originalTotal,
        discount: discountDetails.discount,
        total: discountDetails.finalTotal,
        paymentMethod: paymentMethod,
        status: paymentStatus,
        message: "Order placed successfully"
    };
}

export function validatePaymentMethod(method) {
    const validMethods = ["card", "upi", "cod"];
    return validMethods.includes(method.toLowerCase());
}

function generateOrderId() {
    // Generate random order ID
    return 'ORD' + Date.now();
}
