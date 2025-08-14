function addToCart(name, price, productId = null) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Create cart item with optional product ID
    const cartItem = {
        name,
        price,
        id: productId || Date.now(), // Use product ID or timestamp as fallback
        quantity: 1,
        addedAt: new Date().toISOString()
    };

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item =>
        item.name === name && item.id === cartItem.id
    );

    if (existingItemIndex > -1) {
        // Increase quantity if item exists
        cart[existingItemIndex].quantity += 1;
        showNotification(`✅ ${name} quantity updated in cart!`, 'success');
    } else {
        // Add new item to cart
        cart.push(cartItem);
        showNotification(`✅ ${name} added to cart!`, 'success');
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    // Add animation to the button
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.textContent.includes(name) || button.textContent.includes('Add to Cart')) {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        }
    });
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let total = 0;
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            let div = document.createElement('div');
            div.textContent = `${item.name} - ₹${item.price}`;
            cartItems.appendChild(div);
            total += item.price;
        });
    }

    document.getElementById('total').textContent = "Total: ₹" + total;
}

function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        localStorage.removeItem('cart');
        displayCart();
        updateCartCount();
        showNotification('🗑️ Cart cleared successfully!', 'info');
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Add fade-in animation to elements when page loads
function addFadeInAnimations() {
    const elements = document.querySelectorAll('.product-card, .cart');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// If we're on the cart page, load cart items
if (window.location.pathname.includes('cart.html')) {
    displayCart();
}

// Mobile menu toggle function
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    const toggle = document.querySelector('.mobile-menu-toggle');

    nav.classList.toggle('mobile-nav-open');

    // Animate hamburger menu
    const spans = toggle.querySelectorAll('span');
    if (nav.classList.contains('mobile-nav-open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('click', (e) => {
    if (e.target.matches('.nav-link')) {
        const nav = document.querySelector('.main-nav');
        const toggle = document.querySelector('.mobile-menu-toggle');
        const spans = toggle.querySelectorAll('span');

        nav.classList.remove('mobile-nav-open');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
});

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchSuggestions = document.getElementById('search-suggestions');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length > 2) {
                // Show search suggestions (mock data)
                const suggestions = [
                    'LED Bulbs',
                    'Ceiling Fans',
                    'Switches',
                    'Wire Cables',
                    'Power Sockets'
                ].filter(item => item.toLowerCase().includes(query));

                if (suggestions.length > 0) {
                    searchSuggestions.innerHTML = suggestions
                        .map(item => `<div class="suggestion-item">${item}</div>`)
                        .join('');
                    searchSuggestions.style.display = 'block';
                } else {
                    searchSuggestions.style.display = 'none';
                }
            } else {
                searchSuggestions.style.display = 'none';
            }
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
                searchSuggestions.style.display = 'none';
            }
        });
    }
}

// Add animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    addFadeInAnimations();
    updateCartCount();
    initializeSearch();

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.category-card, .product-card, .feature-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
