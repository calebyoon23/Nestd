// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get filter elements
    const resetBtn = document.getElementById('resetBtn');
    const apartmentGrid = document.getElementById('apartmentGrid');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');

    // Display apartments on page load; honor optional ?school= query param from home page
    const urlParams = new URLSearchParams(window.location.search);
    const schoolParam = urlParams.get('school');
    if (schoolParam && schoolParam.trim().length > 0) {
        const q = schoolParam.trim().toLowerCase();
        const filtered = apartmentsData.filter(a => {
            return (a.location && a.location.toLowerCase().includes(q)) ||
                   (a.name && a.name.toLowerCase().includes(q)) ||
                   (a.university && a.university.toLowerCase().includes(q));
        });
        displayApartments(filtered);
    } else {
        displayApartments(apartmentsData);
    }
    // Get dual-range slider elements
    const priceMinInput = document.getElementById('priceMin');
    const priceMaxInput = document.getElementById('priceMax');
    const minPriceDisplay = document.getElementById('minPriceDisplay');
    const maxPriceDisplay = document.getElementById('maxPriceDisplay');
    const sliderRange = document.getElementById('sliderRange');

    // Get counter elements
    const bedroomsValue = document.getElementById('bedroomsValue');
    const bedroomsDecrement = document.getElementById('bedroomsDecrement');
    const bedroomsIncrement = document.getElementById('bedroomsIncrement');
    const bathroomsValue = document.getElementById('bathroomsValue');
    const bathroomsDecrement = document.getElementById('bathroomsDecrement');
    const bathroomsIncrement = document.getElementById('bathroomsIncrement');

    // Counter state
    let bedroomsCount = 0; // 0 means "Any"
    let bathroomsCount = 0; // 0 means "Any"

    // Amenities state
    let selectedAmenities = new Set();

    // Get search and modal elements
    const searchInput = document.getElementById('searchInput');
    const filtersBtn = document.getElementById('filtersBtn');
    const filtersModal = document.getElementById('filtersModal');
    const closeModal = document.getElementById('closeModal');
    const applyFiltersBtn = document.getElementById('applyFiltersBtn');

    // Display all apartments on page load
    displayApartments(apartmentsData);

    // Search input handler
    searchInput.addEventListener('input', function() {
        filterApartments();
    });

    // Modal open/close handlers
    filtersBtn.addEventListener('click', function() {
        filtersModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', function() {
        filtersModal.style.display = 'none';
    });

    applyFiltersBtn.addEventListener('click', function() {
        filtersModal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === filtersModal) {
            filtersModal.style.display = 'none';
        }
    });

    // Amenities selection handlers
    const amenityButtons = document.querySelectorAll('.amenity-option');
    amenityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const amenity = this.getAttribute('data-amenity');

            // Toggle selected state
            if (selectedAmenities.has(amenity)) {
                selectedAmenities.delete(amenity);
                this.classList.remove('selected');
            } else {
                selectedAmenities.add(amenity);
                this.classList.add('selected');
            }

            // Note: No filtering yet as amenities data isn't added to apartments
            console.log('Selected amenities:', Array.from(selectedAmenities));
        });
    });

    // Calculate max price from data
    let allPrices = [];
    apartmentsData.forEach(apartment => {
        if (apartment.floorPlans && apartment.floorPlans.length > 0) {
            apartment.floorPlans.forEach(fp => {
                const price = Number(fp.price);
                if (!isNaN(price)) allPrices.push(price);
            });
        } else {
            const price = Number(apartment.price);
            if (!isNaN(price)) allPrices.push(price);
        }
    });
    const prices = allPrices.sort((a,b) => a - b);
    const maxPriceFromData = prices.length ? prices[prices.length - 1] : 3000;
    const roundedMaxPrice = Math.ceil(maxPriceFromData / 100) * 100; // Round up to nearest 100

    // Set the max value for both sliders
    priceMinInput.max = roundedMaxPrice;
    priceMaxInput.max = roundedMaxPrice;
    priceMaxInput.value = roundedMaxPrice;

    // Format money helper
    function formatMoney(n) {
        return `$${n.toLocaleString()}`;
    }

    // Update display and range highlight
    function updatePriceRange() {
        let minVal = parseInt(priceMinInput.value);
        let maxVal = parseInt(priceMaxInput.value);

        // Ensure min doesn't exceed max
        if (minVal > maxVal - 50) {
            minVal = maxVal - 50;
            priceMinInput.value = minVal;
        }

        // Update displays
        minPriceDisplay.textContent = formatMoney(minVal);
        maxPriceDisplay.textContent = formatMoney(maxVal);

        // Update the highlighted range between handles
        const percentMin = (minVal / roundedMaxPrice) * 100;
        const percentMax = (maxVal / roundedMaxPrice) * 100;
        sliderRange.style.left = percentMin + '%';
        sliderRange.style.width = (percentMax - percentMin) + '%';

        // Filter apartments
        filterApartments();
    }

    // Initialize display
    maxPriceDisplay.textContent = formatMoney(roundedMaxPrice);
    updatePriceRange();

    // Dual-range slider event handlers
    priceMinInput.addEventListener('input', updatePriceRange);
    priceMaxInput.addEventListener('input', updatePriceRange);

    // Counter button handlers
    function updateBedroomsDisplay() {
        if (bedroomsCount === 0) {
            bedroomsValue.textContent = 'Any';
        } else if (bedroomsCount >= 5) {
            bedroomsValue.textContent = '5+';
        } else {
            bedroomsValue.textContent = bedroomsCount;
        }
    }

    function updateBathroomsDisplay() {
        if (bathroomsCount === 0) {
            bathroomsValue.textContent = 'Any';
        } else if (bathroomsCount >= 5) {
            bathroomsValue.textContent = '5+';
        } else {
            bathroomsValue.textContent = bathroomsCount;
        }
    }

    bedroomsIncrement.addEventListener('click', function() {
        if (bedroomsCount < 5) {
            bedroomsCount++;
            updateBedroomsDisplay();
            filterApartments();
        }
    });

    bedroomsDecrement.addEventListener('click', function() {
        if (bedroomsCount > 0) {
            bedroomsCount--;
            updateBedroomsDisplay();
            filterApartments();
        }
    });

    bathroomsIncrement.addEventListener('click', function() {
        if (bathroomsCount < 5) {
            bathroomsCount++;
            updateBathroomsDisplay();
            filterApartments();
        }
    });

    bathroomsDecrement.addEventListener('click', function() {
        if (bathroomsCount > 0) {
            bathroomsCount--;
            updateBathroomsDisplay();
            filterApartments();
        }
    });

    // Reset filters when reset button is clicked
    resetBtn.addEventListener('click', resetFilters);

    function resetFilters() {
        // Reset price sliders
        priceMinInput.value = 0;
        priceMaxInput.value = roundedMaxPrice;
        updatePriceRange();

        // Reset counters to 'Any'
        bedroomsCount = 0;
        bathroomsCount = 0;
        updateBedroomsDisplay();
        updateBathroomsDisplay();

        // Reset amenities
        selectedAmenities.clear();
        amenityButtons.forEach(button => {
            button.classList.remove('selected');
        });

        // Reset search
        searchInput.value = '';

        // Display all apartments
        filterApartments();
    }

    function filterApartments() {
        const minPrice = parseInt(priceMinInput.value);
        const maxPrice = parseInt(priceMaxInput.value);
        const searchText = searchInput.value.toLowerCase().trim();

        // Helper function to check if a listing matches filters
        function matchesFilters(listing) {
            // Filter by price
            const priceMatch = listing.price >= minPrice && listing.price <= maxPrice;

            // Filter by bedrooms
            let bedroomMatch = true;
            if (bedroomsCount !== 0) {
                // Handle Studio listings
                const beds = listing.beds === 'Studio' ? 0 : listing.beds;
                if (bedroomsCount === 5) {
                    bedroomMatch = beds >= 5;
                } else {
                    bedroomMatch = beds === bedroomsCount;
                }
            }

            // Filter by bathrooms
            let bathroomMatch = true;
            if (bathroomsCount !== 0) {
                if (bathroomsCount === 5) {
                    bathroomMatch = listing.baths >= 5;
                } else {
                    bathroomMatch = listing.baths >= bathroomsCount;
                }
            }

            return priceMatch && bedroomMatch && bathroomMatch;
        }

        // Build filtered apartments array with matching floor plan counts
        let filteredApartments = [];

        apartmentsData.forEach(apartment => {
            // First check if apartment matches search text
            if (searchText) {
                const nameMatch = apartment.name.toLowerCase().includes(searchText);
                const locationMatch = apartment.location.toLowerCase().includes(searchText);
                if (!nameMatch && !locationMatch) {
                    return; // Skip this apartment if it doesn't match search
                }
            }
            if (apartment.floorPlans && apartment.floorPlans.length > 0) {
                // For apartments with detailed floor plans, count how many match
                const matchingFloorPlans = apartment.floorPlans.filter(floorPlan => {
                    return matchesFilters(floorPlan);
                });

                // Only include apartment if it has matching floor plans
                if (matchingFloorPlans.length > 0) {
                    filteredApartments.push({
                        ...apartment,
                        availableFloorPlans: matchingFloorPlans.length
                    });
                }
            } else {
                // For apartments without floor plans, show them if they match
                if (matchesFilters(apartment)) {
                    filteredApartments.push(apartment);
                }
            }
        });

        displayApartments(filteredApartments);
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

        // Determine if we should show available floor plans count
        const showFloorPlansCount = apartment.availableFloorPlans && apartment.availableFloorPlans > 0;

        // Determine if this apartment has a detail page
        if (apartment.hasDetailPage) {
            // Make the card clickable and navigate to detail page
            card.style.cursor = 'pointer';

            // Build the floor plans info if available
            const floorPlansInfo = showFloorPlansCount
                ? `<p class="available-plans">${apartment.availableFloorPlans} available floor plan${apartment.availableFloorPlans > 1 ? 's' : ''}</p>`
                : '';

            card.innerHTML = `
                <img src="${imageSource}" alt="${apartment.name}" class="apartment-image">
                <div class="apartment-info">
                    <h3 class="apartment-name">${apartment.name}</h3>
                    <p class="apartment-location">${apartment.location}</p>
                    ${floorPlansInfo}
                    <span class="floor-plan-link">View Details →</span>
                </div>
            `;

            // Add click handler to navigate to detail page with current filter values
            card.addEventListener('click', function() {
                const minPrice = parseInt(priceMinInput.value);
                const maxPrice = parseInt(priceMaxInput.value);

                // Build URL with apartment ID and filter parameters
                let url = `apartment-detail.html?id=${apartment.id}`;
                if (bedroomsCount && bedroomsCount !== 0) {
                    if (bedroomsCount === 5) url += `&beds=5+`;
                    else url += `&beds=${bedroomsCount}`;
                }

                if (bathroomsCount && bathroomsCount !== 0) {
                    const bathMap = {1: '1', 2: '2', 3: '3', 4: '4', 5: '5+'};
                    url += `&baths=${bathMap[bathroomsCount]}`;
                }

                // Add price range if not default (0 to max)
                if (minPrice !== 0 || maxPrice !== roundedMaxPrice) {
                    url += `&price=${minPrice}-${maxPrice}`;
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
                    <a href="${apartment.floorPlanUrl}" target="_blank" class="floor-plan-link">View Floor Plan →</a>
                </div>
            `;
        }

        return card;
    }
});
