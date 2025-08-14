// Comprehensive Wishlist Functionality
let currentWishlistView = 'grid';
let currentSort = 'newest';

document.addEventListener('DOMContentLoaded', function() {
    displayWishlist();
    loadRecommendedProducts();
    updateCartCount();
    updateWishlistCount();
    updateWishlistStats();
});

function displayWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistContent = document.getElementById('wishlist-content');
    
    if (wishlist.length === 0) {
        wishlistContent.innerHTML = createEmptyWishlistHTML();
        document.getElementById('wishlist-stats').style.display = 'none';
        document.getElementById('wishlist-actions-section').style.display = 'none';
        return;
    }
    
    // Sort wishlist
    const sortedWishlist = sortWishlistItems(wishlist, currentSort);
    
    // Create wishlist HTML
    const wishlistHTML = `
        <div class="wishlist-items ${currentWishlistView}-view">
            ${sortedWishlist.map(item => createWishlistItemHTML(item)).join('')}
        </div>
    `;
    
    wishlistContent.innerHTML = wishlistHTML;
    
    // Show stats and actions
    document.getElementById('wishlist-stats').style.display = 'block';
    document.getElementById('wishlist-actions-section').style.display = 'block';
    
    // Add animations
    setTimeout(() => {
        document.querySelectorAll('.wishlist-item').forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('fade-in-up');
        });
    }, 100);
}

function createEmptyWishlistHTML() {
    return `
        <div class="empty-wishlist">
            <div class="empty-wishlist-icon">
                <i class="fas fa-heart-broken"></i>
            </div>
            <h2>Your wishlist is empty</h2>
            <p>Start adding products you love to your wishlist and keep track of your favorites.</p>
            <div class="empty-wishlist-actions">
                <button class="btn btn-primary" onclick="window.location.href='products.html'">
                    <i class="fas fa-shopping-bag"></i>
                    Browse Products
                </button>
                <button class="btn btn-outline" onclick="window.location.href='deals.html'">
                    <i class="fas fa-tags"></i>
                    View Deals
                </button>
            </div>
            <div class="wishlist-tips">
                <h3>💡 Wishlist Tips</h3>
                <ul>
                    <li><i class="fas fa-heart"></i> Click the heart icon on any product to add it to your wishlist</li>
                    <li><i class="fas fa-bell"></i> Enable price alerts to get notified of discounts</li>
                    <li><i class="fas fa-share"></i> Share your wishlist with friends and family</li>
                    <li><i class="fas fa-cart-plus"></i> Quickly add multiple items to your cart</li>
                </ul>
            </div>
        </div>
    `;
}

function createWishlistItemHTML(item) {
    const addedDate = item.addedAt ? new Date(item.addedAt).toLocaleDateString() : 'Unknown';
    const daysAgo = item.addedAt ? Math.floor((Date.now() - new Date(item.addedAt)) / (1000 * 60 * 60 * 24)) : 0;
    
    return `
        <div class="wishlist-item" data-item-id="${item.id}">
            <div class="item-image">
                <img src="${item.image || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'}" alt="${item.name}" loading="lazy">
                <div class="item-badges">
                    ${item.isNew ? '<span class="badge new">New</span>' : ''}
                    ${item.isSale ? '<span class="badge sale">Sale</span>' : ''}
                </div>
                <div class="item-overlay">
                    <button class="quick-view-btn" onclick="quickViewWishlistItem(${item.id})">
                        <i class="fas fa-eye"></i>
                        Quick View
                    </button>
                </div>
            </div>
            <div class="item-details">
                <div class="item-header">
                    <h3 class="item-name">${item.name}</h3>
                    <button class="remove-from-wishlist-btn" onclick="removeFromWishlist(${item.id})" title="Remove from wishlist">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="item-brand">${item.brand || 'Unknown Brand'}</div>
                <div class="item-rating">
                    ${generateStars(item.rating || 4.0)}
                    <span class="rating-count">(${item.reviews || 0} reviews)</span>
                </div>
                <div class="item-price">
                    <span class="current-price">₹${item.price}</span>
                    ${item.originalPrice && item.originalPrice > item.price ? 
                        `<span class="original-price">₹${item.originalPrice}</span>` : ''}
                </div>
                <div class="item-meta">
                    <span class="added-date">
                        <i class="fas fa-calendar"></i>
                        Added ${daysAgo === 0 ? 'today' : daysAgo === 1 ? 'yesterday' : `${daysAgo} days ago`}
                    </span>
                    <span class="availability ${item.inStock !== false ? 'in-stock' : 'out-of-stock'}">
                        <i class="fas fa-${item.inStock !== false ? 'check-circle' : 'times-circle'}"></i>
                        ${item.inStock !== false ? 'In Stock' : 'Out of Stock'}
                    </span>
                </div>
                <div class="item-actions">
                    <button class="btn btn-primary add-to-cart-btn" onclick="addToCartFromWishlist(${item.id})" 
                            ${item.inStock === false ? 'disabled' : ''}>
                        <i class="fas fa-shopping-cart"></i>
                        ${item.inStock === false ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                    <button class="btn btn-outline notify-btn" onclick="togglePriceAlert(${item.id})">
                        <i class="fas fa-bell"></i>
                        Price Alert
                    </button>
                </div>
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

function toggleWishlistView(view) {
    currentWishlistView = view;
    
    // Update active button
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-view="${view}"]`).classList.add('active');
    
    // Re-render wishlist
    displayWishlist();
}

function sortWishlist(sortBy) {
    currentSort = sortBy;
    displayWishlist();
}

function sortWishlistItems(items, sortBy) {
    const sortedItems = [...items];
    
    switch (sortBy) {
        case 'newest':
            return sortedItems.sort((a, b) => new Date(b.addedAt || 0) - new Date(a.addedAt || 0));
        case 'oldest':
            return sortedItems.sort((a, b) => new Date(a.addedAt || 0) - new Date(b.addedAt || 0));
        case 'name':
            return sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        case 'price-low':
            return sortedItems.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sortedItems.sort((a, b) => b.price - a.price);
        default:
            return sortedItems;
    }
}

function removeFromWishlist(itemId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const itemIndex = wishlist.findIndex(item => item.id == itemId);
    
    if (itemIndex > -1) {
        const itemName = wishlist[itemIndex].name;
        wishlist.splice(itemIndex, 1);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        
        // Update displays
        displayWishlist();
        updateWishlistCount();
        updateWishlistStats();
        
        showNotification(`${itemName} removed from wishlist`, 'info');
    }
}

function addToCartFromWishlist(itemId) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const item = wishlist.find(item => item.id == itemId);
    
    if (item) {
        addToCart(item.name, item.price, item.id);
        
        // Optionally remove from wishlist after adding to cart
        const shouldRemove = confirm('Item added to cart! Would you like to remove it from your wishlist?');
        if (shouldRemove) {
            removeFromWishlist(itemId);
        }
    }
}

function addAllToCart() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (wishlist.length === 0) {
        showNotification('Your wishlist is empty', 'warning');
        return;
    }
    
    let addedCount = 0;
    wishlist.forEach(item => {
        if (item.inStock !== false) {
            addToCart(item.name, item.price, item.id);
            addedCount++;
        }
    });
    
    if (addedCount > 0) {
        showNotification(`${addedCount} items added to cart!`, 'success');
        
        // Ask if user wants to clear wishlist
        setTimeout(() => {
            const shouldClear = confirm('Would you like to clear your wishlist?');
            if (shouldClear) {
                localStorage.removeItem('wishlist');
                displayWishlist();
                updateWishlistCount();
                updateWishlistStats();
            }
        }, 1000);
    } else {
        showNotification('No items available to add to cart', 'warning');
    }
}

function shareWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (wishlist.length === 0) {
        showNotification('Your wishlist is empty', 'warning');
        return;
    }
    
    const wishlistText = `Check out my wishlist from Ragam Electricals:\n\n${wishlist.map(item => `• ${item.name} - ₹${item.price}`).join('\n')}\n\nVisit: ${window.location.origin}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Wishlist - Ragam Electricals',
            text: wishlistText,
            url: window.location.href
        });
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(wishlistText).then(() => {
            showNotification('Wishlist copied to clipboard!', 'success');
        });
    }
}

function exportWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (wishlist.length === 0) {
        showNotification('Your wishlist is empty', 'warning');
        return;
    }
    
    // Create CSV content
    const csvContent = [
        ['Product Name', 'Price', 'Brand', 'Added Date', 'Availability'],
        ...wishlist.map(item => [
            item.name,
            `₹${item.price}`,
            item.brand || 'Unknown',
            item.addedAt ? new Date(item.addedAt).toLocaleDateString() : 'Unknown',
            item.inStock !== false ? 'In Stock' : 'Out of Stock'
        ])
    ].map(row => row.join(',')).join('\n');
    
    // Download CSV
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wishlist-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    showNotification('Wishlist exported successfully!', 'success');
}

function setupPriceAlerts() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (wishlist.length === 0) {
        showNotification('Your wishlist is empty', 'warning');
        return;
    }
    
    // Toggle price alerts for all items
    const priceAlerts = JSON.parse(localStorage.getItem('priceAlerts')) || [];
    let enabledCount = 0;
    
    wishlist.forEach(item => {
        const existingAlert = priceAlerts.find(alert => alert.itemId == item.id);
        if (!existingAlert) {
            priceAlerts.push({
                itemId: item.id,
                itemName: item.name,
                currentPrice: item.price,
                alertThreshold: item.price * 0.9, // Alert when price drops by 10%
                enabled: true,
                createdAt: new Date().toISOString()
            });
            enabledCount++;
        }
    });
    
    localStorage.setItem('priceAlerts', JSON.stringify(priceAlerts));
    
    if (enabledCount > 0) {
        showNotification(`Price alerts enabled for ${enabledCount} items!`, 'success');
        
        // Update button text
        const alertBtn = document.querySelector('.action-card:nth-child(4) .action-btn');
        if (alertBtn) {
            alertBtn.innerHTML = '<i class="fas fa-bell"></i> Alerts Enabled';
        }
    } else {
        showNotification('Price alerts already enabled for all items', 'info');
    }
}

function togglePriceAlert(itemId) {
    const priceAlerts = JSON.parse(localStorage.getItem('priceAlerts')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const item = wishlist.find(item => item.id == itemId);
    
    if (!item) return;
    
    const existingAlertIndex = priceAlerts.findIndex(alert => alert.itemId == itemId);
    
    if (existingAlertIndex > -1) {
        // Remove alert
        priceAlerts.splice(existingAlertIndex, 1);
        showNotification('Price alert disabled', 'info');
    } else {
        // Add alert
        priceAlerts.push({
            itemId: itemId,
            itemName: item.name,
            currentPrice: item.price,
            alertThreshold: item.price * 0.9,
            enabled: true,
            createdAt: new Date().toISOString()
        });
        showNotification('Price alert enabled!', 'success');
    }
    
    localStorage.setItem('priceAlerts', JSON.stringify(priceAlerts));
}

function updateWishlistStats() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (wishlist.length === 0) return;
    
    // Calculate statistics
    const totalItems = wishlist.length;
    const totalValue = wishlist.reduce((sum, item) => sum + item.price, 0);
    const potentialSavings = wishlist.reduce((sum, item) => {
        return sum + (item.originalPrice && item.originalPrice > item.price ? 
            item.originalPrice - item.price : 0);
    }, 0);
    
    const avgDays = wishlist.reduce((sum, item) => {
        const days = item.addedAt ? 
            Math.floor((Date.now() - new Date(item.addedAt)) / (1000 * 60 * 60 * 24)) : 0;
        return sum + days;
    }, 0) / totalItems;
    
    // Update DOM
    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('total-value').textContent = `₹${totalValue.toFixed(2)}`;
    document.getElementById('potential-savings').textContent = `₹${potentialSavings.toFixed(2)}`;
    document.getElementById('avg-days').textContent = Math.round(avgDays);
}

function quickViewWishlistItem(itemId) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const item = wishlist.find(item => item.id == itemId);
    
    if (item) {
        // Reuse the quick view modal from products.js
        showQuickViewModal(item);
    }
}

function loadRecommendedProducts() {
    // Simulate recommended products based on wishlist
    const recommendedProducts = [
        {
            id: 201,
            name: "Smart LED Bulb",
            price: 399,
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.4
        },
        {
            id: 202,
            name: "Motion Sensor Switch",
            price: 650,
            image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.6
        },
        {
            id: 203,
            name: "USB Charging Socket",
            price: 280,
            image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.3
        },
        {
            id: 204,
            name: "LED Strip Light Kit",
            price: 450,
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.5
        }
    ];
    
    const recommendedGrid = document.getElementById('recommended-grid');
    recommendedGrid.innerHTML = recommendedProducts.map(product => `
        <div class="recommended-product">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="wishlist-toggle" onclick="toggleWishlist(${product.id})">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                </div>
                <div class="product-price">₹${product.price}</div>
                <div class="product-actions">
                    <button class="btn btn-sm btn-primary" onclick="addToCart('${product.name}', ${product.price}, ${product.id})">
                        Add to Cart
                    </button>
                    <button class="btn btn-sm btn-outline" onclick="toggleWishlist(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Auto-save wishlist changes
function autoSaveWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const autoSave = {
        wishlist: wishlist,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('wishlistAutoSave', JSON.stringify(autoSave));
}

// Initialize auto-save
setInterval(autoSaveWishlist, 30000); // Auto-save every 30 seconds
