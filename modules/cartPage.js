const cartItemsContainer = document.getElementById("cartItemsContainer");
const subtotalContainer = document.getElementById("subtotalContainer");

const getCartItemsFromLocalStorage = () => {
  const cartItemsJson = localStorage.getItem("cartItems");
  return cartItemsJson ? JSON.parse(cartItemsJson) : [];
};

const formatPrice = (price) => {
  return `₹${price.toFixed(2)}`;
};

const calculateSubtotal = (cartItems) => {
  let subtotal = 0;
  for (const item of cartItems) {
    subtotal += item.price * item.quantity;
  }
  return subtotal;
};

const renderCartItems = (cartItems) => {

  cartItemsContainer.innerHTML = "";

  for (const item of cartItems) {
    if (item.quantity > 0) {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
          <div class="item-details">
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-info">
              <h6 class="item-name">${item.name}</h6>
              <p class="item-price">${formatPrice(item.price)}</p>
              <p class="item-quantity">Quantity: ${item.quantity}</p>
              <p class="item-total-price">Total: ${formatPrice(
                item.price * item.quantity
              )}</p>
            </div>
          </div>
        `;
      cartItemsContainer.appendChild(cartItem);
    }
  }
};

const renderSubtotal = (subtotal) => {
  subtotalContainer.innerHTML = `
    <h4 class="subtotal">Subtotal: ${formatPrice(subtotal)}</h4>
  `;
};

const cartItems = getCartItemsFromLocalStorage();
const subtotal = calculateSubtotal(cartItems);

renderCartItems(cartItems);
renderSubtotal(subtotal);