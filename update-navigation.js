// Script to update navigation menus across all pages
// This script updates the mega menu with new plumbing and sanitary categories

const newMegaMenuContent = `
                <div class="dropdown-menu mega-menu">
                    <div class="mega-menu-content">
                        <div class="menu-column">
                            <h4>Electrical</h4>
                            <ul>
                                <li><a href="products.html?category=led-bulbs">LED Bulbs</a></li>
                                <li><a href="products.html?category=tube-lights">Tube Lights</a></li>
                                <li><a href="products.html?category=ceiling-fans">Ceiling Fans</a></li>
                                <li><a href="products.html?category=modular-switches">Switches & Sockets</a></li>
                                <li><a href="products.html?category=house-wires">Wires & Cables</a></li>
                            </ul>
                        </div>
                        <div class="menu-column">
                            <h4>Plumbing</h4>
                            <ul>
                                <li><a href="products.html?category=pipes">Pipes & Fittings</a></li>
                                <li><a href="products.html?category=valves">Valves & Taps</a></li>
                                <li><a href="products.html?category=pumps">Water Pumps</a></li>
                                <li><a href="products.html?category=tanks">Water Tanks</a></li>
                                <li><a href="products.html?category=drainage">Drainage Systems</a></li>
                            </ul>
                        </div>
                        <div class="menu-column">
                            <h4>Bathroom & Sanitary</h4>
                            <ul>
                                <li><a href="products.html?category=toilets">Toilets & Seats</a></li>
                                <li><a href="products.html?category=basins">Wash Basins</a></li>
                                <li><a href="products.html?category=showers">Showers & Faucets</a></li>
                                <li><a href="products.html?category=accessories">Bathroom Accessories</a></li>
                                <li><a href="products.html?category=mirrors">Mirrors & Cabinets</a></li>
                            </ul>
                        </div>
                        <div class="menu-column">
                            <h4>Kitchen & Utilities</h4>
                            <ul>
                                <li><a href="products.html?category=kitchen-sinks">Kitchen Sinks</a></li>
                                <li><a href="products.html?category=kitchen-taps">Kitchen Taps</a></li>
                                <li><a href="products.html?category=water-heaters">Water Heaters</a></li>
                                <li><a href="products.html?category=tools">Tools & Hardware</a></li>
                                <li><a href="products.html?category=safety">Safety Equipment</a></li>
                            </ul>
                        </div>
                        <div class="menu-column">
                            <h4>Featured</h4>
                            <ul>
                                <li><a href="products.html?category=smart-home">Smart Home</a></li>
                                <li><a href="products.html?category=solar">Solar Products</a></li>
                                <li><a href="products.html?category=new-arrivals">New Arrivals</a></li>
                                <li><a href="deals.html">Special Offers</a></li>
                                <li><a href="products.html?category=bulk">Bulk Orders</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
`;

// Function to update navigation on page load
function updateNavigationMenus() {
    // Update mega menu if it exists
    const megaMenu = document.querySelector('.mega-menu');
    if (megaMenu) {
        megaMenu.innerHTML = newMegaMenuContent.trim();
    }
    
    // Update search placeholder
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.placeholder = 'Search for electrical & plumbing products...';
    }
    
    // Update footer categories if they exist
    updateFooterCategories();
}

function updateFooterCategories() {
    const footerCategories = document.querySelector('.footer-column:nth-child(3) ul');
    if (footerCategories) {
        footerCategories.innerHTML = `
            <li><a href="products.html?category=lighting">Lighting</a></li>
            <li><a href="products.html?category=electrical">Electrical</a></li>
            <li><a href="products.html?category=plumbing">Plumbing</a></li>
            <li><a href="products.html?category=bathroom">Bathroom & Sanitary</a></li>
            <li><a href="products.html?category=kitchen">Kitchen</a></li>
            <li><a href="products.html?category=tools">Tools & Hardware</a></li>
        `;
    }
}

// Enhanced search suggestions with new categories
const enhancedSearchSuggestions = [
    // Electrical
    'LED Bulbs', 'Tube Lights', 'Ceiling Fans', 'Switches', 'Wires', 'Cables',
    'MCB', 'RCCB', 'Extension Cords', 'Power Sockets', 'Modular Switches',
    
    // Plumbing
    'PVC Pipes', 'Ball Valve', 'Water Pump', 'Water Tank', 'Pipe Fittings',
    'Gate Valve', 'Check Valve', 'Drainage Pipes', 'Plumbing Tools',
    
    // Bathroom & Sanitary
    'Toilet', 'Wash Basin', 'Shower Head', 'Bathroom Mirror', 'Towel Rail',
    'Bathroom Cabinet', 'Toilet Seat', 'Faucets', 'Bathroom Accessories',
    'Soap Dispenser', 'Bathroom Tiles', 'Shower Mixer',
    
    // Kitchen
    'Kitchen Sink', 'Kitchen Tap', 'Water Heater', 'Kitchen Faucet',
    'Sink Mixer', 'Kitchen Accessories', 'Water Filter',
    
    // Tools & Hardware
    'Plumbing Tools', 'Electrical Tools', 'Pipe Wrench', 'Wire Strippers',
    'Multimeter', 'Drill Bits', 'Safety Equipment'
];

// Update search functionality
function updateSearchFunctionality() {
    const searchInput = document.getElementById('search-input');
    const searchSuggestions = document.getElementById('search-suggestions');
    
    if (searchInput && searchSuggestions) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            if (query.length > 0) {
                const filteredSuggestions = enhancedSearchSuggestions.filter(suggestion =>
                    suggestion.toLowerCase().includes(query)
                ).slice(0, 8);
                
                if (filteredSuggestions.length > 0) {
                    searchSuggestions.innerHTML = filteredSuggestions.map(suggestion => 
                        `<div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`
                    ).join('');
                    searchSuggestions.style.display = 'block';
                } else {
                    searchSuggestions.style.display = 'none';
                }
            } else {
                searchSuggestions.style.display = 'none';
            }
        });
        
        // Hide suggestions when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
                searchSuggestions.style.display = 'none';
            }
        });
    }
}

function selectSuggestion(suggestion) {
    const searchInput = document.getElementById('search-input');
    const searchSuggestions = document.getElementById('search-suggestions');
    
    if (searchInput) {
        searchInput.value = suggestion;
        searchSuggestions.style.display = 'none';
        
        // Trigger search
        performSearch(suggestion);
    }
}

function performSearch(query) {
    // Redirect to products page with search query
    window.location.href = `products.html?search=${encodeURIComponent(query)}`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateNavigationMenus();
    updateSearchFunctionality();
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateNavigationMenus,
        updateSearchFunctionality,
        enhancedSearchSuggestions
    };
}
