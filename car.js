const form = document.querySelector('#add-car-form');
const modelInput = document.querySelector('#model');
const numberInput = document.querySelector('#number');
const capacityInput = document.querySelector('#capacity');
const rentInput = document.querySelector('#rent');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const model = modelInput.value.trim();
  const number = numberInput.value.trim();
  const capacity = capacityInput.valueAsNumber;
  const rent = rentInput.valueAsNumber;
  
  if (model === '' || number === '' || isNaN(capacity) || isNaN(rent)) {
    alert('Please fill in all fields with valid values.');
    return;
  }
  
  // Send the new car data to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'add_car.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert(xhr.responseText);
      form.reset();
    } else {
      alert('An error occurred while adding the new car. Please try again later.');
    }
  };
  xhr.send(`model=${model}&number=${number}&capacity=${capacity}&rent=${rent}`);
});
