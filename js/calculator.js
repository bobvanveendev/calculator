//Variables
let firstNumber;
let operator;
let secondNumber;

// Add function
function add(a, b) {
  return a + b;
}

console.log(add(7, 8));

// Subtract function
function subtract(a, b) {
  return a - b;
}

console.log(subtract(7, 8));

// Multiply function
function multiply(a, b) {
  return a * b;
}

console.log(multiply(7, 8));

// Divide function
function divide(a, b) {
  return a / b;
}

console.log(divide(7, 8));

// Operator function
function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  } else {
    return;
  }
}

console.log(operate("+", 7, 8));
console.log(operate("-", 7, 8));
console.log(operate("*", 7, 8));
console.log(operate("/", 7, 8));
