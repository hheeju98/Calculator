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
  //함수로 빼기
  // this가 가르키는것x innerText innerHTML왜안쓰는지
  const clickedValue = e.target.innerText;
  //console.log(clickedValue);

  // console.log(typeof e.target.innerText);
  //다른방법
  if (!isNaN(clickedValue)) {
    currentNumber += clickedValue;
    const formattedNumber = formatNumber(currentNumber);
    outputField.value = formattedNumber;
  } else if (isOperator2(clickedValue) === true) {
    currentOperator = clickedValue; // 연산자 설정
    console.log(isOperator2);
    outputField.value = currentNumber += clickedValue;
    console.log(outputField.value);
  } else if (clickedValue === "c") {
    console.log(clickedValue);
    currentNumber = "";
    // currentNumber2 = "";
    currentOperator = "";
    outputField.value = ""; //함수형으로 가독성
    inputField.value = ""; //innertext/ value
  } else if (clickedValue === "=") {
    //if (currentOperator !== "" && currentNumber2 !== "") {
    // const result = calculation(
    //   parseInt(currentNumber), // 문자 -> 숫자
    //   currentOperator,
    //   parseInt(currentNumber2)
    // );

    console.log(outputField.value);
    inputField.value = String(result.value); // HTML출력을 위해
    outputField.value = "";

    currentNumber = ""; // 다음 계산을 위해 초기화
    //currentNumber2 = "";
    currentOperator = "";
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
function calculation() {
  eval(outputField.value);
}
// 함수를 밖으로 내놨는데 내부에서 호출해도 되는이유
// if/switch 서로 다른점
/*
  const calculation = (accumulator,currrentValue, index, array) => {
      const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const initialValue = 0;
      if (operator === "+") {
        arr1.reduce((accumulator, currentValue) => num1 + num2, initialValue);
      }
    };
*/
//acc cur만 썼음
