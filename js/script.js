// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get filter elements (now range sliders)
    const priceRangeInput = document.getElementById('priceRange');
    const bedroomsInput = document.getElementById('bedrooms');
    const bathroomsInput = document.getElementById('bathrooms');
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

    // Derive price buckets (min / median / max) from dataset and intermediate midpoints
    // Include both apartment prices and floor plan prices
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
    const priceMin = prices.length ? prices[0] : 0;
    const priceMax = prices.length ? prices[prices.length - 1] : 0;
    let priceMedian = 0;
    if (prices.length) {
        const mid = Math.floor(prices.length / 2);
        priceMedian = prices.length % 2 === 1 ? prices[mid] : Math.round((prices[mid - 1] + prices[mid]) / 2);
    }

    // compute midpoints between min/median/max for extra ticks
    const raw_mid1 = Math.round((priceMin + priceMedian) / 2);
    const raw_mid2 = Math.round((priceMedian + priceMax) / 2);
    const raw_midBetweenMedianAndMid2 = Math.round((priceMedian + raw_mid2) / 2);
    const raw_midBetweenMid2AndMax = Math.round((raw_mid2 + priceMax) / 2);

    // Rounding helpers per your rules
    function roundNearestHundred(n) { return Math.round(n / 100) * 100; }
    function floorHundred(n) { return Math.floor(n / 100) * 100; }
    function ceilHundred(n) { return Math.ceil(n / 100) * 100; }

    // Apply rounding rules:
    // - lowest numeric tick (mid1) => round DOWN to nearest 100
    // - highest tick (priceMax) => round UP to nearest 100
    // - others => round to nearest 100
    const mid1 = floorHundred(raw_mid1);
    const medianRounded = roundNearestHundred(priceMedian);
    const midBetweenMedianAndMid2 = roundNearestHundred(raw_midBetweenMedianAndMid2);
    const mid2 = roundNearestHundred(raw_mid2);
    const midBetweenMid2AndMax = roundNearestHundred(raw_midBetweenMid2AndMax);
    const priceMaxRounded = ceilHundred(priceMax);

    // Ensure strictly increasing bounds (avoid duplicates after rounding)
    let bounds = [mid1, medianRounded, midBetweenMedianAndMid2, mid2, midBetweenMid2AndMax, priceMaxRounded];
    for (let i = 1; i < bounds.length; i++) {
        if (bounds[i] <= bounds[i - 1]) bounds[i] = bounds[i - 1] + 100;
    }

    // Update visible tick labels for price to show rounded values
    function formatMoney(n) {
        return `$${n.toLocaleString()}`;
    }

    const priceTicksContainer = document.getElementById('priceRangeTicks');
    if (priceTicksContainer) {
        const spans = priceTicksContainer.querySelectorAll('span');
        spans.forEach(s => {
            const idx = parseInt(s.dataset.index);
            if (idx === 0) {
                s.textContent = 'All';
                s.dataset.label = 'All Prices';
            } else {
                const v = bounds[idx - 1];
                s.textContent = formatMoney(v);
                s.dataset.label = `${formatMoney(v)}`;
            }
        });
    }

    // Draw filled track for ranges
    function setRangeBackground(input) {
        const min = parseFloat(input.min);
        const max = parseFloat(input.max);
        const val = parseFloat(input.value);
        const percent = ((val - min) / (max - min)) * 100;
        input.style.background = `linear-gradient(90deg, var(--text) ${percent}%, var(--border) ${percent}%)`;
    }

    setRangeBackground(priceRangeInput);
    setRangeBackground(bedroomsInput);
    setRangeBackground(bathroomsInput);

    // Position ticks so first and last are flush to edges and evenly spaced
    function positionTicks(ticksId, maxIndex) {
        const container = document.getElementById(ticksId);
        if (!container) return;
        const spans = container.querySelectorAll('span');
        spans.forEach(s => {
            const idx = parseInt(s.dataset.index);
            const left = (idx / maxIndex) * 100;
            s.style.left = left + '%';
        });
    }

    // Initialize tick positions (price now has 7 ticks: 0..6)
    positionTicks('priceRangeTicks', 6);
    positionTicks('bedroomsTicks', 5);
    positionTicks('bathroomsTicks', 5);

    // Reposition ticks on resize to remain aligned
    window.addEventListener('resize', function() {
        positionTicks('priceRangeTicks', 6);
        positionTicks('bedroomsTicks', 5);
        positionTicks('bathroomsTicks', 5);
    });

    // Filter while user drags
    priceRangeInput.addEventListener('input', function() {
        setRangeBackground(this);
        filterApartments();
    });

    bedroomsInput.addEventListener('input', function() {
        setRangeBackground(this);
        filterApartments();
    });

    bathroomsInput.addEventListener('input', function() {
        setRangeBackground(this);
        filterApartments();
    });

    // Reset filters when reset button is clicked
    resetBtn.addEventListener('click', resetFilters);

    function resetFilters() {
        // Reset sliders to 'Any' position
        priceRangeInput.value = 0;
        bedroomsInput.value = 0;
        bathroomsInput.value = 0;

        setRangeBackground(priceRangeInput);
        setRangeBackground(bedroomsInput);
        setRangeBackground(bathroomsInput);

        positionTicks('priceRangeTicks', 6);
        positionTicks('bedroomsTicks', 5);
        positionTicks('bathroomsTicks', 5);

        // Display all apartments
        displayApartments(apartmentsData);
    }

    function filterApartments() {
        const priceIndex = parseInt(priceRangeInput.value);
        const bedroomsVal = parseInt(bedroomsInput.value);
        const bathroomsIndex = parseInt(bathroomsInput.value);

        // Helper function to check if a listing matches filters
        function matchesFilters(listing) {
            // Filter by price
            let priceMatch = true;
            if (priceIndex !== 0) {
                if (priceIndex === 1) {
                    priceMatch = listing.price <= bounds[0];
                } else if (priceIndex > 1 && priceIndex < 6) {
                    const lower = bounds[priceIndex - 2];
                    const upper = bounds[priceIndex - 1];
                    priceMatch = listing.price > lower && listing.price <= upper;
                } else if (priceIndex === 6) {
                    priceMatch = listing.price >= bounds[5];
                }
            }

            // Filter by bedrooms
            let bedroomMatch = true;
            if (bedroomsVal !== 0) {
                // Handle Studio listings
                const beds = listing.beds === 'Studio' ? 0 : listing.beds;
                if (bedroomsVal === 5) {
                    bedroomMatch = beds >= 5;
                } else {
                    bedroomMatch = beds === bedroomsVal;
                }
            }

            // Filter by bathrooms
            let bathroomMatch = true;
            if (bathroomsIndex !== 0) {
                if (bathroomsIndex === 5) {
                    bathroomMatch = listing.baths >= 5;
                } else {
                    bathroomMatch = listing.baths >= bathroomsIndex;
                }
            }

            return priceMatch && bedroomMatch && bathroomMatch;
        }

        // Build filtered apartments array with matching floor plan counts
        let filteredApartments = [];

        apartmentsData.forEach(apartment => {
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
                const bedVal = parseInt(bedroomsInput.value);
                const bathIndex = parseInt(bathroomsInput.value);
                const priceIndex = parseInt(priceRangeInput.value);

                // Build URL with apartment ID and filter parameters
                let url = `apartment-detail.html?id=${apartment.id}`;
                if (bedVal && bedVal !== 0) {
                    if (bedVal === 5) url += `&beds=5+`;
                    else url += `&beds=${bedVal}`;
                }

                if (bathIndex && bathIndex !== 0) {
                    const bathMap = {1: '1', 2: '2', 3: '3', 4: '4', 5: '5+'};
                    url += `&baths=${bathMap[bathIndex]}`;
                }

                // Add price range if a price filter is selected
                if (priceIndex && priceIndex !== 0) {
                    let priceParam = '';
                    if (priceIndex === 1) {
                        priceParam = `0-${bounds[0]}`;
                    } else if (priceIndex > 1 && priceIndex < 6) {
                        const lower = bounds[priceIndex - 2];
                        const upper = bounds[priceIndex - 1];
                        priceParam = `${lower}-${upper}`;
                    } else if (priceIndex === 6) {
                        priceParam = `${bounds[5]}-999999`;
                    }
                    if (priceParam) {
                        url += `&price=${priceParam}`;
                    }
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
