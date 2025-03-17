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


function openModal() {
  document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('contactModal').style.display = 'none';
}

function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const query = document.getElementById('query').value;

  const mailtoLink = `mailto:vidhisanghvi26@gmail.com?subject=Client%20%Contact%20Us%20Form&body=Name:%20${name}%0AEmail:%20${email}%0APhone:%20${phone}%0AQuery:%20${query}`;
  window.location.href = mailtoLink;
  closeModal();

}

document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.getElementById('subscribe-button');
    subscribeButton.addEventListener('click', sendEmailSubscribe);
});

function sendEmailSubscribe() {
    const emailInput = document.getElementById('email-subscribe');
    const email = emailInput.value;

    if (validateEmail(email)) {
        const recipient = 'vidhisanghvi26@gmail.com';
        const subject = 'Subscription Confirmation';
        const body = `You have a new subscription from: ${email}`;
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        alert(`Subscription successful for: ${email}`);
    } else {
        alert('Please enter a valid email address.');
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}