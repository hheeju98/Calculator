let currentNumber = "";
//let currentNumber2 = "";
let currentOperator = "";
const inputField = document.querySelector(".inputField");
const outputField = document.querySelector(".outputField");

window.onload = () => {
  const tdElements = document.querySelectorAll("td");
  //console.log(tdElements); 유사배열
  const tdElementsArray = Array.from(tdElements);

  tdElementsArray.map((td) => {
    td.addEventListener("click", simple);
  });
  //console.log(tdElementsArray);
};

const simple = (e) => {
  const clickedValue = e.target.innerText;
  if (!isNaN(clickedValue)) {
    currentNumber += clickedValue;
    const formattedNumber = formatNumber(currentNumber);
    outputField.value = formattedNumber;
  } else if (isOperator2(clickedValue) === true) {
    currentOperator = clickedValue; // 연산자 설정
    outputField.value = currentNumber += clickedValue;
  } else if (clickedValue === "c") {
    currentNumber = "";
    // currentNumber2 = "";
    currentOperator = "";
    outputField.value = ""; //함수형으로 가독성
    inputField.value = ""; //innertext/ value
  } else if (clickedValue === "=") {
    calculation();
  }
};
const formatNumber = (number) => {
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const isOperator = (value) => {
  // filter findIndex find 케이스
  const arr = ["+", "-", "×", "÷"];
  if (arr.find((item) => item === value) !== undefined) {
    return true;
  } else {
    return false;
  }
  //return ["+", "-", "×", "÷"].includes(value);
};

const isOperator2 = (value) => {
  // filter findIndex find 케이스
  const arr = ["+", "-", "×", "÷"];
  if (arr.findIndex((item) => item === value) !== -1) {
    return true;
  } else {
    return false;
  }
  //return ["+", "-", "×", "÷"].includes(value);
};

//const calculation = (num1, operator, num2) => {
// if (operator === "+") {
//   return num1 + num2;
// } else if (operator === "-") {
//   return num1 - num2;
//} else if (operator === "×") {
//  return num1 * num2;
// } else if (operator === "÷") {
//  return num1 / num2;
// }
//};
function calculation(clickedValue) {
  try {
    outputField.value = currentNumber += clickedValue;
    let display = document.querySelector(".outputField");
    display.value = eval(display.value);
    console.log(display.value);
  } catch {
    alert("올바른 계산식을 입력해 주세요");
  }
}
