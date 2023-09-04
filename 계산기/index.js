let currentOperator = "";
let outputField2 = ""; // 연산자 저장
let one = ""; // 첫번째 값 고정
let two = "";
let result = "";
let operatorClicked = true;

window.onload = () => {
  const tdElements = document.querySelectorAll("td");
  const tdElementsArray = Array.from(tdElements);
  tdElementsArray.map((td) => {
    td.addEventListener("click", simple);
  });
};

const simple = (e) => {
  const inputField = document.querySelector(".inputField");
  const outputField = document.querySelector(".outputField");
  const clickedValue = e.target.innerText;

  if (isOperator(clickedValue) == true && one !== "" && operatorClicked) {
    currentOperator = clickedValue;
    operatorClicked = false;
    console.log(operatorClicked);
    outputField.value += clickedValue;
  } else if (!isNaN(clickedValue) && currentOperator === "") {
    one += clickedValue;
    console.log(one);
    outputField.value += clickedValue;
    operatorClicked = true;
  } else if (!isNaN(clickedValue) && currentOperator !== "" && one !== "") {
    two += clickedValue;
    result = calculation(one, currentOperator, two);
    two = "";
    one = result;
    operatorClicked = true;
    outputField.value += clickedValue;
  } else if (clickedValue === "c") {
    currentOperator = "";
    one = "";
    two = "";
    inputField.value = "";
    outputField.value = "";
    operatorClicked = true;
  } else if (clickedValue === "=") {
    inputField.value = result;
    outputField.value = "";
    operatorClicked = true;
  }
};

const formatNumber = (number) => {
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const isOperator = (value) => {
  return ["+", "-", "×", "÷"].includes(value);
};
// reduce 써보기
const calculation = (num1, operator, num2) => {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "×") {
    return num1 * num2;
  } else if (operator === "÷") {
    return num1 / num2;
  }
};
