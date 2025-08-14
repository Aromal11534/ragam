// About Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateWishlistCount();
    initializeAboutPage();
});

function initializeAboutPage() {
    animateStats();
    setupScrollAnimations();
    addInteractiveElements();
}

// Animate statistics counters
function animateStats() {
    const stats = [
        { element: document.querySelector('.hero-stats .stat:nth-child(1) .stat-number'), target: 15, suffix: '+' },
        { element: document.querySelector('.hero-stats .stat:nth-child(2) .stat-number'), target: 5000, suffix: '+' },
        { element: document.querySelector('.hero-stats .stat:nth-child(3) .stat-number'), target: 500, suffix: '+' },
        { element: document.querySelector('.hero-stats .stat:nth-child(4) .stat-number'), target: 24, suffix: '/7' }
    ];

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target.querySelector('.stat-number');
                const statData = stats.find(stat => stat.element === statElement);
                
                if (statData && !statElement.classList.contains('animated')) {
                    animateCounter(statData.element, statData.target, statData.suffix);
                    statElement.classList.add('animated');
                }
            }
        });
    }, observerOptions);

    // Observe the hero stats section
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        observer.observe(heroStats);
    }
}

function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 50; // 50 steps for smooth animation
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (suffix === '/7') {
            element.textContent = Math.floor(current) + suffix;
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 40);
}

// Setup scroll animations
function setupScrollAnimations() {
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

    // Elements to animate
    const animatedElements = document.querySelectorAll(`
        .info-card,
        .mission-card,
        .vision-card,
        .values-card,
        .feature-card,
        .story-text,
        .story-image
    `);

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Add interactive elements
function addInteractiveElements() {
    // Add hover effects to info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add parallax effect to story image
    const storyImage = document.querySelector('.story-image');
    if (storyImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.2;
            storyImage.style.transform = `translateY(${parallax}px)`;
        });
    }
}

// Business hours functionality
function updateBusinessHours() {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentHour = now.getHours();
    
    const businessHours = {
        1: { open: 9, close: 19 }, // Monday
        2: { open: 9, close: 19 }, // Tuesday
        3: { open: 9, close: 19 }, // Wednesday
        4: { open: 9, close: 19 }, // Thursday
        5: { open: 9, close: 19 }, // Friday
        6: { open: 9, close: 18 }, // Saturday
        0: null // Sunday - closed
    };
    
    const statusElement = document.createElement('div');
    statusElement.className = 'business-status';
    
    if (currentDay === 0) {
        statusElement.innerHTML = '<span class="status closed">Closed Today</span>';
        statusElement.classList.add('closed');
    } else {
        const hours = businessHours[currentDay];
        if (currentHour >= hours.open && currentHour < hours.close) {
            statusElement.innerHTML = '<span class="status open">Open Now</span>';
            statusElement.classList.add('open');
        } else {
            statusElement.innerHTML = '<span class="status closed">Closed Now</span>';
            statusElement.classList.add('closed');
        }
    }
    
    // Add status to business hours card
    const hoursCard = document.querySelector('.info-card:nth-child(2)');
    if (hoursCard && !hoursCard.querySelector('.business-status')) {
        hoursCard.querySelector('.info-content').appendChild(statusElement);
    }
}

// Initialize business hours status
document.addEventListener('DOMContentLoaded', updateBusinessHours);

// Add interactive map functionality (placeholder)
function initializeMap() {
    const locationCard = document.querySelector('.info-card:nth-child(1)');
    if (locationCard) {
        const mapButton = document.createElement('button');
        mapButton.className = 'map-button';
        mapButton.innerHTML = '<i class="fas fa-map"></i> View on Map';
        mapButton.onclick = function() {
            showNotification('🗺️ Opening map location...', 'info');
            // In a real application, this would open Google Maps
        };
        
        locationCard.querySelector('.info-content').appendChild(mapButton);
    }
}

// Add testimonials functionality
function loadTestimonials() {
    const testimonials = [
        {
            name: "Rajesh Kumar",
            rating: 5,
            comment: "Excellent service and quality products. The team is very knowledgeable and helpful.",
            date: "2 weeks ago"
        },
        {
            name: "Priya Nair",
            rating: 5,
            comment: "Best electrical shop in the area. Great prices and fast delivery.",
            date: "1 month ago"
        },
        {
            name: "Mohammed Ali",
            rating: 4,
            comment: "Good selection of products and professional installation service.",
            date: "3 weeks ago"
        }
    ];
    
    // This could be expanded to show testimonials in a dedicated section
    console.log('Testimonials loaded:', testimonials);
}

// Add contact quick actions
function addQuickActions() {
    const quickActions = document.createElement('div');
    quickActions.className = 'quick-actions';
    quickActions.innerHTML = `
        <div class="quick-action-buttons">
            <button class="quick-action-btn" onclick="window.location.href='tel:+919746478850'">
                <i class="fas fa-phone"></i>
                Call Now
            </button>
            <button class="quick-action-btn" onclick="window.location.href='contact.html'">
                <i class="fas fa-envelope"></i>
                Contact Us
            </button>
            <button class="quick-action-btn" onclick="window.location.href='products.html'">
                <i class="fas fa-shopping-bag"></i>
                Shop Now
            </button>
        </div>
    `;
    
    // Add to the end of the about hero section
    const aboutHero = document.querySelector('.about-hero .container');
    if (aboutHero) {
        aboutHero.appendChild(quickActions);
    }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeMap();
        loadTestimonials();
        addQuickActions();
    }, 1000);
});

// Add smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add dynamic content loading
function loadDynamicContent() {
    // Simulate loading additional content
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
        section.classList.add('fade-in-section');
    });
}

// Initialize dynamic content
document.addEventListener('DOMContentLoaded', loadDynamicContent);

// Add print functionality
function printPage() {
    window.print();
}

// Add share functionality
function shareAboutPage() {
    if (navigator.share) {
        navigator.share({
            title: 'About Ragam Electricals',
            text: 'Learn more about Ragam Electricals - Your trusted electrical partner',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Page URL copied to clipboard!', 'success');
        });
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'p':
                e.preventDefault();
                printPage();
                break;
            case 's':
                e.preventDefault();
                shareAboutPage();
                break;
        }
    }
});

// Add accessibility improvements
function improveAccessibility() {
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input');
    interactiveElements.forEach(element => {
        if (!element.getAttribute('aria-label') && !element.textContent.trim()) {
            element.setAttribute('aria-label', 'Interactive element');
        }
    });
}

// Initialize accessibility improvements
document.addEventListener('DOMContentLoaded', improveAccessibility);
