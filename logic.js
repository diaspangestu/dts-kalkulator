// Initialize Variables
let previousNumber = "";
let currentNumber = 0;
let operator = "";

// Update Screen
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

/*
  NUMBER BUTTONS
*/
// Get Number Button
const number = document.querySelectorAll(".number");

// Get Data Number from Button (1-9)
number.forEach((element) => {
  element.addEventListener("click", (event) => {
    updateScreen(event.target.value);
  });
});

// Input Number to Current Number (to Screen)
const inputNumber = (number) => {
  if (currentNumber == 0) {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

number.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});
/*
  END NUMBER BUTTONS
*/

/*
  OPERATOR BUTTONS
*/
// Get Operator from Button (+, -, *, /)
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

// Input Operator
const inputOperator = (operator) => {
  if (calculationOperator === "") {
    previousNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = 0;
};
/*
  END OPERATOR BUTTONS
*/

/*
  EQUAL BUTTON
*/
// Get Equal Button
const equal = document.querySelector(".equal-sign");

equal.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

// Calculation Function
const calculate = () => {
  let result = "";

  switch (calculationOperator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};
/*
  END EQUAL BUTTON
*/

/*
  CLEAR BUTTON
*/
// Get Clear Button
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

// Function Clear Button
const clearAll = () => {
  previousNumber = "";
  calculationOperator = "";
  currentNumber = 0;
};
/*
  END CLEAR BUTTON
*/

/*
  DECIMAL BUTTON
*/
// Get Decimal Button
const decimalBtn = document.querySelector(".decimal");

decimalBtn.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

// Decimal Function
const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
/*
  END DECIMAL BUTTON
*/
