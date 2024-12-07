document.getElementById("customerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the form from reloading the page
  
  const customerData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value
  };

  // Save data to localStorage
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  formData.push(customerData);
  localStorage.setItem("formData", JSON.stringify(formData));

  alert("Form data has been saved!");

  // Optionally, clear the form after submission
  document.getElementById("customerForm").reset();
});