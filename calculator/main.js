// Get references to the buttons and display
const btns = document.querySelectorAll('button');
const display = document.querySelector('#display');

// Add event listeners to all buttons
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    let btnValue = this.innerHTML;
    
    // Clear the display when the 'C' button is clicked
    if (btnValue === 'C') {
      display.value = '';
    } 
    // Evaluate the expression and show the result when the '=' button is clicked
    else if (btnValue === '=') {
      display.value = eval(display.value);
    } 
    // Append the button value to the display for all other buttons
    else {
      display.value += btnValue;
    }
  });
});

