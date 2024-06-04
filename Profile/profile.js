function profileLoadData() {
    const customerName = localStorage.getItem("customerName");
    const customerId = localStorage.getItem("customerId");
    const customerData = JSON.parse(localStorage.getItem("customerData")) || [];
  
    const name = document.getElementById("name")
    const address = document.getElementById("address");
    const contact = document.getElementById("contact");
  
    for (let i = 0; i < customerData.length; i++) {
      if (customerData[i].customerId == customerId) {
        name.value = customerData[i].name;
        address.value = customerData[i].address;
        contact.value = customerData[i].contact;
      }
    }
  
    document.getElementById("s-name").innerText = customerName;
  }
  
  function logout() {
    localStorage.removeItem("customerName");
    localStorage.removeItem("customerId");
  }
  
  window.onload = profileLoadData;
  
  const logoutBtn = document.getElementById("logout");
  logoutBtn.addEventListener("click", logout);
  
  function loadProfile() {
    const profileRow = document.getElementById("p-data");
    const customerData = JSON.parse(localStorage.getItem("customerData")) || [];
    const customerId = localStorage.getItem("customerId");
  
    let profileHTML = "";
  
    for (let i = 0; i < customerData.length; i++) {
      if (customerData[i].customerId == customerId) {
        profileHTML += `<tr>
        <th scope="row">${customerData[i].customerId}</th>
        <td>${customerData[i].name}</td>
        <td>${customerData[i].email}</td>
        <td>${customerData[i].address}</td>
        <td>${customerData[i].contact}</td>
        <td><button class="btn edit-btn" data-bs-toggle="modal" data-bs-target="#formModal">Edit</button></td>
      </tr>`;
      }
    }
  
    profileRow.insertAdjacentHTML("afterbegin", profileHTML);
  }
  
  loadProfile();
  
  
  const updateForm = document.getElementById("update-form");
  
  updateForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const customerData = JSON.parse(localStorage.getItem("customerData")) || [];
    const customerId = localStorage.getItem("customerId");
  
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const contact = document.getElementById("contact").value;
  
    for (let i = 0; i < customerData.length; i++) {
      if (customerData[i].customerId == customerId) {
        customerData[i].name = name;
        customerData[i].address = address;
        customerData[i].contact = contact;
      }
    }
  
    localStorage.setItem("customerData", JSON.stringify(customerData));
    localStorage.setItem("customerName", name);
  
    location.reload();
  });
  