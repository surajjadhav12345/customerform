document.getElementById('customerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;

  const customerData = {
    name: name,
    email: email,
    phone: phone,
    address: address
  };

  console.log('Customer Data:', customerData); // Replace this with backend API call to save data

  document.getElementById('successMessage').textContent = "Form submitted successfully!";
  document.getElementById('customerForm').reset();
});