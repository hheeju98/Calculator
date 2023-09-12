import { isOperator } from "../calculation/calculation.js";
import { calculation1 } from "../calculation/calculation.js";

let one = "";
let operatorClicked = true;
let two = "";
let result = "";
let currentOperator = "";
// 분산

const totalArray = [];
const numberArray = [];
const calculateArray = [];

export function simple(e) {
  console.log("string", e);
  const clickedValue = e.target.innerText;
  const inputField = document.querySelector(".inputField");
  const outputField = document.querySelector(".outputField");

  const totalData = {
    value: clickedValue,
    type: typeof clickedValue,
    no: totalArray.length,
    //no+1
  };

  if (clickedValue !== "del") {
    totalArray.push(totalData);
  }
  console.log(totalArray);

  if (!isNaN(clickedValue)) {
    numberArray.push(totalData);
  }

  console.log(numberArray);

  // 객체를 하나로

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
    totalArray.length = 0;

    calculateArray.length = 0;
  } else if (
    clickedValue === "=" &&
    !isNaN(totalArray[totalArray.length - 2].value)
  ) {
    inputField.value = result;
    outputField.value = "";
    operatorClicked = true;

    if (includePriority(totalArray) !== -1 && numberArray.length > 2) {
      const operatorIndex = includePriority(totalArray);
      if (operatorIndex >= 0) {
        console.log(operatorIndex);
        const prevNumberIndex = totalArray[operatorIndex].no - 1;

        const nextNumberIndex = totalArray[operatorIndex].no + 1;
        const prevNumber = totalArray[prevNumberIndex].value;
        const nextNumber = totalArray[nextNumberIndex].value;
        calculateArray.push(
          prevNumber,
          totalArray[operatorIndex].value,
          nextNumber
        );

        const result = calculation1(
          prevNumber,
          totalArray[operatorIndex].value,
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

        const finalResult = calculation1(
          finalArray[0],
          finalArray[1],
          finalArray[2]
        );

        inputField.value = finalResult;
        // totalArray.length = 0;
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
//()->오브젯트 {}return!

export function Remove() {
  const deleteArray = totalArray.map((item) => {
    //reduce로 바꾸기
    console.log(item);
    if (typeof item === "object") {
      // 타입 제대로 나오게 객체
      return item.value;
    } else if (typeof item === "number") {
      return String(item);
    }
  });

  totalArray.pop();
  deleteArray.pop();
  outputField.value = deleteArray;
  console.log(deleteArray);
  const delResult = deleteArray.join("");
  console.log(delResult);
  outputField.value = delResult;
}

const del = document.getElementById("del");
del.addEventListener("click", Remove);

//모듈
const outputField = document.getElementById("outputField");
document.addEventListener("keydown", (event) => {
  const key = event.key;
  console.log(event.key);
  if (!isNaN(key) || isOperator(key)) {
    outputField.value += key;
  }
  if (key === "=") {
    simple(event);
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
