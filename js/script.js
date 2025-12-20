// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get filter elements
    const priceRangeSelect = document.getElementById('priceRange');
    const bedroomsSelect = document.getElementById('bedrooms');
    const bathroomsSelect = document.getElementById('bathrooms');
    const resetBtn = document.getElementById('resetBtn');
    const apartmentGrid = document.getElementById('apartmentGrid');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');

    // Display all apartments on page load
    displayApartments(apartmentsData);

    // Filter when any dropdown changes
    priceRangeSelect.addEventListener('change', filterApartments);
    bedroomsSelect.addEventListener('change', filterApartments);
    bathroomsSelect.addEventListener('change', filterApartments);

    // Reset filters when reset button is clicked
    resetBtn.addEventListener('click', resetFilters);

    function resetFilters() {
        // Reset all dropdowns to "all"
        priceRangeSelect.value = 'all';
        bedroomsSelect.value = 'all';
        bathroomsSelect.value = 'all';

        // Display all apartments
        displayApartments(apartmentsData);
    }

    function filterApartments() {
        const priceRange = priceRangeSelect.value;
        const bedrooms = bedroomsSelect.value;
        const bathrooms = bathroomsSelect.value;

        let filtered = apartmentsData.filter(apartment => {
            // Filter by price
            let priceMatch = true;
            if (priceRange !== 'all') {
                if (priceRange === '0-700') {
                    priceMatch = apartment.price < 700;
                } else if (priceRange === '700-900') {
                    priceMatch = apartment.price >= 700 && apartment.price < 900;
                } else if (priceRange === '900-1100') {
                    priceMatch = apartment.price >= 900 && apartment.price < 1100;
                } else if (priceRange === '1100-1500') {
                    priceMatch = apartment.price >= 1100 && apartment.price < 1500;
                } else if (priceRange === '1500+') {
                    priceMatch = apartment.price >= 1500;
                }
            }

            // Filter by bedrooms
            let bedroomMatch = true;
            if (bedrooms !== 'all') {
                if (bedrooms === '4') {
                    bedroomMatch = apartment.beds >= 4;
                } else {
                    bedroomMatch = apartment.beds === parseInt(bedrooms);
                }
            }

            // Filter by bathrooms
            let bathroomMatch = true;
            if (bathrooms !== 'all') {
                if (bathrooms === '2+') {
                    bathroomMatch = apartment.baths >= 2;
                } else {
                    bathroomMatch = apartment.baths >= parseFloat(bathrooms);
                }
            }

            return priceMatch && bedroomMatch && bathroomMatch;
        });

        displayApartments(filtered);
    }

    function displayApartments(apartments) {
        // Clear current results
        apartmentGrid.innerHTML = '';

        // Update results count
        resultsCount.textContent = `Showing ${apartments.length} apartment${apartments.length !== 1 ? 's' : ''}`;

        // Show/hide no results message
        if (apartments.length === 0) {
            noResults.style.display = 'block';
            apartmentGrid.style.display = 'none';
        } else {
            noResults.style.display = 'none';
            apartmentGrid.style.display = 'grid';

            // Create apartment cards
            apartments.forEach(apartment => {
                const card = createApartmentCard(apartment);
                apartmentGrid.appendChild(card);
            });
        }
    }

    function createApartmentCard(apartment) {
        const card = document.createElement('div');
        card.className = 'apartment-card';

        // Handle both imageSrc and imageUrl properties
        const imageSource = apartment.imageSrc || apartment.imageUrl || 'https://via.placeholder.com/400x300?text=Apartment';

        // Determine if this apartment has a detail page
        if (apartment.hasDetailPage) {
            // Make the card clickable and navigate to detail page
            card.style.cursor = 'pointer';

            card.innerHTML = `
                <img src="${imageSource}" alt="${apartment.name}" class="apartment-image">
                <div class="apartment-info">
                    <h3 class="apartment-name">${apartment.name}</h3>
                    <p class="apartment-location">${apartment.location}</p>
                    <div class="apartment-details">
                        <span class="detail-item">${apartment.beds} Bed${apartment.beds > 1 ? 's' : ''}</span>
                        <span class="detail-separator">•</span>
                        <span class="detail-item">${apartment.baths} Bath${apartment.baths > 1 ? 's' : ''}</span>
                    </div>
                    <p class="apartment-price">$${apartment.price}<span class="price-period">/month</span></p>
                    <span class="floor-plan-link">View Details →</span>
                </div>
            `;

            // Add click handler to navigate to detail page with current filter values
            card.addEventListener('click', function() {
                const bedrooms = bedroomsSelect.value;
                const bathrooms = bathroomsSelect.value;

                // Build URL with apartment ID and filter parameters
                let url = `apartment-detail.html?id=${apartment.id}`;
                if (bedrooms && bedrooms !== 'all') {
                    url += `&beds=${bedrooms}`;
                }
                if (bathrooms && bathrooms !== 'all') {
                    url += `&baths=${bathrooms}`;
                }

                window.location.href = url;
            });
        } else {
            // Keep original behavior with external link
            card.innerHTML = `
                <img src="${imageSource}" alt="${apartment.name}" class="apartment-image">
                <div class="apartment-info">
                    <h3 class="apartment-name">${apartment.name}</h3>
                    <p class="apartment-location">${apartment.location}</p>
                    <div class="apartment-details">
                        <span class="detail-item">${apartment.beds} Bed${apartment.beds > 1 ? 's' : ''}</span>
                        <span class="detail-separator">•</span>
                        <span class="detail-item">${apartment.baths} Bath${apartment.baths > 1 ? 's' : ''}</span>
                    </div>
                    <p class="apartment-price">$${apartment.price}<span class="price-period">/month</span></p>
                    <a href="${apartment.floorPlanUrl}" target="_blank" class="floor-plan-link">View Floor Plan →</a>
                </div>
            `;
        }

        return card;
    }
});
