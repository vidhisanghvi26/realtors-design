document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navLinks = {
        '/src/index.html': 'nav-home',
        '/src/about-us.html': 'nav-about',
        '/src/listings.html': 'nav-listings'
    };

    const currentNavLinkId = navLinks[currentPath];
    if (currentNavLinkId) {
        document.getElementById(currentNavLinkId).classList.add('selected');
    }
    console.log('currentPath', currentPath);
});

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navLinks = {
        '/index.html': 'nav-home',
        '/about-us.html': 'nav-about',
        '/listings.html': 'nav-listings'
    };

    const currentNavLinkId = navLinks[currentPath];
    if (currentNavLinkId) {
        document.getElementById(currentNavLinkId).classList.add('selected');
    }
});

function handleContactButtonClick() {
    alert('Contact Us button clicked!');
}

function handleExploreButtonClick() {
    alert('Explore Listing button clicked!');
}