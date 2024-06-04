const loginForm = document.getElementById('l-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const customerId = document.getElementById('customerId').value;
  const password = document.getElementById('password').value;

  if (!customerId.match(/^[0-9]+$/)) {
    alert('Customer Id should only contain digits');
    return;
  }

  if (password.length > 30) {
    alert('Password should be less than 30 characters');
    return;
  }

  const customerData = JSON.parse(localStorage.getItem('customerData'));

  if(!customerData){
    alert('No customer data found');
    return;
  }

  const check1 = customerData.find(
    (data) => data.customerId === parseInt(customerId)
  );

  if (!check1) {
    alert('Id not valid');
    return;
  }

  if (check1.password !== password) {
    alert('Password is wrong');
    return;
  }

  localStorage.setItem('customerId', customerId);
  localStorage.setItem('customerName', check1.name);

  window.location.href = '../Home/home.html';
});
