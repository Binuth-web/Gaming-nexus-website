document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('checkout-form').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const address = document.getElementById('address').value.trim();
      const city = document.getElementById('city').value.trim();
      const postal = document.getElementById('postal').value.trim();
      const card = document.getElementById('card').value.trim();
      const expiry = document.getElementById('expiry').value.trim();
      const cvv = document.getElementById('cvv').value.trim();
  
      if (!name || !email || !address || !city || !postal || !card || !expiry || !cvv) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Simple validation
      if (!email.includes('@') || card.length < 12 || cvv.length !== 3) {
        alert("Please enter valid details.");
        return;
      }
  
      // Calculate delivery date (3 days from today)
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 3);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
      const messageBox = document.getElementById('message');
      
      // Remove the hidden class to show the message
      messageBox.classList.remove('hidden');
  
      // Add styles in case CSS is not applied
      messageBox.style.display = 'block';
  
      // Set the message content
      messageBox.innerHTML = `
        <div class="thank-you-message">
          <h2>Thank you, ${name}!</h2>
          <p>Your order has been placed successfully.</p>
          <p><strong>Expected Delivery Date:</strong> ${deliveryDate.toLocaleDateString(undefined, options)}</p>
        </div>
      `;
  
      // Clear the form
      document.getElementById('checkout-form').reset();
  
      // Optional: Clear cart
      localStorage.removeItem('cart');
    });
  });
  