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

export function calculation1(num1, operator, num2) {
  let arr = [num1, num2];
  let initialValue;
  return arr.reduce((acc, cur) => {
    if (operator === "+") {
      initialValue = 0;
      return Number(acc) + Number(cur);
    } else if (operator === "-") {
      initialValue = num1;
      return Number(acc) - Number(cur);
    } else if (operator === "×") {
      initialValue = 1;
      return Number(acc) * Number(cur);
    } else if (operator === "÷") {
      initialValue = num1;
      return Number(acc) / Number(cur);
    }
  });
}
