






function updateCartTable() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const tbody = document.querySelector('#cart-table tbody');
    const totalSpan = document.getElementById('total');
    tbody.innerHTML = '';
    let grandTotal = 0;
  
    cart.forEach((item, index) => {
      const row = document.createElement('tr');
      const itemTotal = item.price * item.quantity;
      grandTotal += itemTotal;
  
      row.innerHTML = `
        <td>${item.name}</td>
        <td>
          <button class="quantity-btn" onclick="changeQty(${index}, -1)">−</button>
          ${item.quantity}
          <button class="quantity-btn" onclick="changeQty(${index}, 1)">+</button>
        </td>
        <td>$${item.price.toFixed(2)}</td>
        <td>$${itemTotal.toFixed(2)}</td>
        <td><button onclick="removeItem(${index})">Remove</button></td>
      `;
  
      tbody.appendChild(row);
    });
  
    totalSpan.textContent = grandTotal.toFixed(2);
  }
  
  function changeQty(index, delta) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart[index]) return;
  
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) {
      cart.splice(index, 1);
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTable();
  }
  
  function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTable();
  }
  
  window.onload = () => {
    updateCartTable();
  
    const clearBtn = document.getElementById("clear-cart");
    const saveBtn = document.getElementById("save-fav");
    const loadBtn = document.getElementById("load-fav");
  
    if (clearBtn) {
      clearBtn.onclick = () => {
        localStorage.removeItem("cart");
        location.reload();
      };
    }
  
    if (saveBtn) {
      saveBtn.onclick = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        localStorage.setItem("favorite", JSON.stringify(cart));
        alert("Saved as favorite!");
      };
    }
  
    if (loadBtn) {
      loadBtn.onclick = () => {
        const fav = JSON.parse(localStorage.getItem("favorite"));
        if (fav) {
          localStorage.setItem("cart", JSON.stringify(fav));
          location.reload();
        } else {
          alert("No favorite saved.");
        }
      };
    }
  };
  