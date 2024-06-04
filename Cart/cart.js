function cartLoadData() {
  const customerName = localStorage.getItem('customerName');

  document.getElementById('s-name').innerText = customerName;
}

function logout() {
  localStorage.removeItem('customerName');
  localStorage.removeItem('customerId');
}


window.onload = cartLoadData;  

const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', logout);

const cartRow = document.getElementById('cart-c');
const cartTotal = document.getElementById('c-total');

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  let cartHTML = '';
  let total = 0;

  cartHTML += `<div class="row row-bol">
  <div class="col-2">No.</div>
  <div class="col">Name</div>
  <div class="col">Price</div>
  <div class="col">Qunatity</div>
  <div class="col">
    Action
  </div>
</div>`

  for (let i = 0; i < cart.length; i++) {
      cartHTML += `<div class="row">
      <div class="col-2">${i + 1}</div>
      <div class="col">${cart[i].desc}</div>
      <div class="col">Rs. ${cart[i].price}</div>
      <div class="col">${cart[i].quantity}</div>
      <div class="col">
        <button class="btn btn-outline-danger" value="${cart[i].productId}" id="cart-rm">Remove</button>
      </div>
    </div>`

      total += cart[i].price * cart[i].quantity;
  }

  // insert at start of cartRow
  cartRow.insertAdjacentHTML('afterbegin', cartHTML);
  
  cartTotal.innerText = "Rs. " + total;
}

loadCart();

function removeFromCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const newCart = cart.filter((cartItem) => cartItem.productId !== product.productId);

  localStorage.setItem('cart', JSON.stringify(newCart));

  location.reload();
}


cartRow.addEventListener('click', (e) => {
  if (e.target.id === 'cart-rm') {
      const productId = e.target.value;

      const product = product.find((product) => product.productId === productId);

      removeFromCart(product);
  }
});

const checkoutBtn = document.getElementById('checkout-btn');

checkoutBtn.addEventListener('click', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
      alert('Cart is empty');
      return;
  }

  const customerName = localStorage.getItem('customerName');
  const customerId = localStorage.getItem('customerId');

  const order = {
      customerName,
      customerId,
      cart,
  };

  localStorage.setItem('order', JSON.stringify(order));
  localStorage.removeItem('cart');

  window.location.href = '../Invoice/invoice.html';

});