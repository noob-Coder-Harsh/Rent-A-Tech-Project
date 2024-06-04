function logout() {
  localStorage.removeItem("customerName");
  localStorage.removeItem("customerId");
}

const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", logout);

function loadInvoice() {
  const custId = document.getElementById("customer-id");
  const cusName = document.getElementById("name");
  const cusEmail = document.getElementById("email");
  const cusAddress = document.getElementById("address");

  const customerData = JSON.parse(localStorage.getItem("customerData")) || [];
  const customerName = localStorage.getItem("customerName");
  const customerId = localStorage.getItem("customerId");
  console.log(customerData);

  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].customerId == customerId) {
      cusEmail.innerText = customerData[i].email;
      cusAddress.innerText = customerData[i].address;
    }
  }
  cusName.innerText = customerName;
  custId.innerText = customerId;

  const order = JSON.parse(localStorage.getItem("order")) || [];

  let orderHTML = "";

  let total = 0;

  for (let i = 0; i < order.cart.length; i++) {
    orderHTML += `<tr>
          <td>${i + 1}</td>
          <td>${order.cart[i].name}</td>
          <td>${order.cart[i].quantity}</td>
          <td>${order.cart[i].price}</td>
          <td>${order.cart[i].price * order.cart[i].quantity}</td>
          </tr>`;

    total += order.cart[i].price * order.cart[i].quantity;
  }

  const table = document.getElementById("invoice-body");
  table.insertAdjacentHTML("afterbegin", orderHTML);

  const totalRow = document.getElementById("total");

  totalRow.innerText = total;
}

loadInvoice();
