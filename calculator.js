// Arithmetic functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Helper to get inputs and update result
function calculateAndDisplay(operationFunc) {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  const result = operationFunc(number1, number2);
  document.getElementById('calculation-result').textContent = result;
}

// Event listeners
document.getElementById('add').addEventListener('click', () => {
  calculateAndDisplay(add);
});

document.getElementById('subtract').addEventListener('click', () => {
  calculateAndDisplay(subtract);
});

document.getElementById('multiply').addEventListener('click', () => {
  calculateAndDisplay(multiply);
});

document.getElementById('divide').addEventListener('click', () => {
  calculateAndDisplay(divide);
});
