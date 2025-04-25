// Initialize or retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to update the cart count badge
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countElement = document.getElementById("cart-count");
  if (countElement) {
    countElement.textContent = count;
  }
}

// Function to add an item to the cart
function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Add click event listeners to all item cards
function initializeItemClickEvents() {
  const itemCards = document.querySelectorAll(".item-card");
  itemCards.forEach(card => {
    card.addEventListener("click", () => {
      const name = card.getAttribute("data-name");
      const price = parseFloat(card.getAttribute("data-price"));
      addToCart(name, price);
    });
  });
}

// When page is loaded, initialize events and update cart count
window.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  initializeItemClickEvents();
});

  
  

