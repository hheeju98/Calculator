import { isOperator } from "../calculation/calculation.js";
import { calculation1 } from "../calculation/calculation.js";
import { Remove } from "./remove.js";
import { includePriority } from "./priority.js";
import { calculation } from "../calculation/calculation.js";

let one = "";
let operatorClicked = true;
let two = "";
let result = "";
let currentOperator = "";
// 분산

const totalArray = [];
export default totalArray;
const numberArray = [];
const calculateArray = [];

export function simple(e) {
  console.log("string", e);

  const clickedValue = e.target.innerText;
  const inputField = document.querySelector(".inputField");
  const outputField = document.querySelector(".outputField");

  let type;

  if (!isNaN(clickedValue)) {
    type = "number";
  } else {
    type = "string";
  }
  console.log(clickedValue.type);
  const totalData = {
    value: clickedValue,
    type: type,
    no: totalArray.length,
  };
  console.log(totalData);
  if (clickedValue !== "del") {
    totalArray.push(totalData);
  }

  if (!isNaN(clickedValue)) {
    numberArray.push(totalData);
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
        const prevNumberIndex = totalArray[operatorIndex].no - 1;
        const nextNumberIndex = totalArray[operatorIndex].no + 1;
        const prevNumber = totalArray[prevNumberIndex].value;
        const nextNumber = totalArray[nextNumberIndex].value;
        calculateArray.push(
          prevNumber,
          totalArray[operatorIndex].value,
          nextNumber
        );

        const result = calculation(
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

        const finalResult = calculation(
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

//모듈
const outputField = document.getElementById("outputField");
document.addEventListener("keypress", simple1);
// (event) => {
//   const key = event.key;
//   if (!isNaN(key) || isOperator(key)) {
//     outputField.value += key;
//   }
//   if (key === "=") {
//     simple1(key);
//   simple1(event);
//   }
// };

export function simple1(e) {
  const clickedValue = e.key;
  const inputField = document.querySelector(".inputField");
  const outputField = document.querySelector(".outputField");

  let type;

  if (!isNaN(clickedValue)) {
    type = "number";
  } else {
    type = "string";
  }
  const totalData = {
    value: clickedValue,
    type: type,
    no: totalArray.length,
  };
  console.log(totalData);
  if (clickedValue !== "del" && clickedValue !== "c") {
    totalArray.push(totalData);
  }

  if (!isNaN(clickedValue)) {
    numberArray.push(totalData);
  }

  if (
    isOperator(clickedValue) == true &&
    one !== "" &&
    operatorClicked == true
  ) {
    currentOperator = clickedValue;
    console.log(currentOperator); //
    outputField.value += clickedValue; //왜 두개씩 나오지
    console.log(totalArray);
    operatorClicked = false;
    console.log(operatorClicked);
    console.log(one);
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
    console.log(totalArray);
    if (includePriority(totalArray) !== -1 && numberArray.length > 2) {
      console.log("ggg");
      const operatorIndex = includePriority(totalArray);
      if (operatorIndex >= 0) {
        const prevNumberIndex = totalArray[operatorIndex].no - 1;
        console.log(prevNumberIndex);
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
