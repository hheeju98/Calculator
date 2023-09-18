import { totalArray } from "./simple.js";

const del = document.getElementById("del");
del.addEventListener("click", Remove);

export function Remove() {
  console.log("fgfg");
  const deleteArray = totalArray.map((item) => {
    if (typeof item === "object") {
      return item.value;
    } else if (typeof item === "number") {
      return String(item);
    }
  });
  console.log("gjgj");
  console.log(deleteArray);
  totalArray.pop();
  deleteArray.pop();
  console.log(deleteArray);
  outputField.value = deleteArray;
  const delResult = deleteArray.join("");
  outputField.value = delResult;
}

export function Remove1() {
  const deleteArray = totalArray.reduce((acc, cur) => {
    if (typeof cur === "object") {
      return acc + cur.value;
    } else if (typeof cur === "number") {
      return acc + String(acc);
    }
  }, "");
  totalArray.pop();

  const newDeleteArray = deleteArray.slice(0, -1);

  outputField.value = newDeleteArray;
}
