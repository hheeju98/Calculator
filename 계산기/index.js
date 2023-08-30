/*
변경사항
DomContentLoaded 다른 방식으로 변경하기 (js태그가 html하단에 위치해도 동작하도록 주의) window.onload() addEventListener 변경해주기
forEach-> Map으로 변경
함수 모두 표현식으로 변경
switch문 -> if문으로 통일
html td grid/flex형태 수정
계산 함수에 filter findIndex find 적용 다쓰기 reduce도 적용 - 못함
태그 호출 방식 변경
*/
// 표현식 왜 사용
let currentNumber = "";
let currentNumber2 = "";
let currentOperator = "";
let currentOperator2 = "";
const inputField = document.querySelector(".inputField");
const outputField = document.querySelector(".outputField");

window.onload = () => {
  const tdElements = document.querySelectorAll("td");
  console.log(tdElements); //유사배열
  const tdElementsArray = Array.from(tdElements);

  tdElementsArray.map((td) => {
    td.addEventListener("click", simple);
  });
  console.log(tdElementsArray);
};
// simple함수를 외부로 뺄 경우 변수에 접근하지 못한다.
// simple함수를 표현문으로 바꾸면 동작하지 않는다 window내부일 경우도. 내부에서 선언문으로 선언할 경우 동작
// 변수를 simple함수 내부로 옮길 경우 동작하지 않는다.
// 변수를 전역 스코프로 이동시킴
// 변수를 전역 스코프로 이동시키고 함수를 표현식으로 바꾸니까 동작한다.

const simple = (e) => {
  //함수로 빼기
  // this가 가르키는것x innerText innerHTML왜안쓰는지
  const clickedValue = e.target.innerText;
  console.log(clickedValue);

  // console.log(typeof e.target.innerText);
  //다른방법
  if (!isNaN(clickedValue)) {
    if (currentOperator === "") {
      // 연산자가 설정되지 않은 경우 currentNumber
      currentNumber += clickedValue;
    } else {
      // 연산자 이후에 숫자를 클릭한 경우 currentNumber2
      //  console.log(clickedValue);
      currentNumber2 += clickedValue;
    }

    const formattedNumber = formatNumber(
      currentOperator === "" ? currentNumber : currentNumber2
    );
    inputField.value = formattedNumber;
  } else if (isOperator(clickedValue) === true && clickedValue) {
    currentOperator = clickedValue; // 연산자 설정
    outputField.value =
      currentNumber + " " + currentOperator + "" + currentNumber2;
  } else if (isOperator(clickedValue) === true && c & isOperator(current)) {
    currentOperator = clickedValue;
    outputField.value =
      currentNumber +
      " " +
      currentOperator +
      "" +
      currentNumber2 +
      "" +
      currentOperator;
  } else if (clickedValue === "c") {
    console.log(clickedValue);
    currentNumber = "";
    currentNumber2 = "";
    currentOperator = "";
    outputField.value = ""; //함수형으로 가독성
    inputField.value = ""; //innertext/ value
  } else if (clickedValue === "=") {
    if (currentOperator !== "" && currentNumber2 !== "") {
      const result = calculation(
        parseInt(currentNumber), // 문자 -> 숫자
        currentOperator,
        parseInt(currentNumber2)
      );
      inputField.value = String(result); // HTML출력을 위해
      outputField.value = "";

      currentNumber = ""; // 다음 계산을 위해 초기화
      currentNumber2 = "";
      currentOperator = "";
    }
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
