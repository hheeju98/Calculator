let currentNumber = "";
//let currentNumber2 = "";
let currentOperator = "";
let outputField2 = ""; // 연산자 저장
let one = ""; // 첫번쨰 값 고정
let two = "";
let result = "";
// 변수 여러개 등록되는 거 수정
// 첫번째 값으로 무조건 숫자만 등록되도록 수정

window.onload = () => {
  const tdElements = document.querySelectorAll("td");
  //console.log(tdElements); 유사배열
  const tdElementsArray = Array.from(tdElements);

  //파일분리 콘솔주석 지유기
  tdElementsArray.map((td) => {
    td.addEventListener("click", simple);
  });

  //console.log(tdElementsArray);
};

const simple = (e) => {
  const inputField = document.querySelector(".inputField");
  const outputField = document.querySelector(".outputField");
  const clickedValue = e.target.innerText;
  if (isOperator(clickedValue) == true) {
    currentOperator = clickedValue;
    console.log(currentOperator);
  } else if (!isNaN(clickedValue) && currentOperator === "") {
    one += clickedValue;
    console.log(one);
  } else if (!isNaN(clickedValue) && currentOperator !== "") {
    two += clickedValue;
    console.log(two);
    result = calculation(one, currentOperator, two);
    console.log(result);
    result = one;

    two = "";
    result = one;

    //  outputField.value = currentNumber += clickedValue;
  } else if (result !== "" && currentOperator !== "") {
    one = result;
  } else if (clickedValue === "=") {
    inputField.value = result;
  } else if (clickedValue === "c") {
    currentNumber = "";
    // currentNumber2 = "";
    currentOperator = "";
    one = "";
    two = "";
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
  //return ["+", "-", "×", "÷"].includes(value); include다시 쓰기
};

const isOperator2 = (value) => {
  // filter findIndex find 케이스
  const arr = ["+", "-", "×", "÷"];
  if (arr.findIndex((item) => item === value) !== -1) {
    return true;
  } else {
    return false;
  }
  //return ["+", "-", "×", "÷"].includes(value); 사용
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

// calculation = (clickedValue) => {
//   const outputField = document.querySelector(".outputField");
//   console.log(outputField.value);
//   try {
//     let display = document.querySelector(".outputField");
//     display.value = eval(display.value);
//     console.log(display.value);
//   } catch {
//     alert("올바른 계산식을 입력해 주세요");
//   }
// };
