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
//주어진 코드에서 calculation1 함수가 값을 반환하지 않고 arr.reduce 메서드 내에서 연산을 수행한 후에 결과를 반환하지 않기 때문에 계산 결과가 제대로 반환되지 않습니다. arr.reduce 메서드는 누적 값을 반환해야 합니다.
