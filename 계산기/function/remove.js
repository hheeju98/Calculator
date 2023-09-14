import { totalArray } from "./simple.js";

export function Remove() {
  const deleteArray = totalArray.map((item) => {
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
  console.log(deleteArray);
  outputField.value = deleteArray;
  const delResult = deleteArray.join("");
  outputField.value = delResult;
}

//reduce
export function Remove1() {
  const deleteArray = totalArray.reduce((acc, cur) => {
    if (typeof cur === "object") {
      return acc + cur.value;
    } else if (typeof cur === "number") {
      return acc + String(acc);
    }
  }, "");
  totalArray.pop();
  console.log(typeof deleteArray);
  const newDeleteArray = deleteArray.slice(0, -1);
  // deleteArray.pop();
  outputField.value = newDeleteArray;
  //const delResult = deleteArray.join("");
  // outputField.value = delResult;
}

const del = document.getElementById("del");
del.addEventListener("click", Remove1);
