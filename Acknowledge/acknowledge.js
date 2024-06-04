function acknowledgeData() {
    const data = JSON.parse(localStorage.getItem('customerData'));
  
    const lastData = data[data.length - 1];
  
    document.getElementById('customerId').innerText = lastData.customerId;
    document.getElementById('name').innerText = lastData.name;
    document.getElementById('email').innerText = lastData.email;
  }
  
  window.onload = acknowledgeData;
  