import { isOperator } from "../index.js";
import { calculation } from "../index.js";

let one = "";
let operatorClicked = true;
let two = "";
let result = "";
let currentOperator = "";

const operatorArray = []; // 함수 외부에 선언된 변수는 함수 호출간에 계속해서 유지되어 데이터가 누적된다. 내부에 선언된 경우 호출 시마다 계속 초기화됨
const numberArray = [];
const totalArray = [];
const calculateArray = [];

export function simple(e) {
  const inputField = document.querySelector(".inputField");
  const outputField = document.querySelector(".outputField");
  const clickedValue = e.target.innerText;

  const totalData = {
    value: clickedValue,
    type: typeof clickedValue,
    no: totalArray.length,
  };

  if (clickedValue !== "del") {
    totalArray.push(totalData);
  }

  const operatorData = {
    value: clickedValue,
    type: typeof clickedValue,
    no: operatorArray.length,
  };

  const numberData = {
    value: clickedValue,
    type: typeof clickedValue,
    no: numberArray.length,
  };

  if (isOperator(clickedValue)) {
    operatorArray.push(operatorData);
  }

  if (!isNaN(clickedValue)) {
    numberArray.push(numberData);
  }

  if (
    isOperator(clickedValue) == true &&
    one !== "" &&
    operatorClicked == true
  ) {
    currentOperator = clickedValue;
    outputField.value += clickedValue;
    operatorClicked = false;
  } else if (
    !isNaN(clickedValue) &&
    currentOperator === "" &&
    inputField.value == ""
  ) {
    one += clickedValue;
    outputField.value += clickedValue;
    operatorClicked = true;
  } else if (!isNaN(clickedValue) && currentOperator !== "" && one !== "") {
    two += clickedValue;
    result = calculation(one, currentOperator, two);
    two = "";
    one = result;
    operatorClicked = true;
    outputField.value += clickedValue;

    if (inputField.value !== "" && isOperator(clickedValue)) {
      outputField.value += clickedValue;
    }
  } else if (clickedValue === "c") {
    currentOperator = "";
    one = "";
    two = "";
    inputField.value = "";
    outputField.value = "";
    operatorClicked = true;
    totalArray.length = 0;
    operatorArray.length = 0;
    numberArray.length = 0;
    calculateArray.length = 0;
  } else if (
    clickedValue === "=" &&
    !isNaN(totalArray[totalArray.length - 2].value)
  ) {
    inputField.value = result;
    outputField.value = "";
    operatorClicked = true;

    if (includePriority(operatorArray) !== -1 && numberArray.length > 2) {
      const operatorIndex = includePriority(operatorArray);
      if (operatorIndex >= 0) {
        const prevNumberIndex = numberArray[operatorIndex].no;
        const nextNumberIndex = numberArray[operatorIndex].no + 1;
        const prevNumber = numberArray[prevNumberIndex].value;
        const nextNumber = numberArray[nextNumberIndex].value;
        calculateArray.push(
          prevNumber,
          operatorArray[operatorIndex].value,
          nextNumber
        );

        const result = calculation(
          prevNumber,
          operatorArray[operatorIndex].value,
          nextNumber
        );

        totalArray.splice(
          includePriority(totalArray) - 1,
          includePriority(totalArray) + 2,
          result
        );

        const finalArray = totalArray.map((item) => {
          if (typeof item === "object") {
            return item.value;
          } else if (typeof item === "number") {
            return String(item);
          }
        });

        const finalResult = calculation(
          finalArray[0],
          finalArray[1],
          finalArray[2]
        );

        inputField.value = finalResult;

        // totalArray.length = 0;
        // operatorArray.length = 0;
        // numberArray.length = 0;
        // calculateArray.length = 0;
      }
    }
  }
}
export function includePriority(arr) {
  const index = arr.findIndex(
    (item) => item.value === "×" || item.value === "÷"
  );
  return index;
}

export function Remove() {
  const deleteArray = totalArray.map((item) => {
    if (typeof item === "object") {
      return item.value;
    } else if (typeof item === "number") {
      return String(item);
    }
  });

  totalArray.pop();
  deleteArray.pop();
  outputField.value = deleteArray;
  const delResult = deleteArray.join("");
  outputField.value = delResult;
}

const del = document.getElementById("del");
del.addEventListener("click", Remove);

const outputField = document.getElementById("outputField");
document.addEventListener("keydown", function (event) {
  const key = event.key;
  console.log(event.key);
  if (!isNaN(key) || isOperator(key)) {
    outputField.value += key;
  }
  if (key === "=") {
    // simple(key);
  }
});

// document.addEventListener("keydown", (event) => {
//   const typedValue = event.key;
//   console.log(typedValue);
//   outputField.value += typedValue;
//   result = eval(outputField);
//   inputField.value = result;
// });
