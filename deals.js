// Deals Database
const dealsDatabase = [
    // Flash Sale Deals
    {
        id: 1,
        name: "LED Bulb 9W Pack of 4",
        category: "lighting",
        originalPrice: 600,
        salePrice: 299,
        discount: 50,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.5,
        reviews: 128,
        isFlashSale: true,
        stockLeft: 15,
        brand: "Philips",
        features: ["Energy Efficient", "Long Life", "Warm White", "Pack of 4"],
        endTime: new Date(Date.now() + 12 * 60 * 60 * 1000) // 12 hours from now
    },
    {
        id: 2,
        name: "Ceiling Fan 48\" with Remote",
        category: "fans",
        originalPrice: 3500,
        salePrice: 1999,
        discount: 43,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.3,
        reviews: 89,
        isFlashSale: true,
        stockLeft: 8,
        brand: "Havells",
        features: ["Remote Control", "3 Speed", "Reversible", "Energy Star"],
        endTime: new Date(Date.now() + 12 * 60 * 60 * 1000)
    },
    {
        id: 3,
        name: "Modular Switch Combo Pack",
        category: "switches",
        originalPrice: 800,
        salePrice: 449,
        discount: 44,
        image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.6,
        reviews: 156,
        isFlashSale: true,
        stockLeft: 25,
        brand: "Legrand",
        features: ["Premium Quality", "Easy Installation", "10 Pieces", "ISI Marked"],
        endTime: new Date(Date.now() + 12 * 60 * 60 * 1000)
    },

    // Regular Deals
    {
        id: 4,
        name: "LED Tube Light 20W",
        category: "lighting",
        originalPrice: 450,
        salePrice: 299,
        discount: 34,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.2,
        reviews: 67,
        isFlashSale: false,
        stockLeft: 45,
        brand: "Havells",
        features: ["Cool White", "Flicker Free", "Long Life", "Energy Saving"]
    },
    {
        id: 5,
        name: "Exhaust Fan 6\" High Speed",
        category: "fans",
        originalPrice: 650,
        salePrice: 449,
        discount: 31,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.1,
        reviews: 43,
        isFlashSale: false,
        stockLeft: 32,
        brand: "Anchor",
        features: ["High Suction", "Low Noise", "Easy Installation", "Durable"]
    },
    {
        id: 6,
        name: "Power Socket 16A with USB",
        category: "switches",
        originalPrice: 350,
        salePrice: 249,
        discount: 29,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.4,
        reviews: 92,
        isFlashSale: false,
        stockLeft: 67,
        brand: "Anchor",
        features: ["USB Charging", "16A Rating", "Safety Shutters", "Modern Design"]
    },
    {
        id: 7,
        name: "Copper Wire 2.5mm 90m Roll",
        category: "wires",
        originalPrice: 1200,
        salePrice: 899,
        discount: 25,
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.3,
        reviews: 78,
        isFlashSale: false,
        stockLeft: 23,
        brand: "Havells",
        features: ["Pure Copper", "ISI Marked", "90m Length", "High Quality"]
    },
    {
        id: 8,
        name: "Smart LED Bulb with WiFi",
        category: "lighting",
        originalPrice: 800,
        salePrice: 599,
        discount: 25,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.7,
        reviews: 134,
        isFlashSale: false,
        stockLeft: 18,
        brand: "Philips",
        features: ["WiFi Control", "Color Changing", "Voice Control", "App Control"]
    },

    // Plumbing & Sanitary Deals
    {
        id: 9,
        name: "Ball Valve Set 1/2\" - Pack of 5",
        category: "plumbing",
        originalPrice: 450,
        salePrice: 299,
        discount: 34,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.5,
        reviews: 67,
        isFlashSale: false,
        stockLeft: 28,
        brand: "Jaquar",
        features: ["Brass Construction", "Pack of 5", "Quarter Turn", "Leak Proof"]
    },
    {
        id: 10,
        name: "Toilet Seat Soft Close",
        category: "bathroom",
        originalPrice: 2500,
        salePrice: 1799,
        discount: 28,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.6,
        reviews: 89,
        isFlashSale: true,
        stockLeft: 12,
        brand: "Kohler",
        features: ["Soft Close", "Easy Clean", "Durable", "Modern Design"],
        endTime: new Date(Date.now() + 12 * 60 * 60 * 1000)
    },
    {
        id: 11,
        name: "Kitchen Sink Single Bowl",
        category: "kitchen",
        originalPrice: 3200,
        salePrice: 2299,
        discount: 28,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.4,
        reviews: 56,
        isFlashSale: false,
        stockLeft: 18,
        brand: "Nirali",
        features: ["Stainless Steel", "Single Bowl", "Drain Board", "Easy Installation"]
    },
    {
        id: 12,
        name: "Shower Head Rain 8\"",
        category: "bathroom",
        originalPrice: 1800,
        salePrice: 1299,
        discount: 28,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.7,
        reviews: 94,
        isFlashSale: true,
        stockLeft: 9,
        brand: "Jaquar",
        features: ["8 Inch Rain", "Chrome Finish", "Multiple Patterns", "Easy Installation"],
        endTime: new Date(Date.now() + 12 * 60 * 60 * 1000)
    },
    {
        id: 13,
        name: "Water Heater 10L Instant",
        category: "kitchen",
        originalPrice: 6500,
        salePrice: 4999,
        discount: 23,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.3,
        reviews: 78,
        isFlashSale: false,
        stockLeft: 15,
        brand: "Bajaj",
        features: ["10L Capacity", "Instant Heating", "Energy Efficient", "Auto Cut-off"]
    }
];

// Global variables
let currentCategory = 'all';
let flashSaleTimer;

// Initialize deals page
document.addEventListener('DOMContentLoaded', function() {
    renderFlashDeals();
    renderDeals();
    setupDealTabs();
    startFlashSaleTimer();
    updateCartCount();
    updateWishlistCount();
});

function renderFlashDeals() {
    const flashDealsGrid = document.getElementById('flash-deals-grid');
    const flashDeals = dealsDatabase.filter(deal => deal.isFlashSale);
    
    flashDealsGrid.innerHTML = flashDeals.map(deal => createFlashDealCard(deal)).join('');
    
    // Add animation
    setTimeout(() => {
        document.querySelectorAll('.flash-deal-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in-up');
        });
    }, 100);
}

function createFlashDealCard(deal) {
    return `
        <div class="flash-deal-card" data-deal-id="${deal.id}">
            <div class="flash-deal-badge">
                <i class="fas fa-bolt"></i>
                <span>${deal.discount}% OFF</span>
            </div>
            <div class="deal-image">
                <img src="${deal.image}" alt="${deal.name}" loading="lazy">
                <div class="stock-indicator">
                    <i class="fas fa-fire"></i>
                    Only ${deal.stockLeft} left!
                </div>
            </div>
            <div class="deal-info">
                <div class="deal-brand">${deal.brand}</div>
                <h3 class="deal-name">${deal.name}</h3>
                <div class="deal-rating">
                    ${generateStars(deal.rating)}
                    <span class="rating-count">(${deal.reviews})</span>
                </div>
                <div class="deal-price">
                    <span class="sale-price">₹${deal.salePrice}</span>
                    <span class="original-price">₹${deal.originalPrice}</span>
                </div>
                <div class="deal-features">
                    ${deal.features.slice(0, 2).map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <button class="flash-deal-btn" onclick="addToCart('${deal.name}', ${deal.salePrice}, ${deal.id})">
                    <i class="fas fa-bolt"></i>
                    Grab Deal Now
                </button>
            </div>
        </div>
    `;
}

function renderDeals() {
    const dealsGrid = document.getElementById('deals-grid');
    let filteredDeals = dealsDatabase.filter(deal => !deal.isFlashSale);
    
    if (currentCategory !== 'all') {
        filteredDeals = filteredDeals.filter(deal => deal.category === currentCategory);
    }
    
    dealsGrid.innerHTML = filteredDeals.map(deal => createDealCard(deal)).join('');
    
    // Add animation
    setTimeout(() => {
        document.querySelectorAll('.deal-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in-up');
        });
    }, 100);
}

function createDealCard(deal) {
    return `
        <div class="deal-card" data-deal-id="${deal.id}">
            <div class="deal-discount-badge">${deal.discount}% OFF</div>
            <div class="deal-image">
                <img src="${deal.image}" alt="${deal.name}" loading="lazy">
                <div class="deal-overlay">
                    <button class="quick-view-btn" onclick="quickViewDeal(${deal.id})">
                        <i class="fas fa-eye"></i>
                        Quick View
                    </button>
                    <button class="wishlist-btn" onclick="toggleWishlist(${deal.id})">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="deal-info">
                <div class="deal-brand">${deal.brand}</div>
                <h3 class="deal-name">${deal.name}</h3>
                <div class="deal-rating">
                    ${generateStars(deal.rating)}
                    <span class="rating-count">(${deal.reviews})</span>
                </div>
                <div class="deal-price">
                    <span class="sale-price">₹${deal.salePrice}</span>
                    <span class="original-price">₹${deal.originalPrice}</span>
                    <span class="savings">Save ₹${deal.originalPrice - deal.salePrice}</span>
                </div>
                <div class="deal-features">
                    ${deal.features.slice(0, 3).map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <button class="deal-btn" onclick="addToCart('${deal.name}', ${deal.salePrice}, ${deal.id})">
                    <i class="fas fa-shopping-cart"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    `;
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

function setupDealTabs() {
    document.querySelectorAll('.deal-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            document.querySelectorAll('.deal-tab').forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Update current category
            currentCategory = this.dataset.category;
            
            // Re-render deals
            renderDeals();
        });
    });
}

function startFlashSaleTimer() {
    const endTime = new Date(Date.now() + 12 * 60 * 60 * 1000); // 12 hours from now
    
    flashSaleTimer = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = endTime.getTime() - now;
        
        if (timeLeft > 0) {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            clearInterval(flashSaleTimer);
            document.getElementById('flash-timer').innerHTML = '<span class="timer-ended">Flash Sale Ended!</span>';
        }
    }, 1000);
}

function quickViewDeal(dealId) {
    const deal = dealsDatabase.find(d => d.id === dealId);
    if (deal) {
        // Use the same quick view modal from products.js
        showQuickViewModal(deal);
    }
}

function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        showNotification(`✅ Code ${code} copied to clipboard!`, 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification(`✅ Code ${code} copied to clipboard!`, 'success');
    });
}

function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    
    if (!email) {
        showNotification('Please enter your email address', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate newsletter subscription
    showNotification('🎉 Successfully subscribed to newsletter!', 'success');
    document.getElementById('newsletter-email').value = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Utility function to show quick view modal (reuse from products.js)
function showQuickViewModal(product) {
    const modalHTML = `
        <div class="modal-overlay" id="quick-view-modal">
            <div class="modal-content">
                <button class="modal-close" onclick="closeQuickView()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="deal-badge">
                            <span>${product.discount}% OFF</span>
                        </div>
                    </div>
                    <div class="modal-info">
                        <div class="product-brand">${product.brand}</div>
                        <h2>${product.name}</h2>
                        <div class="product-rating">
                            ${generateStars(product.rating)}
                            <span class="rating-count">(${product.reviews} reviews)</span>
                        </div>
                        <div class="product-price">
                            <span class="current-price">₹${product.salePrice}</span>
                            <span class="original-price">₹${product.originalPrice}</span>
                            <span class="savings">You Save ₹${product.originalPrice - product.salePrice}</span>
                        </div>
                        <div class="product-features">
                            <h4>Features:</h4>
                            <ul>
                                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        ${product.isFlashSale ? `
                            <div class="flash-sale-info">
                                <i class="fas fa-fire"></i>
                                <span>Flash Sale - Only ${product.stockLeft} left!</span>
                            </div>
                        ` : ''}
                        <div class="modal-actions">
                            <button class="add-to-cart-btn" onclick="addToCart('${product.name}', ${product.salePrice}, ${product.id}); closeQuickView();">
                                <i class="fas fa-shopping-cart"></i>
                                Add to Cart
                            </button>
                            <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                                <i class="far fa-heart"></i>
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    setTimeout(() => {
        document.getElementById('quick-view-modal').classList.add('active');
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}
