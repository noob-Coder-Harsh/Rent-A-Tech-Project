const registrationForm = document.getElementById('r-form');

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const address = document.getElementById('address').value;
  const contact = document.getElementById('contact').value;

  if (name.length > 30) {
    alert('Name should be less than 30 characters');
    return;
  }

  if (!name.match(/^[A-Za-z]+$/)) {
    alert('Name should only contain alphabets');
    return;
  }

  if (
    password.length < 5 ||
    !password.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/)
  ) {
    alert(
      'Password should be atleast 6 characters long and must contain atleast one uppercase, one number and one special character'
    );
    return;
  }

  if (address.length > 100) {
    alert('Address should be less than 100 characters');
    return;
  }

  if (contact.length !== 10) {
    alert('Contact number should be 10 digits long');
    return;
  }

  if (!contact.match(/^[0-9]+$/)) {
    alert('Contact number should only contain digits');
    return;
  }

  const jsonData = JSON.parse(localStorage.getItem('customerData')) || [];

  const check1 = jsonData.find((data) => data.email === email);

  if (check1) {
    alert('Email already exists');
    return;
  }

  jsonData.push({
    customerId: Math.floor(100000 + Math.random() * 900000),
    name: name,
    email: email,
    password: password,
    address: address,
    contact: contact,
  });
  const newData = JSON.stringify(jsonData);
  localStorage.setItem('customerData', newData);

  window.location.href = '../Acknowledge/acknowledge.html';
});
