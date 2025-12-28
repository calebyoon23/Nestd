// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get apartment ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const apartmentId = parseInt(urlParams.get('id'));
    const filterBeds = urlParams.get('beds'); // User's original filter
    const filterBaths = urlParams.get('baths'); // User's original filter
    const filterPrice = urlParams.get('price'); // User's original price filter

    // Find the apartment data
    const apartment = apartmentsData.find(apt => apt.id === apartmentId);

    if (!apartment) {
        // Redirect to home if apartment not found
        window.location.href = 'index.html';
        return;
    }

    // Initialize the page
    displayHeroSection(apartment);
    displayMap(apartment);
    displayReviews(apartment);
    displayFloorPlans(apartment, filterBeds, filterBaths, filterPrice);
    setupFloorPlanFilters();
});

function displayHeroSection(apartment) {
    document.getElementById('apartmentName').textContent = apartment.name;
    document.getElementById('apartmentLocation').textContent = apartment.location;

    const heroImage = document.getElementById('heroImage');
    heroImage.src = apartment.imageUrl || apartment.imageSrc || 'https://via.placeholder.com/1200x400?text=Apartment';
    heroImage.alt = apartment.name;

    // Update page title
    document.title = `${apartment.name} - Nestd`;
}

function displayMap(apartment) {
    // Display the address
    document.getElementById('mapAddress').textContent = apartment.location;

    // Set your Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1IjoieW9vbnN0ZXIyMyIsImEiOiJjbWpwMmJsaHkyM2FvM2RveWxybTNrZm84In0.YmXS_KEOZeRxGTLjPNS5Fg';

    // Use Mapbox Geocoding API to get coordinates from address
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(apartment.location)}.json?access_token=${mapboxgl.accessToken}`;

    fetch(geocodeUrl)
        .then(response => response.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                const [lng, lat] = data.features[0].center;

                // Initialize the map
                const map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v12', // Clean streets style
                    center: [lng, lat],
                    zoom: 15
                });

                // Add navigation controls (zoom buttons)
                map.addControl(new mapboxgl.NavigationControl(), 'top-right');

                // Add full screen control
                map.addControl(new mapboxgl.FullscreenControl(), 'top-right');

                // Create a popup
                const popup = new mapboxgl.Popup({ offset: 25 })
                    .setHTML(`<div style="padding: 8px;"><strong>${apartment.name}</strong><br>${apartment.location}</div>`);

                // Add a marker with popup
                const marker = new mapboxgl.Marker({ color: '#990000' }) // IU crimson color
                    .setLngLat([lng, lat])
                    .setPopup(popup)
                    .addTo(map);

                // Open popup by default
                marker.togglePopup();
            } else {
                console.error('Geocoding failed: No results found');
                // Fallback to Bloomington, IN
                initializeFallbackMap();
            }
        })
        .catch(error => {
            console.error('Geocoding error:', error);
            // Fallback to Bloomington, IN
            initializeFallbackMap();
        });

    function initializeFallbackMap() {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-86.5264, 39.1653], // Bloomington, IN
            zoom: 13
        });

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');
        map.addControl(new mapboxgl.FullscreenControl(), 'top-right');
    }
}

function displayReviews(apartment) {
    if (!apartment.reviews || apartment.reviews.length === 0) {
        document.querySelector('.reviews-section').style.display = 'none';
        return;
    }

    // Calculate average rating
    const avgRating = apartment.reviews.reduce((sum, review) => sum + review.rating, 0) / apartment.reviews.length;

    // Display average rating
    document.getElementById('averageRating').textContent = avgRating.toFixed(1);
    document.getElementById('reviewCount').textContent = `${apartment.reviews.length} review${apartment.reviews.length !== 1 ? 's' : ''}`;

    // Display star rating
    const starsContainer = document.getElementById('averageStars');
    starsContainer.innerHTML = generateStars(avgRating);

    // Display individual reviews
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = '';

    apartment.reviews.forEach(review => {
        const reviewCard = createReviewCard(review);
        reviewsList.appendChild(reviewCard);
    });
}

function generateStars(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<span class="star filled">★</span>';
    }

    if (hasHalfStar) {
        starsHtml += '<span class="star half">★</span>';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<span class="star">★</span>';
    }

    return starsHtml;
}

function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';

    const reviewDate = new Date(review.date);
    const formattedDate = reviewDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    card.innerHTML = `
        <div class="review-header">
            <div class="review-author">
                <div class="author-avatar">${review.author.charAt(0)}</div>
                <div class="author-info">
                    <h4>${review.author}</h4>
                    <p class="review-date">${formattedDate}</p>
                </div>
            </div>
            <div class="review-rating">
                ${generateStars(review.rating)}
            </div>
        </div>
        <p class="review-text">${review.text}</p>
    `;

    return card;
}

function displayFloorPlans(apartment, filterBeds, filterBaths, filterPrice) {
    if (!apartment.floorPlans || apartment.floorPlans.length === 0) {
        document.querySelector('.floor-plans-section').innerHTML = '<p>No floor plans available.</p>';
        return;
    }

    const floorPlansList = document.getElementById('floorPlansList');
    floorPlansList.innerHTML = '';

    let firstHighlightedCard = null;

    apartment.floorPlans.forEach(floorPlan => {
        const isHighlighted = shouldHighlightFloorPlan(floorPlan, filterBeds, filterBaths, filterPrice);
        const card = createFloorPlanCard(floorPlan, isHighlighted);
        floorPlansList.appendChild(card);

        // Track the first highlighted card for scrolling
        if (isHighlighted && !firstHighlightedCard) {
            firstHighlightedCard = card;
        }
    });

    // Auto-scroll to the first highlighted floor plan after a short delay
    if (firstHighlightedCard) {
        setTimeout(() => {
            firstHighlightedCard.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 300);
    }
}

function shouldHighlightFloorPlan(floorPlan, filterBeds, filterBaths, filterPrice) {
    // Only highlight if there are filters applied
    if (!filterBeds && !filterBaths && !filterPrice) return false;

    let bedsMatch = true;
    let bathsMatch = true;
    let priceMatch = true;

    // Check bedrooms filter
    if (filterBeds && filterBeds !== 'all') {
        const beds = floorPlan.beds === 'Studio' ? 0 : floorPlan.beds;
        if (filterBeds === '5+') {
            bedsMatch = beds >= 5;
        } else {
            bedsMatch = beds == parseInt(filterBeds);
        }
    }

    // Check bathrooms filter
    if (filterBaths && filterBaths !== 'all') {
        if (filterBaths === '5+') {
            bathsMatch = floorPlan.baths >= 5;
        } else {
            bathsMatch = floorPlan.baths >= parseFloat(filterBaths);
        }
    }

    // Check price filter
    if (filterPrice) {
        const [minPrice, maxPrice] = filterPrice.split('-').map(p => parseInt(p));
        if (maxPrice) {
            priceMatch = floorPlan.price >= minPrice && floorPlan.price <= maxPrice;
        } else {
            // If no max, it's a "min+" filter
            priceMatch = floorPlan.price >= minPrice;
        }
    }

    return bedsMatch && bathsMatch && priceMatch;
}

function createFloorPlanCard(floorPlan, isHighlighted) {
    const card = document.createElement('div');
    card.className = 'floor-plan-card' + (isHighlighted ? ' highlighted' : '');
    card.dataset.beds = floorPlan.beds;

    const bedsText = floorPlan.beds === 'Studio' ? 'Studio' : `${floorPlan.beds} Bed${floorPlan.beds > 1 ? 's' : ''}`;
    const bathsText = floorPlan.baths === 'Studio' ? '' : ` • ${floorPlan.baths} Bath${floorPlan.baths > 1 ? 's' : ''}`;

    card.innerHTML = `
        ${isHighlighted ? '<div class="highlight-badge">Matches Your Filters</div>' : ''}
        <img src="${floorPlan.imageUrl}" alt="${floorPlan.name} floor plan" class="floor-plan-image">
        <div class="floor-plan-info">
            <h3 class="floor-plan-name">${floorPlan.name}</h3>
            <div class="floor-plan-specs">
                <span class="spec-item">${bedsText}${bathsText}</span>
                <span class="spec-item">${floorPlan.sqft} sq ft</span>
            </div>
            <p class="floor-plan-price">$${floorPlan.price.toLocaleString()}<span class="price-period">/month</span></p>
        </div>
    `;

    return card;
}

function setupFloorPlanFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const selectedBeds = this.dataset.beds;

            // Filter floor plans
            const floorPlanCards = document.querySelectorAll('.floor-plan-card');

            floorPlanCards.forEach(card => {
                if (selectedBeds === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.dataset.beds == selectedBeds) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}
