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
});


function handleContactButtonClick() {
    alert('Contact Us button clicked!');
}

function handleExploreButtonClick() {
    console.log('Explore Listing button clicked!');
    window.location.href = 'listings.html';
}