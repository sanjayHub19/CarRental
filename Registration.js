const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  
  if (name === '' || email === '' || password === '') {
    alert('Please fill in all fields.');
    return;
  }
  
  // Send the registration data to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'register.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert(xhr.responseText);
      form.reset();
    } else {
      alert('An error occurred while registering. Please try again later.');
    }
  };
  xhr.send(`name=${name}&email=${email}&password=${password}`);
});
