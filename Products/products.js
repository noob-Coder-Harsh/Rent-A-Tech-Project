
function logout() {
  localStorage.removeItem("customerName");
  localStorage.removeItem("customerId");
}

const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", logout);

const productRow = document.getElementById("product-row");

function loadProducts() {
  let productHTML = "";

  for (let i = 0; i < products.length; i++) {
    productHTML += `<div class="pro">
                <img
                  src=${products[i].imageURL}
                  alt="..."
                />
                <div class="des">
                        <span>${products[i].name}</span>
                        <h5>${products[i].desc}</h5>
                        <h4>₹${products[i].price}</h4>
                    </div>
                    <button class="normal btn" value="${products[i].productId}">Add to Cart</button>
                    </div>`;
  }

  productRow.innerHTML = productHTML;
}

loadProducts();


function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // find if product already exists in cart
  const existingProduct = cart.find(
    (cartItem) => cartItem.productId === product.productId
  );

  // if product exists, increase quantity
  if (existingProduct) {
    existingProduct.quantity += 1;
  }
  // else add product to cart
  else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

productRow.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const productId = e.target.value;

    const product = products.find((product) => product.productId == productId);

    addToCart(product);
  }
});