// 모으기 계산js
const formatNumber = (number) => {
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function calculation(num1, operator, num2) {
  if (operator === "+") {
    return parseInt(num1) + parseInt(num2);
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "×") {
    return num1 * num2;
  } else if (operator === "÷") {
    return num1 / num2;
  }
} //바벨처리

export function calculation1(num1, operator, num2) {
  let arr = [num1, num2];

  return arr.reduce((acc, cur) => {
    if (operator === "+") {
      return Number(acc) + Number(cur);
    } else if (operator === "-") {
      return acc - cur;
    } else if (operator === "*") {
      return acc * cur;
    } else if (operator === "/") {
      return acc / cur;
    }
  });
}

export function isOperator(value) {
  return ["+", "-", "×", "÷", "*", "/"].includes(value);
}
