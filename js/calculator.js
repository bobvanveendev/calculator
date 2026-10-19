// Calculator state
let firstNumber = "";
let operator = "";
let secondNumber = "";

// DOM elements
const display = document.querySelector(".calculator-display");
const equalsButton = document.querySelector(".btn-equals");
const clearButton = document.querySelector(".btn-clear");
const backButton = document.querySelector(".btn-back");

// --------------------------------------------------
// Arithmetic functions
// --------------------------------------------------

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
  return a / b;
}

// Perform calculation
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

// --------------------------------------------------
// Input handlers
// --------------------------------------------------

// Handle number input
function handleNumber(number) {
  if (operator) {
    secondNumber += number;
  } else {
    firstNumber += number;
  }

  display.textContent = firstNumber + operator + secondNumber;
}

// Handle operator input
function handleOperator(selectedOperator) {
  if (firstNumber !== "") {
    operator = selectedOperator;
    display.textContent = firstNumber + operator + secondNumber;
  }
}

// Handle equals
function handleEquals() {
  const result = operate(operator, Number(firstNumber), Number(secondNumber));

  display.textContent = result;
}

// Handle clear
function handleClear() {
  firstNumber = "";
  operator = "";
  secondNumber = "";

  display.textContent = 0;
}

// Handle backspace
function handleBackspace() {
  if (secondNumber) {
    secondNumber = secondNumber.slice(0, -1);
  } else if (operator) {
    operator = operator.slice(0, -1);
  } else if (firstNumber) {
    firstNumber = firstNumber.slice(0, -1);
  }

  if (firstNumber === "" && operator === "" && secondNumber === "") {
    display.textContent = 0;
  } else {
    display.textContent = firstNumber + operator + secondNumber;
  }
}

// --------------------------------------------------
// Button event listeners
// --------------------------------------------------

// Number buttons
function handleNumberButtons() {
  document.querySelectorAll(".nmbr-btn").forEach((button) => {
    button.addEventListener("click", () => {
      handleNumber(button.textContent);
    });
  });
}

// Operator buttons
function handleOperatorButtons() {
  document.querySelectorAll(".operator-btn").forEach((button) => {
    button.addEventListener("click", () => {
      handleOperator(button.textContent);
    });
  });
}

// Clear button
function handleClearButton() {
  clearButton.addEventListener("click", () => {
    handleClear();
  });
}

// Backspace button
function handleBackButton() {
  backButton.addEventListener("click", () => {
    handleBackspace();
  });
}

// --------------------------------------------------
// Keyboard event listeners
// --------------------------------------------------

// Number keys
function handleKeyboardNumbers() {
  document.addEventListener("keydown", (event) => {
    if (event.key >= "0" && event.key <= "9") {
      handleNumber(event.key);
    }
  });
}

// Operator keys
function handleKeyboardOperators() {
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "+" ||
      event.key === "-" ||
      event.key === "*" ||
      event.key === "/"
    ) {
      handleOperator(event.key);
    }
  });
}

// Enter and equals keys
function handleKeyboardEquals() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === "=") {
      handleEquals();
    }
  });
}

// Escape key
function handleKeyboardClear() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      handleClear();
    }
  });
}

// Backspace key
function handleKeyboardBack() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
      handleBackspace();
    }
  });
}

// --------------------------------------------------
// Initialize event listeners
// --------------------------------------------------

// Button events
handleNumberButtons();
handleOperatorButtons();
handleClearButton();
handleBackButton();

equalsButton.addEventListener("click", () => {
  handleEquals();
});

// Keyboard events
handleKeyboardNumbers();
handleKeyboardOperators();
handleKeyboardEquals();
handleKeyboardClear();
handleKeyboardBack();
