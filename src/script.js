document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const navLinks = {
    "/src/index.html": "nav-home",
    "/src/about-us.html": "nav-about",
    "/src/listings.html": "nav-listings",
  };

  const currentNavLinkId = navLinks[currentPath];
  if (currentNavLinkId) {
    document.getElementById(currentNavLinkId).classList.add("selected");
  }
});

function handleContactButtonClick() {
  alert("Contact Us button clicked!");
}

function handleExploreButtonClick() {
  console.log("Explore Listing button clicked!");
  window.location.href = "listings.html";
}

function filterListings() {
  const input = document.getElementById("search-input");
  const filter = input.value.toLowerCase();
  const cards = document
    .getElementById("cards-section")
    .getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const address = card.getElementsByClassName("address-value")[0];
    const addressValue = address.textContent || address.innerText;

    if (addressValue.toLowerCase().indexOf(filter) > -1) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  }
}
