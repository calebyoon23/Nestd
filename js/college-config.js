// College configuration data
const collegeConfig = {
    'indiana': {
        shortName: 'IU',
        fullName: 'Indiana University',
        headerClass: 'iu-header',
        logo: 'images/logos/iu.svg',
        title: 'Find Your Perfect IU Apartment',
        subtitle: 'Search through available apartments near Indiana University'
    },
    'purdue': {
        shortName: 'Purdue',
        fullName: 'Purdue University',
        headerClass: 'purdue-header',
        logo: 'images/logos/purdue.png',
        title: 'Find Your Nest at Purdue',
        subtitle: 'Search through available apartments near Purdue University'
    },
    'illinois': {
        shortName: 'Illinois',
        fullName: 'University of Illinois',
        headerClass: 'illinois-header',
        logo: 'images/logos/illinois.png',
        title: 'Find Your Nest at Illinois',
        subtitle: 'Search through available apartments near University of Illinois'
    },
    'wisconsin': {
        shortName: 'Wisconsin',
        fullName: 'University of Wisconsin Madison',
        headerClass: 'wisconsin-header',
        logo: 'images/logos/uwmadison.svg',
        title: 'Find Your Nest at Wisconsin',
        subtitle: 'Search through available apartments near University of Wisconsin Madison'
    },
    'michigan': {
        shortName: 'Michigan',
        fullName: 'University of Michigan',
        headerClass: 'michigan-header',
        logo: 'images/logos/umich.png',
        title: 'Find Your Nest at Michigan',
        subtitle: 'Search through available apartments near University of Michigan'
    },
    'osu': {
        shortName: 'OSU',
        fullName: 'Ohio State University',
        headerClass: 'osu-header',
        logo: 'images/logos/osu.png',
        title: 'Find Your Nest at Ohio State',
        subtitle: 'Search through available apartments near Ohio State University'
    },
    'northwestern': {
        shortName: 'Northwestern',
        fullName: 'Northwestern University',
        headerClass: 'northwestern-header',
        logo: 'images/logos/northwestern.png',
        title: 'Find Your Nest at Northwestern',
        subtitle: 'Search through available apartments near Northwestern University'
    },
    'msu': {
        shortName: 'MSU',
        fullName: 'Michigan State University',
        headerClass: 'msu-header',
        logo: 'images/logos/msu.svg',
        title: 'Find Your Nest at Michigan State',
        subtitle: 'Search through available apartments near Michigan State University'
    },
    'notredame': {
        shortName: 'Notre Dame',
        fullName: 'University of Notre Dame',
        headerClass: 'notredame-header',
        logo: 'images/logos/notredame.png',
        title: 'Find Your Nest at Notre Dame',
        subtitle: 'Search through available apartments near University of Notre Dame'
    },
    'iowa': {
        shortName: 'Iowa',
        fullName: 'University of Iowa',
        headerClass: 'iowa-header',
        logo: 'images/logos/iowa.png',
        title: 'Find Your Nest at Iowa',
        subtitle: 'Search through available apartments near University of Iowa'
    }
};

// Apply college configuration on page load
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const college = urlParams.get('college');

    if (college && collegeConfig[college]) {
        const config = collegeConfig[college];

        // Update page title
        document.title = `Nestd - ${config.shortName}`;

        // Update header class
        const header = document.getElementById('collegeHeader');
        header.classList.add(config.headerClass);

        // Update logo
        const logo = document.getElementById('collegeLogo');
        logo.src = config.logo;
        logo.alt = `${config.fullName} logo`;

        // Update page title and subtitle
        document.getElementById('pageTitle').textContent = config.title;
        document.getElementById('pageSubtitle').textContent = config.subtitle;
    } else {
        // Default to generic branding if no college specified
        document.getElementById('pageTitle').textContent = 'Find Your Perfect Apartment';
        document.getElementById('pageSubtitle').textContent = 'Search through available apartments';
    }
});
