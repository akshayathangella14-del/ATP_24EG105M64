// Available coupons
const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
    'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// TODO: Implement these functions

export function validateCoupon(couponCode, cartTotal, cartItems) {
     let coupon = coupons[couponCode];
    // 1. Check if coupon exists
    if (!coupon) {
        return { valid: false, message: "Invalid coupon code" };
    }
    // 2. Check minimum amount
    if (cartTotal < coupon.minAmount) {
        return { valid: false, message: "Minimum amount not satisfied" };
    }
    // 3. Check category requirement (if exists)
    if (coupon.category) {
        let hasCategory = cartItems.some(item => 
            item.category === coupon.category
        );

        if (!hasCategory) {
            return { valid: false, message: "Coupon not applicable for selected products" };
        }
    }
    return { valid: true, message: "Coupon applied successfully" };
   
}

export function calculateDiscount(couponCode, cartTotal) {
    // Calculate discount amount based on coupon type
    // Return discount amount
     let coupon = coupons[couponCode];
    if (!coupon) {
        return 0;
    }
    if (coupon.type === "percentage") {
        return (cartTotal * coupon.value) / 100;
    }
    if (coupon.type === "flat") {
        return coupon.value;
    }
    return 0;

}

export function applyDiscount(cartTotal, couponCode, cartItems) {
    // 1. Validate coupon
    // 2. If valid, calculate discount
    // 3. Return final amount and discount details
    // Return { 
    //   originalTotal: ..., 
    //   discount: ..., 
    //   finalTotal: ...,
    //   message: '...'
    // }
     let validation = validateCoupon(couponCode, cartTotal, cartItems);
    if (!validation.valid) {
        return {
            originalTotal: cartTotal,
            discount: 0,
            finalTotal: cartTotal,
            message: validation.message
        };
    }
    let discountAmount = calculateDiscount(couponCode, cartTotal);

    let finalAmount = cartTotal - discountAmount;
    return {
        originalTotal: cartTotal,
        discount: discountAmount,
        finalTotal: finalAmount,
        message: "Discount applied successfully"
    };
}

