let currentOperator = "";
let outputField2 = ""; // 연산자 저장
let one = ""; // 첫번째 값 고정
let two = "";
let result = "";
let operatorClicked = false;

window.onload = () => {
  const tdElements = document.querySelectorAll("td");
  //console.log(tdElements); 유사배열
  const tdElementsArray = Array.from(tdElements);
  tdElementsArray.map((td) => {
    td.addEventListener("click", simple);
  });
};

const simple = (e) => {
  const inputField = document.querySelector(".inputField");
  const outputField = document.querySelector(".outputField");

  const clickedValue = e.target.innerText;
  outputField.value += clickedValue;
  if (isOperator(clickedValue) == true && operatorClicked == true) {
    currentOperator = clickedValue;
    operatorClicked = false;
    console.log(operatorClicked);
    console.log(currentOperator);
  } else if (!isNaN(clickedValue) && currentOperator === "") {
    one += clickedValue;
    console.log(one);
  } else if (!isNaN(clickedValue) && currentOperator !== "" && one !== "") {
    two += clickedValue;
    console.log(two);
    result = calculation(one, currentOperator, two);
    two = "";
    one = result;
    console.log(one);
    console.log(result);
  } else if (clickedValue === "c") {
    currentOperator = "";
    one = "";
    two = "";
    outputField.value = "";
  } else if (clickedValue === "=") {
    inputField.value = result;
  } else if (!isNaN(clickedValue)) {
    operatorClicked = true;
    console.log(operatorClicked);
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
