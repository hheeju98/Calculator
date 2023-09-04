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
}

function calculation1(num1, operator, num2) {
  const arr = [num1, num2];
  arr.reduce((acc, cur) => {
    //여기서 부터 틀림
    if (operator === "+") {
      return acc + cur;
    } else if (operator === "-") {
      return acc - cur;
    } else if (operator === "×") {
      return acc * cur;
    } else if (operator === "÷") {
      return acc / cur;
    }
  });
}
// 문법 잘못됨 다시

// simple말고 다 index로
