# IU Apartment Search - Implementation Guide

## Overview
This document contains all the code and implementation details for transforming the current website into an IU apartment search platform.

## Sample Apartment Data Structure

Create a new file: `js/apartments-data.js`

```javascript
// Sample apartment data for IU area
const apartmentsData = [
    {
        id: 1,
        name: "Copper Beech Townhomes",
        location: "2650 S Walnut St, Bloomington, IN",
        price: 850,
        beds: 2,
        baths: 2,
        floorPlanUrl: "https://example.com/floorplan1.pdf",
        imageUrl: "https://via.placeholder.com/400x300?text=Copper+Beech"
    },
    {
        id: 2,
        name: "The Grove at Bloomington",
        location: "1510 N Kinser Pike, Bloomington, IN",
        price: 725,
        beds: 1,
        baths: 1,
        floorPlanUrl: "https://example.com/floorplan2.pdf",
        imageUrl: "https://via.placeholder.com/400x300?text=The+Grove"
    },
    {
        id: 3,
        name: "Smallwood Plaza",
        location: "711 N Park Ave, Bloomington, IN",
        price: 950,
        beds: 2,
        baths: 1.5,
        floorPlanUrl: "https://example.com/floorplan3.pdf",
        imageUrl: "https://via.placeholder.com/400x300?text=Smallwood"
    },
    {
        id: 4,
        name: "Campus Edge on Pierce",
        location: "915 E 3rd St, Bloomington, IN",
        price: 1200,
        beds: 3,
        baths: 2,
        floorPlanUrl: "https://example.com/floorplan4.pdf",
        imageUrl: "https://via.placeholder.com/400x300?text=Campus+Edge"
    },
    {
        id: 5,
        name: "Forest Park",
        location: "3525 S Walnut St, Bloomington, IN",
        price: 650,
        beds: 1,
        baths: 1,
        floorPlanUrl: "https://example.com/floorplan5.pdf",
        imageUrl: "https://via.placeholder.com/400x300?text=Forest+Park"
    },
    {
        id: 6,
        name: "Woodbridge Apartments",
        location: "3001 S Walnut St, Bloomington, IN",
        price: 900,
        beds: 2,
        baths: 2,
        floorPlanUrl: "https://example.com/floorplan6.pdf",
        imageUrl: "https://via.placeholder.com/400x300?text=Woodbridge"
    },
    {
        id: 7,
        name: "Arch II Student Housing",
        location: "815 N Jordan Ave, Bloomington, IN",
        price: 1100,
        beds: 2,
        baths: 2,
        floorPlanUrl: "https://example.com/floorplan7.pdf",
        imageUrl: "https://via.placeholder.com/400x300?text=Arch+II"
    },
    {
        id: 8,
        name: "Wexford Village",
        location: "745 W Winslow Rd, Bloomington, IN",
        price: 800,
        beds: 2,
        baths: 1,
        floorPlanUrl: "https://example.com/floorplan8.pdf",
        imageUrl: "https://via.placeholder.com/400x300?text=Wexford"
    },
    {
        id: 9,
        name: "College Park",
        location: "2525 E 10th St, Bloomington, IN",
        price: 1350,
        beds: 4,
        baths: 2,
        floorPlanUrl: "https://example.com/floorplan9.pdf",
        imageUrl: "https://via.placeholder.com/400x300?text=College+Park"
    },
    {
        id: 10,
        name: "Monroe Village",
        location: "1960 S Henderson St, Bloomington, IN",
        price: 775,
        beds: 1,
        baths: 1,
        floorPlanUrl: "https://example.com/floorplan10.pdf",
        imageUrl: "https://via.placeholder.com/400x300?text=Monroe+Village"
    }
];
```

---

## Updated HTML Structure

Replace the content inside `<main>` in `index.html`:

```html
<main>
    <!-- Search/Filter Section -->
    <section id="search" class="search-section">
        <div class="search-container">
            <h1>Find Your Perfect IU Apartment</h1>
            <p class="search-subtitle">Search through available apartments near Indiana University</p>

            <div class="filters">
                <!-- Price Range Filter -->
                <div class="filter-group">
                    <label for="priceRange">Price Range</label>
                    <select id="priceRange" class="filter-select">
                        <option value="all">All Prices</option>
                        <option value="0-700">Under $700</option>
                        <option value="700-900">$700 - $900</option>
                        <option value="900-1100">$900 - $1,100</option>
                        <option value="1100-1500">$1,100 - $1,500</option>
                        <option value="1500+">$1,500+</option>
                    </select>
                </div>

                <!-- Bedrooms Filter -->
                <div class="filter-group">
                    <label for="bedrooms">Bedrooms</label>
                    <select id="bedrooms" class="filter-select">
                        <option value="all">Any</option>
                        <option value="1">1 Bed</option>
                        <option value="2">2 Beds</option>
                        <option value="3">3 Beds</option>
                        <option value="4">4+ Beds</option>
                    </select>
                </div>

                <!-- Bathrooms Filter -->
                <div class="filter-group">
                    <label for="bathrooms">Bathrooms</label>
                    <select id="bathrooms" class="filter-select">
                        <option value="all">Any</option>
                        <option value="1">1 Bath</option>
                        <option value="1.5">1.5 Baths</option>
                        <option value="2">2 Baths</option>
                        <option value="2+">2+ Baths</option>
                    </select>
                </div>

                <!-- Search Button -->
                <button id="searchBtn" class="search-btn">Search</button>
            </div>
        </div>
    </section>

    <!-- Results Section -->
    <section id="results" class="results-section">
        <div class="results-header">
            <h2>Available Apartments</h2>
            <p id="resultsCount" class="results-count">Showing 10 apartments</p>
        </div>

        <div id="apartmentGrid" class="apartment-grid">
            <!-- Apartment cards will be dynamically inserted here -->
        </div>

        <div id="noResults" class="no-results" style="display: none;">
            <p>No apartments match your criteria. Try adjusting your filters.</p>
        </div>
    </section>
</main>
```

---

## Updated JavaScript Logic

Replace content in `js/script.js`:

```javascript
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get filter elements
    const priceRangeSelect = document.getElementById('priceRange');
    const bedroomsSelect = document.getElementById('bedrooms');
    const bathroomsSelect = document.getElementById('bathrooms');
    const searchBtn = document.getElementById('searchBtn');
    const apartmentGrid = document.getElementById('apartmentGrid');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');

    // Display all apartments on page load
    displayApartments(apartmentsData);

    // Add event listener to search button
    searchBtn.addEventListener('click', filterApartments);

    // Also filter when any dropdown changes
    priceRangeSelect.addEventListener('change', filterApartments);
    bedroomsSelect.addEventListener('change', filterApartments);
    bathroomsSelect.addEventListener('change', filterApartments);

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

        card.innerHTML = `
            <img src="${apartment.imageUrl}" alt="${apartment.name}" class="apartment-image">
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

        return card;
    }
});
```

---

## CSS Styles to Add

Add these styles to `css/styles.css`:

```css
/* Search Section */
.search-section {
    background: var(--surface);
    padding: 3rem 1rem;
    margin-bottom: 2rem;
    border-radius: 12px;
}

.search-container {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

.search-container h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.search-subtitle {
    color: var(--muted);
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

.filters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
}

.filter-group {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.filter-group label {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text);
}

.filter-select {
    padding: 0.75rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 1rem;
    font-family: inherit;
    background: var(--bg);
    cursor: pointer;
    transition: border-color 160ms ease;
}

.filter-select:focus {
    outline: none;
    border-color: var(--text);
    box-shadow: 0 0 0 3px rgba(0,0,0,0.05);
}

.search-btn {
    background-color: var(--text);
    color: var(--bg);
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 160ms ease, transform 160ms ease;
    align-self: end;
}

.search-btn:hover {
    opacity: 0.9;
    transform: translateY(-1px);
}

/* Results Section */
.results-section {
    margin-top: 2rem;
}

.results-header {
    margin-bottom: 1.5rem;
}

.results-header h2 {
    font-size: 1.75rem;
    margin-bottom: 0.25rem;
}

.results-count {
    color: var(--muted);
    font-size: 0.95rem;
}

.apartment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
}

.apartment-card {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 200ms ease, box-shadow 200ms ease;
}

.apartment-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.apartment-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    background: var(--surface);
}

.apartment-info {
    padding: 1.25rem;
}

.apartment-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text);
}

.apartment-location {
    color: var(--muted);
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
}

.apartment-details {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
    color: var(--muted);
}

.detail-separator {
    color: var(--border);
}

.apartment-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 1rem;
}

.price-period {
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--muted);
}

.floor-plan-link {
    display: inline-block;
    color: var(--text);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: opacity 160ms ease;
}

.floor-plan-link:hover {
    opacity: 0.7;
}

.no-results {
    text-align: center;
    padding: 4rem 1rem;
    color: var(--muted);
    font-size: 1.1rem;
}

/* Responsive Design for Apartment Search */
@media (max-width: 768px) {
    .search-container h1 {
        font-size: 1.75rem;
    }

    .filters {
        grid-template-columns: 1fr;
    }

    .apartment-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## Files to Update

1. **Add new file**: `js/apartments-data.js` (contains the sample data above)
2. **Update**: `index.html` - Replace `<main>` content with the search interface
3. **Update**: `js/script.js` - Replace with the filter logic
4. **Update**: `css/styles.css` - Add the new styles for apartment cards and filters
5. **Update**: `index.html` - Add this script tag before the closing `</body>` tag:
   ```html
   <script src="js/apartments-data.js"></script>
   ```

---

## Implementation Steps (After Pulling Friend's Changes)

1. Pull your friend's styling updates
2. Create `js/apartments-data.js` with the sample data
3. Update `index.html` to include the new script tag and replace the main section
4. Replace `js/script.js` with the new filtering logic
5. Add the new CSS styles to `css/styles.css`
6. Test the filtering functionality

---

## Future Enhancements

- Add more apartments to the dataset
- Implement sorting (price, beds, etc.)
- Add amenities filter
- Add distance from campus filter
- Connect to a backend API for real-time data
- Add image galleries for each apartment
- Implement favorites/save functionality
- Add map view of apartments

---

## Notes

- Placeholder images are being used - replace with real apartment images later
- Floor plan URLs are placeholders - update with actual PDF links
- Price ranges can be adjusted based on actual IU apartment market
- Currently displays all 10 apartments on load, filters update dynamically
