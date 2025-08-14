// Enhanced Cart Functionality
document.addEventListener('DOMContentLoaded', function() {
    displayEnhancedCart();
    loadRecommendedProducts();
    updateCartCount();
    updateWishlistCount();
});

function displayEnhancedCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContent = document.getElementById('cart-content');
    
    if (cart.length === 0) {
        cartContent.innerHTML = createEmptyCartHTML();
        return;
    }
    
    const cartHTML = `
        <div class="cart-items-container">
            <div class="cart-items-header">
                <div class="header-item">Product</div>
                <div class="header-price">Price</div>
                <div class="header-quantity">Quantity</div>
                <div class="header-total">Total</div>
                <div class="header-action">Action</div>
            </div>
            <div class="cart-items-list">
                ${cart.map(item => createCartItemHTML(item)).join('')}
            </div>
        </div>
        <div class="cart-summary">
            ${createCartSummaryHTML(cart)}
        </div>
    `;
    
    cartContent.innerHTML = cartHTML;
    
    // Show recommended products if cart has items
    document.getElementById('recommended-section').style.display = 'block';
}

function createEmptyCartHTML() {
    return `
        <div class="empty-cart">
            <div class="empty-cart-icon">
                <i class="fas fa-shopping-cart"></i>
            </div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <div class="empty-cart-actions">
                <button class="btn btn-primary" onclick="window.location.href='products.html'">
                    <i class="fas fa-shopping-bag"></i>
                    Start Shopping
                </button>
                <button class="btn btn-outline" onclick="window.location.href='deals.html'">
                    <i class="fas fa-tags"></i>
                    View Deals
                </button>
            </div>
            <div class="empty-cart-features">
                <div class="feature">
                    <i class="fas fa-truck"></i>
                    <span>Free shipping on orders above ₹500</span>
                </div>
                <div class="feature">
                    <i class="fas fa-shield-alt"></i>
                    <span>100% secure payments</span>
                </div>
                <div class="feature">
                    <i class="fas fa-undo"></i>
                    <span>Easy 30-day returns</span>
                </div>
            </div>
        </div>
    `;
}

function createCartItemHTML(item) {
    const itemTotal = (item.price * (item.quantity || 1)).toFixed(2);
    
    return `
        <div class="cart-item" data-item-id="${item.id}">
            <div class="item-product">
                <div class="item-image">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="${item.name}" loading="lazy">
                </div>
                <div class="item-details">
                    <h3 class="item-name">${item.name}</h3>
                    <div class="item-meta">
                        <span class="item-sku">SKU: ${item.id || 'N/A'}</span>
                        <span class="item-availability">
                            <i class="fas fa-check-circle"></i>
                            In Stock
                        </span>
                    </div>
                </div>
            </div>
            <div class="item-price">
                <span class="price">₹${item.price}</span>
            </div>
            <div class="item-quantity">
                <div class="quantity-controls">
                    <button class="quantity-btn minus" onclick="updateQuantity('${item.id}', ${(item.quantity || 1) - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" class="quantity-input" value="${item.quantity || 1}" min="1" max="99" 
                           onchange="updateQuantity('${item.id}', this.value)">
                    <button class="quantity-btn plus" onclick="updateQuantity('${item.id}', ${(item.quantity || 1) + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="item-total">
                <span class="total-price">₹${itemTotal}</span>
            </div>
            <div class="item-action">
                <button class="remove-btn" onclick="removeFromCart('${item.id}')" title="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
                <button class="wishlist-btn" onclick="moveToWishlist('${item.id}')" title="Move to wishlist">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;
}

function createCartSummaryHTML(cart) {
    const subtotal = cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
    const shipping = subtotal >= 500 ? 0 : 50;
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + shipping + tax;
    
    return `
        <div class="summary-card">
            <h3>Order Summary</h3>
            <div class="summary-details">
                <div class="summary-row">
                    <span>Subtotal (${cart.reduce((count, item) => count + (item.quantity || 1), 0)} items)</span>
                    <span>₹${subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span>Shipping</span>
                    <span>${shipping === 0 ? 'FREE' : '₹' + shipping.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span>Tax (GST 18%)</span>
                    <span>₹${tax.toFixed(2)}</span>
                </div>
                ${shipping === 0 ? '' : `
                <div class="summary-note">
                    <i class="fas fa-info-circle"></i>
                    <span>Add ₹${(500 - subtotal).toFixed(2)} more for free shipping</span>
                </div>
                `}
                <div class="summary-divider"></div>
                <div class="summary-row total-row">
                    <span>Total</span>
                    <span>₹${total.toFixed(2)}</span>
                </div>
            </div>
            <div class="summary-actions">
                <button class="btn btn-primary checkout-btn" onclick="proceedToCheckout()">
                    <i class="fas fa-lock"></i>
                    Proceed to Checkout
                </button>
                <div class="payment-methods">
                    <span>We accept:</span>
                    <div class="payment-icons">
                        <i class="fab fa-cc-visa"></i>
                        <i class="fab fa-cc-mastercard"></i>
                        <i class="fab fa-cc-paypal"></i>
                        <i class="fas fa-university"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="cart-actions-bottom">
            <button class="btn btn-outline" onclick="clearCart()">
                <i class="fas fa-trash"></i>
                Clear Cart
            </button>
            <button class="btn btn-outline" onclick="saveForLater()">
                <i class="fas fa-bookmark"></i>
                Save for Later
            </button>
        </div>
    `;
}

function updateQuantity(itemId, newQuantity) {
    newQuantity = parseInt(newQuantity);
    
    if (newQuantity < 1) {
        removeFromCart(itemId);
        return;
    }
    
    if (newQuantity > 99) {
        showNotification('Maximum quantity is 99', 'warning');
        return;
    }
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id == itemId);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update display
        displayEnhancedCart();
        updateCartCount();
        
        showNotification('Quantity updated', 'success');
    }
}

function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id == itemId);
    
    if (itemIndex > -1) {
        const itemName = cart[itemIndex].name;
        cart.splice(itemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update display
        displayEnhancedCart();
        updateCartCount();
        
        showNotification(`${itemName} removed from cart`, 'info');
    }
}

function moveToWishlist(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    const itemIndex = cart.findIndex(item => item.id == itemId);
    
    if (itemIndex > -1) {
        const item = cart[itemIndex];
        
        // Check if item already in wishlist
        const wishlistIndex = wishlist.findIndex(w => w.id == itemId);
        if (wishlistIndex === -1) {
            wishlist.push(item);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
        
        // Remove from cart
        cart.splice(itemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update displays
        displayEnhancedCart();
        updateCartCount();
        updateWishlistCount();
        
        showNotification(`${item.name} moved to wishlist`, 'success');
    }
}

function proceedToCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'warning');
        return;
    }
    
    // In a real application, this would redirect to checkout page
    showNotification('🚀 Redirecting to checkout...', 'info');
    
    // Simulate checkout process
    setTimeout(() => {
        showNotification('✅ Order placed successfully! Thank you for shopping with us.', 'success');
        localStorage.removeItem('cart');
        displayEnhancedCart();
        updateCartCount();
    }, 2000);
}

function saveForLater() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'warning');
        return;
    }
    
    // Save cart to saved items
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const timestamp = new Date().toISOString();
    
    savedItems.push({
        id: Date.now(),
        items: cart,
        savedAt: timestamp,
        name: `Cart saved on ${new Date().toLocaleDateString()}`
    });
    
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    showNotification('Cart saved for later!', 'success');
}

function loadRecommendedProducts() {
    // Simulate recommended products based on cart items
    const recommendedProducts = [
        {
            id: 101,
            name: "LED Strip Light",
            price: 299,
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.3
        },
        {
            id: 102,
            name: "Smart Switch",
            price: 450,
            image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.5
        },
        {
            id: 103,
            name: "Extension Board",
            price: 350,
            image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.2
        }
    ];
    
    const recommendedGrid = document.getElementById('recommended-grid');
    recommendedGrid.innerHTML = recommendedProducts.map(product => `
        <div class="recommended-product">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                </div>
                <div class="product-price">₹${product.price}</div>
                <button class="btn btn-sm btn-primary" onclick="addToCart('${product.name}', ${product.price}, ${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Auto-save cart changes
function autoSaveCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const autoSave = {
        cart: cart,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('cartAutoSave', JSON.stringify(autoSave));
}

// Cart analytics
function trackCartEvent(event, data) {
    const analytics = JSON.parse(localStorage.getItem('cartAnalytics')) || [];
    analytics.push({
        event: event,
        data: data,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('cartAnalytics', JSON.stringify(analytics));
}

// Initialize cart auto-save
setInterval(autoSaveCart, 30000); // Auto-save every 30 seconds
