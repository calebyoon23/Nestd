// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get apartment ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const apartmentId = parseInt(urlParams.get('id'));
    const filterBeds = urlParams.get('beds'); // User's original filter
    const filterBaths = urlParams.get('baths'); // User's original filter

    // Find the apartment data
    const apartment = apartmentsData.find(apt => apt.id === apartmentId);

    if (!apartment) {
        // Redirect to home if apartment not found
        window.location.href = 'index.html';
        return;
    }

    // Initialize the page
    displayHeroSection(apartment);
    displayReviews(apartment);
    displayFloorPlans(apartment, filterBeds, filterBaths);
    setupFloorPlanFilters(apartment);
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

function displayFloorPlans(apartment, filterBeds, filterBaths) {
    if (!apartment.floorPlans || apartment.floorPlans.length === 0) {
        document.querySelector('.floor-plans-section').innerHTML = '<p>No floor plans available.</p>';
        return;
    }

    const floorPlansList = document.getElementById('floorPlansList');
    floorPlansList.innerHTML = '';

    apartment.floorPlans.forEach(floorPlan => {
        const isHighlighted = shouldHighlightFloorPlan(floorPlan, filterBeds, filterBaths);
        const card = createFloorPlanCard(floorPlan, isHighlighted);
        floorPlansList.appendChild(card);
    });
}

function shouldHighlightFloorPlan(floorPlan, filterBeds, filterBaths) {
    if (!filterBeds && !filterBaths) return false;

    let bedsMatch = true;
    let bathsMatch = true;

    if (filterBeds && filterBeds !== 'all') {
        if (filterBeds === '4') {
            bedsMatch = floorPlan.beds >= 4 || floorPlan.beds === '4+';
        } else {
            bedsMatch = floorPlan.beds == filterBeds;
        }
    }

    if (filterBaths && filterBaths !== 'all') {
        if (filterBaths === '2+') {
            bathsMatch = floorPlan.baths >= 2;
        } else {
            bathsMatch = floorPlan.baths >= parseFloat(filterBaths);
        }
    }

    return bedsMatch && bathsMatch;
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

function setupFloorPlanFilters(apartment) {
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
