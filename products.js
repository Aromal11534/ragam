// Products Database
const productsDatabase = [
    // Lighting Products
    {
        id: 1,
        name: "LED Bulb 9W",
        category: "lighting",
        brand: "philips",
        price: 100,
        originalPrice: 150,
        rating: 4.5,
        reviews: 24,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Energy-efficient LED bulb with warm white light",
        features: ["9W Power", "Warm White", "Long Life", "Energy Saving"],
        inStock: true,
        isNew: false,
        isSale: true
    },
    {
        id: 2,
        name: "LED Tube Light 20W",
        category: "lighting",
        brand: "havells",
        price: 250,
        originalPrice: 300,
        rating: 4.3,
        reviews: 18,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Bright LED tube light for offices and homes",
        features: ["20W Power", "Cool White", "Flicker Free", "Easy Installation"],
        inStock: true,
        isNew: true,
        isSale: false
    },
    {
        id: 3,
        name: "Ceiling Light Fixture",
        category: "lighting",
        brand: "anchor",
        price: 800,
        originalPrice: 1000,
        rating: 4.7,
        reviews: 32,
        image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Modern ceiling light fixture with LED technology",
        features: ["Modern Design", "LED Compatible", "Easy Installation", "Dimmable"],
        inStock: true,
        isNew: false,
        isSale: true
    },
    {
        id: 4,
        name: "Outdoor LED Floodlight",
        category: "lighting",
        brand: "crompton",
        price: 450,
        originalPrice: 550,
        rating: 4.2,
        reviews: 15,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Waterproof LED floodlight for outdoor use",
        features: ["Waterproof", "High Brightness", "Energy Efficient", "Long Life"],
        inStock: true,
        isNew: false,
        isSale: false
    },

    // Fans & Appliances
    {
        id: 5,
        name: "Ceiling Fan 48\"",
        category: "fans",
        brand: "havells",
        price: 1500,
        originalPrice: 2000,
        rating: 4.4,
        reviews: 28,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "High-speed ceiling fan with remote control",
        features: ["48 Inch", "Remote Control", "3 Speed", "Reversible"],
        inStock: true,
        isNew: false,
        isSale: true
    },
    {
        id: 6,
        name: "Exhaust Fan 6\"",
        category: "fans",
        brand: "anchor",
        price: 350,
        originalPrice: 400,
        rating: 4.1,
        reviews: 12,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Powerful exhaust fan for bathrooms and kitchens",
        features: ["6 Inch", "High Suction", "Low Noise", "Easy Installation"],
        inStock: true,
        isNew: false,
        isSale: false
    },
    {
        id: 7,
        name: "Table Fan 16\"",
        category: "fans",
        brand: "crompton",
        price: 800,
        originalPrice: 950,
        rating: 4.3,
        reviews: 20,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Portable table fan with oscillation",
        features: ["16 Inch", "Oscillation", "3 Speed", "Adjustable Height"],
        inStock: true,
        isNew: true,
        isSale: true
    },

    // Switches & Sockets
    {
        id: 8,
        name: "Modular Switch",
        category: "switches",
        brand: "legrand",
        price: 250,
        originalPrice: 300,
        rating: 4.6,
        reviews: 45,
        image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Premium modular switch with elegant design",
        features: ["Modular Design", "Easy Installation", "Durable", "Elegant Look"],
        inStock: true,
        isNew: false,
        isSale: false
    },
    {
        id: 9,
        name: "Power Socket 16A",
        category: "switches",
        brand: "anchor",
        price: 150,
        originalPrice: 180,
        rating: 4.4,
        reviews: 38,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Heavy duty power socket for high power appliances",
        features: ["16A Rating", "Heavy Duty", "Safety Shutters", "ISI Marked"],
        inStock: true,
        isNew: false,
        isSale: true
    },
    {
        id: 10,
        name: "Switchboard 8 Module",
        category: "switches",
        brand: "havells",
        price: 400,
        originalPrice: 500,
        rating: 4.5,
        reviews: 22,
        image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "8 module switchboard for complete electrical control",
        features: ["8 Modules", "Flame Retardant", "Easy Wiring", "Compact Design"],
        inStock: true,
        isNew: false,
        isSale: false
    },

    // Wires & Cables
    {
        id: 11,
        name: "Copper Wire Roll 2.5mm",
        category: "wires",
        brand: "havells",
        price: 800,
        originalPrice: 950,
        rating: 4.3,
        reviews: 15,
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "High quality copper wire for electrical installations",
        features: ["2.5mm Thickness", "Pure Copper", "ISI Marked", "90m Length"],
        inStock: true,
        isNew: false,
        isSale: true
    },
    {
        id: 12,
        name: "Flexible Cable 3 Core",
        category: "wires",
        brand: "anchor",
        price: 120,
        originalPrice: 150,
        rating: 4.2,
        reviews: 25,
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Flexible cable for portable appliances",
        features: ["3 Core", "Flexible", "Heat Resistant", "ISI Marked"],
        inStock: true,
        isNew: false,
        isSale: false
    },

    // Plumbing Products
    {
        id: 21,
        name: "PVC Pipe 4 inch",
        category: "plumbing",
        brand: "supreme",
        price: 180,
        originalPrice: 220,
        rating: 4.4,
        reviews: 45,
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "High-quality PVC pipe for drainage and sewage systems",
        features: ["4 inch diameter", "ISI Marked", "Corrosion Resistant", "Long Lasting"],
        inStock: true,
        isNew: false,
        isSale: true
    },
    {
        id: 22,
        name: "Ball Valve 1/2 inch",
        category: "plumbing",
        brand: "jaquar",
        price: 85,
        originalPrice: 120,
        rating: 4.6,
        reviews: 38,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Brass ball valve for water control applications",
        features: ["Brass Construction", "Quarter Turn", "Leak Proof", "Durable"],
        inStock: true,
        isNew: true,
        isSale: false
    },
    {
        id: 23,
        name: "Water Pump 1HP",
        category: "plumbing",
        brand: "crompton",
        price: 4500,
        originalPrice: 5200,
        rating: 4.3,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Self-priming centrifugal water pump for domestic use",
        features: ["1HP Motor", "Self Priming", "Cast Iron Body", "High Efficiency"],
        inStock: true,
        isNew: false,
        isSale: true
    },
    {
        id: 24,
        name: "Water Tank 500L",
        category: "plumbing",
        brand: "sintex",
        price: 3200,
        originalPrice: 3800,
        rating: 4.5,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Food grade plastic water storage tank",
        features: ["500L Capacity", "Food Grade", "UV Stabilized", "Leak Proof"],
        inStock: true,
        isNew: false,
        isSale: false
    },

    // Bathroom & Sanitary Products
    {
        id: 25,
        name: "Wall Hung Toilet",
        category: "bathroom",
        brand: "kohler",
        price: 12500,
        originalPrice: 15000,
        rating: 4.7,
        reviews: 34,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Modern wall-hung toilet with soft-close seat",
        features: ["Wall Mounted", "Soft Close Seat", "Water Efficient", "Modern Design"],
        inStock: true,
        isNew: true,
        isSale: true
    },
    {
        id: 26,
        name: "Wash Basin Counter Top",
        category: "bathroom",
        brand: "hindware",
        price: 2800,
        originalPrice: 3500,
        rating: 4.4,
        reviews: 56,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Elegant counter-top wash basin for modern bathrooms",
        features: ["Counter Top", "Ceramic", "Easy Clean", "Stylish Design"],
        inStock: true,
        isNew: false,
        isSale: false
    },
    {
        id: 27,
        name: "Rain Shower Head",
        category: "bathroom",
        brand: "jaquar",
        price: 1850,
        originalPrice: 2200,
        rating: 4.6,
        reviews: 78,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Luxury rain shower head with multiple spray patterns",
        features: ["Rain Shower", "Multiple Patterns", "Chrome Finish", "Easy Installation"],
        inStock: true,
        isNew: true,
        isSale: true
    },
    {
        id: 28,
        name: "Bathroom Mirror Cabinet",
        category: "bathroom",
        brand: "johnson",
        price: 3200,
        originalPrice: 4000,
        rating: 4.3,
        reviews: 42,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Mirror cabinet with LED lighting and storage",
        features: ["LED Lighting", "Storage Space", "Anti-Fog", "Modern Design"],
        inStock: true,
        isNew: false,
        isSale: false
    },
    {
        id: 29,
        name: "Towel Rail Chrome",
        category: "bathroom",
        brand: "grohe",
        price: 1200,
        originalPrice: 1500,
        rating: 4.5,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Premium chrome towel rail for bathroom",
        features: ["Chrome Finish", "Wall Mounted", "Rust Resistant", "Easy Installation"],
        inStock: true,
        isNew: false,
        isSale: true
    },

    // Kitchen Products
    {
        id: 30,
        name: "Kitchen Sink Double Bowl",
        category: "kitchen",
        brand: "nirali",
        price: 4500,
        originalPrice: 5500,
        rating: 4.4,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Stainless steel double bowl kitchen sink",
        features: ["Double Bowl", "Stainless Steel", "Drain Board", "Easy Clean"],
        inStock: true,
        isNew: false,
        isSale: true
    },
    {
        id: 31,
        name: "Kitchen Tap Pull Out",
        category: "kitchen",
        brand: "jaquar",
        price: 2800,
        originalPrice: 3200,
        rating: 4.6,
        reviews: 45,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Pull-out kitchen tap with spray function",
        features: ["Pull Out Spray", "Chrome Finish", "360° Swivel", "Water Saving"],
        inStock: true,
        isNew: true,
        isSale: false
    },
    {
        id: 32,
        name: "Water Heater 15L",
        category: "kitchen",
        brand: "bajaj",
        price: 8500,
        originalPrice: 10000,
        rating: 4.3,
        reviews: 123,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Electric storage water heater for kitchen and bathroom",
        features: ["15L Capacity", "Energy Efficient", "Auto Cut-off", "5 Year Warranty"],
        inStock: true,
        isNew: false,
        isSale: true
    }
];

// Global variables
let currentProducts = [...productsDatabase];
let currentPage = 1;
let productsPerPage = 12;
let currentView = 'grid';

// Initialize products page
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    setupEventListeners();
    renderProducts();
    updateCartCount();
    updateWishlistCount();
});

function initializeProducts() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        filterByCategory(category);
        // Update category filter checkbox
        const categoryCheckbox = document.querySelector(`input[name="category"][value="${category}"]`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = true;
            document.querySelector('input[name="category"][value="all"]').checked = false;
        }
    }
}

function setupEventListeners() {
    // Category filters
    document.querySelectorAll('input[name="category"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleCategoryFilter);
    });

    // Brand filters
    document.querySelectorAll('input[name="brand"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleBrandFilter);
    });

    // Rating filters
    document.querySelectorAll('input[name="rating"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleRatingFilter);
    });

    // Price range
    document.getElementById('price-min').addEventListener('input', handlePriceFilter);
    document.getElementById('price-max').addEventListener('input', handlePriceFilter);

    // Sort dropdown
    document.getElementById('sort-select').addEventListener('change', handleSort);

    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', handleViewToggle);
    });

    // Clear filters
    document.querySelector('.clear-filters-btn').addEventListener('click', clearAllFilters);

    // Pagination
    document.getElementById('prev-page').addEventListener('click', () => changePage(currentPage - 1));
    document.getElementById('next-page').addEventListener('click', () => changePage(currentPage + 1));
}

// Filter functions
function handleCategoryFilter() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(cb => cb.value);

    if (selectedCategories.includes('all')) {
        currentProducts = [...productsDatabase];
    } else {
        currentProducts = productsDatabase.filter(product =>
            selectedCategories.includes(product.category)
        );
    }

    applyOtherFilters();
    currentPage = 1;
    renderProducts();
    updateResultsCount();
}

function handleBrandFilter() {
    applyAllFilters();
}

function handleRatingFilter() {
    applyAllFilters();
}

function handlePriceFilter() {
    applyAllFilters();
}

function applyAllFilters() {
    let filteredProducts = [...productsDatabase];

    // Category filter
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(cb => cb.value);

    if (!selectedCategories.includes('all')) {
        filteredProducts = filteredProducts.filter(product =>
            selectedCategories.includes(product.category)
        );
    }

    // Brand filter
    const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked'))
        .map(cb => cb.value);

    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            selectedBrands.includes(product.brand)
        );
    }

    // Rating filter
    const selectedRatings = Array.from(document.querySelectorAll('input[name="rating"]:checked'))
        .map(cb => parseInt(cb.value));

    if (selectedRatings.length > 0) {
        const minRating = Math.min(...selectedRatings);
        filteredProducts = filteredProducts.filter(product =>
            product.rating >= minRating
        );
    }

    // Price filter
    const minPrice = parseInt(document.getElementById('price-min').value) || 0;
    const maxPrice = parseInt(document.getElementById('price-max').value) || 10000;

    filteredProducts = filteredProducts.filter(product =>
        product.price >= minPrice && product.price <= maxPrice
    );

    currentProducts = filteredProducts;
    currentPage = 1;
    renderProducts();
    updateResultsCount();
}

function applyOtherFilters() {
    // Apply brand, rating, and price filters to current products
    let filteredProducts = [...currentProducts];

    // Brand filter
    const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked'))
        .map(cb => cb.value);

    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            selectedBrands.includes(product.brand)
        );
    }

    // Rating filter
    const selectedRatings = Array.from(document.querySelectorAll('input[name="rating"]:checked'))
        .map(cb => parseInt(cb.value));

    if (selectedRatings.length > 0) {
        const minRating = Math.min(...selectedRatings);
        filteredProducts = filteredProducts.filter(product =>
            product.rating >= minRating
        );
    }

    // Price filter
    const minPrice = parseInt(document.getElementById('price-min').value) || 0;
    const maxPrice = parseInt(document.getElementById('price-max').value) || 10000;

    filteredProducts = filteredProducts.filter(product =>
        product.price >= minPrice && product.price <= maxPrice
    );

    currentProducts = filteredProducts;
}

function handleSort() {
    const sortValue = document.getElementById('sort-select').value;

    switch (sortValue) {
        case 'price-low':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            currentProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            currentProducts.sort((a, b) => b.isNew - a.isNew);
            break;
        default:
            currentProducts = [...productsDatabase];
            applyAllFilters();
            return;
    }

    renderProducts();
}

function handleViewToggle(e) {
    const viewType = e.target.closest('.view-btn').dataset.view;
    currentView = viewType;

    // Update active button
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    e.target.closest('.view-btn').classList.add('active');

    // Update grid class
    const grid = document.getElementById('products-grid');
    grid.className = `products-grid ${viewType}-view`;

    renderProducts();
}

function clearAllFilters() {
    // Reset all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelector('input[name="category"][value="all"]').checked = true;

    // Reset price inputs
    document.getElementById('price-min').value = '';
    document.getElementById('price-max').value = '';

    // Reset sort
    document.getElementById('sort-select').value = 'default';

    // Reset products
    currentProducts = [...productsDatabase];
    currentPage = 1;
    renderProducts();
    updateResultsCount();
}

function filterByCategory(category) {
    if (category === 'all') {
        currentProducts = [...productsDatabase];
    } else {
        currentProducts = productsDatabase.filter(product => product.category === category);
    }
}
// Render functions
function renderProducts() {
    const grid = document.getElementById('products-grid');
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = currentProducts.slice(startIndex, endIndex);

    if (productsToShow.length === 0) {
        grid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');

    // Add animation
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in-up');
        });
    }, 100);

    updatePagination();
    updateWishlistButtons();
}

function createProductCard(product) {
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-badges">
                    ${product.isNew ? '<span class="badge new">New</span>' : ''}
                    ${product.isSale ? `<span class="badge sale">-${discountPercent}%</span>` : ''}
                </div>
                <div class="product-overlay">
                    <button class="quick-view-btn" onclick="quickView(${product.id})">
                        <i class="fas fa-eye"></i>
                        Quick View
                    </button>
                    <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand.charAt(0).toUpperCase() + product.brand.slice(1)}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">₹${product.price}</span>
                    ${product.originalPrice > product.price ?
                        `<span class="original-price">₹${product.originalPrice}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart('${product.name}', ${product.price}, ${product.id})">
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

// Pagination functions
function updatePagination() {
    const totalPages = Math.ceil(currentProducts.length / productsPerPage);
    const paginationNumbers = document.getElementById('pagination-numbers');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');

    // Update buttons state
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;

    // Generate page numbers
    let paginationHTML = '';
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }

    paginationNumbers.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(currentProducts.length / productsPerPage);

    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderProducts();
    updateResultsCount();

    // Scroll to top of products
    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
}

function updateResultsCount() {
    const startIndex = (currentPage - 1) * productsPerPage + 1;
    const endIndex = Math.min(currentPage * productsPerPage, currentProducts.length);
    const total = currentProducts.length;

    document.getElementById('results-count').textContent =
        `Showing ${startIndex}-${endIndex} of ${total} products`;
}

// Utility functions
function quickView(productId) {
    const product = productsDatabase.find(p => p.id === productId);
    if (product) {
        showQuickViewModal(product);
    }
}

function toggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const productIndex = wishlist.findIndex(item => item.id === productId);

    if (productIndex > -1) {
        wishlist.splice(productIndex, 1);
        showNotification('Removed from wishlist', 'info');
    } else {
        const product = productsDatabase.find(p => p.id === productId);
        if (product) {
            wishlist.push(product);
            showNotification('Added to wishlist!', 'success');
        }
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    updateWishlistButtons();
}

function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistCountElement = document.getElementById('wishlist-count');
    if (wishlistCountElement) {
        wishlistCountElement.textContent = wishlist.length;
    }
}

function updateWishlistButtons() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistIds = wishlist.map(item => item.id);

    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const productCard = btn.closest('.product-card');
        if (productCard) {
            const productId = parseInt(productCard.dataset.productId);
            const icon = btn.querySelector('i');

            if (wishlistIds.includes(productId)) {
                icon.className = 'fas fa-heart';
                btn.classList.add('active');
            } else {
                icon.className = 'far fa-heart';
                btn.classList.remove('active');
            }
        }
    });
}
function showQuickViewModal(product) {
    // Create modal HTML
    const modalHTML = `
        <div class="modal-overlay" id="quick-view-modal">
            <div class="modal-content">
                <button class="modal-close" onclick="closeQuickView()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="modal-info">
                        <div class="product-brand">${product.brand.charAt(0).toUpperCase() + product.brand.slice(1)}</div>
                        <h2>${product.name}</h2>
                        <div class="product-rating">
                            ${generateStars(product.rating)}
                            <span class="rating-count">(${product.reviews} reviews)</span>
                        </div>
                        <div class="product-price">
                            <span class="current-price">₹${product.price}</span>
                            ${product.originalPrice > product.price ?
                                `<span class="original-price">₹${product.originalPrice}</span>` : ''}
                        </div>
                        <p class="product-description">${product.description}</p>
                        <div class="product-features">
                            <h4>Features:</h4>
                            <ul>
                                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="modal-actions">
                            <button class="add-to-cart-btn" onclick="addToCart('${product.name}', ${product.price}, ${product.id}); closeQuickView();">
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

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Show modal with animation
    setTimeout(() => {
        document.getElementById('quick-view-modal').classList.add('active');
    }, 10);

    // Prevent body scroll
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

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeQuickView();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeQuickView();
    }
});