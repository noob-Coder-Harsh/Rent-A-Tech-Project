function homeLoadData() {
    const customerName = localStorage.getItem("customerName");
  
    document.getElementById("s-name").innerText = customerName;
  }
  
  function logout() {
    localStorage.removeItem("customerName");
    localStorage.removeItem("customerId");
  }
  
  window.onload = homeLoadData;
  
  const logoutBtn = document.getElementById("logout");
  logoutBtn.addEventListener("click", logout);
  