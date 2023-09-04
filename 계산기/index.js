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

<<<<<<< HEAD
  if (isOperator(clickedValue) == true && one !== "" && operatorClicked) {
=======
  if (isOperator(clickedValue) && one !== "") {
    console.log(outputField.value);
>>>>>>> dcdfc0a7168d78d90e346b00354e4b0fa7057513
    currentOperator = clickedValue;
    operatorClicked = true;
    console.log(operatorClicked);
<<<<<<< HEAD
=======
    console.log(currentOperator);
>>>>>>> dcdfc0a7168d78d90e346b00354e4b0fa7057513
    outputField.value += clickedValue;
  } else if (!isNaN(clickedValue) && currentOperator === "") {
    //operatorClicked = true;
    one += clickedValue;
    operatorClicked = true;
    console.log(one);
    outputField.value += clickedValue;
<<<<<<< HEAD
    operatorClicked = true;
=======
>>>>>>> dcdfc0a7168d78d90e346b00354e4b0fa7057513
  } else if (!isNaN(clickedValue) && currentOperator !== "" && one !== "") {
    two += clickedValue;
    result = calculation(one, currentOperator, two);
    two = "";
    one = result;
<<<<<<< HEAD
    operatorClicked = true;
=======
    console.log(one);
    console.log(result);
>>>>>>> dcdfc0a7168d78d90e346b00354e4b0fa7057513
    outputField.value += clickedValue;
  } else if (clickedValue === "c") {
    currentOperator = "";
    one = "";
    two = "";
    inputField.value = "";
    outputField.value = "";
<<<<<<< HEAD
    operatorClicked = true;
  } else if (clickedValue === "=") {
    inputField.value = result;
    outputField.value = "";
    operatorClicked = true;
=======
    inputField.value = "";
    operatorClicked = false;
  } else if (clickedValue === "=") {
    inputField.value = result;
    outputField.value = "";
    operatorClicked = false;
>>>>>>> dcdfc0a7168d78d90e346b00354e4b0fa7057513
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
