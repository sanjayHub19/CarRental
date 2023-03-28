const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  
  if (email === '' || password === '') {
    alert('Please fill in all fields.');
    return;
  }
  
  // Send the login data to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'login.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert(xhr.responseText);
      form.reset();
    } else {
      alert('An error occurred while logging in. Please try again later.');
    }
  };
  xhr.send(`email=${email}&password=${password}`);
});
