// Brands Database
const brandsDatabase = [
    {
        id: 1,
        name: "Havells",
        logo: "https://via.placeholder.com/200x100/f0f0f0/666?text=Havells",
        description: "Leading electrical equipment company in India, known for innovative and energy-efficient products.",
        founded: "1958",
        headquarters: "Noida, India",
        specialties: ["Lighting", "Fans", "Switches", "Wires", "Appliances"],
        website: "https://www.havells.com",
        productCount: 150,
        rating: 4.5,
        isPartner: true,
        isFeatured: true,
        story: "Havells has been a trusted name in electrical products for over 60 years, consistently delivering quality and innovation.",
        achievements: [
            "India's largest electrical equipment manufacturer",
            "Present in over 50 countries",
            "Award-winning design and innovation",
            "ISO certified manufacturing"
        ]
    },
    {
        id: 2,
        name: "Anchor",
        logo: "https://via.placeholder.com/200x100/f0f0f0/666?text=Anchor",
        description: "Premium electrical accessories brand known for safety, reliability and innovative design.",
        founded: "1963",
        headquarters: "Mumbai, India",
        specialties: ["Switches", "Sockets", "MCBs", "Distribution Boards"],
        website: "https://www.anchorelectricals.com",
        productCount: 85,
        rating: 4.4,
        isPartner: true,
        isFeatured: true,
        story: "Anchor by Panasonic has been setting standards in electrical safety and innovation for decades.",
        achievements: [
            "Part of Panasonic Group",
            "Leader in modular switches",
            "Advanced safety features",
            "Wide distribution network"
        ]
    },
    {
        id: 3,
        name: "Legrand",
        logo: "https://via.placeholder.com/200x100/f0f0f0/666?text=Legrand",
        description: "Global specialist in electrical and digital building infrastructures.",
        founded: "1860",
        headquarters: "Limoges, France",
        specialties: ["Switches", "Sockets", "Cable Management", "UPS"],
        website: "https://www.legrand.in",
        productCount: 120,
        rating: 4.6,
        isPartner: true,
        isFeatured: true,
        story: "Legrand is a world leader in electrical installations and information networks.",
        achievements: [
            "Global presence in 90+ countries",
            "Innovation leader",
            "Sustainable solutions",
            "Premium quality products"
        ]
    },
    {
        id: 4,
        name: "Philips",
        logo: "https://via.placeholder.com/200x100/f0f0f0/666?text=Philips",
        description: "World-renowned brand in lighting solutions and electrical products.",
        founded: "1891",
        headquarters: "Amsterdam, Netherlands",
        specialties: ["LED Lighting", "Smart Lighting", "Professional Lighting"],
        website: "https://www.philips.co.in",
        productCount: 95,
        rating: 4.7,
        isPartner: true,
        isFeatured: true,
        story: "Philips has been illuminating the world with innovative lighting solutions for over 130 years.",
        achievements: [
            "Global lighting leader",
            "Smart lighting pioneer",
            "Energy-efficient solutions",
            "Award-winning designs"
        ]
    },
    {
        id: 5,
        name: "Crompton",
        logo: "https://via.placeholder.com/200x100/f0f0f0/666?text=Crompton",
        description: "Trusted Indian brand for fans, lighting, and electrical appliances.",
        founded: "1878",
        headquarters: "Mumbai, India",
        specialties: ["Fans", "LED Lighting", "Pumps", "Appliances"],
        website: "https://www.crompton.co.in",
        productCount: 110,
        rating: 4.3,
        isPartner: true,
        isFeatured: true,
        story: "Crompton has been a household name in India for over 140 years, known for reliable electrical products.",
        achievements: [
            "Heritage brand since 1878",
            "Wide product portfolio",
            "Strong retail presence",
            "Customer-focused innovation"
        ]
    },
    {
        id: 6,
        name: "Bajaj",
        logo: "https://via.placeholder.com/200x100/f0f0f0/666?text=Bajaj",
        description: "Leading manufacturer of fans, lighting, and home appliances in India.",
        founded: "1926",
        headquarters: "Mumbai, India",
        specialties: ["Fans", "Lighting", "Home Appliances", "Kitchen Appliances"],
        website: "https://www.bajajelectricals.com",
        productCount: 75,
        rating: 4.2,
        isPartner: true,
        isFeatured: false,
        story: "Bajaj Electricals has been powering Indian homes with quality electrical products for nearly a century.",
        achievements: [
            "Iconic Indian brand",
            "Wide distribution network",
            "Affordable quality products",
            "Strong brand loyalty"
        ]
    },
    {
        id: 7,
        name: "Polycab",
        logo: "https://via.placeholder.com/200x100/f0f0f0/666?text=Polycab",
        description: "India's leading manufacturer of wires and cables.",
        founded: "1996",
        headquarters: "Mumbai, India",
        specialties: ["Wires", "Cables", "Fans", "LED Lighting", "Switches"],
        website: "https://www.polycab.com",
        productCount: 90,
        rating: 4.4,
        isPartner: true,
        isFeatured: false,
        story: "Polycab has grown to become India's largest wire and cable manufacturer with a comprehensive product range.",
        achievements: [
            "Largest wire manufacturer in India",
            "State-of-the-art manufacturing",
            "Quality certifications",
            "Expanding product portfolio"
        ]
    },
    {
        id: 8,
        name: "Syska",
        logo: "https://via.placeholder.com/200x100/f0f0f0/666?text=Syska",
        description: "Innovative LED lighting and electrical accessories brand.",
        founded: "2012",
        headquarters: "Mumbai, India",
        specialties: ["LED Lighting", "Smart Lighting", "Power Banks", "Accessories"],
        website: "https://www.syska.com",
        productCount: 60,
        rating: 4.1,
        isPartner: true,
        isFeatured: false,
        story: "Syska is a young and dynamic brand focused on bringing innovative LED lighting solutions to Indian consumers.",
        achievements: [
            "Fast-growing LED brand",
            "Innovative product designs",
            "Smart lighting solutions",
            "Strong online presence"
        ]
    }
];

// Initialize brands page
document.addEventListener('DOMContentLoaded', function() {
    renderBrands();
    setupBrandCategoryHandlers();
    updateCartCount();
    updateWishlistCount();
});

function renderBrands() {
    const brandsGrid = document.getElementById('brands-grid');
    const featuredBrands = brandsDatabase.filter(brand => brand.isFeatured);
    
    brandsGrid.innerHTML = featuredBrands.map(brand => createBrandCard(brand)).join('');
    
    // Add animation
    setTimeout(() => {
        document.querySelectorAll('.brand-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in-up');
        });
    }, 100);
}

function createBrandCard(brand) {
    return `
        <div class="brand-card" data-brand-id="${brand.id}">
            <div class="brand-header">
                <div class="brand-logo">
                    <img src="${brand.logo}" alt="${brand.name}" loading="lazy">
                </div>
                <div class="brand-rating">
                    ${generateStars(brand.rating)}
                    <span class="rating-value">${brand.rating}</span>
                </div>
            </div>
            <div class="brand-info">
                <h3 class="brand-name">${brand.name}</h3>
                <p class="brand-description">${brand.description}</p>
                <div class="brand-stats">
                    <div class="stat">
                        <i class="fas fa-calendar"></i>
                        <span>Since ${brand.founded}</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-box"></i>
                        <span>${brand.productCount}+ Products</span>
                    </div>
                </div>
                <div class="brand-specialties">
                    ${brand.specialties.slice(0, 3).map(specialty => 
                        `<span class="specialty-tag">${specialty}</span>`
                    ).join('')}
                </div>
            </div>
            <div class="brand-actions">
                <button class="view-products-btn" onclick="viewBrandProducts('${brand.name.toLowerCase()}')">
                    <i class="fas fa-eye"></i>
                    View Products
                </button>
                <button class="brand-info-btn" onclick="showBrandModal(${brand.id})">
                    <i class="fas fa-info-circle"></i>
                    Learn More
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

function viewBrandProducts(brandName) {
    window.location.href = `products.html?brand=${brandName}`;
}

function setupBrandCategoryHandlers() {
    document.querySelectorAll('.brand-category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            window.location.href = `products.html?category=${category}`;
        });
    });
}

function showBrandModal(brandId) {
    const brand = brandsDatabase.find(b => b.id === brandId);
    if (!brand) return;
    
    const modalHTML = `
        <div class="modal-overlay" id="brand-modal">
            <div class="modal-content brand-modal-content">
                <button class="modal-close" onclick="closeBrandModal()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="brand-modal-body">
                    <div class="brand-modal-header">
                        <div class="brand-logo-large">
                            <img src="${brand.logo}" alt="${brand.name}">
                        </div>
                        <div class="brand-title-info">
                            <h2>${brand.name}</h2>
                            <p class="brand-tagline">${brand.description}</p>
                            <div class="brand-rating">
                                ${generateStars(brand.rating)}
                                <span class="rating-value">${brand.rating}/5</span>
                            </div>
                        </div>
                    </div>
                    <div class="brand-details">
                        <div class="brand-story">
                            <h3>Our Story</h3>
                            <p>${brand.story}</p>
                        </div>
                        <div class="brand-achievements">
                            <h3>Key Achievements</h3>
                            <ul>
                                ${brand.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="brand-facts">
                            <div class="fact">
                                <i class="fas fa-calendar"></i>
                                <div>
                                    <strong>Founded</strong>
                                    <span>${brand.founded}</span>
                                </div>
                            </div>
                            <div class="fact">
                                <i class="fas fa-map-marker-alt"></i>
                                <div>
                                    <strong>Headquarters</strong>
                                    <span>${brand.headquarters}</span>
                                </div>
                            </div>
                            <div class="fact">
                                <i class="fas fa-box"></i>
                                <div>
                                    <strong>Products</strong>
                                    <span>${brand.productCount}+ Items</span>
                                </div>
                            </div>
                        </div>
                        <div class="brand-specialties-full">
                            <h3>Product Categories</h3>
                            <div class="specialties-grid">
                                ${brand.specialties.map(specialty => 
                                    `<span class="specialty-tag">${specialty}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="brand-modal-actions">
                        <button class="btn btn-primary" onclick="viewBrandProducts('${brand.name.toLowerCase()}')">
                            <i class="fas fa-shopping-bag"></i>
                            Shop ${brand.name} Products
                        </button>
                        <a href="${brand.website}" target="_blank" class="btn btn-outline">
                            <i class="fas fa-external-link-alt"></i>
                            Visit Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    setTimeout(() => {
        document.getElementById('brand-modal').classList.add('active');
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function closeBrandModal() {
    const modal = document.getElementById('brand-modal');
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
        closeBrandModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeBrandModal();
    }
});
