import { calculation1 } from "./calculation.js";
import { isOperator } from "./isOperator.js";

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
  totalArray.push(totalData);

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
    result = calculation1(one, currentOperator, two);

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
  } else if (clickedValue === "=") {
    inputField.value = result;
    outputField.value = "";
    operatorClicked = true;

    if (includePriority(operatorArray) !== -1) {
      const operatorIndex = includePriority(operatorArray);
      console.log(operatorIndex);
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

        const result = calculation1(
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

        console.log(finalArray);
        const finalResult = calculation1(
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
function includePriority(arr) {
  const index = arr.findIndex(
    (item) => item.value === "×" || item.value === "÷"
  );

  return index;
}
